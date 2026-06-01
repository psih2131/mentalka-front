<template>
    <section class="banner-v2">
        <div class="container">
            <h2 class="banner-v2__title" v-html="props.bannerData.title"></h2> 
        </div>

        <div class="banner-v2__wrapper">
            <img src="../assets/images/bg/banner-2-line-1.png" alt="" class="banner-v2__wrapper-line-1">
            <img src="../assets/images/bg/banner-2-line-2.png" alt="" class="banner-v2__wrapper-line-2">
            <img src="../assets/images/bg/banner-2-line-mob.png" alt="" class="banner-v2__wrapper-line-mobile">
            <div class="container">
                <div class="banner-v2__wrapper-content">
                    <p class="banner-v2__wrapper-content-text">
                        {{ props.bannerData.text }}
                    </p>
                    <a :href="`mailto:${props.bannerData.email}`" class="banner-v2__wrapper-email">
                        <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.675 0C29.0342 0 30.3378 0.539954 31.2989 1.50108C32.26 2.4622 32.8 3.76577 32.8 5.125V21.525C32.8 22.8842 32.26 24.1878 31.2989 25.1489C30.3378 26.11 29.0342 26.65 27.675 26.65H5.125C3.76577 26.65 2.4622 26.11 1.50108 25.1489C0.539954 24.1878 0 22.8842 0 21.525V5.125C0 3.76577 0.539954 2.4622 1.50108 1.50108C2.4622 0.539954 3.76577 0 5.125 0H27.675ZM30.75 8.12005L16.9207 16.2586C16.79 16.3353 16.6438 16.3821 16.4928 16.3956C16.3418 16.4091 16.1897 16.3889 16.0474 16.3365L15.8793 16.2586L2.05 8.12415V21.525C2.05 22.3405 2.37397 23.1227 2.95065 23.6994C3.52732 24.276 4.30946 24.6 5.125 24.6H27.675C28.4905 24.6 29.2727 24.276 29.8494 23.6994C30.426 23.1227 30.75 22.3405 30.75 21.525V8.12005ZM27.675 2.05H5.125C4.30946 2.05 3.52732 2.37397 2.95065 2.95065C2.37397 3.52732 2.05 4.30946 2.05 5.125V5.7441L16.4 14.186L30.75 5.74V5.125C30.75 4.30946 30.426 3.52732 29.8494 2.95065C29.2727 2.37397 28.4905 2.05 27.675 2.05Z" fill="white"/>
                        </svg>
                        <span>{{ props.bannerData.email }}</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    bannerData: {
        type: Object,
        required: true
    }
});
</script>