<template>
    <section class="contacts-hero-sec">
        <div class="container">
            <div class="contacts-hero-sec__info">
                <h1 class="contacts-hero-sec__title">{{ pageContact?.title_page }}</h1>
                <p class="contacts-hero-sec__subtitle">
                    {{ pageContact?.text }}
                </p>

                <div class="contacts-hero-sec__contacts-list">
                    <a :href="pageContact?.address_link" class="contacts-hero-sec__contact-link">
                        <span class="contacts-hero-sec__contact-link-text">
                            {{ pageContact?.address }}
                        </span>
                        <span class="contacts-hero-sec__contact-link-ar">
                            <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 8.89583L26.0607 7.83517L27.1213 8.89583L26.0607 9.95649L25 8.89583ZM1.5 10.3958C0.671574 10.3958 0 9.72426 0 8.89583C0 8.06741 0.671574 7.39583 1.5 7.39583V8.89583V10.3958ZM17.1667 1.0625L18.2273 0.00183988L26.0607 7.83517L25 8.89583L23.9393 9.95649L16.106 2.12316L17.1667 1.0625ZM25 8.89583L26.0607 9.95649L18.2273 17.7898L17.1667 16.7292L16.106 15.6685L23.9393 7.83517L25 8.89583ZM25 8.89583V10.3958H1.5V8.89583V7.39583H25V8.89583Z" fill="#317844"/>
                            </svg>

                        </span>
                    </a>

                    <p class="contacts-hero-sec__schedule">{{ pageContact?.time_work }}</p>

                    <div class="contacts-hero-sec__contact-link-cluster">
                        <a :href="pageContact?.phone_link" class="contacts-hero-sec__contact-link">
                        <span class="contacts-hero-sec__contact-link-text">{{ pageContact?.phone }}</span>
                        <span class="contacts-hero-sec__contact-link-ar">
                            <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 8.89583L26.0607 7.83517L27.1213 8.89583L26.0607 9.95649L25 8.89583ZM1.5 10.3958C0.671574 10.3958 0 9.72426 0 8.89583C0 8.06741 0.671574 7.39583 1.5 7.39583V8.89583V10.3958ZM17.1667 1.0625L18.2273 0.00183988L26.0607 7.83517L25 8.89583L23.9393 9.95649L16.106 2.12316L17.1667 1.0625ZM25 8.89583L26.0607 9.95649L18.2273 17.7898L17.1667 16.7292L16.106 15.6685L23.9393 7.83517L25 8.89583ZM25 8.89583V10.3958H1.5V8.89583V7.39583H25V8.89583Z" fill="#317844"/>
                            </svg>

                        </span>
                    </a>
                    </div>

                    <div class="contacts-hero-sec__contact-link-cluster">
                    <a :href="pageContact?.email ? `mailto:${pageContact.email}` : ''" class="contacts-hero-sec__contact-link">
                        <span class="contacts-hero-sec__contact-link-text">{{ pageContact?.email }}</span>
                        <span class="contacts-hero-sec__contact-link-ar">
                            <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 8.89583L26.0607 7.83517L27.1213 8.89583L26.0607 9.95649L25 8.89583ZM1.5 10.3958C0.671574 10.3958 0 9.72426 0 8.89583C0 8.06741 0.671574 7.39583 1.5 7.39583V8.89583V10.3958ZM17.1667 1.0625L18.2273 0.00183988L26.0607 7.83517L25 8.89583L23.9393 9.95649L16.106 2.12316L17.1667 1.0625ZM25 8.89583L26.0607 9.95649L18.2273 17.7898L17.1667 16.7292L16.106 15.6685L23.9393 7.83517L25 8.89583ZM25 8.89583V10.3958H1.5V8.89583V7.39583H25V8.89583Z" fill="#317844"/>
                            </svg>
                        </span>
                    </a>
                    </div>
                </div>

                <div class="contacts-hero-sec__socials">
                    <a
                        v-for="social in socialLinks"
                        :key="social.id"
                        :href="social.link"
                        class="contacts-hero-sec__socials-link"
                    >
                        <img :src="social.iconUrl" alt="">
                    </a>
                </div>
            </div>

            <div class="contacts-hero-sec__form-wrapper">
                <form class="contacts-hero-sec__form">
                    <p class="contacts-hero-sec__form-title">Связаться с администратором</p>
                    <p class="contacts-hero-sec__form-subtitle">
                        Оставьте контакты — мы свяжемся с вами, ответим на вопросы
                        и поможем выбрать удобный формат обращения
                    </p>

                    <ContactsForm />
                </form>
            </div>
        </div>
    </section>

    <section class="contacts-map-sec">
        <div class="container">
            <h2 class="contacts-map-sec__title">Как нас найти</h2>
            <div class="contacts-map-sec__map-wrapper">
                <ClientOnly>
                    <mapElement :mapData="mapData" />
                </ClientOnly>
            </div>

            <div class="contacts-map-sec__images-row">
                <div
                    v-for="photo in galleryPhotos"
                    :key="photo.id"
                    class="contacts-map-sec__img-wrapper"
                >
                    <a
                        v-if="photo.video_link"
                        :href="photo.video_link"
                        class="contacts-map-sec__img-wrapper-link"
                    >
                        <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M41.0894 29.3918C44.2694 31.9859 45.8594 33.2829 45.8594 35.5013C45.8594 37.7197 44.2694 39.0168 41.0894 41.6108C40.2115 42.327 39.3409 43.0012 38.5408 43.563C37.8389 44.0559 37.0439 44.5657 36.2209 45.0662C33.0484 46.9954 31.4621 47.9601 30.0394 46.8921C28.6167 45.8241 28.4874 43.5883 28.2288 39.1168C28.1557 37.8523 28.1094 36.6126 28.1094 35.5013C28.1094 34.39 28.1557 33.1503 28.2288 31.8858C28.4874 27.4143 28.6167 25.1785 30.0394 24.1105C31.4621 23.0425 33.0484 24.0072 36.2209 25.9364C37.0439 26.4369 37.8389 26.9467 38.5408 27.4396C39.3409 28.0014 40.2115 28.6757 41.0894 29.3918Z" stroke="white" stroke-width="1.5"/>
                        <path d="M20.7135 9.87569C25.0649 7.35859 30.1168 5.91797 35.5052 5.91797C51.8436 5.91797 65.0885 19.1629 65.0885 35.5013C65.0885 51.8397 51.8436 65.0846 35.5052 65.0846C19.1668 65.0846 5.92187 51.8397 5.92187 35.5013C5.92187 30.1129 7.3625 25.061 9.8796 20.7096" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>

                    </a>
                    <img :src="photo.imageUrl" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import ContactsForm from '../components/contacts-form.vue';
