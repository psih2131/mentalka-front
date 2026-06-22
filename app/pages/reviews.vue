<template>
    <section class="reviews-sec">
        <div class="container">
            <h1 class="reviews-sec__title" v-html="sectionTitle"></h1>

            <p class="reviews-sec__subtitle">{{ sectionSubtitle }}</p>
            
            <div class="reviews-sec__list-wrapper">
                <button
                    v-for="category in categories"
                    :key="category.id"
                    type="button"
                    class="reviews-sec__item"
                    :class="{ 'reviews-sec__item--active': selectedCategoryId === category.id }"
                    @click="selectCategory(category.id)"
                >
                    <div class="reviews-sec__item-logo">
                        <img
                            v-if="category.logoUrl"
                            :src="category.logoUrl"
                            :alt="category.name || 'logo'"
                        >
                    </div>

                    <div class="reviews-sec__item-rate">
                        <svg
                            v-for="starIndex in 5"
                            :key="`${category.id}-${starIndex}`"
                            width="28"
                            height="27"
                            viewBox="0 0 28 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M27.859 10.0741C27.6988 9.57359 27.4005 9.1285 26.9986 8.78993C26.5967 8.45136 26.1075 8.23304 25.587 8.16005L19.324 7.24405L16.524 1.57005C16.292 1.09885 15.9326 0.702034 15.4866 0.424551C15.0406 0.147068 14.5258 0 14.0005 0C13.4753 0 12.9605 0.147068 12.5145 0.424551C12.0685 0.702034 11.7091 1.09885 11.477 1.57005L8.67405 7.24405L2.41105 8.15605C1.89115 8.23111 1.40265 8.45025 1.00087 8.78864C0.5991 9.12703 0.300102 9.57116 0.137741 10.0707C-0.024619 10.5703 -0.0438551 11.1054 0.0822118 11.6153C0.208279 12.1252 0.474611 12.5897 0.851048 12.9561L5.38305 17.3741L4.31305 23.6131C4.22331 24.1312 4.28053 24.6641 4.47824 25.1513C4.67595 25.6386 5.00622 26.0607 5.43161 26.3698C5.857 26.6789 6.36049 26.8626 6.88498 26.9001C7.40948 26.9376 7.93399 26.8275 8.39905 26.5821L13.999 23.6371L19.599 26.5831C20.0639 26.8274 20.5878 26.9369 21.1115 26.899C21.6353 26.8612 22.1381 26.6775 22.5629 26.3688C22.9877 26.0601 23.3177 25.6387 23.5154 25.1522C23.7132 24.6657 23.7709 24.1336 23.682 23.6161L22.612 17.3771L27.144 12.9591C27.522 12.5938 27.7895 12.1295 27.916 11.6193C28.0424 11.1091 28.0227 10.5736 27.859 10.0741Z"
                                :fill="getStarFill(category.avgRate, starIndex) >= 1 ? category.starColor : '#CED1DB'"
                            />
                            <template v-if="getStarFill(category.avgRate, starIndex) > 0 && getStarFill(category.avgRate, starIndex) < 1">
                                <mask :id="`mask-${category.id}-${starIndex}`" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="27">
                                    <path
                                        d="M27.859 10.0741C27.6988 9.57359 27.4005 9.1285 26.9986 8.78993C26.5967 8.45136 26.1075 8.23304 25.587 8.16005L19.324 7.24405L16.524 1.57005C16.292 1.09885 15.9326 0.702034 15.4866 0.424551C15.0406 0.147068 14.5258 0 14.0005 0C13.4753 0 12.9605 0.147068 12.5145 0.424551C12.0685 0.702034 11.7091 1.09885 11.477 1.57005L8.67405 7.24405L2.41105 8.15605C1.89115 8.23111 1.40265 8.45025 1.00087 8.78864C0.5991 9.12703 0.300102 9.57116 0.137741 10.0707C-0.024619 10.5703 -0.0438551 11.1054 0.0822118 11.6153C0.208279 12.1252 0.474611 12.5897 0.851048 12.9561L5.38305 17.3741L4.31305 23.6131C4.22331 24.1312 4.28053 24.6641 4.47824 25.1513C4.67595 25.6386 5.00622 26.0607 5.43161 26.3698C5.857 26.6789 6.36049 26.8626 6.88498 26.9001C7.40948 26.9376 7.93399 26.8275 8.39905 26.5821L13.999 23.6371L19.599 26.5831C20.0639 26.8274 20.5878 26.9369 21.1115 26.899C21.6353 26.8612 22.1381 26.6775 22.5629 26.3688C22.9877 26.0601 23.3177 25.6387 23.5154 25.1522C23.7132 24.6657 23.7709 24.1336 23.682 23.6161L22.612 17.3771L27.144 12.9591C27.522 12.5938 27.7895 12.1295 27.916 11.6193C28.0424 11.1091 28.0227 10.5736 27.859 10.0741Z"
                                        fill="#CED1DB"
                                    />
                                </mask>
                                <g :mask="`url(#mask-${category.id}-${starIndex})`">
                                    <rect
                                        x="-5"
                                        y="6"
                                        :width="getPartialStarWidth(category.avgRate, starIndex)"
                                        height="12"
                                        :fill="category.starColor"
                                    />
                                </g>
                            </template>
                        </svg>
                    </div>

                    <p class="reviews-sec__item-count">{{ getReviewsCountLabel(category.reviewsCount) }}</p>
                </button>
            </div>

            <div class="reviews-sec__content">
                <div class="reviews-sec__reviews-list">
                    <ReviewCardV1
                        v-for="review in paginatedReviews"
                        :key="review.id"
                        :name="review.name"
                        :date="review.date"
                        :text="review.text"
                    />

                    <div
                        v-if="showPagination"
                        class="reviews-sec__reviews-list-buttons "
                    >
                        <button
                            type="button"
                            class="rev-btn rev-btn--prev"
                            :disabled="!canGoPrev"
                            @click="goToPrevPage"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 12H21" stroke="#206633" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.35729 11.7856L5.7884 9.72696C6.32162 9.40703 7 9.79112 7 10.413V13.587C7 14.2089 6.32162 14.593 5.7884 14.273L2.35729 12.2144C2.19545 12.1173 2.19545 11.8827 2.35729 11.7856Z" fill="#206633" fill-opacity="0.5"/>
                            </svg>
                            <span>Предыдущая</span>
                        </button>

                        <button
                            type="button"
                            class="rev-btn rev-btn--next"
                            :disabled="!canGoNext"
                            @click="goToNextPage"
                        >
                            <span>Следующая </span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 12H3" stroke="#206633" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21.6427 11.7856L18.2116 9.72696C17.6784 9.40703 17 9.79112 17 10.413V13.587C17 14.2089 17.6784 14.593 18.2116 14.273L21.6427 12.2144C21.8045 12.1173 21.8045 11.8827 21.6427 11.7856Z" fill="#206633"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <aside class="reviews-sec__reviews-aside">
                    <p class="reviews-sec__reviews-aside-title">Оставить отзыв</p>
                    <div class="reviews-sec__reviews-aside-form">
                        <div class="reviews-sec__reviews-aside-inp">
                            <input type="text" placeholder="Выше имя">
                        </div>
                        <div class="reviews-sec__reviews-aside-inp">
                            <input type="text" placeholder="+7 (000) 000 00 00">
                        </div>
                        <div class="reviews-sec__reviews-aside-inp">
                            <input type="text" placeholder="Комментарий">
                        </div>
                        <p class="reviews-sec__reviews-aside-valid-text">*Вы можете внести в комментарий не более 1000 символов</p>
                        <div class="reviews-sec__reviews-aside-btn-wrapper">
                            <btnCtrV1 titleBtn="Оставить отзыв" />    
                        </div>
                        <p class="reviews-sec__reviews-aside-personal-data-text">
                            Отправляя заявку, Вы соглашаетесь на обработку<br>
                            <a href="#">персональных данных</a>
                        </p>

                        <p class="reviews-sec__reviews-aside-rules-text">
                            <a href="#">Требования и правила публикации отзыва</a>

                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="16" fill="#B0B0B0"/>
                            <path d="M15.9896 23C14.1882 23 12.4074 22.2989 11.0505 20.9427C9.64426 19.5371 8.90089 17.5918 9.01064 15.6056C9.1221 13.5921 10.0586 11.7832 11.6475 10.5122C14.158 8.50405 17.8079 8.49532 20.3268 10.4898C23.1184 12.7009 23.819 16.6178 21.9753 19.6343L22.5472 21.646C22.6201 21.9011 22.5514 22.1657 22.3638 22.3536C22.1762 22.5411 21.9127 22.6106 21.6552 22.5381L19.6429 21.966C18.5062 22.6603 17.2428 22.9996 15.9896 23ZM16.0018 9.38791C14.5408 9.38791 13.0801 9.8639 11.8905 10.8155C10.389 12.0167 9.50413 13.7254 9.39894 15.6271C9.29527 17.5029 9.99744 19.3405 11.3254 20.6679C13.5178 22.8596 16.8835 23.2399 19.5103 21.591C19.5566 21.5618 19.6136 21.5527 19.6668 21.569L21.7615 22.1642C21.8789 22.1976 22.0019 22.1657 22.0889 22.0788C22.1754 21.9922 22.207 21.87 22.1735 21.7523L21.5781 19.6582C21.5629 19.605 21.5709 19.5485 21.6001 19.5018C23.3952 16.6436 22.7439 12.9003 20.0853 10.7946C18.9008 9.8565 17.4513 9.38791 16.0018 9.38791ZM15.9995 18.5449C15.5073 18.5449 15.1069 18.1444 15.1069 17.6525V17.6058C15.1069 16.4893 15.6514 15.4299 16.601 14.6995C16.8505 14.5075 16.9914 14.2169 16.9868 13.9021C16.9796 13.3818 16.5338 12.9362 16.0135 12.9292C15.738 12.9292 15.4919 13.0302 15.306 13.2133C15.1162 13.4001 15.0117 13.6496 15.0117 13.9161C15.0117 14.408 14.6113 14.8083 14.1191 14.8083C13.627 14.8083 13.2265 14.408 13.2265 13.9161C13.2265 13.1681 13.5199 12.4672 14.0527 11.9423C14.576 11.4276 15.2757 11.1448 16.0245 11.1448H16.0367C17.5253 11.1657 18.7516 12.3915 18.7721 13.8776C18.7842 14.747 18.3798 15.5828 17.6898 16.1135C17.1832 16.5037 16.8923 17.0474 16.8923 17.6058V17.6525C16.8923 18.1444 16.4916 18.5449 15.9995 18.5449ZM15.9991 12.5405C16.7442 12.5504 17.3655 13.1716 17.3757 13.8967C17.3818 14.3353 17.1858 14.7402 16.838 15.0076C15.985 15.6639 15.4957 16.6109 15.4957 17.6058V17.6525C15.4957 17.9303 15.7217 18.1562 15.9995 18.1562C16.2775 18.1562 16.5034 17.9303 16.5034 17.6525V17.6058C16.5034 16.926 16.8494 16.2697 17.4528 15.8056C18.046 15.3492 18.3938 14.6305 18.3832 13.8829C18.3657 12.6052 17.3115 11.5513 16.0333 11.5335C16.0299 11.5335 16.0261 11.5335 16.0226 11.5335C15.3784 11.5335 14.7755 11.7768 14.3255 12.2192C13.8677 12.6703 13.6154 13.2731 13.6154 13.9161C13.6154 14.1938 13.8413 14.4196 14.1191 14.4196C14.3969 14.4196 14.6229 14.1938 14.6229 13.9161C14.6229 13.5447 14.7685 13.1966 15.0332 12.9364C15.292 12.6811 15.6351 12.5405 15.9991 12.5405ZM15.9995 20.844C15.5073 20.844 15.1069 20.4435 15.1069 19.9516C15.1069 19.4597 15.5073 19.0596 15.9995 19.0596C16.4916 19.0596 16.8923 19.4597 16.8923 19.9516C16.8923 20.4435 16.4916 20.844 15.9995 20.844ZM15.9995 19.4483C15.7217 19.4483 15.4957 19.6741 15.4957 19.9516C15.4957 20.2295 15.7217 20.4553 15.9995 20.4553C16.2775 20.4553 16.5034 20.2295 16.5034 19.9516C16.5034 19.6741 16.2775 19.4483 15.9995 19.4483Z" fill="white"/>
                            </svg>

                        </p>
                        
                    </div>
                </aside>

               
            </div>
        </div>
    </section>

    <BannerV2 :bannerData="bannerData" />
