<template>
    <section class="hero-sec services-hero-sec">
        <div class="container-v2 hero-sec__bg-container">

          <img src="../../assets/images/hero-images/services-img.png" alt="hero-sec-bg" class="hero-sec__bg-img">
            <div class="container">
                <div class="hero-sec__content">
                    <!-- <p class="hero-sec__subtitle">
                      ÐŸÑ€Ð¾Ñ„ÐµÑÑÐ¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ð°Ñ Ð¿Ð¾Ð¼Ð¾Ñ‰ÑŒ Ð² ÑÑ„ÐµÑ€Ðµ Ð¿ÑÐ¸Ñ…Ð¸Ð°Ñ‚Ñ€Ð¸Ð¸ Ð¸ Ð¿ÑÐ¸Ñ…Ð¾Ñ‚ÐµÑ€Ð°Ð¿Ð¸Ð¸
                    </p> -->
                    <h1 class="hero-sec__title">
                        {{ pageService?.service_hero?.title }}
                    </h1>
                    <p class="hero-sec__text">
                        {{ pageService?.service_hero?.subtitle }}
                    </p>
                    <div class="hero-sec__buttons">
                        <BtnCtrV1 :titleBtn="pageService?.service_hero?.button_title" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="services-cat-sec">
        <div class="container">
            <h2 class="services-cat-sec__title" v-html="pageService?.direction_sec?.title_section"></h2>

            <div class="services-cat-sec__container">
                <ServiceCat
                    v-for="category in serviceCategories"
                    :key="category.slug || category.title"
                    :title="category.title"
                    :tags="category.tags"
                    :slug="category.slug"
                />
            </div>
        </div>
    </section>

    <section class="services-prices-sec">
        <div class="container">
            <h2 class="services-prices-sec__title" v-html="pageService?.services_price_list_sec?.section_title"></h2>
            <p class="services-prices-sec__text">{{ pageService?.services_price_list_sec?.section_subtitle }}</p>
            <nav class="services-prices-sec__nav services-prices-sec__nav--desk">
                <ul class="services-prices-sec__nav-list">
                    <li
                        v-for="item in priceNavItems"
                        :key="item.id"
                        class="services-prices-sec__nav-item"
                        :class="{ active: activePriceCategory === item.id }"
                        @click="selectPriceCategory(item.id)"
                    >
                        {{ item.title }}
                    </li>
                </ul>
            </nav>
            <div class="services-prices-sec__nav-mob-wrapper">
                <div
                    class="services-prices-sec__nav-mob"
                    :class="{ 'services-prices-sec__nav-mob--open': isNavOpen }"
                >
                    <button
                        type="button"
                        class="services-prices-sec__nav-mob-trigger"
                        :aria-expanded="isNavOpen"
                        @click="isNavOpen = !isNavOpen"
                    >
                        <span class="services-prices-sec__nav-mob-label">{{ activePriceCategoryTitle }}</span>
                        <span class="services-prices-sec__nav-mob-icon" aria-hidden="true">
                            <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.3516 0.355469L5.35156 5.35547L0.351563 0.355469" stroke="black" />
                            </svg>
                        </span>
                    </button>
                    <ul v-show="isNavOpen" class="services-prices-sec__nav-mob-list">
                        <li
                            v-for="item in priceNavItems"
                            :key="item.id"
                            class="services-prices-sec__nav-mob-item"
                            :class="{ active: activePriceCategory === item.id }"
                            @click="selectPriceCategory(item.id)"
                        >
                            {{ item.title }}
                        </li>
                    </ul>
                </div>
            </div>

            <div class="services-prices-sec__content">
                <PriceServiceCard
                    v-for="service in filteredPriceServices"
                    :key="service.id"
                    :service="service"
                />
            </div>
        </div>
    </section>

    <section class="services-staps-sec">
        <div class="container">
            <h2 class="services-staps-sec__title" v-html="pageService?.service_consultation_sec?.title"></h2>
            <div class="services-staps-sec__content">
                <div
                    v-for="step in consultationSteps"
                    :key="step.num"
                    class="services-staps-sec__item"
                >
                    <div class="services-staps-sec__item-title">
                        <div class="services-staps-sec__item-num">{{ step.num }}</div>
                        <p class="services-staps-sec__item-name">{{ step.title }}</p>
                    </div>
                    <p class="services-staps-sec__item-text">{{ step.text }}</p>
                </div>
            </div>

            <div class="services-staps-sec__wo-long-row">
                <div class="services-staps-sec__wo-long-item-v1 wo-long-item-v1">
                    <div class="wo-long-item-v1__data">
                        <p class="wo-long-item-v1__title">{{ pageService?.service_consultation_sec?.how_long_title }}</p>
                        <p class="wo-long-item-v1__text">{{ pageService?.service_consultation_sec?.how_long_text }}</p>
                    </div>
                    <img
                        v-if="pageService?.service_consultation_sec?.how_long_img"
                        :src="getStrapiMediaUrl(pageService?.service_consultation_sec?.how_long_img)"
                        alt=""
                        class="wo-long-item-v1__img"
                    >
                </div>

                <div class="services-staps-sec__wo-long-row-clusteer">
                    <div class="wo-long-item-v2">
                        <p class="wo-long-item-v2__title">{{ pageService?.service_consultation_sec?.confident_text_title }}</p>
                        <p class="wo-long-item-v2__text">{{ pageService?.service_consultation_sec?.confident_text }}</p>
                    </div>

                    <div class="wo-long-item-v2">
                        <p class="wo-long-item-v2__title">{{ pageService?.service_consultation_sec?.fammily_title }}</p>
                        <p class="wo-long-item-v2__text">{{ pageService?.service_consultation_sec?.fammily_text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="services-rules-sec">
        <div class="container">
            <h2 class="services-rules-sec__title" v-html="pageService?.service_regsinligting_section?.title_sec"></h2>

            <div class="services-rules-sec__content">

                <div class="services-rules-sec__col">
                    <h3 class="services-rules-sec__col-title">
                        {{ pageService?.service_regsinligting_section?.col_1_title }}
                    </h3>

                    <p class="services-rules-sec__col-text">
                        {{ pageService?.service_regsinligting_section?.col_1_text }}
                    </p>

                    <div class="services-rules-sec__col-btn-row">
                        <BtnCtrV2 :titleBtn="pageService?.service_regsinligting_section?.col_1_button_text" />
                    </div>
                </div>

                <div class="services-rules-sec__col">
                    <h3 class="services-rules-sec__col-title">
                        {{ pageService?.service_regsinligting_section?.col_2_title }}
                    </h3>

                    <ul class="services-rules-sec__col-list">
                        <li
                            v-for="(payItem, payIndex) in pageService?.service_regsinligting_section?.regsinligting_pay_item"
                            :key="payItem.id ?? payIndex"
                            class="services-rules-sec__col-item"
                        >
                            <span class="services-rules-sec__col-item-icon" v-html="payItem.svg"></span>
                            <p class="services-rules-sec__col-item-title">
                                {{ payItem.text }}
                            </p>
                        </li>
                    </ul>

                </div>


                <div class="services-rules-sec__col">
                    <h3 class="services-rules-sec__col-title">
                        {{ pageService?.service_regsinligting_section?.col_3_title }}
                    </h3>

                    <p class="services-rules-sec__col-text">
                        {{ pageService?.service_regsinligting_section?.col_3_text }}
                    </p>

                    <ul class="services-rules-sec__col-nav-list">
                        <li
                            v-for="docPage in docsPages"
                            :key="docPage.slug"
                        >
                            <NuxtLink :to="`/docs/${docPage.slug}`">
                                {{ docPage.title }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </section>

    <bannerV1 :bannerData="bannerData" />

</template>

<script setup>
import { ref, computed, watch } from 'vue';
import BtnCtrV1 from '@/components/btn-ctr-v1.vue';
import BtnCtrV2 from '@/components/btn-ctr-v2.vue';
import ServiceCat from '@/components/service-cat.vue';
import PriceServiceCard from '@/components/price-service-card.vue';
import bannerV1 from '~/components/banner-v1.vue';

const config = useRuntimeConfig();
const strapiUrl = config.public.strapiUrl;

const { data: pageServiceResponse } = await useFetch(`${strapiUrl}/api/page-service`, {
    query: {
        'populate[service_hero]': true,
        'populate[direction_sec][populate][directions][populate][direction_patology_list]': true,
        'populate[services_price_list_sec][populate][services_price_list][populate][advantages_list]': true,
        'populate[service_consultation_sec][populate][consultation_list]': true,
        'populate[service_consultation_sec][populate][how_long_img]': true,
        'populate[service_regsinligting_section][populate][regsinligting_pay_item]': true,
        'populate[service_bunner_sec]': true,
        'populate[Seo][populate][shareImage]': true,
        'populate[Seo][populate][twitterImage]': true,
    },
});

const { data: docsPagesResponse } = await useFetch(`${strapiUrl}/api/docs-pages`, {
    query: {
        'fields[0]': 'title',
        'fields[1]': 'slug',
        'pagination[pageSize]': 100,
    },
});

function mapPageService(response) {
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

function unwrapRelation(relation) {
    if (!relation) {
        return [];
    }

    const data = relation.data ?? relation;

    if (!data) {
        return [];
    }

    const list = Array.isArray(data) ? data : [data];

    return list.map((item) => item.attributes ?? item);
}

function mapServicePriceItem(item, index) {
    return {
        id: item.id ?? index,
        category: item.category,
        tags: (item.advantages_list ?? []).map((tag) => tag.text),
        title: item.title,
        description: item.description ? item.description.split('\n').filter(Boolean) : [],
        result: item.result_text,
        price: item.price_from,
        duration: item.time_from,
    };
}

const pageService = ref(mapPageService(pageServiceResponse.value));
const priceNavItems = ref([{ id: 'all', title: 'Все услуги' }]);
const priceServices = ref([]);
const activePriceCategory = ref('all');
const isNavOpen = ref(false);

function buildPriceNavItems() {
    const categories = [];

    for (const service of priceServices.value) {
        if (service.category && !categories.some((category) => category.id === service.category)) {
            categories.push({
                id: service.category,
                title: service.category,
            });
        }
    }

    priceNavItems.value = [{ id: 'all', title: 'Все услуги' }, ...categories];
}

function initPageService() {
    pageService.value = mapPageService(pageServiceResponse.value);
    priceServices.value = (pageService.value?.services_price_list_sec?.services_price_list ?? [])
        .map(mapServicePriceItem);
    buildPriceNavItems();
}

initPageService();

watch(pageServiceResponse, () => {
    initPageService();
}, { deep: true });

const serviceCategories = computed(() => {
    return unwrapRelation(pageService.value?.direction_sec?.directions).map((direction) => ({
        title: direction.title,
        slug: direction.slug,
        tags: (direction.direction_patology_list ?? []).map((item) => item.text),
    }));
});

const consultationSteps = computed(() => {
    return (pageService.value?.service_consultation_sec?.consultation_list ?? []).map((item, index) => ({
        num: String(index + 1).padStart(2, '0'),
        title: item.title,
        text: item.text,
    }));
});

const activePriceCategoryTitle = computed(() => {
    const item = priceNavItems.value.find((navItem) => navItem.id === activePriceCategory.value);
    return item ? item.title : '';
});

const filteredPriceServices = computed(() => {
    if (activePriceCategory.value === 'all') {
        return priceServices.value;
    }

    return priceServices.value.filter((service) => service.category === activePriceCategory.value);
});

const selectPriceCategory = (id) => {
    activePriceCategory.value = id;
    isNavOpen.value = false;
};

const bannerData = computed(() => {
    const banner = pageService.value?.service_bunner_sec;

    if (!banner) {
        return {
            title: '',
            text: '',
            buttons: [],
        };
    }

    return {
        title: banner.title,
        text: banner.text,
        buttons: [{
            title: banner.button_text,
            link: '/consultation',
        }],
    };
});

const docsPages = computed(() => {
    const items = docsPagesResponse.value?.data ?? [];

    return items
        .map((item) => {
            const attrs = item.attributes ?? item;

            return {
                title: attrs.title,
                slug: attrs.slug,
            };
        })
        .filter((item) => item.title && item.slug);
});

const seo = computed(() => pageService.value?.Seo);
const ogImage = computed(() => getStrapiMediaUrl(seo.value?.shareImage));
const twitterImage = computed(() => getStrapiMediaUrl(seo.value?.twitterImage) || ogImage.value);
const ogTitle = computed(() => seo.value?.ogTitle || seo.value?.metaTitle);
const ogDescription = computed(() => seo.value?.ogDescription || seo.value?.metaDescription);
const twitterTitle = computed(() => seo.value?.twitterTitle || ogTitle.value);
const twitterDescription = computed(() => seo.value?.twitterDescription || ogDescription.value);

useSeoMeta({
    title: () => seo.value?.metaTitle,
    description: () => seo.value?.metaDescription,
    keywords: () => seo.value?.metaKeywords,
    robots: () => seo.value?.metaRobots,
    ogTitle: () => ogTitle.value,
    ogDescription: () => ogDescription.value,
    ogImage: () => ogImage.value,
    ogType: () => seo.value?.ogType,
    ogLocale: () => seo.value?.ogLocale,
    ogUrl: () => seo.value?.canonicalURL,
    twitterCard: () => seo.value?.twitterCard,
    twitterTitle: () => twitterTitle.value,
    twitterDescription: () => twitterDescription.value,
    twitterImage: () => twitterImage.value,
    twitterSite: () => seo.value?.twitterSite,
    twitterCreator: () => seo.value?.twitterCreator,
});

watch(seo, (value) => {
    const headTags = {};

    if (value?.canonicalURL) {
        headTags.link = [{ rel: 'canonical', href: value.canonicalURL }];
    }

    if (value?.structuredData) {
        headTags.script = [{
            type: 'application/ld+json',
            innerHTML: JSON.stringify(value.structuredData),
        }];
    }

    if (Object.keys(headTags).length) {
        useHead(headTags);
    }
}, { immediate: true });
</script>
