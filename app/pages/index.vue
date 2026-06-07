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

    <section class="symptoms-sec">
      <div class="container">
        <h2 class="symptoms-sec__title">Когда эмоциональное состояние начинает влиять на жизнь,
          <b>многие из наших пациентов приходят с похожими ощущениями</b> </h2>
        <div class="symptoms-sec__content">
          <div class="symptoms-sec__item">
            <img src="../assets/images/sympt-1.jpg" alt="" class="symptoms-sec__item-img">
            <p class="symptoms-sec__item-title">Нет сил и ничего не радует</p>
            <p class="symptoms-sec__item-text">С утра тяжело встать, пропал интерес к привычным вещам.</p>
          </div>

          <div class="symptoms-sec__item">
            <img src="../assets/images/sympt-2.jpg" alt="" class="symptoms-sec__item-img">
            <p class="symptoms-sec__item-title">Постоянная тревога или панические атаки</p>
            <p class="symptoms-sec__item-text">Сердце колотится, сложно дышать, возникает страх без причины.</p>
          </div>

          <div class="symptoms-sec__item">
            <img src="../assets/images/sympt-3.jpg" alt="" class="symptoms-sec__item-img">
            <p class="symptoms-sec__item-title">Навязчивые мысли</p>
            <p class="symptoms-sec__item-text">Мысли не отпускают, сложно переключиться и расслабиться.</p>
          </div>

          <div class="symptoms-sec__item">
            <img src="../assets/images/sympt-4.jpg" alt="" class="symptoms-sec__item-img">
            <p class="symptoms-sec__item-title">Чувство внутренней пустоты</p>
            <p class="symptoms-sec__item-text">Всё вроде бы нормально, но внутри — тяжесть или безразличие.</p>
          </div>

          <div class="symptoms-sec__item">
            <img src="../assets/images/sympt-5.jpg" alt="" class="symptoms-sec__item-img">
            <p class="symptoms-sec__item-title">Трудно пережить расставание или потерю</p>
            <p class="symptoms-sec__item-text">Боль не уменьшается, мешает жить и работать.</p>
          </div>

          <div class="symptoms-sec__item">
            <img src="../assets/images/sympt-6.jpg" alt="" class="symptoms-sec__item-img">
            <p class="symptoms-sec__item-title">Сложно справляться с ребёнком</p>
            <p class="symptoms-sec__item-text">Поведение ребёнка тревожит, вы не понимаете, что происходит.</p>
          </div>
        </div>

        <div class="symptoms-sec__btn-row">
          <button class="btn-ctr">
              <span class="btn-ctr__text"> Записаться </span>
              <span class="btn-ctr__ar">
                <svg
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.1878 0.499698H5.43044V4.74234M5.44805 0.517305L0.498303 5.46705"
                    stroke="#206633"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </button>
        </div>
      </div>
    </section>

    <section class="team-sec">
      <div class="container">
        <h2 class="team-sec__title">Команда клиники ментального здоровья, <span><br></span>
          <b>врачи, которым важно не только лечение, но и поддержка</b></h2>
          <p class="team-sec__text">
            Врачи, которые берут на себя лечение пациентов любого возраста. Каждый из них обучен современным методикам коррекции расстройств, а также владеет навыками коммуникации с людьми, сталкивающимися с сильными эмоциональными потрясениями.
          </p>
          <nav class="team-sec__tab-nav team-sec__tab-nav--desk">
            <ul class="team-sec__tab-list">
              <li
                v-for="tab in teamTabs"
                :key="tab.id"
                class="team-sec__tab-item"
                :class="{ 'active': currentTab === tab.id }"
                @click="selectTeamTab(tab.id)"
              >
                {{ tab.title }}
              </li>
            </ul>
          </nav>

          <div class="team-sec__tab-nav team-sec__tab-nav--mob">
            <button
              type="button"
              class="team-sec__tab-select-btn"
              :class="{ 'team-sec__tab-select-btn--open': isTabSelectOpen }"
              @click="isTabSelectOpen = !isTabSelectOpen"
            >
              <span class="team-sec__tab-select-text">{{ currentTabTitle }}</span>
              <span class="team-sec__tab-select-icon" aria-hidden="true">
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6 6L11 1" stroke="#206633" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </button>

            <ul v-show="isTabSelectOpen" class="team-sec__tab-select-list">
              <li
                v-for="tab in teamTabs"
                :key="tab.id"
                class="team-sec__tab-select-item"
                :class="{ 'active': currentTab === tab.id }"
                @click="selectTeamTab(tab.id)"
              >
                {{ tab.title }}
              </li>
            </ul>
          </div>

          <div class="team-sec__content">
            <div class="team-sec__tab" v-if="currentTab === 1">
              <SpecialistCard 
                v-for="specialist in specialistsTab1" :key="specialist.id" 
                :specialistData="specialist" />
            </div>

            <div class="team-sec__tab" v-if="currentTab === 2">
              <SpecialistCard 
                v-for="specialist in specialistsTab2" :key="specialist.id" 
                :specialistData="specialist" />
            </div>

            <div class="team-sec__tab" v-if="currentTab === 3">
              <SpecialistCard 
                v-for="specialist in specialistsTab3" :key="specialist.id" 
                :specialistData="specialist" />
            </div>

            <div class="team-sec__tab" v-if="currentTab === 4">
              <SpecialistCard 
                v-for="specialist in specialistsTab4" :key="specialist.id" 
                :specialistData="specialist" />
            </div>

            <div class="team-sec__tab" v-if="currentTab === 5">
              <SpecialistCard 
                v-for="specialist in specialistsTab5" :key="specialist.id" 
                :specialistData="specialist" />
            </div> 


          </div>

          <div class="team-sec__dop-info-row">
            <p class="team-sec__dop-info-text">
              В клинике работают 16 специалистов — врачи <span><br></span>
