<template>
    <Teleport to="body">
        <div v-if="review" class="review-popup" @click.self="emit('close')">
            <div class="review-popup__window">
                <button type="button" class="review-popup__close" aria-label="Закрыть" @click="emit('close')">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L13 13M13 1L1 13" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </button>

                <div class="review-popup__header">
                    <div class="review-popup__author">
                        <p class="review-popup__name">{{ review.name }}</p>
                        <p class="review-popup__date">{{ review.date }}</p>
                    </div>
                    <img :src="review.logo" alt="" class="review-popup__logo">
                </div>

                <div class="review-popup__stars">
                    <svg
                        v-for="star in 5"
                        :key="star"
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M13 0.632812L16.6258 9.31641L26 10.0781L18.8652 16.2074L21.0336 25.3633L13 20.468L4.96641 25.3633L7.13477 16.2074L0 10.0781L9.37422 9.31641L13 0.632812Z" fill="#FFDB43"/>
                    </svg>
                </div>

                <p class="review-popup__text">{{ review.text }}</p>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import { watch, onUnmounted } from 'vue';

const props = defineProps({
    review: {
        type: Object,
        default: null,
    },
});

const emit = defineEmits(['close']);

function setBodyScrollLocked(locked) {
    if (!import.meta.client) return;
    document.body.style.overflow = locked ? 'hidden' : '';
}

watch(
    () => props.review,
    (review) => {
        setBodyScrollLocked(!!review);
    },
);

onUnmounted(() => {
    setBodyScrollLocked(false);
});
</script>

<style lang="scss" scoped>
.review-popup {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: rgba(0, 0, 0, 0.45);
}

.review-popup__window {
    position: relative;
    width: 100%;
    max-width: 640px;
    max-height: calc(100vh - 40px);
    overflow-y: auto;
    background: #F6F6F6;
    border-radius: 25px;
    padding: 30px;
}

.review-popup__close {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
}

.review-popup__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 15px;
    padding-right: 40px;
    margin-bottom: 12px;
}

.review-popup__name {
    font-weight: 600;
    font-size: 18px;
    line-height: 110%;
    letter-spacing: -0.01em;
    color: #000;
    margin-bottom: 4px;
}

.review-popup__date {
    font-weight: 400;
    font-size: 14px;
    line-height: 110%;
    letter-spacing: -0.01em;
    color: rgba(0, 0, 0, 0.45);
}

.review-popup__logo {
    height: 18px;
    width: auto;
    display: block;
    flex-shrink: 0;
}

.review-popup__stars {
    display: flex;
    align-items: center;
    gap: 2px;
    margin-bottom: 14px;

    svg {
        width: 26px;
        height: auto;
        display: block;
    }
}

.review-popup__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: -0.01em;
    color: #000;
}
</style>
