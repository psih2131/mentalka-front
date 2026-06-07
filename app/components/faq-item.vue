<template>
    <div class="faq-item" :class="{ 'faq-item--active': isOpen }">
        <div class="faq-item__header" @click="toggle">
            <p class="faq-item__title">{{ question }}</p>
            <div class="faq-item__btn">
                <div class="faq-item__btn-line"></div>
                <div class="faq-item__btn-line"></div>
            </div>
        </div>

        <Vue3SlideUpDown v-if="answer" :model-value="isOpen">
            <div class="faq-item__body">
                <p class="faq-item__text">{{ answer }}</p>
            </div>
        </Vue3SlideUpDown>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Vue3SlideUpDown } from 'vue3-slide-up-down';

const props = defineProps({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        default: '',
    },
});

const isOpen = ref(false);

const toggle = () => {
    if (!props.answer) {
        return;
    }

    isOpen.value = !isOpen.value;
};
</script>