и психотерапевты с подтверждённой квалификацией и опытом.
            </p>

            <NuxtLink to="/specialists" class="team-sec__more-doc">
              <span class="team-sec__more-docimg-cards">
                <img src="../assets/images/specialists/spec-1.jpg" alt="" class="team-sec__more-doccards-img">
                <img src="../assets/images/specialists/spec-2.jpg" alt="" class="team-sec__more-doccards-img">
                <img src="../assets/images/specialists/spec-3.jpg" alt="" class="team-sec__more-doccards-img">
              </span>
              <span class="team-sec__more-doc-text">Смотреть всех специалистов</span>
            </NuxtLink>
          </div>
      </div>
    </section>

    <section class="home-banner-sec-1" >

      <img src="../assets/images/bg/home-bammer-sec-1-bg.png" alt="" class="home-banner-sec-1__bg-img">
      <div class="container">
        <h2 class="home-banner-sec-1__title">
          Не знаете, к кому обратиться?
        </h2>
        <p class="home-banner-sec-1__text">Ответьте на несколько вопросов — мы подскажем, какой специалист подойдёт именно вам.</p>

        <div class="home-banner-sec-1__buttons">
          <BtnCtrV4 :titleBtn="'Пройти тест'" />
        </div>
      </div>
    </section>

    <section class="home-about-sec">
      <div class="container">
        <img src="../assets/images/home-about.jpg" alt="" class="home-about-sec__img">
        <div class="home-about-sec__data">
          <h2 class="home-about-sec__title">МЕНТАЛКА - частная клиника ментального здоровья, 
