<template>
     <section class="hero-sec specialists-hero-sec">
        <div class="container-v2 hero-sec__bg-container">

          <img src="../../assets/images/hero-images/specialist-img.png" 
          alt="hero-sec-bg" 
          class="hero-sec__bg-img">
            <div class="container">
                <div class="hero-sec__content">
                    <p class="hero-sec__subtitle">
                      {{ pageSpecialist?.specialists_hero_sec_subtitle }}
                    </p>
                    <h1 class="hero-sec__title" v-html="pageSpecialist?.specialists_hero_sec_title"></h1>
                    <p class="hero-sec__text">
                        {{ pageSpecialist?.specialists_hero_sec_text }}
                    </p>
                    <div class="hero-sec__buttons">
                        <BtnCtrV1 :titleBtn="pageSpecialist?.specialists_hero_sec_btn_text_1" />

                        <BtnCtrV1 :titleBtn="pageSpecialist?.specialists_hero_sec_btn_text_2" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="specialists-list-sec">
        <div class="container">
            <h2 class="specialists-list-sec__title" v-html="pageSpecialist?.specialists_doctors_list_sec_title"></h2>
            <div class="specialists-list-sec__content">
                <SpecialistCard
                    v-for="specialist in specialists"
                    :key="specialist.slug || specialist.id"
                    :specialistData="specialist"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import BtnCtrV1 from '@/components/btn-ctr-v1.vue';
import SpecialistCard from '@/components/specialist-card.vue';
import { ref, watch } from 'vue';

const config = useRuntimeConfig();
const strapiUrl = config.public.strapiUrl;

const { data: pageSpecialistResponse } = await useFetch(`${strapiUrl}/api/page-specialist`, {
    query: {
        'populate[Seo][populate][shareImage]': true,
        'populate[Seo][populate][twitterImage]': true,
    },
});

const { data: doctorsResponse } = await useFetch(`${strapiUrl}/api/doctors`, {
    query: {
        'populate[photo]': true,
        'pagination[pageSize]': 100,
        'sort[0]': 'name:asc',
    },
});

function mapPageSpecialist(response) {
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

function formatExperienceYears(years) {
    if (years === null || years === undefined || years === '') {
        return '';
    }

    const count = Math.floor(Number(years));

    if (Number.isNaN(count)) {
        return '';
    }

    const mod10 = count % 10;
    const mod100 = count % 100;
    let word = 'лет';

    if (mod100 >= 11 && mod100 <= 14) {
        word = 'лет';
    } else if (mod10 === 1) {
        word = 'год';
    } else if (mod10 >= 2 && mod10 <= 4) {
        word = 'года';
    }

    return `Стаж ${count} ${word}`;
}

function mapDoctorItem(item) {
    const raw = item.attributes ?? item;

    return {
        id: item.documentId ?? item.id,
        slug: raw.slug,
        name: raw.name,
        position: raw.specialization,
        experience: formatExperienceYears(raw.experience_years),
        description: raw.small_descriotion,
        image: getStrapiMediaUrl(raw.photo),
    };
}

function mapDoctors(response) {
    return (response?.data ?? []).map(mapDoctorItem);
}

const pageSpecialist = mapPageSpecialist(pageSpecialistResponse.value);
const specialists = ref(mapDoctors(doctorsResponse.value));

watch(doctorsResponse, (response) => {
    specialists.value = mapDoctors(response);
}, { deep: true });

const seo = pageSpecialist?.Seo;
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
