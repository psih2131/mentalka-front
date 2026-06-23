<template>
    <section class="hero-sec service-single-hero-sec">
        <div class="container-v2 hero-sec__bg-container">

          <img src="../../assets/images/hero-images/service-single-img.png" alt="hero-sec-bg" class="hero-sec__bg-img">
            <div class="container">
                <div class="hero-sec__content">
                    <!-- <p class="hero-sec__subtitle">
                      Профессиональная помощь в сфере психиатрии и психотерапии
                    </p> -->
                    <h1 class="hero-sec__title">
                        {{ direction.direction_hero_sec?.title }}
                    </h1>
                    <p class="hero-sec__text">
                        {{ direction.direction_hero_sec?.subtitle }}
                    </p>
                    <div class="hero-sec__buttons">
                        <BtnCtrV1 :titleBtn="direction.direction_hero_sec?.button_text_1" />
                        <BtnCtrV1 :titleBtn="direction.direction_hero_sec?.button_text_2" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="service-single-when-sec">
        <div class="container">
            <div class="service-single-when-sec__description">
                <h2 class="service-single-when-sec__title">
                    <span v-html="direction.direction_when_need_visit_sec?.title_section"></span>
                </h2>

                <div class="service-single-when-sec__down">
                    <p class="service-single-when-sec__text">{{ direction.direction_when_need_visit_sec?.subtitle_sec }}</p>
                    <img
                        v-if="direction.direction_when_need_visit_sec?.image_sec"
                        :src="getStrapiMediaUrl(direction.direction_when_need_visit_sec?.image_sec)"
                        alt=""
                        class="service-single-when-sec__img"
                    >
                </div>
            </div>
            <div class="service-single-when-sec__network network">
                <div class="network__circle"></div>
                <div class="network__line network__line-1"></div>
                <div class="network__line network__line-2"></div>
                <div class="network__line network__line-3"></div>
                <div class="network__line network__line-4"></div>
                <div class="network__line network__line-5"></div>
                <div class="network__line network__line-6"></div>
                <div class="network__line network__line-7"></div>
                <div class="network__line network__line-8"></div>
                <div class="network__line network__line-9"></div>
                <div class="network__line network__line-10"></div>

                <div class="network__wrapper">
                    <div class="network__row">
                        <div class="network__element">{{ direction.direction_when_need_visit_sec?.card_text_1 }}</div>
                    </div>
                    <div class="network__row">
                        <div class="network__element">{{ direction.direction_when_need_visit_sec?.card_text_2 }}</div>
                    </div>
                    <div class="network__row">
                        <div class="network__element">{{ direction.direction_when_need_visit_sec?.card_text_3 }}</div>
                    </div>
                    <div class="network__row">
                        <div class="network__element">{{ direction.direction_when_need_visit_sec?.card_text_4 }}</div>
                    </div>
                    <div class="network__row">
                        <div class="network__element">{{ direction.direction_when_need_visit_sec?.card_text_5 }}</div>
                    </div>
                    <div class="network__row">
                        <div class="network__element">{{ direction.direction_when_need_visit_sec?.card_text_6 }}</div>
                    </div>
                    <div class="network__row">
                        <div class="network__element">{{ direction.direction_when_need_visit_sec?.card_text_7 }}</div>
                    </div>

                    <div class="network__row">
                        <div class="network__element">{{ direction.direction_when_need_visit_sec?.card_text_8 }}</div>
                        <div class="network__element">{{ direction.direction_when_need_visit_sec?.card_text_9 }}</div>
                    </div>

                    <div class="network__row">
                        <div class="network__element">{{ direction.direction_when_need_visit_sec?.card_text_10 }}</div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>


    <section class="service-single-doctors-sec">
        <div class="container">
            <h2 class="service-single-doctors-sec__title">
                <span v-html="direction.direction_specialists_section?.title_section"></span>
            </h2>
            <div class="service-single-doctors-sec__content">
                <SpecialistCard
                    v-for="specialist in specialists"
                    :key="specialist.slug || specialist.id"
                    :specialistData="specialist"
                />
            </div>
        </div>
    </section>

    <section class="process-sec">
        <div class="container">
            <h2 class="process-sec__title">
                <span v-html="direction.direction_when_need_visit_section?.section_title"></span>
            </h2>

                <div class="process-sec__content">
                    <div class="process-sec__bg-img">
                        <img src="../../assets/images/process-bg.png" alt="process-bg" class="process-sec__bg-img-desktop">
                        <img src="../../assets/images/process-bg-mob.png" alt="process-bg" class="process-sec__bg-img-mobile">
                    </div>
                    <div class="process-sec__cards-num">
                        <div
                            v-for="card in displayedProcessCards"
                            :key="card.id"
                            class="process-card-num"
                            :class="{
                                'process-card-num--empty': card.isEmpty,
                                'process-card-num--active': card.isActive,
                            }"
                        >
                            <template v-if="!card.isEmpty">
                                <p class="process-card-num__number">{{ card.number }}</p>
                                <div class="process-card-num__data">
                                    <p class="process-card-num__title">{{ card.title }}</p>
                                    <p class="process-card-num__subtitle">{{ card.subtitle }}</p>
                                </div>
                            </template>
                        </div>
                    </div>

                    <div class="process-sec__cards-info">
                        <div
                            v-for="card in processInfoCards"
                            :key="card.id"
                            class="process-info-card"
                            :class="{ 'process-info-card--accent': card.isAccent }"
                        >
                            <p class="process-info-card__title">{{ card.title }}</p>
                            <p class="process-info-card__text" v-html="card.text"></p>
                        </div>
                    </div>
                </div>
        </div>
    </section>

    <section class="why-we-sec">
        <div class="container">
            <h2 class="why-we-sec__title">
                <span v-html="direction.direction_why_select_us_sec?.title_section"></span>
            </h2>
            <div class="why-we-sec__content">
                <div
                    v-for="card in whyWeCards"
                    :key="card.id"
                    class="why-we-sec__card"
                    :class="{ 'why-we-sec__card--accent': card.isAccent }"
                >
                    <h3 class="why-we-sec__card-title">{{ card.title }}</h3>

                    <p class="why-we-sec__card-text">
                        {{ card.text }}
                    </p>
                </div>
            </div>
        </div>
    </section>




    <bannerV1 :bannerData="bannerData" />