</template>

<script setup>
import BannerV2 from '@/components/banner-v2.vue';
import btnCtrV1 from '@/components/btn-ctr-v1.vue';
import ReviewCardV1 from '@/components/review-card-v1.vue';

const PAGE_SIZE = 10;
const STAR_COLORS = ['#FF3C8A', '#FFA928', '#FFCC00', '#262626'];

const config = useRuntimeConfig();
const strapiUrl = config.public.strapiUrl;

const selectedCategoryId = ref(null);
const currentPage = ref(1);

const { data: categoriesResponse } = await useFetch(`${strapiUrl}/api/reviews-categories`, {
    query: {
        'populate[category_logo]': true,
        'populate[reviews][fields][0]': 'rate',
        'pagination[pageSize]': 100,
    },
});

const { data: reviewsResponse } = await useFetch(`${strapiUrl}/api/reviews`, {
    query: {
        'populate[reviews_category]': true,
        'pagination[pageSize]': 100,
    },
});

const { data: pageReviewResponse } = await useFetch(`${strapiUrl}/api/page-review`, {
    query: {
        'populate[Reviews_banner_v1]': true,
        'populate[Seo][populate][shareImage]': true,
        'populate[Seo][populate][twitterImage]': true,
    },
});

function getEntityId(entity) {
    if (!entity) {
        return null;
    }

    const data = entity.data ?? entity;

    return data.id ?? data.documentId ?? null;
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

function normalizeRelationItems(relation) {
    if (!relation) {
        return [];
    }

    if (Array.isArray(relation)) {
        return relation;
    }

    if (Array.isArray(relation.data)) {
        return relation.data;
    }

    if (relation.data) {
        return [relation.data];
    }

    return [];
}

function formatReviewDate(dateValue) {
    if (!dateValue) {
        return '';
    }

    return new Date(dateValue).toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
}

function getReviewsCountLabel(count) {
    const mod10 = count % 10;
    const mod100 = count % 100;

    if (mod10 === 1 && mod100 !== 11) {
        return `${count} отзыв`;
    }

    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
        return `${count} отзыва`;
    }

    return `${count} отзывов`;
}

