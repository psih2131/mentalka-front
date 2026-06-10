<template>
    <section class="hero-sec service-single-hero-sec">
        <div class="container-v2 hero-sec__bg-container">

          <img src="../../assets/images/hero-images/service-single-img.png" alt="hero-sec-bg" class="hero-sec__bg-img">
            <div class="container">
                <div class="hero-sec__content">
                    <!-- <p class="hero-sec__subtitle">
                      Профессиональная помощь в сфере психиатрии и психотерапии
                    </p> -->
                    <h1 class="hero-sec__title">
                        Приём врача-психиатра в Москве
                    </h1>
                    <p class="hero-sec__text">
                        Помогаем при тревоге, депрессии, биполярном расстройстве и других состояниях с соблюдением полной конфиденциальности.
                    </p>
                    <div class="hero-sec__buttons">
                        <BtnCtrV1 :titleBtn="'Записаться на приём'" />
                        <BtnCtrV1 :titleBtn="'Задать вопрос'" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="service-single-when-sec">
        <div class="container">
            <div class="service-single-when-sec__description">
                <h2 class="service-single-when-sec__title">Когда необходим приём психиатра,
                    <b>обратиться к врачу-психиатру рекомендуется, если вы замечаете:</b></h2>

                <div class="service-single-when-sec__down">
                    <p class="service-single-when-sec__text">При появлении одного или нескольких симптомов важно 
                        не откладывать консультацию специалиста. Ранняя диагностика и лечение психических расстройств позволяют значительно снизить риск осложнений и ускорить восстановление.</p>
                    <img src="../../assets/images/serv-net-img.jpg" alt="" class="service-single-when-sec__img">
                </div>
            </div>
            <div class="service-single-when-sec__network network">
                <div class="network__circle"></div>
                <div class="network__line network__line-1"></div>
                <div class="network__line network__line-2"></div>
                <div class="network__line network__line-3"></div>
                <div class="network__line network__line-4"></div>
                <div class="network__line network__line-5"></div>
                <div class="network__line network__line-6"></div>
                <div class="network__line network__line-7"></div>
                <div class="network__line network__line-8"></div>
                <div class="network__line network__line-9"></div>
                <div class="network__line network__line-10"></div>

                <div class="network__wrapper">
                    <div class="network__row">
                        <div class="network__element">сниженное настроение, апатию, потерю интереса к привычной жизни</div>
                    </div>
                    <div class="network__row">
                        <div class="network__element">постоянное беспричинное чувство тревоги, паники или страха</div>
                    </div>
                    <div class="network__row">
                        <div class="network__element">резкие перепады настроения, повышенную раздражительность или агрессию</div>
                    </div>
                    <div class="network__row">
                        <div class="network__element">ухудшение памяти, снижение концентрации и внимательности</div>
                    </div>
                    <div class="network__row">
                        <div class="network__element">значительные изменения аппетита</div>
                    </div>
                    <div class="network__row">
                        <div class="network__element">выраженные нарушения сна </div>
                    </div>
                    <div class="network__row">
                        <div class="network__element">ощущение нереальности происходящего, навязчивые или тревожные мысли</div>
                    </div>

                    <div class="network__row">
                        <div class="network__element">суицидальные мысли или мысли о причинении себе вреда.</div>
                        <div class="network__element">слуховые или зрительные галлюцинации, бредовые идеи</div>
                    </div>

                    <div class="network__row">
                        <div class="network__element">утрату самоконтроля, вспышки немотивированной агрессии</div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>


    <section class="service-single-doctors-sec">
        <div class="container">
            <h2 class="service-single-doctors-sec__title">Специалисты по психиатрии,<span><br></span>
                <b>профессиональная помощь при тревожных и аффективных расстройствах</b>
            </h2>
            <div class="service-single-doctors-sec__content">
                <SpecialistCard 
                v-for="specialist in specialists" :key="specialist.id" 
                :specialistData="specialist" />
            </div>
        </div>
    </section>

    <section class="process-sec">
        <div class="container">
            <h2 class="process-sec__title">Как проходит приём у психиатра,<span><br></span> 
                <b>спокойная консультация с понятным планом лечения</b></h2>

                <div class="process-sec__content">
                    <div class="process-sec__bg-img">
                        <img src="../../assets/images/process-bg.png" alt="process-bg" class="process-sec__bg-img-desktop">
                        <img src="../../assets/images/process-bg-mob.png" alt="process-bg" class="process-sec__bg-img-mobile">
                    </div>
                    <div class="process-sec__cards-num">
                        <div
                            v-for="card in displayedProcessCards"
                            :key="card.id"
                            class="process-card-num"
                            :class="{ 'process-card-num--empty': card.isEmpty }"
                        >
                            <template v-if="!card.isEmpty">
                                <p class="process-card-num__number">{{ card.number }}</p>
                                <div class="process-card-num__data">
                                    <p class="process-card-num__title">{{ card.title }}</p>
                                    <p class="process-card-num__subtitle">{{ card.subtitle }}</p>
                                </div>
                            </template>
                        </div>
                    </div>

                    <div class="process-sec__cards-info">
                        <div
                            v-for="card in processInfoCards"
                            :key="card.id"
                            class="process-info-card"
                            :class="{ 'process-info-card--accent': card.isAccent }"
                        >
                            <p class="process-info-card__title">{{ card.title }}</p>
                            <p class="process-info-card__text" v-html="card.text"></p>
                        </div>
                    </div>
                </div>
        </div>
    </section>

    <section class="why-we-sec">
        <div class="container">
            <h2 class="why-we-sec__title">Почему пациенты выбирают частную психиатрическую помощь,<span><br></span>
                <b>комфорт, конфиденциальность и индивидуальный подход</b></h2>
            <div class="why-we-sec__content">
                <div
                    v-for="card in whyWeCards"
                    :key="card.id"
                    class="why-we-sec__card"
                >
                    <h3 class="why-we-sec__card-title">{{ card.title }}</h3>

                    <p class="why-we-sec__card-text">
                        {{ card.text }}
                    </p>
                </div>
            </div>
        </div>
    </section>




    <bannerV1 :bannerData="bannerData" />
