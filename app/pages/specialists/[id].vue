<template>
    <section class="specialist-hero-sec">
        <div class="container">
            <div class="specialist-hero-sec__left-col">
                <div class="specialist-hero-sec__img">
                    <img src="../../assets/images/specialists/spec-2.jpg" alt="specialist-img">
                </div>
                <h1 class="specialist-hero-sec__doctor-name">
                    Лапук Дарья Дмитриевна
                </h1>
                <p class="specialist-hero-sec__doctor-description">
                    Оказывает психиатрическую помощь взрослым пациентам от 18 лет. Работает с тяжёлыми 
                    и хроническими психическими расстройствами, используя современные доказательные методы лечения.
                </p>
            </div>
            <div class="specialist-hero-sec__right-col">
                <div class="specialist-hero-sec__doctor-info-block doctor-info-block">
                    <div class="doctor-info-block__type">
                        Врач-психиатр
                    </div>
                    <div class="doctor-info-block__row-data">
                        <div class="doctor-info-block__element-data">
                            <p class="doctor-info-block__element-data-title">Формат приёма</p>
                            <ul class="doctor-info-block__element-data-list">
                                <li class="doctor-info-block__element-data-item">
                                    <p class="doctor-info-block__element-data-item-value">В клинике</p>
                                </li>
                            </ul>
                        </div>

                        <div class="doctor-info-block__element-data">
                            <p class="doctor-info-block__element-data-title">Пациенты</p>
                            <ul class="doctor-info-block__element-data-list">
                                <li class="doctor-info-block__element-data-item">
                                    <p class="doctor-info-block__element-data-item-value">Взрослые</p>
                                </li>
                            </ul>
                        </div>

                        <div class="doctor-info-block__element-data doctor-info-block__element-data--price  ">
                            <p class="doctor-info-block__element-data-title">Стоимость</p>
                            <ul class="doctor-info-block__element-data-list">
                                <li class="doctor-info-block__element-data-item">
                                    <p class="doctor-info-block__element-data-item-value">Первичный приём (60 мин.) - 4 500 руб.</p>
                                </li>
                                <li class="doctor-info-block__element-data-item">
                                    <p class="doctor-info-block__element-data-item-value">Повторный приём (30 мин.) - 3 000 руб.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="doctor-booking-form">
                        <p class="doctor-booking-form__title">Форма для записи</p>

                        <div class="doctor-booking-form__days">
                            <div class="doctor-booking-form__days-list">
                                <div class="doctor-booking-form__day doctor-booking-form__day--active">
                                    <span class="doctor-booking-form__day-date">6 окт</span>
                                    <span class="doctor-booking-form__day-label">Сегодня</span>
                                </div>
                                <div class="doctor-booking-form__day">
                                    <span class="doctor-booking-form__day-date">7 окт</span>
                                    <span class="doctor-booking-form__day-label">Завтра</span>
                                </div>
                                <div class="doctor-booking-form__day">
                                    <span class="doctor-booking-form__day-date">8 окт</span>
                                    <span class="doctor-booking-form__day-label">Среда</span>
                                </div>
                                <div class="doctor-booking-form__day">
                                    <span class="doctor-booking-form__day-date">9 окт</span>
                                    <span class="doctor-booking-form__day-label">Четверг</span>
                                </div>
                                <div class="doctor-booking-form__day">
                                    <span class="doctor-booking-form__day-date">10 окт</span>
                                    <span class="doctor-booking-form__day-label">Пятница</span>
                                </div>
                            </div>
                            <div class="doctor-booking-form__calendar">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10V11H3V10Z" stroke="white" stroke-width="1.2"/>
                                <rect x="3" y="6" width="18" height="15" rx="2" stroke="white" stroke-width="1.2"/>
                                <path d="M7 3L7 8" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
                                <path d="M17 3L17 8" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
                                </svg>
                            </div>
                        </div>

                        <div class="doctor-booking-form__times">
                            <div class="doctor-booking-form__time doctor-booking-form__time--active">
                                12:00
                            </div>
                            <div class="doctor-booking-form__time">13:00</div>
                            <div class="doctor-booking-form__time">14:00</div>
                            <div class="doctor-booking-form__time">15:00</div>
                            <div class="doctor-booking-form__time">16:00</div>
                        </div>

                        <div class="doctor-booking-form__footer">
                            
                            <BtnCtrV1 titleBtn="Записаться" />

                            <p class="doctor-booking-form__note">
                                Выдаем документы для налогового вычета только на
                                мед.услуги
                            </p>
                        </div>
                    </div>
                </div>

                <div class="doctor-about-block">
                    <nav class="doctor-about-block__nav">
                        <ul class="doctor-about-block__nav-list">
                            <li class="doctor-about-block__nav-item" :class="{ 'active': tabCurrent === 0 }" @click="tabCurrent = 0">
                                Подробнее о враче
                            </li>
                            <li class="doctor-about-block__nav-item" :class="{ 'active': tabCurrent === 1 }" @click="tabCurrent = 1">
                                Специализация
                            </li>
                            <li class="doctor-about-block__nav-item" :class="{ 'active': tabCurrent === 2 }" @click="tabCurrent = 2">
                                Услуги врача
                            </li>
                            <li class="doctor-about-block__nav-item" :class="{ 'active': tabCurrent === 3 }" @click="tabCurrent = 3">
                                Образование
                            </li>
                        </ul>
                    </nav>

                    <div class="doctor-about-block__tabs-wrapper">
                        <div class="doctor-about-block__tab" :class="{ 'active': tabCurrent === 0 }">
                            <h2 class="doctor-about-block__tab-title">О враче и подход к лечению</h2>
                            <div class="doctor-about-block__tab-text-wrapper">
                                <p>Дарья Дмитриевна Лапук — врач-психиатр с 3-летним опытом работы в психиатрической клинике. Оказывает комплексную психиатрическую помощь взрослым пациентам от 18 лет. Специализируется на расстройствах шизофренического спектра, тревожных и фобических нарушениях, расстройствах личности, аффективных расстройствах (биполярное расстройство, депрессия), а также деменции. В практике применяет современные доказательные подходы, сочетая фармакотерапию с психотерапевтической поддержкой.</p>
                                <p>Дарья Дмитриевна убеждена, что комплексный подход позволяет добиться наилучших результатов даже при тяжёлых психических заболеваниях. Она тщательно обследует каждого пациента, при необходимости назначает дополнительные исследования и динамически отслеживает изменения состояния. При лечении врач опирается на мультидисциплинарное взаимодействие: при случае привлекает психологов или других специалистов, вовлекает родственников в реабилитацию. Цель доктора — не только купировать болезненные симптомы, но и помочь человеку вернуть уверенность в себе, поддержку близких и способность вести активную жизнь.</p>
                            </div>
                        </div>

                        <div class="doctor-about-block__tab" :class="{ 'active': tabCurrent === 1 }">
                            <h2 class="doctor-about-block__tab-title">Специализация</h2>
                            <div class="doctor-about-block__tab-text-wrapper">
                                <p>Специализируется на лечении расстройств шизофренического спектра, аффективных 
                                    и тревожных расстройств. Работает по современным доказательным стандартам психиатрии.</p>
                            </div>

                            <div class="doctor-about-block__columb-wrapper">
                                <h3 class="doctor-about-block__columb-title">Болезни</h3>

                                <ul class="doctor-about-block__columb-list doctor-about-block__columb-list--two-coll">
                                    <li>Расстройства шизофренического спектра</li>
                                    <li>Биполярное расстройство</li>
                                    <li>Депрессия</li>
                                    <li>Тревожные и фобические расстройства</li>
                                    <li>Расстройства личности</li>
                                    <li>Деманеция</li>
                                </ul>
                            </div>

                            <div class="doctor-about-block__experience-wrapper">
                                <h3 class="doctor-about-block__experience-title">Общий стаж</h3>
                                <p class="doctor-about-block__experience-text">3 года</p>
                            </div>
                        </div>

                        <div class="doctor-about-block__tab" :class="{ 'active': tabCurrent === 2 }">
                            <h2 class="doctor-about-block__tab-title">Услуги врача</h2>
             

                            <div class="doctor-about-block__columb-wrapper">
                                <ul class="doctor-about-block__columb-list ">
                                    <li>Первичная консультация</li>
                                    <li>Повторный приём</li>
                                    <li>Подбор медикаментозной терапии</li>
                                    <li>ТПсихообразование</li>
                                    <li>Составление плана лечения</li>
                                </ul>
                            </div>
               
                        </div>


                        <div class="doctor-about-block__tab" :class="{ 'active': tabCurrent === 3 }">
                            <h2 class="doctor-about-block__tab-title">Образование и квалификация</h2>

                            <div class="doctor-about-block__columb-wrapper">
                                <ul class="doctor-about-block__columb-list ">
                                    <li>Диплом врача по специальности «Лечебное дело»</li>
                                    <li>Профессиональная специализация «Психиатрия»
                                    </li> 
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

    <BannerV1 :bannerData="bannerData" />

</template>


<script setup>
import BtnCtrV1 from "@/components/btn-ctr-v1.vue";
import BannerV1 from "@/components/banner-v1.vue";

const tabCurrent = ref(0);

const bannerData = ref({
    title: "Персональный подбор специалиста",
    text: "Мы учтём ваш запрос и состояние, чтобы предложить наиболее подходящего врача",
    buttons: [
        {
            title: "Получить консультацию",
            link: "/consultation"
        }
    ]
});
</script>