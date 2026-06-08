<template>
    <div class="service-cat" :class="{ 'service-cat--active': isOpen }">
        <div class="service-cat__header" @click="toggle">
            <p class="service-cat__name">{{ title }}</p>
            <div class="service-cat__open-btn">
                <span class="service-cat__open-btn-line"></span>
                <span class="service-cat__open-btn-line"></span>
            </div>
        </div>

        <Vue3SlideUpDown :model-value="isOpen">
            <div class="service-cat__content">
                <div class="service-cat__content-tegs">
                    <div
                        v-for="tag in tags"
                        :key="tag"
                        class="service-cat__content-teg"
                    >
                        {{ tag }}
                    </div>
                </div>

                <div class="service-cat__content-btn-wrapper">
                    <BtnCtrV2 :titleBtn="'Подробнее о направлении'" />
                </div>
            </div>
        </Vue3SlideUpDown>
    </div>
</template>

<script setup>

import { Vue3SlideUpDown } from 'vue3-slide-up-down';
import { ref } from 'vue';

import BtnCtrV2 from "@/components/btn-ctr-v2.vue";

defineProps({
    title: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        default: () => [],
    },
});

const isOpen = ref(false);

const toggle = () => {


    isOpen.value = !isOpen.value;
};

</script>