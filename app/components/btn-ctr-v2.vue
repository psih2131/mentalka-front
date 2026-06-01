<template>
    <button class="btn-ctr-v2">
        <span class="btn-ctr-v2__text">{{ titleBtn }}</span> 
        <span class="btn-ctr-v2__ar">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_329_9556)">
            <path d="M4.07843 3.28192H8.32107V7.52457M8.33867 3.29953L3.38893 8.24928" stroke="#206633" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_329_9556">
            <rect width="8.68554" height="8.07925" fill="white" transform="translate(0 6.1416) rotate(-45)"/>
            </clipPath>
            </defs>
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
