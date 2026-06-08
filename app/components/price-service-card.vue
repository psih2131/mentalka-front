<template>
    <div class="price-service-card">
        <div class="price-service-card__header">
            <ul class="price-service-card__list">
                <li
                    v-for="tag in service.tags"
                    :key="tag"
                    class="price-service-card__item"
                >
                    {{ tag }}
                </li>
            </ul>
        </div>

        <div class="price-service-card__data">
            <h3 class="price-service-card__title">{{ service.title }}</h3>
            <div class="price-service-card__description">
                <p v-for="(paragraph, index) in service.description" :key="index">
                    {{ paragraph }}
                </p>
            </div>
        </div>

        <div class="price-service-card__price">
            <div class="price-service-card__result">
                <p class="price-service-card__result-title">Результат консультации</p>
                <p class="price-service-card__result-subtitle">{{ service.result }}</p>
            </div>
            <div class="price-service-card__btn-row">
                <div class="price-service-card__prices-list">
                    <p class="price-service-card__current-pricevalue">
                        {{ service.price }}
                        <b>/<br> {{ service.duration }}</b>
                    </p>
                </div>
                <BtnCtrV2 :titleBtn="'Записаться'" />
            </div>
        </div>
    </div>
</template>

<script setup>
import BtnCtrV2 from '@/components/btn-ctr-v2.vue';

defineProps({
    service: {
        type: Object,
        required: true,
    },
});
</script>
