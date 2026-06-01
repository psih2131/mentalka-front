<template>
     <section class="hero-sec specialists-hero-sec">
        <div class="container-v2 hero-sec__bg-container">

          <img src="../../assets/images/hero-images/specialist-img.png" 
          alt="hero-sec-bg" 
          class="hero-sec__bg-img">
            <div class="container">
                <div class="hero-sec__content">
                    <p class="hero-sec__subtitle">
                      Профессиональная помощь в сфере психиатрии и психотерапии
                    </p>
                    <h1 class="hero-sec__title">
                        Команда клиники <span><br></span>Ментал'КА
                    </h1>
                    <p class="hero-sec__text">
                        Опытные врачи и клинические психологи, работающие по современным медицинским стандартам.
                    </p>
                    <div class="hero-sec__buttons">
                        <BtnCtrV1 :titleBtn="'Записаться на приём'" />

                        <BtnCtrV1 :titleBtn="'Задать вопрос'" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="specialists-list-sec">
        <div class="container">
            <h2 class="specialists-list-sec__title">
                Наши специалисты,<span><br></span>
                <b>врачи и клинические психологи с подтверждённой квалификацией и практическим опытом</b>
            </h2>
            <div class="specialists-list-sec__content">
                <SpecialistCard 
                v-for="specialist in specialists" :key="specialist.id" 
                :specialistData="specialist" />
            </div>
        </div>
    </section>
</template>

<script setup>  

import { ref, onMounted } from "vue";

import BtnCtrV1 from "@/components/btn-ctr-v1.vue";

import SpecialistCard from "@/components/specialist-card.vue";

import specImg1 from "@/assets/images/specialists/spec-1.jpg";
import specImg2 from "@/assets/images/specialists/spec-2.jpg";
import specImg3 from "@/assets/images/specialists/spec-3.jpg";
import specImg4 from "@/assets/images/specialists/spec-4.jpg";
import specImg5 from "@/assets/images/specialists/spec-5.jpg";
import specImg6 from "@/assets/images/specialists/spec-6.jpg";
import specImg7 from "@/assets/images/specialists/spec-7.jpg";
import specImg8 from "@/assets/images/specialists/spec-8.jpg";
import specImg9 from "@/assets/images/specialists/spec-9.jpg";
import specImg10 from "@/assets/images/specialists/spec-10.jpg";
import specImg11 from "@/assets/images/specialists/spec-11.jpg";
import specImg12 from "@/assets/images/specialists/spec-12.jpg";
import specImg13 from "@/assets/images/specialists/spec-13.jpg";
import specImg14 from "@/assets/images/specialists/spec-14.jpg";
import specImg15 from "@/assets/images/specialists/spec-15.jpg";


const specialists = ref([]);

onMounted(() => {
    specialists.value = [
        {
            id: 1,
            name: "Полле Михаил Игоревич",
            position: "Врач-психиатр детский",
            experience: "Стаж 12 лет",
            description:
                "Помогает ребенку справиться с тревогой, СДВГ или аутизмом, объясняя родителям пошаговый план домашних действий.",
            image: specImg1,
        },
        {
            id: 2,
            name: "Лапук Дарья Дмитриевна",
            position: "Врач-психиатр",
            experience: "Стаж 3 года",
            description:
                "Помогает взрослым вернуть душевное равновесие при тревожных и аффективных расстройствах, психозах и деменции.",
            image: specImg2,
        },
        {
            id: 3,
            name: "Соколова Александра Владимировна",
            position: "Врач-психиатр, врач-психиатр детский",
            experience: "Стаж 4 года",
            description:
                "Помогает детям, подросткам и взрослым с психическими расстройствами — от тревоги до аутизма.",
            image: specImg3,
        },
        {
            id: 4,
            name: "Азнаварян Карен Арменович",
            position: "Врач-эндокринолог детский",
            experience: "Стаж 6 лет",
            description:
                "Помогает детям и подросткам с гормональными нарушениями — от дефицита веса до раннего полового созревания.",
            image: specImg4,
        },
        {
            id: 5,
            name: "Свиридова Анастасия Борисовна",
            position: "Врач-эндокринолог",
            experience: "Стаж 3 года",
            description:
                "Помогает взрослым с эндокринными нарушениями — от диабета до заболеваний щитовидной железы и надпочечников.",
            image: specImg5,
        },
        {
            id: 6,
            name: "Андрианова Ольга Владиславовна",
            position: "Врач-психиатр, психотерапевт",
            experience: "Стаж 4 года",
            description:
                "Помогает преодолеть депрессию, тревогу и расстройства пищевого поведения, используя научные методы терапии.",
            image: specImg6,
        },
        {
            id: 7,
            name: "Медведев Сергей Александрович",
            position: "Врач-психиатр и психотерапевт",
            experience: "Стаж 11 лет",
            description:
                "Принимает подростков от 15 лет и взрослых. Работает в доказательном формате, комбинируя краткосрочные и глубинные методы психотерапии.",
            image: specImg7,
        },
        {
            id: 8,
            name: "Царева Ирина Станиславовна",
            position: "Психологический психолог, арт-терапевт, когнитивный психолог",
            experience: "Стаж 10 лет",
            description:
                "Помогает подросткам и взрослым с нарушениями когнитивных функций (память, внимание, мышление) и эмоциональных состояний.",
            image: specImg8,
        },
        {
            id: 9,
            name: "Гритчина Кристина Владимировна",
            position: "Психолог-консультант",
            experience: "Стаж 7 лет",
            description:
                "Помогает справиться с тревогой, депрессией и жизненными кризисами, бережно возвращая опору, устойчивость и интерес к жизни.",
            image: specImg9,
        },
        {
            id: 10,
            name: "Смелова Марта Витальевна",
            position: "Детский психолог",
            experience: "Стаж 14 лет",
            description:
                "Помогает детям и подросткам справляться с тревогой, страхами, агрессией и трудностями в общении, улучшать отношения в семье.",
            image: specImg10,
        },
        {
            id: 11,
            name: "Манышин Егор Дмитриевич",
            position: "Психолог-консультант",
            experience: "Стаж 7 лет",
            description:
                "Поддерживает подростков и взрослых в работе с тревожностью, самооценкой и поиском идентичности без осуждения.",
            image: specImg11,
        },
        {
            id: 12,
            name: "Яшин Даниил Николаевич",
            position: "Клинический психолог детский и подростковый психолог",
            experience: "Стаж 3 года",
            description:
                "Помогает справиться с тревогой, депрессией и жизненными кризисами, бережно возвращая опору, устойчивость и интерес к жизни.",
            image: specImg12,
        },
        {
            id: 13,
            name: "Попова Юлия Ильинична",
            position: "Психолог",
            experience: "Стаж 5 лет",
            description:
                "Занимается проблемами тревожности, сниженного настроения, хронической усталости и эмоционального выгорания.",
            image: specImg13,
        },
        {
            id: 14,
            name: "Ивашкина Виктория Андреевна",
            position: "Врач-психиатр",
            experience: "Стаж 2 года",
            description:
                "Помогает преодолеть депрессию, тревогу и расстройства личности, делая упор на доверие и доказательность.",
            image: specImg14,
        },
        {
            name: "Елена Сергеевна Шевченко",
            position: "Медицинский психолог",
            experience: "Стаж 10 лет",
            description:
                "Помогает подросткам и взрослым выйти из кризиса, найти опору и разобраться с эмоциями.",
            image: specImg15,
        },
    ];
});

</script>