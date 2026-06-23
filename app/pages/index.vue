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
                      {{ heroSection.title_section }}
                    </h1>
                    <p class="hero-sec__text">
                      {{ heroSection.subtitle }}
                    </p>
                    <div class="hero-sec__buttons">
                        <BtnCtrV1 :titleBtn="heroSection.button_text || 'Записаться на прием'" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="symptoms-sec">
      <div class="container">
        <h2 class="symptoms-sec__title">
          <span v-html="symptomsSection.title_section"></span>
        </h2>
        <div class="symptoms-sec__content">
          <div class="symptoms-sec__item">
            <img src="../assets/images/sympt-1.jpg" alt="" class="symptoms-sec__item-img">
            <p class="symptoms-sec__item-title">{{ symptomsSection.card_1_title }}</p>
            <p class="symptoms-sec__item-text">{{ symptomsSection.card_1_subtitle }}</p>
          </div>

          <div class="symptoms-sec__item">
            <img src="../assets/images/sympt-2.jpg" alt="" class="symptoms-sec__item-img">
            <p class="symptoms-sec__item-title">{{ symptomsSection.card_2_title }}</p>
            <p class="symptoms-sec__item-text">{{ symptomsSection.card_2_subtitle }}</p>
          </div>

          <div class="symptoms-sec__item">
            <img src="../assets/images/sympt-3.jpg" alt="" class="symptoms-sec__item-img">
            <p class="symptoms-sec__item-title">{{ symptomsSection.card_3_title }}</p>
            <p class="symptoms-sec__item-text">{{ symptomsSection.card_3_subtitle }}</p>
          </div>

          <div class="symptoms-sec__item">
            <img src="../assets/images/sympt-4.jpg" alt="" class="symptoms-sec__item-img">
            <p class="symptoms-sec__item-title">{{ symptomsSection.card_4_title }}</p>
            <p class="symptoms-sec__item-text">{{ symptomsSection.card_4_subtitle }}</p>
          </div>

          <div class="symptoms-sec__item">
            <img src="../assets/images/sympt-5.jpg" alt="" class="symptoms-sec__item-img">
            <p class="symptoms-sec__item-title">{{ symptomsSection.card_5_title }}</p>
            <p class="symptoms-sec__item-text">{{ symptomsSection.card_5_subtitle }}</p>
          </div>

          <div class="symptoms-sec__item">
            <img src="../assets/images/sympt-6.jpg" alt="" class="symptoms-sec__item-img">
            <p class="symptoms-sec__item-title">{{ symptomsSection.card_6_title }}</p>
            <p class="symptoms-sec__item-text">{{ symptomsSection.card_6_subtitle }}</p>
          </div>
        </div>

        <div class="symptoms-sec__btn-row">
          <button class="btn-ctr">
              <span class="btn-ctr__text"> {{ symptomsSection.down_button_text || 'Записаться' }} </span>
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
        <h2 class="team-sec__title">
          <span v-html="homeDoctorsSection.title"></span>
        </h2>
          <p class="team-sec__text">
            {{ homeDoctorsSection.subtitle }}
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
                v-for="specialist in specialistsTab1"
                :key="specialist.id"
                :specialistData="specialist"
              />
            </div>

            <div class="team-sec__tab" v-if="currentTab === 2">
              <SpecialistCard
                v-for="specialist in specialistsTab2"
                :key="specialist.id"
                :specialistData="specialist"
              />
            </div>

            <div class="team-sec__tab" v-if="currentTab === 3">
              <SpecialistCard
                v-for="specialist in specialistsTab3"
                :key="specialist.id"
                :specialistData="specialist"
              />
            </div>

            <div class="team-sec__tab" v-if="currentTab === 4">
              <SpecialistCard
                v-for="specialist in specialistsTab4"
                :key="specialist.id"
                :specialistData="specialist"
              />
            </div>

            <div class="team-sec__tab" v-if="currentTab === 5">
              <SpecialistCard
                v-for="specialist in specialistsTab5"
                :key="specialist.id"
                :specialistData="specialist"
              />
            </div>


          </div>

          <div class="team-sec__dop-info-row">
            <p class="team-sec__dop-info-text"  v-html="homeDoctorsSection.down_text || ''">
              
            </p>

            <NuxtLink to="/specialists" class="team-sec__more-doc">
              <span class="team-sec__more-docimg-cards">
                <img
                  v-for="specialist in specialistsPreview"
                  :key="specialist.id"
                  :src="specialist.image"
                  alt=""
                  class="team-sec__more-doccards-img"
                >
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
          {{ pageHome.home_banner_section?.title }}
        </h2>
        <p class="home-banner-sec-1__text">{{ pageHome.home_banner_section?.subtitle }}</p>

        <div class="home-banner-sec-1__buttons">
          <BtnCtrV4 :titleBtn="pageHome.home_banner_section?.button_text || 'Пройти тест'" />
        </div>
      </div>
    </section>

    <section class="home-about-sec">
      <div class="container">
        <img :src="aboutImageUrl" alt="" class="home-about-sec__img">
        <div class="home-about-sec__data">
          <h2 class="home-about-sec__title">МЕНТАЛКА - частная клиника ментального здоровья, 
