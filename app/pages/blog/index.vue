<template>
  <section class="hero-sec blog-hero-sec">
    <div class="container-v2 hero-sec__bg-container">
      <img
        src="../../assets/images/hero-images/blog-img.png"
        alt="hero-sec-bg"
        class="hero-sec__bg-img"
      />
      <div class="container">
        <div class="hero-sec__content">
          <!-- <p class="hero-sec__subtitle">
                      Профессиональная помощь в сфере психиатрии и психотерапии
                    </p> -->
          <h1 class="hero-sec__title">
            Психиатрия и психотерапия: статьи специалистов
          </h1>
          <p class="hero-sec__text">
            Опытные врачи и клинические психологи, работающие по современным медицинским стандартам.
          </p>
          <div class="hero-sec__buttons">
            <BtnCtrV1 :titleBtn="'Записаться на прием'" />

            <BtnCtrV1 :titleBtn="'Задать вопрос'" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="blog-list-sec">
    <div class="container">
      <h2 class="blog-list-sec__title">
        Материалы специалистов клиники,
        <b>практические разъяснения по диагностике и лечению психических расстройств</b>
      </h2>

      <div class="blog-list-sec__posts">
        <BlogPost v-for="post in posts" :key="post.id" :post="post" />
      </div>
      <div class="blog-list-sec__load-more-row">
        <div class="blog-list-sec__load-more-btn">
          <span class="blog-list-sec__load-more-btn-text">Показать еще</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 9L12 15L6 9" stroke="#317844" stroke-width="2"/>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import BlogPost from '@/components/blog-post.vue';

import postImg1 from '@/assets/images/posts/post-1.jpg';
import postImg2 from '@/assets/images/posts/post-2.jpg';
import postImg3 from '@/assets/images/posts/post-3.jpg';

const posts = [
  {
    id: 1,
    title: 'Как распознать депрессию и как из нее выйти (10 признаков)',
    text: 'Во всём мире депрессия является распространённым заболеванием и расстройством, которое часто диагностируется у немалого числа пациентов и влияет на эмоциональное состояние человека, ухудшая качество его быта.',
    img: postImg1,
    date: '20.05.2026',

  },
  {
    id: 2,
    title: 'Как распознать депрессию и как из нее выйти (10 признаков)',
    text: 'Во всём мире депрессия является распространённым заболеванием и расстройством, которое часто диагностируется у немалого числа пациентов и влияет на эмоциональное состояние человека, ухудшая качество его быта.',
    img: postImg2,
    date: '20.05.2026',

  },
  {
    id: 3,
    title: 'Как распознать депрессию и как из нее выйти (10 признаков)',
    text: 'Во всём мире депрессия является распространённым заболеванием и расстройством, которое часто диагностируется у немалого числа пациентов и влияет на эмоциональное состояние человека, ухудшая качество его быта.',
    img: postImg3,
    date: '20.05.2026',

  },
  {
    id: 4,
    title: 'Как распознать депрессию и как из нее выйти (10 признаков)',
    text: 'Во всём мире депрессия является распространённым заболеванием и расстройством, которое часто диагностируется у немалого числа пациентов и влияет на эмоциональное состояние человека, ухудшая качество его быта.',
    img: postImg2,
    date: '20.05.2026',

  },
  {
    id: 5,
    title: 'Как распознать депрессию и как из нее выйти (10 признаков)',
    text: 'Во всём мире депрессия является распространённым заболеванием и расстройством, которое часто диагностируется у немалого числа пациентов и влияет на эмоциональное состояние человека, ухудшая качество его быта.',
    img: postImg3,
    date: '20.05.2026',

  },
  {
    id: 6,
    title: 'Как распознать депрессию и как из нее выйти (10 признаков)',
    text: 'Во всём мире депрессия является распространённым заболеванием и расстройством, которое часто диагностируется у немалого числа пациентов и влияет на эмоциональное состояние человека, ухудшая качество его быта.',
    img: postImg1,
    date: '20.05.2026',

  },
];
</script>