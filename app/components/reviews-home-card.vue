<template>
    <div class="reviews-home-sec__slide">
        <div class="reviews-home-sec__slide-header">
            <div class="reviews-home-sec__slide-author">
                <p class="reviews-home-sec__slide-name">{{ review.name }}</p>
                <p class="reviews-home-sec__slide-date">{{ review.date }}</p>
            </div>
            <img :src="review.logo" alt="" class="reviews-home-sec__slide-source">
        </div>
        <div class="reviews-home-sec__slide-stars">
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
        <p
            class="reviews-home-sec__slide-text"
            :class="{ 'reviews-home-sec__slide-text--collapsed': review.text.length > 220 }"
        >
            {{ review.text }}
        </p>
        <button
            v-if="review.text.length > 220"
            type="button"
            class="reviews-home-sec__slide-more"
            @click="$emit('open', review)"
        >
            Еще
        </button>
    </div>
</template>

<script setup>
defineProps({
    review: {
        type: Object,
        required: true,
    },
});

defineEmits(['open']);
</script>
