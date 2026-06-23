<template>
    <section class="docs-page-sec">
        <div class="container">
            <h1 class="docs-page-sec__title">{{ docPage.title }}</h1>

            <div class="text-editor">
                <div
                    class="text-editor__cluster"
                    v-html="renderMarkdown(docPage.text_page)"
                ></div>
            </div>
        </div>
    </section>
</template>

<script setup>
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

const config = useRuntimeConfig();
const strapiUrl = config.public.strapiUrl;
const route = useRoute();
const slug = route.params.id;

const { data: docsPageResponse } = await useFetch(`${strapiUrl}/api/docs-pages`, {
    query: {
        'filters[slug][$eq]': slug,
        'populate[Seo][populate][shareImage]': true,
        'populate[Seo][populate][twitterImage]': true,
    },
});

const docItem = docsPageResponse.value?.data?.[0];

if (!docItem) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Страница не найдена',
    });
}

const docPage = docItem.attributes ?? docItem;

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

const seo = docPage.Seo;
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
