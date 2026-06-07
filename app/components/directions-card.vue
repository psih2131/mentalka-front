<template>
    <div class="directions-card">
        <div class="directions-card__header">
            <p class="directions-card__title">{{ title }}</p>
            <a :href="link" class="directions-card__link">
                <span class="directions-card__link-ar">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g :clip-path="`url(#${clipId})`">
                            <path d="M7.92519 6.37168L16.1685 6.37168L16.1685 14.6149M16.2027 6.40589L6.58553 16.023" stroke="#206633" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath :id="clipId">
                                <rect width="16.8756" height="15.6976" fill="white" transform="translate(0 11.9336) rotate(-45)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </span>
            </a>
        </div>
        <div class="directions-card__content">
            {{ text }}
        </div>
    </div>
</template>

<script setup>
const clipId = useId();

defineProps({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        default: '',
    },
});
</script>
