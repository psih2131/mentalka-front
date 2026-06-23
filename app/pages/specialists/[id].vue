<template>
    <section class="specialist-hero-sec">
        <div class="container">
            <div class="specialist-hero-sec__left-col">
                <div class="specialist-hero-sec__img">
                    <img
                        v-if="doctor.photo"
                        :src="getStrapiMediaUrl(doctor.photo)"
                        :alt="doctor.name || 'specialist-img'"
                    >
                </div>
                <h1 class="specialist-hero-sec__doctor-name">
                    {{ doctor.name }}
                </h1>
                <p class="specialist-hero-sec__doctor-description">
                    {{ doctor.small_descriotion }}
                </p>
            </div>
            <div class="specialist-hero-sec__right-col">
                <div class="specialist-hero-sec__doctor-info-block doctor-info-block">
                    <div class="doctor-info-block__type">
                        {{ doctor.specialization }}
                    </div>
                    <div class="doctor-info-block__row-data">
                        <div class="doctor-info-block__element-data">
                            <p class="doctor-info-block__element-data-title">Формат приёма</p>
                            <ul class="doctor-info-block__element-data-list">
                                <li class="doctor-info-block__element-data-item">
                                    <p class="doctor-info-block__element-data-item-value">{{ doctor.reception_format }}</p>
                                </li>
                            </ul>
                        </div>

                        <div class="doctor-info-block__element-data">
                            <p class="doctor-info-block__element-data-title">Пациенты</p>
                            <ul class="doctor-info-block__element-data-list">
                                <li class="doctor-info-block__element-data-item">
                                    <p class="doctor-info-block__element-data-item-value">{{ doctor.patients }}</p>
                                </li>
                            </ul>
                        </div>

                        <div class="doctor-info-block__element-data doctor-info-block__element-data--price  ">
                            <p class="doctor-info-block__element-data-title">Стоимость</p>
                            <ul v-if="doctor.service_price?.length" class="doctor-info-block__element-data-list">
                                <li
                                    v-for="(priceItem, priceIndex) in doctor.service_price"
                                    :key="priceItem.id ?? priceIndex"
                                    class="doctor-info-block__element-data-item"
                                >
                                    <p class="doctor-info-block__element-data-item-value">
                                        {{ priceItem.name_service }} - {{ priceItem.price }}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="doctor-booking-form">
                        <p class="doctor-booking-form__title">Форма для записи</p>

                        <div class="doctor-booking-form__days">
                            <div class="doctor-booking-form__days-list">
                                <div class="doctor-booking-form__day doctor-booking-form__day--active">
                                    <span class="doctor-booking-form__day-date">6 окт</span>
                                    <span class="doctor-booking-form__day-label">Сегодня</span>
                                </div>
                                <div class="doctor-booking-form__day">
                                    <span class="doctor-booking-form__day-date">7 окт</span>
                                    <span class="doctor-booking-form__day-label">Завтра</span>
                                </div>
                                <div class="doctor-booking-form__day">
                                    <span class="doctor-booking-form__day-date">8 окт</span>
                                    <span class="doctor-booking-form__day-label">Среда</span>
                                </div>
                                <div class="doctor-booking-form__day">
                                    <span class="doctor-booking-form__day-date">9 окт</span>
                                    <span class="doctor-booking-form__day-label">Четверг</span>
                                </div>
                                <div class="doctor-booking-form__day">
                                    <span class="doctor-booking-form__day-date">10 окт</span>
                                    <span class="doctor-booking-form__day-label">Пятница</span>
                                </div>
                            </div>
                            <div class="doctor-booking-form__calendar">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10V11H3V10Z" stroke="white" stroke-width="1.2"/>
                                <rect x="3" y="6" width="18" height="15" rx="2" stroke="white" stroke-width="1.2"/>
                                <path d="M7 3L7 8" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
                                <path d="M17 3L17 8" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
                                </svg>
                            </div>
                        </div>

                        <div class="doctor-booking-form__times">
                            <div class="doctor-booking-form__time doctor-booking-form__time--active">
                                12:00
                            </div>
                            <div class="doctor-booking-form__time">13:00</div>
                            <div class="doctor-booking-form__time">14:00</div>
                            <div class="doctor-booking-form__time">15:00</div>
                            <div class="doctor-booking-form__time">16:00</div>
                        </div>

                        <div class="doctor-booking-form__footer">
                            
                            <BtnCtrV1 titleBtn="Записаться" />

                            <p class="doctor-booking-form__note">
                                Выдаем документы для налогового вычета только на
                                мед.услуги
                            </p>
                        </div>
                    </div>
                </div>

                <div class="doctor-about-block">
                    <nav class="doctor-about-block__nav">
                        <ul class="doctor-about-block__nav-list">
                            <li class="doctor-about-block__nav-item" :class="{ 'active': tabCurrent === 0 }" @click="tabCurrent = 0">
                                Подробнее о враче
                            </li>
                            <li class="doctor-about-block__nav-item" :class="{ 'active': tabCurrent === 1 }" @click="tabCurrent = 1">
                                Специализация
                            </li>
                            <li class="doctor-about-block__nav-item" :class="{ 'active': tabCurrent === 2 }" @click="tabCurrent = 2">
                                Услуги врача
                            </li>
                            <li class="doctor-about-block__nav-item" :class="{ 'active': tabCurrent === 3 }" @click="tabCurrent = 3">
                                Образование
                            </li>
                        </ul>
                    </nav>

                    <div class="doctor-about-block__tabs-wrapper">
                        <div class="doctor-about-block__tab" :class="{ 'active': tabCurrent === 0 }">
                            <h2 class="doctor-about-block__tab-title">О враче и подход к лечению</h2>
                            <div
                                class="doctor-about-block__tab-text-wrapper"
                                v-html="renderMarkdown(doctor.full_description)"
                            ></div>
                        </div>

                        <div class="doctor-about-block__tab" :class="{ 'active': tabCurrent === 1 }">
                            <h2 class="doctor-about-block__tab-title">Специализация</h2>
                            <div class="doctor-about-block__tab-text-wrapper">
                                <p>{{ doctor.full_specialization }}</p>
                            </div>

                            <div v-if="doctor.Diseases_item?.length" class="doctor-about-block__columb-wrapper">
                                <h3 class="doctor-about-block__columb-title">Болезни</h3>

                                <ul class="doctor-about-block__columb-list doctor-about-block__columb-list--two-coll">
                                    <li
                                        v-for="(disease, diseaseIndex) in doctor.Diseases_item"
                                        :key="disease.id ?? diseaseIndex"
                                    >
                                        {{ disease.name_diseases }}
                                    </li>
                                </ul>
                            </div>

                            <div v-if="experienceText" class="doctor-about-block__experience-wrapper">
                                <h3 class="doctor-about-block__experience-title">Общий стаж</h3>
                                <p class="doctor-about-block__experience-text">{{ experienceText }}</p>
                            </div>
                        </div>

                        <div class="doctor-about-block__tab" :class="{ 'active': tabCurrent === 2 }">
                            <h2 class="doctor-about-block__tab-title">Услуги врача</h2>
             

                            <div v-if="doctor.doc_service_list_full?.length" class="doctor-about-block__columb-wrapper">
                                <ul class="doctor-about-block__columb-list ">
                                    <li
                                        v-for="(service, serviceIndex) in doctor.doc_service_list_full"
                                        :key="service.id ?? serviceIndex"
                                    >
                                        {{ service.name_service }}
                                    </li>
                                </ul>
                            </div>
               
                        </div>


                        <div class="doctor-about-block__tab" :class="{ 'active': tabCurrent === 3 }">
                            <h2 class="doctor-about-block__tab-title">Образование и квалификация</h2>

                            <div v-if="doctor.education_and_qualifications_list_item?.length" class="doctor-about-block__columb-wrapper">
                                <ul class="doctor-about-block__columb-list ">
                                    <li
                                        v-for="(educationItem, educationIndex) in doctor.education_and_qualifications_list_item"
                                        :key="educationItem.id ?? educationIndex"
                                    >
                                        {{ educationItem.text }}
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

    <BannerV1 :bannerData="bannerData" />