<b>индивидуальный подход 
  и клиническая точность</b></h2>
  <img :src="aboutImageUrl" alt="" class="home-about-sec__img-mob">
          
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
            <BtnCtrV1 :titleBtn="pageHome.home_about_section?.button_text || 'Подробнее о клинике'" :link="'/about'" />
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
          <span v-html="pageHome.home_direction_section?.section_title"></span>
        </h2>
        <div class="directions-sec__content">
          <DirectionsCard
            v-for="direction in directions"
            :key="direction.id"
            :title="direction.title"
            :text="direction.text"
            :link="direction.link"
          />
        </div>
      </div>
    </section>


    <section class="advantages-sec">
      <div class="container">
        <h2 class="advantages-sec__title">
          <span v-html="pageHome.home_advantages_section?.section_title"></span>
        </h2>

        <div class="advantages-sec__content">
          <div
            v-for="advantage in advantages"
            :key="advantage.id"
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
          <span v-html="pageHome.home_docs_section?.section_slider"></span>
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
          <span v-html="pageHome.home_reviews_section?.section_title"></span>
        </h2>

        <div class="reviews-home-sec__rate-row">
          <div
            v-for="item in reviewRates"
            :key="item.name"
            class="reviews-home-sec__rate-item"
          >
            <img v-if="item.logo" :src="item.logo" alt="rate" class="reviews-home-sec__rate-item-logo">
            <p class="reviews-home-sec__rate-item-count">{{ item.rate }}</p>
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
          <span v-html="pageHome.home_faq_section?.section_title"></span>
        </h2>

        <div class="faq-sec__content">
          <FaqItem
            v-for="(item, index) in faqItems"
            :key="item.id ?? index"
            :question="item.question"
            :answer="item.answer"
          />
        </div>
      </div>
    </section>

    <section class="blog-home-sec">
      <div class="container">
        <h2 class="blog-home-sec__title">
          <span v-html="pageHome.home_blog_section?.section_title"></span>
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
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';

import BtnCtrV1 from '@/components/btn-ctr-v1.vue';
import BtnCtrV3 from '@/components/btn-ctr-v3.vue';
import BtnCtrV4 from '@/components/btn-ctr-v4.vue';
import SpecialistCard from '@/components/specialist-card.vue';
import DirectionsCard from '@/components/directions-card.vue';
import BannerV1 from '@/components/banner-v1.vue';
import BannerV2 from '@/components/banner-v2.vue';
import ReviewPopup from '@/components/review-popup.vue';
import BlogPost from '@/components/blog-post.vue';


const config = useRuntimeConfig();
const strapiUrl = config.public.strapiUrl;

const { data: pageHomeResponse } = await useFetch(`${strapiUrl}/api/page-home`, {
    query: {
        'populate[home_hero_section]': true,
        'populate[home_symptoms_section]': true,
        'populate[home_doctors_section]': true,
        'populate[home_banner_section]': true,
        'populate[home_about_section][populate][image]': true,
        'populate[home_about_section][populate][text_slider]': true,
        'populate[home_advantages_section][populate][advantages_list]': true,
        'populate[home_blog_section][populate][blogs][populate][post_image]': true,
        'populate[home_direction_section][populate][directions][populate][direction_patology_list]': true,
        'populate[home_docs_section][populate][docs_images]': true,
        'populate[home_reviews_section][populate][reviews][populate][reviews_category][populate][category_logo]': true,
        'populate[home_faq_section][populate][faq_items]': true,
        'populate[home_banner_down_section]': true,
        'populate[home_footer_banner_section]': true,
        'populate[Seo][populate][shareImage]': true,
        'populate[Seo][populate][twitterImage]': true,
    },
});

const { data: doctorsResponse } = await useFetch(`${strapiUrl}/api/doctors`, {
    query: {
        'pagination[pageSize]': 100,
        'populate[photo]': true,
    },
});

function getStrapiMediaUrl(media) {
    if (!media) {
        return null;
    }

    const url = media.url ?? media.data?.url ?? media.attributes?.url;

    if (!url) {
        return null;
    }

    return url.startsWith('http') ? url : `${strapiUrl}${url}`;
}

