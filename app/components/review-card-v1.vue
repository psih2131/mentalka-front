<template>
    <div class="review-card-v1">
        <div class="review-card-v1__header">
            <div class="review-card-v1__img-wrapper">
                <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4.4 9.833L1.363 10.946C0.845 11.136 0.5 11.638 0.5 12.201V14.25C0.5 14.585 0.523 14.94 0.758 15.174C1.357 15.767 3.081 16.5 7 16.5C10.919 16.5 12.643 15.767 13.242 15.174C13.477 14.941 13.5 14.585 13.5 14.25V12.2C13.5 11.637 13.155 11.134 12.637 10.945L9.6 9.833M7 8.5C5.5 8.5 4.22 7.387 3.973 5.87L3.741 4.446C3.406 2.38 4.96 0.5 7 0.5C9.04 0.5 10.595 2.38 10.259 4.446L10.027 5.87C9.781 7.387 8.5 8.5 7 8.5Z"
                        stroke="#959494"
                        stroke-linecap="round"
                    />
                </svg>
            </div>
            <div class="review-card-v1__data">
                <p class="review-card-v1__name">{{ name }}</p>
                <p class="review-card-v1__date">{{ date }}</p>
            </div>
        </div>

        <div class="review-card-v1__body">
            <p
                class="review-card-v1__body-text"
                :class="{ 'review-card-v1__body-text--collapsed': isCollapsible && !isExpanded }"
            >
                {{ text }}
            </p>
        </div>

        <button
            v-if="isCollapsible"
            type="button"
            class="review-card-v1__read-more"
            :class="{ 'review-card-v1__read-more--expanded': isExpanded }"
            @click="isExpanded = !isExpanded"
        >
            <span>{{ isExpanded ? 'Свернуть отзыв' : 'Читать отзыв полностью' }}</span>
            <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L4 4L7 1.5" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" />
            </svg>
        </button>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const TEXT_LIMIT = 300;

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

const isExpanded = ref(false);

const isCollapsible = computed(() => props.text.length > TEXT_LIMIT);
</script>