</template>

<script setup>
import BtnCtrV1 from '@/components/btn-ctr-v1.vue';
import bannerV1 from '~/components/banner-v1.vue';
import SpecialistCard from "@/components/specialist-card.vue";

import { ref, onMounted } from 'vue';

const specialists = ref([]);

const processCards = [
    {
        id: 1,
        number: '01',
        title: 'Беседа и сбор анамнеза',
        subtitle: 'Консультация проходит в спокойной и конфиденциальной обстановке. При необходимости врач дополнительно общается с родственниками или законными представителями.',
    },
    {
        id: 2,
        number: '02',
        title: 'Медицинский осмотр',
        subtitle: 'Врач оценивает общее состояние здоровья, проверяет давление, неврологические реакции и наличие хронических заболеваний, чтобы исключить физические причины симптомов.',
    },
    {
        id: 3,
        number: '03',
        title: 'Психологическое тестирование',
        subtitle: 'Проводятся краткие тесты и опросники для оценки тревоги, депрессии и когнитивных функций, что позволяет точнее определить состояние пациента.',
    },
    {
        id: 4,
        number: '04',
        title: 'Дополнительные исследования',
        subtitle: 'При необходимости назначаются анализы и обследования (ЭЭГ, МРТ и др.), чтобы выявить причины состояния и уточнить диагноз.',
    },
    {
        id: 5,
        number: '05',
        title: 'Диагноз и план лечения',
        subtitle: 'Врач объясняет результаты, при необходимости ставит диагноз и предлагает индивидуальный план лечения, включая терапию, медикаменты или комплексный подход с рекомендациями.',
    },
];

function createEmptyProcessCard(id) {
    return {
        id,
        number: '',
        title: '',
        subtitle: '',
        isEmpty: true,
    };
}