<b>индивидуальный подход 
  и клиническая точность</b></h2>
  <img src="../assets/images/home-about.jpg" alt="" class="home-about-sec__img-mob">
          
      <div class="home-about-sec__data-mob-wrapper">
        <div class="home-about-sec__slider-wrapper">

            <ClientOnly>
              <swiper-container ref="swiperAbout" @swiperslidechange="onAboutSlideChange">
                <swiper-slide
                  v-for="(slide, idx) in slides"
                  :key="idx"
                >
                  <div class="home-about-sec__slide">
                    <p class="home-about-sec__slide-text">{{ slide.text }}</p>
                  </div>
                </swiper-slide>
              </swiper-container>
            </ClientOnly>

          </div>
          <div class="home-about-sec__down-row">
            <BtnCtrV1 :titleBtn="'Подробнее о клинике'" :link="'/about'" />
            <div class="home-about-sec__slider-control-row">
              <div class="home-about-sec__prev" @click="swiperAboutGallery.prev()">
                <svg width="21" height="69" viewBox="0 0 21 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.43836 36C3.73973 36 5.60959 35.2653 7.04794 33.9429C10.6438 30.5633 10.3562 24.3918 10.2123 24.098V12.049C10.2123 7.05306 15.1027 2.93878 21 2.93878V0C13.5205 0 7.47945 5.2898 7.47945 11.902V24.098C7.47945 24.2449 7.76712 29.2408 5.17808 31.7388C4.0274 32.9143 2.4452 33.2082 0.287668 33.0612L0 35.8531C0.431507 36 1.00685 36 1.43836 36Z" fill="#206633" fill-opacity="0.5"/>
                <path d="M21 69V66.0671C15.1027 66.0671 10.2123 61.961 10.2123 56.9751V44.8036C10.2123 44.657 10.5 38.4979 7.04794 35.125C5.32192 33.3653 2.87671 32.7787 0 33.072L0.287668 36.0049C2.30137 35.7116 3.88356 36.1516 5.17808 37.3247C7.76712 39.8177 7.47945 44.8036 7.47945 44.8036V56.9751C7.47945 63.7208 13.5205 69 21 69Z" fill="#206633" fill-opacity="0.5"/>
                </svg>

              </div>

              <div class="home-about-sec__counter-wrapper">
                <span class="home-about-sec__counter-current">{{ currentAboutSlide }}</span>
                <span class="home-about-sec__counter-total">/{{ slides.length }}</span>
              </div>
              <div class="home-about-sec__next" @click="swiperAboutGallery.next()">
                <svg width="21" height="69" viewBox="0 0 21 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5616 36C17.2603 36 15.3904 35.2653 13.9521 33.9429C10.3562 30.5633 10.6438 24.3918 10.7877 24.098V12.049C10.7877 7.05306 5.89726 2.93878 0 2.93878V0C7.47945 0 13.5206 5.2898 13.5206 11.902V24.098C13.5206 24.2449 13.2329 29.2408 15.8219 31.7388C16.9726 32.9143 18.5548 33.2082 20.7123 33.0612L21 35.8531C20.5685 36 19.9932 36 19.5616 36Z" fill="#206633" fill-opacity="0.5"/>
                <path d="M0 69V66.0671C5.89726 66.0671 10.7877 61.961 10.7877 56.9751V44.8036C10.7877 44.657 10.5 38.4979 13.9521 35.125C15.6781 33.3653 18.1233 32.7787 21 33.072L20.7123 36.0049C18.6986 35.7116 17.1164 36.1516 15.8219 37.3247C13.2329 39.8177 13.5206 44.8036 13.5206 44.8036V56.9751C13.5206 63.7208 7.47945 69 0 69Z" fill="#206633" fill-opacity="0.5"/>
                </svg>

              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>

    <section class="directions-sec">
      <div class="container">
        <h2 class="directions-sec__title">
          Направления работы клиники,<span><br></span> 
          <b>медицинская помощь в сфере психического здоровья</b>
        </h2>
        <div class="directions-sec__content">
          <DirectionsCard
            v-for="direction in directions"
            :key="direction.title"
            :title="direction.title"
            :text="direction.text"
            :link="direction.link"
          />
        </div>
      </div>
    </section>


    <section class="advantages-sec">
      <div class="container">
        <h2 class="advantages-sec__title">Преимущества нашей клиники,<span><br></span> 
          <b>ваше спокойствие — наша ответственность</b></h2>

        <div class="advantages-sec__content">
          <div
            v-for="advantage in advantages"
            :key="advantage.title"
            class="advantages-sec__item"
          >
            <p class="advantages-sec__item-title">{{ advantage.title }}</p>
            <p class="advantages-sec__item-text">{{ advantage.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="docs-slider-sec">
      <div class="container">
        <h2 class="docs-slider-sec__title">
          Лицензированная медицинская деятельность,<span><br></span>
  <b>работаем официально и соблюдаем требования законодательства РФ</b>
        </h2>
        <div class="docs-slider-sec__slider-wrapper">
          <ClientOnly>
            <swiper-container ref="swiperDocs" @swiperslidechange="onDocsSlideChange" @swiperinit="onDocsSwiperInit">
              <swiper-slide
                v-for="(doc, idx) in docSlides"
                :key="idx"
              >
                <div class="docs-slider-sec__slide">
                  <img :src="doc" alt="" class="docs-slider-sec__slide-img">
                </div>
              </swiper-slide>
            </swiper-container>
          </ClientOnly>
        </div>
        <div class="docs-slider-sec__controll-row">
          <div class="home-about-sec__slider-control-row">
            <div class="home-about-sec__prev" @click="swiperDocsGallery.prev()">
              <svg width="21" height="69" viewBox="0 0 21 69" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.43836 36C3.73973 36 5.60959 35.2653 7.04794 33.9429C10.6438 30.5633 10.3562 24.3918 10.2123 24.098V12.049C10.2123 7.05306 15.1027 2.93878 21 2.93878V0C13.5205 0 7.47945 5.2898 7.47945 11.902V24.098C7.47945 24.2449 7.76712 29.2408 5.17808 31.7388C4.0274 32.9143 2.4452 33.2082 0.287668 33.0612L0 35.8531C0.431507 36 1.00685 36 1.43836 36Z" fill="#206633" fill-opacity="0.5"/>
              <path d="M21 69V66.0671C15.1027 66.0671 10.2123 61.961 10.2123 56.9751V44.8036C10.2123 44.657 10.5 38.4979 7.04794 35.125C5.32192 33.3653 2.87671 32.7787 0 33.072L0.287668 36.0049C2.30137 35.7116 3.88356 36.1516 5.17808 37.3247C7.76712 39.8177 7.47945 44.8036 7.47945 44.8036V56.9751C7.47945 63.7208 13.5205 69 21 69Z" fill="#206633" fill-opacity="0.5"/>
              </svg>
            </div>

            <div class="home-about-sec__counter-wrapper">
              <span class="home-about-sec__counter-current">{{ currentDocsSlide }}</span>
              <span class="home-about-sec__counter-total">/{{ docsTotalPages }}</span>
            </div>
            <div class="home-about-sec__next" @click="swiperDocsGallery.next()">
              <svg width="21" height="69" viewBox="0 0 21 69" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5616 36C17.2603 36 15.3904 35.2653 13.9521 33.9429C10.3562 30.5633 10.6438 24.3918 10.7877 24.098V12.049C10.7877 7.05306 5.89726 2.93878 0 2.93878V0C7.47945 0 13.5206 5.2898 13.5206 11.902V24.098C13.5206 24.2449 13.2329 29.2408 15.8219 31.7388C16.9726 32.9143 18.5548 33.2082 20.7123 33.0612L21 35.8531C20.5685 36 19.9932 36 19.5616 36Z" fill="#206633" fill-opacity="0.5"/>
              <path d="M0 69V66.0671C5.89726 66.0671 10.7877 61.961 10.7877 56.9751V44.8036C10.7877 44.657 10.5 38.4979 13.9521 35.125C15.6781 33.3653 18.1233 32.7787 21 33.072L20.7123 36.0049C18.6986 35.7116 17.1164 36.1516 15.8219 37.3247C13.2329 39.8177 13.5206 44.8036 13.5206 44.8036V56.9751C13.5206 63.7208 7.47945 69 0 69Z" fill="#206633" fill-opacity="0.5"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>


    <BannerV1 
    :bannerData="bannerData"
    />

    <section class="reviews-home-sec">
      <div class="container">
        <h2 class="reviews-home-sec__title">
          Отзывы о клинике,<span><br></span>
          <b>реальные истории пациентов о лечении и поддержке</b>
        </h2>

        <div class="reviews-home-sec__rate-row">
          <div class="reviews-home-sec__rate-item">
            <img src="../assets/images/logos/sber.png" alt="rate" class="reviews-home-sec__rate-item-logo">
            <p class="reviews-home-sec__rate-item-count">4.1</p>
          </div>
          <div class="reviews-home-sec__rate-item">
            <img src="../assets/images/logos/prod.png" alt="rate" class="reviews-home-sec__rate-item-logo">
            <p class="reviews-home-sec__rate-item-count">4.8</p>
          </div>
          <div class="reviews-home-sec__rate-item">
            <img src="../assets/images/logos/yandex.png" alt="rate" class="reviews-home-sec__rate-item-logo">
            <p class="reviews-home-sec__rate-item-count">4.9</p>
          </div>
          <div class="reviews-home-sec__rate-item">
            <img src="../assets/images/logos/2gis.png" alt="rate" class="reviews-home-sec__rate-item-logo">
            <p class="reviews-home-sec__rate-item-count">4.4</p>
          </div>
        </div>

        <div class="reviews-home-sec__slider-wrapper reviews-home-sec__slider-wrapper--desk">
          <ClientOnly>
            <swiper-container ref="swiperReviews" @swiperslidechange="onReviewsSlideChange" @swiperinit="onReviewsSwiperInit" @swiperresize="onReviewsSwiperResize">
              <swiper-slide
                v-for="review in homeReviews"
                :key="review.id"
              >
                <ReviewsHomeCard :review="review" @open="openReviewPopup" />
              </swiper-slide>
            </swiper-container>
          </ClientOnly>
        </div>

        <div class="reviews-home-sec__list-wrapper reviews-home-sec__list-wrapper--mob">
          <ReviewsHomeCard
            v-for="review in homeReviews"
            :key="review.id"
            :review="review"
            @open="openReviewPopup"
          />
        </div>

        <div class="reviews-home-sec__down-row">
          <div class="reviews-home-sec__down-row-col">

          </div>

          <div class="reviews-home-sec__down-row-col">
            <BtnCtrV3
              titleBtn="Все отзывы"
              link="/reviews"
            />
          </div>

          <div class="reviews-home-sec__down-row-col reviews-home-sec__down-row-col--desk">
            <div class="reviews-home-sec__controll-row">
              <div class="home-about-sec__slider-control-row">
                <div class="home-about-sec__prev" @click="swiperReviewsGallery.prev()">
                  <svg width="21" height="69" viewBox="0 0 21 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.43836 36C3.73973 36 5.60959 35.2653 7.04794 33.9429C10.6438 30.5633 10.3562 24.3918 10.2123 24.098V12.049C10.2123 7.05306 15.1027 2.93878 21 2.93878V0C13.5205 0 7.47945 5.2898 7.47945 11.902V24.098C7.47945 24.2449 7.76712 29.2408 5.17808 31.7388C4.0274 32.9143 2.4452 33.2082 0.287668 33.0612L0 35.8531C0.431507 36 1.00685 36 1.43836 36Z" fill="#206633" fill-opacity="0.5"/>
                  <path d="M21 69V66.0671C15.1027 66.0671 10.2123 61.961 10.2123 56.9751V44.8036C10.2123 44.657 10.5 38.4979 7.04794 35.125C5.32192 33.3653 2.87671 32.7787 0 33.072L0.287668 36.0049C2.30137 35.7116 3.88356 36.1516 5.17808 37.3247C7.76712 39.8177 7.47945 44.8036 7.47945 44.8036V56.9751C7.47945 63.7208 13.5205 69 21 69Z" fill="#206633" fill-opacity="0.5"/>
                  </svg>
                </div>

                <div class="home-about-sec__counter-wrapper">
                  <span class="home-about-sec__counter-current">{{ currentReviewsSlide }}</span>
                  <span class="home-about-sec__counter-total">/{{ reviewsTotalPages }}</span>
                </div>
                <div class="home-about-sec__next" @click="swiperReviewsGallery.next()">
                  <svg width="21" height="69" viewBox="0 0 21 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.5616 36C17.2603 36 15.3904 35.2653 13.9521 33.9429C10.3562 30.5633 10.6438 24.3918 10.7877 24.098V12.049C10.7877 7.05306 5.89726 2.93878 0 2.93878V0C7.47945 0 13.5206 5.2898 13.5206 11.902V24.098C13.5206 24.2449 13.2329 29.2408 15.8219 31.7388C16.9726 32.9143 18.5548 33.2082 20.7123 33.0612L21 35.8531C20.5685 36 19.9932 36 19.5616 36Z" fill="#206633" fill-opacity="0.5"/>
                  <path d="M0 69V66.0671C5.89726 66.0671 10.7877 61.961 10.7877 56.9751V44.8036C10.7877 44.657 10.5 38.4979 13.9521 35.125C15.6781 33.3653 18.1233 32.7787 21 33.072L20.7123 36.0049C18.6986 35.7116 17.1164 36.1516 15.8219 37.3247C13.2329 39.8177 13.5206 44.8036 13.5206 44.8036V56.9751C13.5206 63.7208 7.47945 69 0 69Z" fill="#206633" fill-opacity="0.5"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>
       
      </div>
    </section>

    <section class="faq-sec">
      <div class="container">
        <h2 class="faq-sec__title">
          Ответы на распространённые вопросы,<span><br></span>
          <b>подробно о консультации, терапии и медицинской помощи</b>
        </h2>

        <div class="faq-sec__content">
          <FaqItem
            v-for="(item, index) in faqItems"
            :key="index"
            :question="item.question"
            :answer="item.answer"
          />
        </div>
      </div>
    </section>

    <section class="blog-home-sec">
      <div class="container">
        <h2 class="blog-home-sec__title">Блог клиники,<span><br></span>
          <b>актуальные статьи о психиатрии и психотерапии</b>
        </h2>

        <div class="blog-home-sec__posts">
          <BlogPost v-for="post in blogPosts" :key="post.id" :modHome="true" :post="post" />
        </div>

        <div class="blog-home-sec__btn-row">
          <NuxtLink to="/blog" class="team-sec__more-doc">
              <span class="team-sec__more-docimg-cards">
                <img src="../assets/images/posts/post-1.jpg" alt="" class="team-sec__more-doccards-img">
                <img src="../assets/images/posts/post-2.jpg" alt="" class="team-sec__more-doccards-img">
                <img src="../assets/images/posts/post-3.jpg" alt="" class="team-sec__more-doccards-img">
              </span>
              <span class="team-sec__more-doc-text">Читать все статьи</span>
            </NuxtLink>
        </div>
      </div>
    </section>


    <BannerV2 :bannerData="bannerData2" />

    <ReviewPopup :review="selectedReview" @close="selectedReview = null" />
</template>

<script setup>

import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";

import BtnCtrV1 from "@/components/btn-ctr-v1.vue";
import BtnCtrV3 from "@/components/btn-ctr-v3.vue";
import BtnCtrV4 from "@/components/btn-ctr-v4.vue";

import SpecialistCard from "@/components/specialist-card.vue";

import DirectionsCard from "@/components/directions-card.vue";

import BannerV1 from "@/components/banner-v1.vue";

import BannerV2 from "@/components/banner-v2.vue";

import ReviewPopup from "@/components/review-popup.vue";

import BlogPost from "@/components/blog-post.vue";

import postImg1 from "@/assets/images/posts/post-1.jpg";
import postImg2 from "@/assets/images/posts/post-2.jpg";
import postImg3 from "@/assets/images/posts/post-3.jpg";

const blogPosts = [
    {
        id: 1,
        title: 'Как распознать депрессию: 10 признаков, на которые стоит обратить внимание',
        text: 'Депрессия — не просто плохое настроение, а серьёзное расстройство, которое влияет на сон, аппетит, концентрацию и повседневную активность. Разбираем ключевые симптомы и рассказываем, когда пора обратиться к специалисту.',
        img: postImg1,
        date: '20.05.2026',
    },
    {
        id: 2,
        title: 'Тревога без причины: что происходит с организмом и как с этим справиться',
        text: 'Постоянное напряжение, учащённое сердцебиение и навязчивые мысли могут быть признаками тревожного расстройства. Объясняем, почему тревога возникает и какие методы помощи действительно работают.',
        img: postImg2,
        date: '12.05.2026',
    },
    {
        id: 3,
        title: 'Первый визит к психиатру: чего ожидать и как подготовиться',
        text: 'Многие откладывают обращение за помощью из-за страха неизвестности. Рассказываем, как проходит первичная консультация, какие вопросы задаёт врач и что взять с собой на приём.',
        img: postImg3,
        date: '03.05.2026',
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

const bannerData2 = ref({
    title: "Служба заботы о пациентах,<br> <b>ваше мнение помогает нам становиться лучше</b>",
    text: "Мы ценим обратную связь и внимательно рассматриваем каждое обращение. Если у вас есть вопросы или предложения по работе клиники, напишите нам — мы обязательно ответим.",
    email: "naturemind.msk@yandex.ru"
});

const directions = [
    {
        title: 'Психиатрия',
        text: 'Диагностика и лечение психических расстройств у взрослых и подростков. Работаем с депрессией, биполярным расстройством, шизофренией, тревожными и другими тяжёлыми состояниями. Подбираем индивидуальную медикаментозную терапию и сопровождаем пациента на всех этапах лечения.',
        link: '',
    },
    {
        title: 'Психотерапия',
        text: 'Индивидуальная и групповая психотерапия при тревожных расстройствах, фобиях, ПТСР, стрессах и неврозах. Используем доказательные методы, включая когнитивно-поведенческую терапию, семейные консультации и арт-терапию. Помогаем разобраться в причинах состояния и восстановить эмоциональную устойчивость.',
        link: '',
    },
    {
        title: 'Детская и подростковая психиатрия',
        text: 'Помощь детям и подросткам при расстройствах поведения, аутистического спектра, СДВГ, тревожных и пищевых расстройствах. Консультации детского психиатра и психолога, поддержка родителей и разработка пошагового плана помощи.',
        link: '',
    },
    {
        title: 'Неврология',
        text: 'Диагностика и лечение заболеваний нервной системы: мигрень, эпилепсия, последствия инсульта и черепно-мозговых травм, рассеянный склероз, нарушения сна. Ведём приём взрослых и детей, учитывая психоэмоциональное состояние пациента при подборе терапии.',
        link: '',
    },
    {
        title: 'Реабилитация',
        text: 'Поддержка после сложных и затяжных психических расстройств. Помогаем восстановить социальную адаптацию, закрепить результат лечения и снизить риск рецидива. В программу могут входить психотерапия, трудотерапия и работа с родственниками.',
        link: '',
    },
    {
        title: 'Эндокринология',
        text: 'Диагностика и лечение нарушений гормонального фона, включая сахарный диабет, заболевания щитовидной железы, надпочечников и гипофиза. Особое внимание уделяем психоэндокринным состояниям, депрессии на фоне гормонального дисбаланса и восстановлению общего метаболического здоровья.',
        link: '',
    },
];

const faqItems = [
    {
        question: 'С чего начать обращение в психиатрическую клинику?',
        answer: 'Начать можно с записи на первичную консультацию специалиста. На первом приёме врач-психиатр или психотерапевт проводит беседу, уточняет симптомы, собирает анамнез и оценивает общее психоэмоциональное состояние пациента. При необходимости могут быть рекомендованы дополнительные обследования или консультации смежных специалистов. После диагностики врач подбирает индивидуальный план лечения, который может включать психотерапию, медикаментозную поддержку или комплексную программу восстановления. В частной психиатрической клинике в Москве приём проходит конфиденциально и в комфортной атмосфере, что помогает пациенту спокойно обсудить своё состояние и получить профессиональную помощь.',
    },
    {
        question: 'Нужно ли направление от врача, чтобы записаться на приём?',
        answer: 'Нет, направление не требуется. В частной клинике вы можете записаться на приём самостоятельно — по телефону, через форму на сайте или в мессенджере. Достаточно описать причину обращения, и администратор подберёт подходящего специалиста и удобное время. Если у вас уже есть результаты обследований или выписки от других врачей, возьмите их с собой — это поможет ускорить диагностику, но не является обязательным условием для записи.',
    },
    {
        question: 'Поставят ли меня на учёт после обращения в клинику?',
        answer: 'Обращение в частную психиатрическую клинику не влечёт постановки на учёт в диспансер. Мы работаем на основании договора об оказании платных медицинских услуг, и информация о пациенте не передаётся в государственные учреждения без его письменного согласия. Исключение — ситуации, когда закон прямо обязывает врача сообщить о риске для жизни пациента или окружающих. Во всех остальных случаях ваше обращение остаётся конфиденциальным.',
    },
    {
        question: 'Обязательно ли принимать медикаменты?',
        answer: 'Нет, назначение препаратов — не обязательный этап лечения. Решение принимается совместно с врачом на основе диагностики, тяжести симптомов и ваших предпочтений. Во многих случаях достаточно психотерапии, работы с образом жизни и регулярных консультаций. Если медикаментозная поддержка всё же рекомендована, врач подробно объяснит, зачем нужен препарат, какие эффекты ожидать и какие есть альтернативы. Вы всегда можете обсудить сомнения и скорректировать план лечения.',
    },
    {
        question: 'Как проходит первичная консультация?',
        answer: 'Первичный приём длится 50–60 минут. Врач знакомится с вами, уточняет жалобы, историю состояния, особенности сна, настроения и повседневной активности. При необходимости проводится краткая диагностическая беседа и оценка текущего риска. По итогам вы получаете понятные рекомендации: нужны ли дополнительные обследования, какой формат помощи подойдёт и с какой периодичностью имеет смысл продолжать визиты. Темп беседы выбираете вы — можно делиться только тем, чем готовы поделиться на данном этапе.',
    },
    {
        question: 'Сколько длится лечение?',
        answer: 'Сроки индивидуальны и зависят от диагноза, тяжести симптомов и выбранного формата помощи. Краткосрочная поддержка при остром стрессе может занять несколько встреч, тогда как работа с хронической тревогой, депрессией или расстройствами привычек обычно рассчитана на месяцы. Врач заранее обсуждает ориентировочный план и регулярно пересматривает его по мере улучшения состояния. Цель — не бесконечное лечение, а устойчивое улучшение качества жизни.',
    },
    {
        question: 'Можно ли обратиться анонимно?',
        answer: 'Да, вы можете записаться под именем, которым вам комфортно пользоваться на приёме, без предъявления документов. Для оформления договора и оплаты потребуется минимум контактных данных, но мы не передаём их третьим лицам. Анонимная консультация подходит, если вы хотите сначала обсудить ситуацию и понять, нужна ли дальнейшая помощь. Обратите внимание: при назначении рецептурных препаратов по закону может потребоваться подтверждение личности.',
    },
    {
        question: 'Принимаете ли вы детей и подростков?',
        answer: 'Да, в клинике ведут приём детские и подростковые психиатры и психотерапевты. Для несовершеннолетних обязательно присутствие одного из родителей или законного представителя на первичной консультации. Мы работаем с тревожностью, проблемами в школе, трудностями адаптации, нарушениями сна и поведения, а также с эмоциональными переживаниями подросткового возраста. Подход выбирается с учётом возраста ребёнка — от игровой терапии до когнитивно-поведенческих методик.',
    },
    {
        question: 'Можно ли записаться онлайн без звонка?',
        answer: 'Да, на сайте доступна онлайн-запись: выберите специалиста, удобную дату и время, оставьте контактные данные — администратор подтвердит запись в течение рабочего дня. Также можно написать в чат на сайте или в мессенджер, если удобнее обсудить детали в переписке. Звонок не обязателен, но по телефону администратор сможет быстрее подобрать врача под ваш запрос.',
    },
    {
        question: 'Какие документы нужно взять на приём?',
        answer: 'Для первого визита желательно иметь при себе паспорт и полис ДМС, если планируете оплату через страховую компанию. Если вы уже проходили обследования — возьмите результаты анализов, выписки, заключения других специалистов и список принимаемых препаратов. Это необязательно, но ускоряет диагностику. Для детей — свидетельство о рождении или паспорт ребёнка и документ, подтверждающий полномочия сопровождающего взрослого.',
    },
    {
        question: 'Какие способы оплаты доступны?',
        answer: 'Принимаем оплату наличными и банковскими картами в клинике, а также безналичным переводом по реквизитам. Доступна оплата через ДМС — уточните у администратора, входит ли ваша страховая программа в список партнёров. Перед приёмом можно запросить счёт на юридическое лицо, если оплату организует работодатель. Стоимость консультаций и программ лечения указана в прайсе на сайте, окончательная сумма зависит от выбранного формата помощи.',
    },
];

const advantages = [
    {
        title: 'Анонимность и конфиденциальность',
        text: '100% приватность лечения. Мы не ставим пациентов на учет и не разглашаем сведения об обращении. Соблюдаем принцип врачебной тайны, чтобы человек мог сосредоточиться на решении своих проблем без страха за распространение информации',
    },
    {
        title: 'Высококвалифицированные специалисты',
        text: 'Каждый врач прошел многолетнюю практику, регулярно участвует в обучениях и научных исследованиях. Мы тщательно следим за повышением квалификации, поэтому используем современные подходы и осознанную эмпатию в лечении даже сложных форм психических расстройств',
    },
    {
        title: 'Индивидуальный комплексный подход',
        text: 'Мы составляем план терапии с учетом личной истории расстройства, используя медикаментозные методики, психотерапевтические практики и дополнительные реабилитационные меры. Такой подход ускоряет достижение длительной ремиссии',
    },
    {
        title: 'Персонализированные подходы и передовые методики',
        text: 'Применяем принцип доказательности на всех этапах лечения: от диагностики до закрепления результата. Используем актуальные психофармакологические препараты, когнитивно-поведенческие и другие виды психотерапии, соответствующие международным стандартам',
    },
    {
        title: 'Официальная лицензия и надежность',
        text: 'Наш центр имеет необходимые разрешительные документы для осуществления медицинской деятельности. Мы строго соблюдаем протоколы Министерства здравоохранения РФ и входим в профессиональные сообщества специалистов, что подтверждает нашу надежность',
    },
];

import specImg1 from "@/assets/images/specialists/spec-1.jpg";
import specImg2 from "@/assets/images/specialists/spec-2.jpg";
import specImg3 from "@/assets/images/specialists/spec-3.jpg";
import specImg4 from "@/assets/images/specialists/spec-4.jpg";
import specImg5 from "@/assets/images/specialists/spec-5.jpg";
import specImg6 from "@/assets/images/specialists/spec-6.jpg";
import specImg7 from "@/assets/images/specialists/spec-7.jpg";


import imgDoc1 from "@/assets/images/docs/doc-1.png";
import imgDoc2 from "@/assets/images/docs/doc-2.png";
import imgDoc3 from "@/assets/images/docs/doc-3.png";
import imgDoc4 from "@/assets/images/docs/doc-4.png";
import imgDoc5 from "@/assets/images/docs/doc-5.png";
import imgDoc6 from "@/assets/images/docs/doc-6.png";

import logoYandex from "@/assets/images/logos/yandex.png";
import logoSber from "@/assets/images/logos/sber.png";
import logoProd from "@/assets/images/logos/prod.png";
import logo2gis from "@/assets/images/logos/2gis.png";

const docSlides = [imgDoc1, imgDoc2, imgDoc3, imgDoc4, imgDoc5, imgDoc6];

const specialistsTab1 = ref([]);
const specialistsTab2 = ref([]);
const specialistsTab3 = ref([]);
const specialistsTab4 = ref([]);
const specialistsTab5 = ref([]);

const teamTabs = [
    { id: 1, title: 'Все специалисты' },
    { id: 2, title: 'Психиатры' },
    { id: 3, title: 'Психологи' },
    { id: 4, title: 'Детские специалисты' },
    { id: 5, title: 'Эндокринологи' },
];

const currentTab = ref(1);
const isTabSelectOpen = ref(false);

const currentTabTitle = computed(() => {
    return teamTabs.find((tab) => tab.id === currentTab.value)?.title ?? '';
});

const selectTeamTab = (id) => {
    currentTab.value = id;
    isTabSelectOpen.value = false;
};

const slides = [
    {
        text: 'Частная психиатрическая клиника МЕНТАЛКА в Москве — это специализированное медицинское учреждение психиатрического профиля, которое ведет прием взрослых и детей с любыми психическими расстройствами. Мы стремимся к тому, чтобы каждый пациент получал комплексное лечение с упором на реальную пользу и долгосрочный результат. Наши специалисты — это врачи высшей категории, у которых за плечами многолетний опыт работы и искренняя готовность вникнуть в проблемы каждого обратившегося. Мы уделяем особое внимание инновациям: внедряем современные методы лечения и придерживаемся международных стандартов.',
    },
    {
        text: 'В частной клинике МЕНТАЛКА создана спокойная среда: просторные помещения, доброжелательные сотрудники, заботливый персонал, отвечающий за безопасность внутренних процессов. Здесь можно получить поддержку квалифицированных психологов и психотерапевтов. Каждый вопрос решается в режиме максимальной конфиденциальности: мы не передаем данные пациентов третьим лицам, не ставим на учет и обеспечиваем соблюдение врачебной тайны.',
    },
    {
        text: 'Мы понимаем, что расстройство психики не всегда ограничивается одной проблемой, поэтому обеспечиваем комплекс, который охватывает и медикаментозную терапию, и психотерапию, и социореабилитационные меры. При этом мы ставим во главу угла индивидуальную специфику пациентов: их возраст, диагноз, степень тяжести состояния и личную готовность к восстановлению. Для нас главное — помочь человеку вернуться к стабильной жизни, сняв острую симптоматику и выстроив фундамент для долгосрочного душевного здоровья.',
    },
];

const currentAboutSlide = ref(1);

function onAboutSlideChange(event) {
    const [swiper] = event.detail;
    currentAboutSlide.value = swiper.activeIndex + 1;
}

const swiperDocs = ref(null);
const currentDocsSlide = ref(1);
const docsTotalPages = ref(2);

function onDocsSlideChange(event) {
    const [swiper] = event.detail;
    currentDocsSlide.value = swiper.snapIndex + 1;
    docsTotalPages.value = swiper.snapGrid.length;
}

function onDocsSwiperInit(event) {
    const [swiper] = event.detail;
    docsTotalPages.value = swiper.snapGrid.length;
}

onMounted(() => {
    specialistsTab1.value = [
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
        
    ];
    specialistsTab2.value = [
        {
            id: 4,
            name: "Азнаварян Карен Арменович",
            position: "Врач-эндокринолог детский",
            experience: "Стаж 6 лет",
            description:
                "Помогает детям и подросткам с гормональными нарушениями — от дефицита веса до раннего полового созревания.",
            image: specImg4,
        },
    ];
    specialistsTab3.value = [
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
    specialistsTab4.value = [
        {
            id: 6,
            name: "Андрианова Ольга Владиславовна",
            position: "Врач-психиатр, психотерапевт",
            experience: "Стаж 4 года",
            description:
                "Помогает преодолеть депрессию, тревогу и расстройства пищевого поведения, используя научные методы терапии.",
            image: specImg6,
        },
    ];
    specialistsTab5.value = [
        {
            id: 7,
            name: "Медведев Сергей Александрович",
            position: "Врач-психиатр и психотерапевт",
            experience: "Стаж 11 лет",
            description:
                "Принимает подростков от 15 лет и взрослых. Работает в доказательном формате, комбинируя краткосрочные и глубинные методы психотерапии.",
            image: specImg7,
        },
    ];
    window.addEventListener('resize', equalizeReviewsSlideHeight);
});

onUnmounted(() => {
    window.removeEventListener('resize', equalizeReviewsSlideHeight);
});


const swiperAbout = ref(null);

//categoryes gallery
const  swiperAboutGallery  = useSwiper(swiperAbout, {
   loop: false,
   slidesPerView: 1,
   spaceBetween: 30,  
   autoHeight: true, 
   speed: 600,
   freeMode: {
    enabled: true,
    sticky: true,
  },
   slidesPerView: "auto",
  //  centeredSlides: 'auto',
   breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: false,
      speed: 500,
      
    },

  },

})

const swiperDocsGallery = useSwiper(swiperDocs, {
    loop: false,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 20,
    speed: 600,
    breakpoints: {
        100: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
        },
        760: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 15,
        },
        940: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
        },
        1280: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 20,
        },
    },
})

