<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="container">
        <a href="" class="footer__logo">
          <img
            src="../assets/images/header-logo.png"
            alt=""
            class="footer__logo-img"
          />
        </a>

        <div class="footer__contact-row">
          <div class="footer__contact-element">
            <p class="footer__contact-element-data">
              <a href="tel:+7 (495) 215-25-51">+7 (495) 215-25-51</a>
            </p>
            <p class="footer__contact-element-description">
              ежедневно 09:00–21:00
            </p>
          </div>

          <div class="footer__contact-element">
            <p class="footer__contact-element-data">ул. Высокая 4</p>
            <p class="footer__contact-element-description">
              г. Москва, м. Коломенская
            </p>
          </div>

          <div class="footer__contact-element">
            <p class="footer__contact-element-data">
              <a href="mailto:naturemind.msk@yandex.ru"
                >naturemind.msk@yandex.ru</a
              >
            </p>
            <p class="footer__contact-element-description">
              отправить нам письмо
            </p>
          </div>
        </div>

        <div class="footer__ctr-cluster">
          <button class="footer__btn-ctr btn-ctr">
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

          <div class="footer__top-social-row">
            <div class="footer__socials">
              <p class="footer__socials-text">написать нам</p>
              <a href="" class="footer__socials-link">
                <img src="../assets/images/max.png" alt="" />
              </a>
              <a href="" class="footer__socials-link">
                <img src="../assets/images/tg.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__middle">
      <div class="container">
        <nav class="footer__middle-nav footer__middle-nav--v1">
          <p class="footer__middle-nav-title">О нас</p>
          <ul class="footer__middle-nav-list">
            <li class="footer__middle-nav-element">
              <a href="" class="footer__middle-nav-link">О клинике</a>
            </li>
            <li class="footer__middle-nav-element">
              <NuxtLink to="/specialists" class="footer__middle-nav-link">Специалисты</NuxtLink>
            </li>
            <li class="footer__middle-nav-element">
              <NuxtLink to="/services" class="footer__middle-nav-link">Услуги</NuxtLink>
            </li>
            <li class="footer__middle-nav-element">
              <NuxtLink to="/prices" class="footer__middle-nav-link">Цены</NuxtLink>
            </li>
            <li class="footer__middle-nav-element">
              <NuxtLink to="/reviews" class="footer__middle-nav-link">Отзывы</NuxtLink>
            </li>
            <li class="footer__middle-nav-element">
              <NuxtLink to="/blog" class="footer__middle-nav-link">Статьи</NuxtLink>
            </li>
            <li class="footer__middle-nav-element">
              <NuxtLink to="/sitemap-page" class="footer__middle-nav-link">Карта сайта</NuxtLink>
            </li>
          </ul>
        </nav>

        <nav class="footer__middle-nav footer__middle-nav--v2">
          <p class="footer__middle-nav-title">Направления</p>
          <ul class="footer__middle-nav-list">
            <li
              v-for="direction in directions"
              :key="direction.slug"
              class="footer__middle-nav-element"
            >
              <NuxtLink :to="`/services/${direction.slug}`" class="footer__middle-nav-link">
                {{ direction.title }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="footer__middle-nav footer__middle-nav--v3">
          <p class="footer__middle-nav-title">Юридическая информация</p>
          <div class="footer__middle-legals">
            <p class="footer__middle-legal-text">ООО «ПРИРОДА РАЗУМА»</p>
            <p class="footer__middle-legal-text">ИНН 9725177812</p>
            <p class="footer__middle-legal-text">ОГРН 1257700052664</p>
          </div>

          <ul class="footer__middle-nav-list-small">
            <li
              v-for="docPage in docsPages"
              :key="docPage.slug"
              class="footer__middle-nav-element-small"
            >
              <NuxtLink :to="`/docs/${docPage.slug}`" class="footer__middle-nav-link-small">
                {{ docPage.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__down">
      <div class="container footer__down-container-pc">
        <div class="footer__down-copy">
          <p>2026</p>
          <p>Клиника «МЕНТАЛКА»</p>
          <p>мед. лицензия № Л041-01137-77/02479950 от 18.06.2025</p>
        </div>

        <nav class="footer__down-nav">
          <ul class="footer__down-nav-list">
            <li
              v-for="docPage in docsPages"
              :key="docPage.slug"
              class="footer__down-nav-list-element"
            >
              <NuxtLink :to="`/docs/${docPage.slug}`" class="footer__down-nav-link">
                {{ docPage.title }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="container footer__down-container-mob">
        <p class="footer__down-text">
          мед. лицензия №<br />
          Л041-01137-77/02479950 от 18.06.2025
        </p>

        <p class="footer__down-text footer__down-text--right">
          Клиника<br />
          “МЕНТАЛКА”
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const config = useRuntimeConfig();
const strapiUrl = config.public.strapiUrl;

const { data: docsPagesResponse } = useFetch(`${strapiUrl}/api/docs-pages`, {
  query: {
    'fields[0]': 'title',
    'fields[1]': 'slug',
    'pagination[pageSize]': 100,
  },
});

const { data: directionsResponse } = useFetch(`${strapiUrl}/api/directions`, {
  query: {
    'fields[0]': 'title',
    'fields[1]': 'slug',
    'pagination[pageSize]': 100,
  },
});

const docsPages = computed(() => {
  const items = docsPagesResponse.value?.data ?? [];

  return items
    .map((item) => {
      const attrs = item.attributes ?? item;

      return {
        title: attrs.title,
        slug: attrs.slug,
      };
    })
    .filter((item) => item.title && item.slug);
});

const directions = computed(() => {
  const items = directionsResponse.value?.data ?? [];

  return items
    .map((item) => {
      const attrs = item.attributes ?? item;

      return {
        title: attrs.title,
        slug: attrs.slug,
      };
    })
    .filter((item) => item.title && item.slug);
});
</script>
