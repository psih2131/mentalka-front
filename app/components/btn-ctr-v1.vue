<template>
    <button  class="btn-ctr-v1">
        <span class="btn-ctr__text">{{ titleBtn }}</span>
        <span class="btn-ctr__ar">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.76758 0.498047L9.58691 0.498047L9.58691 8.31738M9.61936 0.530498L0.496806 9.65306" stroke="#206633" stroke-linecap="round" stroke-linejoin="round"/>
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

<style lang="scss" scoped>

</style>