function unwrapRelation(relation) {
    if (!relation) {
        return [];
    }

    const data = relation.data ?? relation;

    if (!data) {
        return [];
    }

    const list = Array.isArray(data) ? data : [data];
    return list.map((item) => item.attributes ?? item);
}

function formatDate(value) {
    if (!value) {
        return '';
    }

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '';
    }

    return date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

function formatExperienceYears(years) {
    if (years === null || years === undefined || years === '') {
        return '';
    }

    const count = Math.floor(Number(years));
    if (Number.isNaN(count)) {
        return '';
    }

    const mod10 = count % 10;
    const mod100 = count % 100;
    let word = 'лет';

    if (mod100 >= 11 && mod100 <= 14) {
        word = 'лет';
    } else if (mod10 === 1) {
        word = 'год';
    } else if (mod10 >= 2 && mod10 <= 4) {
        word = 'года';
    }

    return `Стаж ${count} ${word}`;
}

const pageHomeItem = pageHomeResponse.value?.data;
const pageHome = (pageHomeItem?.attributes ?? pageHomeItem) || {};

const heroSection = pageHome.home_hero_section || {};
const symptomsSection = pageHome.home_symptoms_section || {};
const homeDoctorsSection = pageHome.home_doctors_section || {};

const directions = unwrapRelation(pageHome.home_direction_section?.directions).map((item, index) => {
    const tagsText = (item.direction_patology_list ?? [])
        .map((tag) => tag.text)
        .filter(Boolean)
        .slice(0, 6)
        .join(', ');

    return {
        id: item.id ?? index,
        title: item.title,
        text: item.short_description || tagsText,
        link: item.slug ? `/services/${item.slug}` : '/services',
    };
});

const advantages = (pageHome.home_advantages_section?.advantages_list ?? []).map((item, index) => ({
    id: item.id ?? index,
    title: item.title,
    text: item.text,
}));

const docSlides = unwrapRelation(pageHome.home_docs_section?.docs_images)
    .map((image) => getStrapiMediaUrl(image))
    .filter(Boolean);

const slides = (pageHome.home_about_section?.text_slider ?? [])
    .map((item) => ({ text: item.text }))
    .filter((item) => item.text);

const aboutImageUrl = getStrapiMediaUrl(pageHome.home_about_section?.image);

const faqItems = (pageHome.home_faq_section?.faq_items ?? []).map((item, index) => ({
    id: item.id ?? index,
    question: item.title,
    answer: item.text,
}));

const blogPosts = unwrapRelation(pageHome.home_blog_section?.blogs).map((item, index) => ({
    id: item.id ?? index,
    title: item.post_title,
    text: item.short_description,
    img: getStrapiMediaUrl(item.post_image),
    date: formatDate(item.publishedAt || item.createdAt),
    slug: item.slug,
}));

const homeReviews = unwrapRelation(pageHome.home_reviews_section?.reviews).map((item, index) => {
    const category = item.reviews_category?.data?.attributes
        ?? item.reviews_category?.attributes
        ?? item.reviews_category
        ?? null;

    return {
        id: item.id ?? index,
        name: item.autor_name,
        date: formatDate(item.date),
        logo: getStrapiMediaUrl(category?.category_logo),
        text: item.review_text || '',
        rate: Number(item.rate) || 0,
        sourceName: category?.category_name || '',
    };
});

const reviewRates = computed(() => {
    const groups = new Map();

    for (const review of homeReviews) {
        if (!review.sourceName) {
            continue;
        }

        if (!groups.has(review.sourceName)) {
            groups.set(review.sourceName, { name: review.sourceName, logo: review.logo, total: 0, count: 0 });
        }

        const group = groups.get(review.sourceName);
        group.total += review.rate || 0;
        group.count += 1;
    }

    return Array.from(groups.values()).map((item) => ({
        name: item.name,
        logo: item.logo,
        rate: item.count ? (item.total / item.count).toFixed(1) : '0.0',
    }));
});

function mapDoctorItem(item, index) {
    return {
        id: item.documentId ?? item.id ?? index,
        slug: item.slug,
        name: item.name,
        position: item.specialization,
        experience: formatExperienceYears(item.experience_years),
        description: item.small_descriotion,
        image: getStrapiMediaUrl(item.photo),
    };
}

const doctors = unwrapRelation(doctorsResponse.value?.data).map(mapDoctorItem);

function normalize(value) {
    return (value || '').toLowerCase();
}

const specialistsByTab = computed(() => {
    const all = doctors.slice(0, 3);
    const psychiatrists = doctors.filter((item) => normalize(item.position).includes('психиатр')).slice(0, 3);
    const psychologists = doctors
        .filter((item) => {
            const pos = normalize(item.position);
            return pos.includes('психолог') || pos.includes('психотерапевт');
        })
        .slice(0, 3);
    const child = doctors.filter((item) => normalize(item.position).includes('дет')).slice(0, 3);
    const endocrinologists = doctors.filter((item) => normalize(item.position).includes('эндокринолог')).slice(0, 3);

    return {
        all,
        psychiatrists,
        psychologists,
        child,
        endocrinologists,
    };
});

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

