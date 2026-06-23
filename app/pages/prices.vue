<template>
    <section class="prices-sec">
        <div class="container">
            <h1 class="prices-sec__title" v-html="pagePrice?.page_title"></h1>
            <div class="prices-sec__content">
                <nav class="prices-sec__nav prices-sec__nav--desk">
                    <ul class="prices-sec__nav-list">
                        <li
                            v-for="(label, index) in navTabs"
                            :key="index"
                            class="prices-sec__nav-item"
                            :class="{ active: currentTab === index }"
                            @click="selectTab(index)"
                        >
                            {{ label }}
                        </li>
                    </ul>
                </nav>
                <div class="prices-sec__nav-mob-wrapper">
                    <div
                    class="prices-sec__nav-mob"
                    :class="{ 'prices-sec__nav-mob--open': isNavOpen }"
                >
                    <button
                        type="button"
                        class="prices-sec__nav-mob-trigger"
                        :aria-expanded="isNavOpen"
                        @click="isNavOpen = !isNavOpen"
                    >
                        <span class="prices-sec__nav-mob-label">{{ navTabs[currentTab] }}</span>
                        <span class="prices-sec__nav-mob-icon" aria-hidden="true">
                            <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.3516 0.355469L5.35156 5.35547L0.351563 0.355469" stroke="black" />
                            </svg>
                        </span>
                    </button>
                    <ul v-show="isNavOpen" class="prices-sec__nav-mob-list">
                        <li
                            v-for="(label, index) in navTabs"
                            :key="index"
                            class="prices-sec__nav-mob-item"
                            :class="{ active: currentTab === index }"
                            @click="selectTab(index)"
                        >
                            {{ label }}
                        </li>
                    </ul>
                </div>
                </div>

                <div class="prices-sec__list">
                    <PriceCard
                        v-for="(card, index) in visibleServices"
                        :key="card.id ?? index"
                        :title="card.title"
                        :price="card.price"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import PriceCard from '@/components/price-card.vue';
import { ref, watch } from 'vue';

const config = useRuntimeConfig();
const strapiUrl = config.public.strapiUrl;

const { data: pagePriceResponse } = await useFetch(`${strapiUrl}/api/page-price`, {
    query: {
        'populate[services]': true,
        'populate[Seo][populate][shareImage]': true,
        'populate[Seo][populate][twitterImage]': true,
    },
});

function mapPagePrice(response) {
    const item = response?.data;

    if (!item) {
        return null;
    }

    return item.attributes ?? item;
}

function getStrapiMediaUrl(media) {
    if (!media) {
        return null;
    }

    const file = media.data ?? media;
    const url = file.url ?? file.attributes?.url;

    if (!url) {
        return null;
    }

    return url.startsWith('http') ? url : `${strapiUrl}${url}`;
}

const pagePrice = ref(mapPagePrice(pagePriceResponse.value));
const navTabs = ref(['Все услуги']);
const visibleServices = ref([]);
const currentTab = ref(0);
const isNavOpen = ref(false);

function buildNavTabs() {
    const categories = [];

    for (const service of pagePrice.value?.services ?? []) {
        if (service.category && !categories.includes(service.category)) {
            categories.push(service.category);
        }
    }

    navTabs.value = ['Все услуги', ...categories];
}

function updateVisibleServices() {
    const services = pagePrice.value?.services ?? [];

    if (currentTab.value === 0) {
        visibleServices.value = services;
        return;
    }

    const category = navTabs.value[currentTab.value];

    visibleServices.value = services.filter((service) => service.category === category);
}

const selectTab = (index) => {
    currentTab.value = index;
    isNavOpen.value = false;
    updateVisibleServices();
};

function initPagePrice() {
    pagePrice.value = mapPagePrice(pagePriceResponse.value);
    buildNavTabs();
    updateVisibleServices();
}

initPagePrice();

watch(pagePriceResponse, () => {
    initPagePrice();
}, { deep: true });

const seo = pagePrice.value?.Seo;
const ogImage = getStrapiMediaUrl(seo?.shareImage);
const twitterImage = getStrapiMediaUrl(seo?.twitterImage) || ogImage;
const ogTitle = seo?.ogTitle || seo?.metaTitle;
const ogDescription = seo?.ogDescription || seo?.metaDescription;
const twitterTitle = seo?.twitterTitle || ogTitle;
const twitterDescription = seo?.twitterDescription || ogDescription;

useSeoMeta({
    title: seo?.metaTitle,
    description: seo?.metaDescription,
    keywords: seo?.metaKeywords,
    robots: seo?.metaRobots,
    ogTitle,
    ogDescription,
    ogImage,
    ogType: seo?.ogType,
    ogLocale: seo?.ogLocale,
    ogUrl: seo?.canonicalURL,
    twitterCard: seo?.twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
    twitterSite: seo?.twitterSite,
    twitterCreator: seo?.twitterCreator,
});

const headTags = {};

if (seo?.canonicalURL) {
    headTags.link = [{ rel: 'canonical', href: seo.canonicalURL }];
}

if (seo?.structuredData) {
    headTags.script = [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify(seo.structuredData),
    }];
}

if (Object.keys(headTags).length) {
    useHead(headTags);
}
</script>