function getStarFill(rating, starIndex) {
    return Math.max(0, Math.min(1, rating - (starIndex - 1)));
}

function getPartialStarWidth(rating, starIndex) {
    return Math.round(getStarFill(rating, starIndex) * 28) + 5;
}

function mapCategories(response) {
    const items = response?.data ?? [];

    return items.map((item, index) => {
        const raw = item.attributes ?? item;
        const reviewItems = normalizeRelationItems(raw.reviews);
        const rates = reviewItems.map((reviewItem) => Number((reviewItem.attributes ?? reviewItem).rate ?? 0));
        const avgRate = rates.length
            ? rates.reduce((sum, rate) => sum + rate, 0) / rates.length
            : 0;

        return {
            id: getEntityId(item),
            name: raw.category_name,
            logoUrl: getStrapiMediaUrl(raw.category_logo),
            reviewsCount: reviewItems.length,
            avgRate,
            starColor: STAR_COLORS[index % STAR_COLORS.length],
        };
    });
}

function mapReviews(response) {
    const items = response?.data ?? [];

    return items.map((item) => {
        const raw = item.attributes ?? item;

        return {
            id: getEntityId(item),
            name: raw.autor_name,
            date: formatReviewDate(raw.date),
            text: raw.review_text,
            categoryId: getEntityId(raw.reviews_category),
        };
    });
}

