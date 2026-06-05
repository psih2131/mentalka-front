<template>
    <section class="inform-hero-sec">
        <div class="container">
            <div class="inform-hero-sec__data">
                <h1 class="inform-hero-sec__title">Информация о медицинской организации</h1>
                <p class="inform-hero-sec__subtitle">Правовые документы, порядок оказания медицинских услуг и обязательные сведения о деятельности клиники</p>
                <div class="inform-hero-sec__btns-row">
                    <BtnCtrV1 titleBtn="Записаться на приём" />
                    <BtnCtrV1 titleBtn="Задать вопрос" />
                </div>
            </div>

            <div class="inform-hero-sec__img-wrapper">
                <img src="../assets/images/inform.jpg" alt="inform-hero-sec-img" class="inform-hero-sec__img">
            </div>
        </div>
    </section>

    <section class="inform-docs-sec">
        <div class="container">
            <h2 class="inform-docs-sec__title">Нормативные документы и правовая база, <b>федеральные законы, приказы Минздрава 
                и постановления, регулирующие деятельность медицинской организации</b></h2>

            <div class="inform-docs-sec__content">
                <div
                    v-for="cluster in docsClusters"
                    :key="cluster.title"
                    class="inform-docs-sec__cluster"
                >
                    <h3 class="inform-docs-sec__cluster-title">{{ cluster.title }}</h3>

                    <DocComponent
                        v-for="doc in cluster.docs"
                        :key="doc.title"
                        :title="doc.title"
                        :open-url="doc.openUrl"
                        :download-url="doc.downloadUrl"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import BtnCtrV1 from '@/components/btn-ctr-v1.vue';
import DocComponent from '@/components/doc-component.vue';

const docsClusters = [
    {
        title: 'Федеральные законы',
        docs: [
            { title: 'Закон «О защите прав потребителей»', openUrl: '', downloadUrl: '' },
            { title: 'Федеральный закон об основах охраны здоровья граждан в Российской Федерации', openUrl: '', downloadUrl: '' },
            { title: 'Федеральный закон по ОМС в РФ', openUrl: '', downloadUrl: '' },
        ],
    },
    {
        title: 'Постановления Правительства',
        docs: [
            { title: 'Постановление об утверждении правил предоставления медицинскими организациями платных медицинских услуг', openUrl: '', downloadUrl: '' },
            { title: 'Постановление Правительства Москвы о Территориальной программе государственных гарантий бесплатного оказания гражданам медицинской помощи', openUrl: '', downloadUrl: '' },
        ],
    },
    {
        title: 'Приказы Минздрава',
        docs: [
            { title: 'Приказ Минздрава России от 06.12.2021 № 1122н «Об утверждении национального календаря профилактических прививок, календаря профилактических прививок по эпидемическим показаниям и порядка проведения профилактических прививок»', openUrl: '', downloadUrl: '' },
            { title: 'Приказ Минздравсоцразвития России от 26.04.2012 № 406н «Об утверждении Порядка выбора гражданином медицинской организации при оказании ему медицинской помощи в рамках программы государственных гарантий бесплатного оказания гражданам медицинской помощи»', openUrl: '', downloadUrl: '' },
        ],
    },
    {
        title: 'Информация для граждан',
        docs: [
            { title: 'Права и обязанности гражданина в сфере охраны здоровья', openUrl: '', downloadUrl: '' },
            { title: 'Правила записи на приём', openUrl: '', downloadUrl: '' },
            { title: 'Памятка для граждан о гарантиях бесплатного оказания медицинской помощи', openUrl: '', downloadUrl: '' },
        ],
    },
    {
        title: 'Лицензии',
        docs: [
            { title: 'Выписка из реестра лицензий', openUrl: '', downloadUrl: '' },
        ],
    },
    {
        title: 'Клинические рекомендации',
        docs: [
            { title: 'Рубрикатор клинических рекомендаций', openUrl: '', downloadUrl: '' },
        ],
    },
];
</script>