const homeReviews = [
    {
        id: 1,
        name: 'Татьяна',
        date: '22 сентября 2025',
        logo: logoYandex,
        text: 'Спасибо за помощь! Это мой первый опыт обращения к психиатру. Приходил с ощущением, что «накрывает», тревога была постоянной, на работе и дома сложно было сосредоточиться. Добавились навязчивые мысли и бессонница — как будто голова не выключалась. На приёме доктор выслушала, задавала вопросы по делу, спокойно объясняла варианты и риски. Чувствую себя лучше, появились силы и ясность — сейчас постепенно возвращаюсь к нормальной жизни. Для меня главное, что к врачам можно обратиться без страха осуждения, и что лечение не сводится к «просто взять себя в руки». Рекомендую этот центр, если нужен профессиональный и внимательный подход.',
    },
    {
        id: 2,
        name: 'Анна',
        date: '12 февраля 2026',
        logo: logoProd,
        text: 'Обратилась с тревожным состоянием, долго не могла решиться. Врач очень внимательно выслушала, всё подробно объяснила и назначила лечение. Уже через пару недель почувствовала улучшение. Спасибо за бережный подход.',
    },
    {
        id: 3,
        name: 'Екатерина Л.',
        date: '14 февраля 2026',
        logo: logoSber,
        text: 'Обратилась в клинику в состоянии сильной тревоги и эмоционального выгорания, долго откладывала визит, потому что было много страхов и сомнений. С первых минут приёма почувствовала спокойную и поддерживающую атмосферу — врач очень внимательно выслушала, задала уточняющие вопросы и помогла структурировать всё, что происходило со мной в последнее время.',
    },
    {
        id: 4,
        name: 'Михаил',
        date: '3 января 2026',
        logo: logo2gis,
        text: 'Проходил лечение у психиатра и психотерапевта. Очень понравился системный подход: сначала диагностика, потом план, потом регулярные встречи. Стало заметно легче справляться с тревогой и вернуться к работе.',
    },
    {
        id: 5,
        name: 'Ольга',
        date: '18 декабря 2025',
        logo: logoYandex,
        text: 'Привела ребёнка к детскому психиатру. Врач нашла контакт с сыном, объяснила нам родителям, что происходит, и составила понятный план помощи. Атмосфера в клинике спокойная, без давления.',
    },
    {
        id: 6,
        name: 'Дмитрий',
        date: '5 ноября 2025',
        logo: logoProd,
        text: 'Долго не мог найти врача, который бы не просто назначил таблетки, а объяснил, что со мной происходит. Здесь именно так и работают — с уважением, внимательно, с реальным результатом.',
    },
];

