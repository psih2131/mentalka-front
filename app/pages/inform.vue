<template>
    <section class="inform-hero-sec">
        <div class="container">
            <div class="inform-hero-sec__data">
                <h1 class="inform-hero-sec__title">{{ heroSection?.title_section }}</h1>
                <p class="inform-hero-sec__subtitle">{{ heroSection?.subtitle_text }}</p>
                <div class="inform-hero-sec__btns-row">
                    <BtnCtrV1 :titleBtn="heroSection?.button_1_text" />
                    <BtnCtrV1 :titleBtn="heroSection?.button_2_text" />
                </div>
            </div>

            <div class="inform-hero-sec__img-wrapper">
                <img
                    v-if="heroImageUrl"
                    :src="heroImageUrl"
                    alt="inform-hero-sec-img"
                    class="inform-hero-sec__img"
                >
            </div>
        </div>
    </section>

    <section class="inform-docs-sec">
        <div class="container">
            <h2 class="inform-docs-sec__title" v-html="docsSection?.title_section"></h2>

            <div class="inform-docs-sec__content">
                <div
                    v-for="cluster in docsClusters"
                    :key="cluster.id"
                    class="inform-docs-sec__cluster"
                >
                    <h3 class="inform-docs-sec__cluster-title">{{ cluster.title }}</h3>

                    <DocComponent
                        v-for="doc in cluster.docs"
                        :key="doc.id"
                        :title="doc.title"
                        :open-url="doc.openUrl"
                        :download-url="doc.downloadUrl"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import BtnCtrV1 from '@/components/btn-ctr-v1.vue';
import DocComponent from '@/components/doc-component.vue';

const config = useRuntimeConfig();
const strapiUrl = config.public.strapiUrl;

const { data: pageInformationResponse } = await useFetch(`${strapiUrl}/api/page-information`, {
    query: {
        'populate[inform_hero_section][populate][image]': true,
        'populate[inform_docs_section][populate][inform_docs_clusters][populate][docs][populate][file]': true,
        'populate[Seo][populate][shareImage]': true,
        'populate[Seo][populate][twitterImage]': true,
    },
});

function mapPageInformation(response) {
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

function mapDocsClusters(clusters) {
    return (clusters ?? []).map((cluster, clusterIndex) => ({
        id: cluster.id ?? clusterIndex,
        title: cluster.cluster_title,
        docs: (cluster.docs ?? []).map((doc, docIndex) => {
            const fileUrl = getStrapiMediaUrl(doc.file);

            return {
                id: doc.id ?? `${clusterIndex}-${docIndex}`,
                title: doc.title_doc,
                openUrl: fileUrl ?? '',
                downloadUrl: fileUrl ?? '',
            };
        }),
    }));
}

const pageInformation = mapPageInformation(pageInformationResponse.value);
const heroSection = pageInformation?.inform_hero_section;
const docsSection = pageInformation?.inform_docs_section;
const heroImageUrl = getStrapiMediaUrl(heroSection?.image);
const docsClusters = mapDocsClusters(docsSection?.inform_docs_clusters);

const seo = pageInformation?.Seo;
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