</template>

<script setup>
import BtnCtrV1 from '@/components/btn-ctr-v1.vue';
import bannerV1 from '~/components/banner-v1.vue';
import SpecialistCard from '@/components/specialist-card.vue';

const config = useRuntimeConfig();
const strapiUrl = config.public.strapiUrl;
const route = useRoute();
const slug = route.params.id;

const { data: directionResponse } = await useFetch(`${strapiUrl}/api/directions`, {
    query: {
        'filters[slug][$eq]': slug,
        'populate[direction_hero_sec]': true,
        'populate[direction_when_need_visit_sec][populate][image_sec]': true,
        'populate[direction_specialists_section][populate][doctors][populate][photo]': true,
        'populate[direction_when_need_visit_section][populate][cards_numbers]': true,
        'populate[direction_when_need_visit_section][populate][cards_advantages]': true,
        'populate[direction_why_select_us_sec][populate][advantages]': true,
        'populate[direction_banner_sec]': true,
        'populate[Seo][populate][shareImage]': true,
        'populate[Seo][populate][twitterImage]': true,
    },
});

const directionItem = directionResponse.value?.data?.[0];

if (!directionItem) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Направление не найдено',
    });
}

const direction = directionItem.attributes ?? directionItem;

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

function mapDoctorItem(item, index) {
    return {
        id: item.documentId ?? item.id ?? index,
        slug: item.slug,
        name: item.name,
        position: item.specialization,
        experience: formatExperienceYears(item.experience_years),
        description: item.small_descriotion,
        image: getStrapiMediaUrl(item.photo),
    };
}

const specialists = unwrapRelation(direction.direction_specialists_section?.doctors).map(mapDoctorItem);

function mapProcessNumberCard(item, index) {
    return {
        id: item.id ?? index,
        number: String(index + 1).padStart(2, '0'),
        title: item.title,
        subtitle: item.text,
        isActive: item.active_card ?? false,
    };
}

function mapProcessAdvantageCard(item, index) {
    return {
        id: item.id ?? index,
        title: item.title,
        text: item.text,
        isAccent: item.active_card ?? false,
    };
}

const processSection = direction.direction_when_need_visit_section;

function createEmptyProcessCard(id) {
    return {
        id,
        number: '',
        title: '',
        subtitle: '',
        isEmpty: true,
    };
}

function prepareProcessCards(cards) {
    const count = cards.length;

    if (count === 8) {
        return [...cards];
    }

    if (count === 7) {
        const result = [...cards];
        result.splice(2, 0, createEmptyProcessCard('empty-1'));
        return result;
    }

    if (count === 6) {
        const result = [...cards];
        result.splice(2, 0, createEmptyProcessCard('empty-1'));
        result.splice(4, 0, createEmptyProcessCard('empty-2'));
        return result;
    }

    if (count === 5) {
        const result = [...cards];
        result.splice(2, 0, createEmptyProcessCard('empty-1'));
        result.splice(4, 0, createEmptyProcessCard('empty-2'));
        return result;
    }

    return [...cards];
}

const displayedProcessCards = prepareProcessCards(
    (processSection?.cards_numbers ?? []).map(mapProcessNumberCard),
);

const processInfoCards = (processSection?.cards_advantages ?? []).map(mapProcessAdvantageCard);

function mapWhyWeCard(item, index) {
    return {
        id: item.id ?? index,
        title: item.title,
        text: item.text,
        isAccent: item.active_card ?? false,
    };
}

const whyWeCards = (direction.direction_why_select_us_sec?.advantages ?? []).map(mapWhyWeCard);

const bannerData = computed(() => {
    const banner = direction.direction_banner_sec;

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

const seo = direction.Seo;
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