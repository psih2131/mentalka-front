<template>
    <section class="post-hero-sec">
        <div class="container">
            <div class="post-hero-sec__data">
                <h1 class="post-hero-sec__title">{{ post.post_title }}</h1>
                <p class="post-hero-sec__subtitle">{{ post.short_description }}</p>
                <div class="post-hero-sec__autor post-autor">
                    <NuxtLink
                        v-if="post.doctor?.slug"
                        :to="`/specialists/${post.doctor.slug}`"
                        class="post-autor__link"
                    >
                        <div v-if="post.doctor.photo" class="post-autor__img">
                            <img :src="getStrapiMediaUrl(post.doctor.photo)" :alt="post.doctor.name || 'autor-img'">
                        </div>
                        <div class="post-autor__data">
                            <p class="post-autor__subtitle">Автор</p>
                            <p class="post-autor__title">{{ post.doctor.name }}</p>
                            <p class="post-autor__autor">{{ post.doctor.specialization }}</p>
                        </div>
                    </NuxtLink>
                    <template v-else-if="post.doctor">
                        <div v-if="post.doctor.photo" class="post-autor__img">
                            <img :src="getStrapiMediaUrl(post.doctor.photo)" :alt="post.doctor.name || 'autor-img'">
                        </div>
                        <div class="post-autor__data">
                            <p class="post-autor__subtitle">Автор</p>
                            <p class="post-autor__title">{{ post.doctor.name }}</p>
                            <p class="post-autor__autor">{{ post.doctor.specialization }}</p>
                        </div>
                    </template>

                    <div class="post-autor__post-nav-mob" @click="btnMobPostMeny = !btnMobPostMeny">
                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_590_4529)">
                        <path d="M1.14062 7.44922H17.3062V9.15968H1.14062V7.44922Z" fill="#317844"/>
                        <path d="M1.14062 11.7305H20.0033V13.4409H1.14062V11.7305Z" fill="#317844"/>
                        <path d="M1.14062 16.0078H17.3062V17.7183H1.14062V16.0078Z" fill="#317844"/>
                        <path d="M1.14062 20.2891H20.0033V21.9995H1.14062V20.2891Z" fill="#317844"/>
                        <path d="M19.9531 5.73943H3.78125V0.75H19.9531V5.73943ZM5.57812 4.02896H18.1562V2.46046H5.57812V4.02896Z" fill="#317844"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_590_4529">
                        <rect width="20" height="22" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </div>
                </div>
            </div>
            <div v-if="post.post_image" class="post-hero-sec__img-wrapper">
                <img :src="getStrapiMediaUrl(post.post_image)" :alt="post.post_title" class="post-hero-sec__img">
            </div>
        </div>
    </section>


    <section class="post-content-sec">
        <div class="container">

            <aside class="post-content-sec__aside post-aside" :class="{'active': btnMobPostMeny}">
                <div class="post-aside__naw-wrapper">
                    <p class="post-aside__naw-title">Содержание</p>
                    <ul v-if="post.post_content_constuctor?.length" class="post-aside__naw-list">
                        <template v-for="(block, blockIndex) in post.post_content_constuctor" :key="block.id ?? blockIndex">
                            <li
                                v-if="block.__component === 'shared.post-cluster-text' && block.post_cluster_data?.cluster_id_nav"
                                class="post-aside__naw-item"
                                :class="{ active: activeNavId === block.post_cluster_data.cluster_id_nav }"
                            >
                                <a :href="`#${block.post_cluster_data.cluster_id_nav}`">
                                    {{ block.post_cluster_data.cluster_title_nav }}
                                </a>
                            </li>
                            <li
                                v-else-if="block.__component === 'shared.post-cluster-2-col' && block.cluster_title_nav?.cluster_id_nav"
                                class="post-aside__naw-item"
                                :class="{ active: activeNavId === block.cluster_title_nav.cluster_id_nav }"
                            >
                                <a :href="`#${block.cluster_title_nav.cluster_id_nav}`">
                                    {{ block.cluster_title_nav.cluster_title_nav }}
                                </a>
                            </li>
                        </template>
                    </ul>
                </div>

                <div class="post-aside__progress-line">
                    <div
                        class="post-aside__progress-line-inner"
                        :style="{ width: `${readProgress}%` }"
                    ></div>
                </div>

                <div class="post-aside__read-time">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_329_7908)">
                    <path d="M18.5888 3.90948C18.4064 3.693 18.0829 3.66544 17.8664 3.84792C17.6548 4.02625 17.623 4.34031 17.7944 4.55753C21.0776 8.58682 20.4728 14.5148 16.4435 17.798C12.4142 21.0812 6.48624 20.4764 3.20303 16.4471C-0.0801932 12.4178 0.524623 6.4899 4.55388 3.20664C6.23297 1.83848 8.3326 1.09134 10.4985 1.0913C11.9542 1.0872 13.3905 1.42435 14.6924 2.07567C14.946 2.20196 15.2539 2.09877 15.3802 1.84517C15.5065 1.59157 15.4033 1.28362 15.1497 1.15733C9.98828 -1.41029 3.72269 0.69234 1.15503 5.85375C0.436604 7.29791 0.0626641 8.88894 0.0625 10.5019C0.0623359 16.2656 4.73455 20.9381 10.4982 20.9383C13.2662 20.9383 15.9208 19.8388 17.878 17.8815C21.6633 14.0957 21.9704 8.05981 18.5888 3.90948Z" fill="#317844"/>
                    <path d="M10.2403 10.9452L15.4083 13.9021C15.654 14.0427 15.9673 13.9575 16.108 13.7117C16.2487 13.466 16.1635 13.1527 15.9177 13.012L11.0098 10.2024V3.30566C11.0098 3.02249 10.7802 2.79297 10.4971 2.79297C10.2139 2.79297 9.98438 3.02249 9.98438 3.30566V10.4998C9.98438 10.6904 10.0788 10.8505 10.2403 10.9452Z" fill="#317844"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_329_7908">
                    <rect width="21" height="21" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    <span v-if="post.time_read_min">{{ post.time_read_min }} минут чтения</span>
                </div>
            </aside>

            <div class="post-content-sec__body">
                <div class=" text-editor">
                    <template v-for="(block, blockIndex) in post.post_content_constuctor" :key="block.id ?? blockIndex">
                        <div
                            v-if="block.__component === 'shared.post-cluster-text'"
                            class="text-editor__cluster"
                            :id="block.post_cluster_data?.cluster_id_nav"
                            v-html="renderMarkdown(block.content_text)"
                        >
                
                          
                        </div>

                        <div
                            v-else-if="block.__component === 'shared.post-cluster-2-col'"
                            class="text-editor__cluster"
                            :id="block.cluster_title_nav?.cluster_id_nav"
                        >
                            <h2 v-if="block.cluster_title_nav?.cluster_title_nav">
                                {{ block.cluster_title_nav.cluster_title_nav }}
                            </h2>
                            <div v-if="block.columns?.length" class="text-editor__two-col">
                                <div
                                    v-for="(column, columnIndex) in block.columns"
                                    :key="column.id ?? columnIndex"
                                    class="text-editor__col"
                                    v-html="renderMarkdown(column.text)"
                                ></div>
                            </div>
                        </div>
                    </template>
                </div>

                <div class="post-content-sec__body-btn-row">
                    <btnCtrV3 :titleBtn="'Назад к списку'" :link="'/blog'" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import btnCtrV3 from '@/components/btn-ctr-v3.vue';