const selectedReview = ref(null);

function openReviewPopup(review) {
    selectedReview.value = review;
}

const swiperReviews = ref(null);
const currentReviewsSlide = ref(1);
const reviewsTotalPages = ref(1);

function equalizeReviewsSlideHeight() {
    if (window.innerWidth <= 760) return;

    const container = swiperReviews.value;
    if (!container) return;

    const slides = container.querySelectorAll('.reviews-home-sec__slide');
    if (!slides.length) return;

    slides.forEach((slide) => {
        slide.style.minHeight = '';
    });

    let maxHeight = 0;
    slides.forEach((slide) => {
        maxHeight = Math.max(maxHeight, slide.offsetHeight);
    });

    if (!maxHeight) return;

    slides.forEach((slide) => {
        slide.style.minHeight = `${maxHeight}px`;
    });
}

function onReviewsSlideChange(event) {
    const [swiper] = event.detail;
    currentReviewsSlide.value = swiper.snapIndex + 1;
    reviewsTotalPages.value = swiper.snapGrid.length;
}

function onReviewsSwiperInit(event) {
    const [swiper] = event.detail;
    reviewsTotalPages.value = swiper.snapGrid.length;
    nextTick(() => {
        equalizeReviewsSlideHeight();
        swiper.update();
    });
}

function onReviewsSwiperResize() {
    nextTick(equalizeReviewsSlideHeight);
}

const swiperReviewsGallery = useSwiper(swiperReviews, {
    loop: false,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 20,
    speed: 600,
    breakpoints: {
        100: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },
        760: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 15,
        },
        1280: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
        },
    },
})

</script>