import mapElement from '../components/map.vue';

const config = useRuntimeConfig();
const strapiUrl = config.public.strapiUrl;

const { data: pageContactResponse } = await useFetch(`${strapiUrl}/api/page-contact`, {
    query: {
        'populate[socials_media_links][populate][icon]': true,
        'populate[gallery_photo][populate][image]': true,
        'populate[Seo][populate][shareImage]': true,
        'populate[Seo][populate][twitterImage]': true,
    },
});

function mapPageContact(response) {
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

function getMapCoordinate(value) {
    if (value === null || value === undefined || value === '') {
        return null;
    }

    const coordinate = Number(String(value).trim());

    return Number.isNaN(coordinate) ? null : coordinate;
}

function mapSocialLinks(items) {
    return (items ?? []).map((item, index) => ({
        id: item.id ?? index,
        link: item.link,
        iconUrl: getStrapiMediaUrl(item.icon),
    }));
}

function mapGalleryPhotos(items) {
    return (items ?? []).map((item, index) => ({
        id: item.id ?? index,
        imageUrl: getStrapiMediaUrl(item.image),
        video_link: item.video_link,
    }));
}

const pageContact = mapPageContact(pageContactResponse.value);

const mapData = ref({
    karta_dolgota: getMapCoordinate(pageContact?.yandex_map_coordinates_dolgota),
    karta_shirota: getMapCoordinate(pageContact?.yandex_map_coordinates_shirota),
    ikonka_karty: {
        url: '../assets/images/marker.png',
        alt: 'Ментал\'КА',
    },
});

const socialLinks = mapSocialLinks(pageContact?.socials_media_links);
const galleryPhotos = mapGalleryPhotos(pageContact?.gallery_photo);

const seo = pageContact?.Seo;
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