function prepareProcessCards(cards) {
    const count = cards.length;

    if (count === 8) {
        return [...cards];
    }

    if (count === 7) {
        const result = [...cards];
        result.splice(2, 0, createEmptyProcessCard('empty-1'));
        return result;
    }

    if (count === 6) {
        const result = [...cards];
        result.splice(2, 0, createEmptyProcessCard('empty-1'));
        result.splice(4, 0, createEmptyProcessCard('empty-2'));
        return result;
    }

    if (count === 5) {
        const result = [...cards];
        result.splice(2, 0, createEmptyProcessCard('empty-1'));
        result.splice(4, 0, createEmptyProcessCard('empty-2'));
        return result;
    }

    return [...cards];
}

const displayedProcessCards = prepareProcessCards(processCards);

const processInfoCards = [
    {
        id: 1,
        title: 'Ваши данные полностью защищены',
        text: 'Всё, что вы рассказываете врачу, <b>остаётся врачебной тайной</b> и не передаётся третьим лицам без вашего согласия. <b>Информация не поступает</b> в государственные учреждения, и вас не ставят на учёт. <b>Лечение проводится добровольно</b>: госпитализация возможна только в случаях, предусмотренных законом.',
    },
    {
        id: 2,
        title: 'Длительность и формат приёма',
        text: 'Первичный приём длится <b>от 45 минут до 1,5 часов</b>, что позволяет подробно разобраться <b>в ситуации</b>. Повторные консультации проходят быстрее и направлены на <b>оценку состояния</b> и корректировку лечения.',
    },
    {
        id: 3,
        title: 'Динамика лечения',
        text: 'На <b>начальном этапе</b> встречи могут быть регулярными, затем интервалы увеличиваются по мере улучшения состояния. Врач <b>отслеживает динамику</b> и при необходимости корректирует лечение. Важно <b>сотрудничество пациента и врача</b>: открытый диалог и соблюдение рекомендаций повышают эффективность терапии.',
    },
    {
        id: 4,
        title: 'Результат консультации',
        text: 'По итогам приёма вы получите <b>чёткое понимание своей ситуации</b> и <b>индивидуальный план её решения</b>. Многие пациенты отмечают <b>облегчение уже после первой консультации</b> — это важный шаг к восстановлению.',
        isAccent: true,
    },
];

const whyWeCards = [
    {
        id: 1,
        title: 'Опытные врачи и современное лечение',
        text: 'Прием ведут высококвалифицированные психиатры с большим опытом практики. Врачи регулярно повышают квалификацию, владеют современными методами диагностики и терапии. Лечение подбирается индивидуально и опирается на принципы доказательной медицины — применяются только эффективные и безопасные методы.',
    },
    {
        id: 2,
        title: 'Гарантия конфиденциальности',
        text: 'Обращаясь к частному психиатру, вы можете быть уверены: данные о вашем заболевании и лечении не попадут на учет в государственные учреждения. Мы ценим ваше доверие — никакая информация без вашего разрешения не будет разглашена третьим лицам. При желании пациент может остаться анонимным (например, обратиться под другим именем)',
    },
    {
        id: 3,
        title: 'Комфорт и удобство для пациента',
        text: 'В частной клинике создаются максимально комфортные условия: доброжелательный персонал, уютные кабинеты, отсутствие очередей и суеты. Возможна гибкая запись на прием в удобное для вас время. Также доступны дополнительные услуги — например, консультация психиатра онлайн или выезд врача на дом, если состояние не позволяет приехать в клинику.',
    },
    {
        id: 4,
        title: 'Комплексный подход',
        text: 'Помимо медикаментозной терапии, наши психиатры уделяют внимание психологической поддержке пациента. При необходимости в процесс лечения подключаются клинический психолог или психотерапевт, чтобы помочь преодолеть стрессы и справиться с переживаниями. Такой комплексный подход (сочетание лекарственного лечения и психотерапии) повышает эффективность терапии и помогает пациенту быстрее вернуть душевное равновесие',
    },
];

const bannerData = ref({
        title: "Не уверены, какая услуга вам подойдёт?",
        text: "Мы подскажем, к какому специалисту лучше обратиться и уточним стоимость приёма.",
        buttons: [
            {
                title: "Заполнить заявку",
                link: "/consultation"
            }
        ]
    });


    

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


    ];
});
</script>