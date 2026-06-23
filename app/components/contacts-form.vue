<template>
    <div class="contacts-hero-sec__form-fields">
        <div class="contacts-hero-sec__form-inp">
            <input type="text" placeholder="Ваше имя">
        </div>

        <div class="contacts-hero-sec__form-inp">
            <input type="tel" placeholder="Номер телефона">
        </div>

        <div class="contacts-hero-sec__form-inp">
            <textarea placeholder="Кратко опишите вопрос, если это удобно"></textarea>
        </div>

        <label class="contacts-hero-sec__form-checkbox">
            <input type="checkbox">
            <span class="contacts-hero-sec__form-checkbox-text">
                Я даю согласие на обработку персональных данных<br>
                в соответствии с <a href="">Политикой конфиденциальности</a>
            </span>
        </label>

        <BtnCtrV1 :titleBtn="submitButtonText" />
    </div>
</template>

<script setup>
import BtnCtrV1 from '@/components/btn-ctr-v1.vue';

defineProps({
    submitButtonText: {
        type: String,
        default: 'Заказать обратный звонок',
    },
});
</script>