const specialistsTab1 = computed(() => specialistsByTab.value.all);
const specialistsTab2 = computed(() => specialistsByTab.value.psychiatrists);
const specialistsTab3 = computed(() => specialistsByTab.value.psychologists);
const specialistsTab4 = computed(() => specialistsByTab.value.child);
const specialistsTab5 = computed(() => specialistsByTab.value.endocrinologists);
const specialistsPreview = computed(() => specialistsByTab.value.all.slice(0, 3));

const selectTeamTab = (id) => {
    currentTab.value = id;
    isTabSelectOpen.value = false;
};

const bannerData = computed(() => {
    const section = pageHome.home_banner_down_section;

    if (!section) {
        return { title: '', text: '', buttons: [] };
    }

    return {
        title: section.title,
        text: section.subtitle,
        buttons: section.button_text ? [{ title: section.button_text, link: '/consultation' }] : [],
    };
});

const bannerData2 = computed(() => {
    const section = pageHome.home_footer_banner_section;

    if (!section) {
        return { title: '', text: '', email: '' };
    }

    return {
        title: section.title_sec,
        text: section.text,
        email: section.email,
    };
});

const selectedReview = ref(null);

function openReviewPopup(review) {
    selectedReview.value = review;
}

const swiperAbout = ref(null);
const currentAboutSlide = ref(1);

function onAboutSlideChange(event) {
    const [swiper] = event.detail;
    currentAboutSlide.value = swiper.activeIndex + 1;
}

const swiperDocs = ref(null);
const currentDocsSlide = ref(1);
const docsTotalPages = ref(1);

function onDocsSlideChange(event) {
    const [swiper] = event.detail;
    currentDocsSlide.value = swiper.snapIndex + 1;
    docsTotalPages.value = swiper.snapGrid.length;
}

function onDocsSwiperInit(event) {
    const [swiper] = event.detail;
    docsTotalPages.value = swiper.snapGrid.length;
}

const swiperReviews = ref(null);
const currentReviewsSlide = ref(1);
const reviewsTotalPages = ref(1);

function equalizeReviewsSlideHeight() {
    if (window.innerWidth <= 760) return;

    const container = swiperReviews.value;
    if (!container) return;

    const cards = container.querySelectorAll('.reviews-home-sec__slide');
    if (!cards.length) return;

    cards.forEach((card) => {
        card.style.minHeight = '';
    });

    let maxHeight = 0;
    cards.forEach((card) => {
        maxHeight = Math.max(maxHeight, card.offsetHeight);
    });

    if (!maxHeight) return;

    cards.forEach((card) => {
        card.style.minHeight = `${maxHeight}px`;
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

onMounted(() => {
    window.addEventListener('resize', equalizeReviewsSlideHeight);
});

onUnmounted(() => {
    window.removeEventListener('resize', equalizeReviewsSlideHeight);
});

const swiperAboutGallery = useSwiper(swiperAbout, {
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 30,
    autoHeight: true,
    speed: 600,
    freeMode: {
        enabled: true,
        sticky: true,
    },
    breakpoints: {
        100: {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: false,
            speed: 500,
        },
    },
});

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
});

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
});

const seo = pageHome.Seo;
const ogImage = getStrapiMediaUrl(seo?.shareImage);
const twitterImage = getStrapiMediaUrl(seo?.twitterImage) || ogImage;
const ogTitle = seo?.ogTitle || seo?.metaTitle;
const ogDescription = seo?.ogDescription || seo?.metaDescription;
const twitterTitle = seo?.twitterTitle || ogTitle;
const twitterDescription = seo?.twitterDescription || ogDescription;

useSeoMeta({
    title: seo?.metaTitle,
    description: seo?.metaDescription,
    keywords: seo?.metaKeywords,
    robots: seo?.metaRobots,
    ogTitle,
    ogDescription,
    ogImage,
    ogType: seo?.ogType,
    ogLocale: seo?.ogLocale,
    ogUrl: seo?.canonicalURL,
    twitterCard: seo?.twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
    twitterSite: seo?.twitterSite,
    twitterCreator: seo?.twitterCreator,
});

const headTags = {};

if (seo?.canonicalURL) {
    headTags.link = [{ rel: 'canonical', href: seo.canonicalURL }];
}

if (seo?.structuredData) {
    headTags.script = [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify(seo.structuredData),
    }];
}

if (Object.keys(headTags).length) {
    useHead(headTags);
}
</script>
