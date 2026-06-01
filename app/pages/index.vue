<template>
  <section class="hero-sec home-hero-sec">
        <div class="container-v2 hero-sec__bg-container">

          <img src="../assets/images/hero-images/home-img.png" alt="hero-sec-bg" class="hero-sec__bg-img">
            <div class="container">
                <div class="hero-sec__content">
                    <!-- <p class="hero-sec__subtitle">
                      Профессиональная помощь в сфере психиатрии и психотерапии
                    </p> -->
                    <h1 class="hero-sec__title">
                      Профессиональная помощь при тревожных и депрессивных расстройствах
                    </h1>
                    <p class="hero-sec__text">
                      Помогаем вернуть спокойствие, устойчивость и ясность. Психиатр, психотерапевт, диагностика и поддержка для взрослых и детей. Без постановки на учёт. 
                    </p>
                    <div class="hero-sec__buttons">
                        <BtnCtrV1 :titleBtn="'Записаться на прием'" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import { ref, onMounted } from "vue";

import BtnCtrV1 from "@/components/btn-ctr-v1.vue";

</script>
