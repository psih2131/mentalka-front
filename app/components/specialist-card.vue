<template>
    <div class="specialist-card" v-if="props.specialistData">
        <div class="specialist-card__top-info">
         
            <NuxtLink :to="`/specialists/${specialistData.id}`" class="specialist-card__img">
                <img :src="props.specialistData.image" alt="specialist-img" class="specialist-card__img-img">
            </NuxtLink>
            <div class="specialist-card__content">
                <h3 class="specialist-card__title">
                    <NuxtLink :to="`/specialists/${specialistData.id}`">{{ specialistData.name }}</NuxtLink>
                </h3>
                <div class="specialist-card__dop-info-row">
                    <p class="specialist-card__position">{{ props.specialistData.position }}</p>
                    <p class="specialist-card__experience">{{ props.specialistData.experience }}</p>
                </div>
                <p class="specialist-card__description">{{ props.specialistData.description }}</p>
            
            </div>
        </div>

        <div class="specialist-card__bottom-info">
            <BtnCtrV2 :titleBtn="'Записаться'" />
            <BtnCtrV3 :titleBtn="'Подробнее'" :id="specialistData.id" />
        </div>
    </div>
</template>

<script setup>  

import BtnCtrV2 from "@/components/btn-ctr-v2.vue";

import BtnCtrV3 from "@/components/btn-ctr-v3.vue";

const props = defineProps({
    specialistData: {
        type: Object,
        required: true
    }
});

</script>