<template>
    <div class="price-card">
        <div class="price-card__data">
            <p class="price-card__title">{{ title }}</p>
            <p class="price-card__price">{{ price }}</p>
        </div>

        <button class="price-card__btn">Записаться</button>

        <BtnCtrV2 :titleBtn="'Записаться'" />
    </div>
</template>

<script setup>
import BtnCtrV2 from "@/components/btn-ctr-v2.vue";
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
});
</script>