</template>


<script setup>
import BtnCtrV1 from "@/components/btn-ctr-v1.vue";
import BannerV1 from "@/components/banner-v1.vue";
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

const config = useRuntimeConfig();
const strapiUrl = config.public.strapiUrl;
const route = useRoute();
const slug = route.params.id;

const { data: doctorResponse } = await useFetch(`${strapiUrl}/api/doctors`, {
    query: {
        'filters[slug][$eq]': slug,
        'populate[photo]': true,
        'populate[service_price]': true,
        'populate[Diseases_item]': true,
        'populate[doc_service_list_full]': true,
        'populate[education_and_qualifications_list_item]': true,
        'populate[Seo][populate][shareImage]': true,
        'populate[Seo][populate][twitterImage]': true,
    },
});

const doctorItem = doctorResponse.value?.data?.[0];

if (!doctorItem) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Специалист не найден',
    });
}

const doctor = doctorItem.attributes ?? doctorItem;

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

    return `${count} ${word}`;
}

const experienceText = formatExperienceYears(doctor.experience_years);
const tabCurrent = ref(0);

const bannerData = ref({
    title: "Персональный подбор специалиста",
    text: "Мы учтём ваш запрос и состояние, чтобы предложить наиболее подходящего врача",
    buttons: [
        {
            title: "Получить консультацию",
            link: "/consultation"
        }
    ]
});

const seo = doctor.Seo;
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