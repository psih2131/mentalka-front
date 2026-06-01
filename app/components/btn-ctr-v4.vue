<template>
    <button class="btn-ctr-v4">
        <span class="btn-ctr-v4__text">{{ titleBtn }}</span>
        <span class="btn-ctr-v4__ar">
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.1878 0.499698H5.43044V4.74234M5.44805 0.517305L0.498303 5.46705" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        </span>
    </button>
</template>
<script setup>
const props = defineProps({
    titleBtn: {
        type: String,
        required: true
    }
})
</script>
