<template>
    <section v-if="props.bannerData" class="banner-v1" :style="{ backgroundImage: `url(${bannerBg})` }">
        
        <div class="container">
            <div class="banner-v1__content">
                <img src="../assets/images/bg/banner-line-1.png" alt="" class="banner-v1__bg">
                <h2 class="banner-v1__title">
                    {{ props.bannerData.title }}
                </h2>
                <p class="banner-v1__text">
                    {{ props.bannerData.text }}
                </p>
                <div class="banner-v1__buttons">
                    <BtnCtrV4 v-for="button in props.bannerData.buttons" 
                    :key="button.title" 
                    :titleBtn="button.title" 
                    :link="button.link" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import bannerBg from "@/assets/images/bg/banner-bg-1.jpg";
import BtnCtrV4 from "@/components/btn-ctr-v4.vue";

const props = defineProps({
    bannerData: {
        type: Object,
        required: true
    }
});
</script>
