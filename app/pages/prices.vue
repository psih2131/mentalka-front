<template>
    <section class="prices-sec">
        <div class="container">
            <h1 class="prices-sec__title">
                Цены на приём специалистов,
                <b>актуальная стоимость консультаций и психотерапии</b>
            </h1>
            <div class="prices-sec__content">
                <nav class="prices-sec__nav prices-sec__nav--desk">
                    <ul class="prices-sec__nav-list">
                        <li
                            v-for="(label, index) in navTabs"
                            :key="index"
                            class="prices-sec__nav-item"
                            :class="{ active: currentTab === index }"
                            @click="selectTab(index)"
                        >
                            {{ label }}
                        </li>
                    </ul>
                </nav>
                <div class="prices-sec__nav-mob-wrapper">
                    <div
                    class="prices-sec__nav-mob"
                    :class="{ 'prices-sec__nav-mob--open': isNavOpen }"
                >
                    <button
                        type="button"
                        class="prices-sec__nav-mob-trigger"
                        :aria-expanded="isNavOpen"
                        @click="isNavOpen = !isNavOpen"
                    >
                        <span class="prices-sec__nav-mob-label">{{ navTabs[currentTab] }}</span>
                        <span class="prices-sec__nav-mob-icon" aria-hidden="true">
                            <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.3516 0.355469L5.35156 5.35547L0.351563 0.355469" stroke="black" />
                            </svg>
                        </span>
                    </button>
                    <ul v-show="isNavOpen" class="prices-sec__nav-mob-list">
                        <li
                            v-for="(label, index) in navTabs"
                            :key="index"
                            class="prices-sec__nav-mob-item"
                            :class="{ active: currentTab === index }"
                            @click="selectTab(index)"
                        >
                            {{ label }}
                        </li>
                    </ul>
                </div>
                </div>
                

                <div class="prices-sec__list">
                    <PriceCard v-for="card in priceCards" :key="card.id" :title="card.title" :price="card.price" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import PriceCard from '@/components/price-card.vue';

import { ref } from 'vue';

const navTabs = [
    'Все услуги',
    'Психиатрия',
    'Психотерапия',
    'Неврология',
    'Эндокринология'
];

const currentTab = ref(0);
const isNavOpen = ref(false);

const selectTab = (index) => {
    currentTab.value = index;
    isNavOpen.value = false;
};

const priceCards = ref([
    {
        id: 1,
        title: 'Прием врача-психиатра',
        price: 'от 3 500 ₽ / час'
    },
    {
        id: 2,
        title: 'Прием детского психиатра',
        price: 'от 5 000 ₽ / час'
    },
    {
        id: 3,
        title: 'Прием врача-психотерапевта',
        price: 'от 6 000 ₽ / час'
    },
    {
        id: 4,
        title: 'Групповая психотерапия (тренинг навыков DBT)',
        price: 'от 3 500 ₽ / час'
    },
    {
        id: 5,
        title: 'Семейная психотерапия',
        price: 'от 9 000 ₽ / час'
    },
    {
        id: 6,
        title: 'Приём врача-психотерапевта детского',
        price: 'от 6 000 ₽ / час'
    },
    {
        id: 7,
        title: 'Экспериментально-патопсихологическое обследование',
        price: 'от 9 000 ₽ / час'
    },
    {
        id: 8,
        title: 'Индивидуальная психологическая сессия (первичная)',
        price: 'от 3 000 ₽ / час'
    },
    {
        id: 9,
        title: 'Приём врача-невролога',
        price: 'от 9 000 ₽ / час'
    },
    {
        id: 10,
        title: 'Консультация детского невролога',
        price: 'от 3 000 ₽ / час'
    },
    {
        id: 11,
        title: 'Приём врача-эндокринолога',
        price: 'от 3 500 ₽ / час'
    },
    {
        id: 12,
        title: 'Консультация детского эндокринолога',
        price: 'от 3 500 ₽ / час'
    }
]);

</script>