import MarkdownIt from 'markdown-it';
import { onMounted, onUnmounted, ref } from 'vue';

const md = new MarkdownIt();

const config = useRuntimeConfig();
const strapiUrl = config.public.strapiUrl;
const route = useRoute();
const slug = route.params.id;

const { data: blogResponse } = await useFetch(`${strapiUrl}/api/blogs`, {
    query: {
        'filters[slug][$eq]': slug,
        'populate[post_image]': true,
        'populate[doctor][populate][photo]': true,
        'populate[post_content_constuctor][on][shared.post-cluster-text][populate][post_cluster_data]': true,
        'populate[post_content_constuctor][on][shared.post-cluster-2-col][populate][cluster_title_nav]': true,
        'populate[post_content_constuctor][on][shared.post-cluster-2-col][populate][columns]': true,
        'populate[Seo][populate][shareImage]': true,
        'populate[Seo][populate][twitterImage]': true,
    },
});

const post = blogResponse.value?.data?.[0];

if (!post) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Статья не найдена',
    });
}

function getStrapiMediaUrl(media) {
    if (!media) {
        return null;
    }

    const url = media.url ?? media.data?.url ?? media.attributes?.url;

    if (!url) {
        return null;
    }

    return url.startsWith('http') ? url : `${strapiUrl}${url}`;
}

function renderMarkdown(text) {
    if (!text) {
        return '';
    }

    return md.render(text);
}

const btnMobPostMeny = ref(false);
const activeNavId = ref(null);
const readProgress = ref(0);

function getBlockNavId(block) {
    if (block.__component === 'shared.post-cluster-text') {
        return block.post_cluster_data?.cluster_id_nav ?? null;
    }

    if (block.__component === 'shared.post-cluster-2-col') {
        return block.cluster_title_nav?.cluster_id_nav ?? null;
    }

    return null;
}

function getHeaderOffset() {
    const header = document.querySelector('.header');

    return header ? header.offsetHeight + 16 : 0;
}

function updateScrollState() {
    const sectionIds = (post.post_content_constuctor ?? [])
        .map(getBlockNavId)
        .filter(Boolean);

    if (!sectionIds.length) {
        return;
    }

    const offset = getHeaderOffset() + 20;
    let currentId = sectionIds[0];

    for (const id of sectionIds) {
        const element = document.getElementById(id);

        if (element && element.getBoundingClientRect().top <= offset) {
            currentId = id;
        }
    }

    activeNavId.value = currentId;

    const editor = document.querySelector('.text-editor');

    if (!editor) {
        return;
    }

    const headerOffset = getHeaderOffset();
    const rect = editor.getBoundingClientRect();
    const contentTop = window.scrollY + rect.top;
    const contentHeight = rect.height;

    if (!contentHeight) {
        return;
    }

    const scrollPoint = window.scrollY + headerOffset;
    const progress = ((scrollPoint - contentTop) / contentHeight) * 100;

    readProgress.value = Math.min(100, Math.max(0, progress));
}

onMounted(() => {
    const sectionIds = (post.post_content_constuctor ?? [])
        .map(getBlockNavId)
        .filter(Boolean);

    activeNavId.value = sectionIds[0] ?? null;

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
});

onUnmounted(() => {
    window.removeEventListener('scroll', updateScrollState);
    window.removeEventListener('resize', updateScrollState);
});

const seo = post.Seo;
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