function mapPageReview(response) {
    const item = response?.data;

    if (!item) {
        return null;
    }

    return item.attributes ?? item;
}

const categories = mapCategories(categoriesResponse.value);
const allReviews = mapReviews(reviewsResponse.value);
const pageReview = mapPageReview(pageReviewResponse.value);

const sectionTitle = pageReview?.title_section ?? '';
const sectionSubtitle = pageReview?.subtitle_section ?? '';
const bannerData = {
    title: pageReview?.Reviews_banner_v1?.title_sec ?? '',
    text: pageReview?.Reviews_banner_v1?.text ?? '',
    email: pageReview?.Reviews_banner_v1?.email ?? '',
};



const paginatedReviews = ref([]);
const showPagination = ref(false);
const canGoPrev = ref(false);
const canGoNext = ref(false);

function getFilteredReviews() {
    if (!selectedCategoryId.value) {
        return allReviews;
    }

    return allReviews.filter((review) => review.categoryId === selectedCategoryId.value);
}

function updateReviewsView() {
    const filteredReviews = getFilteredReviews();
    const start = (currentPage.value - 1) * PAGE_SIZE;

    paginatedReviews.value = filteredReviews.slice(start, start + PAGE_SIZE);
    showPagination.value = filteredReviews.length > PAGE_SIZE;
    canGoPrev.value = currentPage.value > 1;
    canGoNext.value = currentPage.value * PAGE_SIZE < filteredReviews.length;
}

function selectCategory(categoryId) {
    selectedCategoryId.value = selectedCategoryId.value === categoryId ? null : categoryId;
    currentPage.value = 1;
    updateReviewsView();
}

function goToPrevPage() {
    if (canGoPrev.value) {
        currentPage.value -= 1;
        updateReviewsView();
    }
}

function goToNextPage() {
    if (canGoNext.value) {
        currentPage.value += 1;
        updateReviewsView();
    }
}

updateReviewsView();








const seo = pageReview?.Seo;
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

<style scoped>
button.reviews-sec__item {
    border: none;
    cursor: pointer;
    text-align: inherit;
    font: inherit;
    color: inherit;
}

.reviews-sec__item--active {
    box-shadow: 0 0 0 2px #206633;
}
</style>
