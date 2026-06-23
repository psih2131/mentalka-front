<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="container">
        <a href="" class="footer__logo">
          <img
            :src="footerData.logoUrl"
            alt=""
            class="footer__logo-img"
          />
        </a>

        <div class="footer__contact-row">
          <div class="footer__contact-element">
            <p class="footer__contact-element-data">
              <a :href="footerData.phoneHref">{{ footerData.phone }}</a>
            </p>
            <p class="footer__contact-element-description">
              {{ footerData.timeWork }}
            </p>
          </div>

          <div class="footer__contact-element">
            <p class="footer__contact-element-data">{{ footerData.address1 }}</p>
            <p class="footer__contact-element-description">
              {{ footerData.address2 }}
            </p>
          </div>

          <div class="footer__contact-element">
            <p class="footer__contact-element-data">
              <a :href="footerData.emailHref">{{ footerData.email }}</a>
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
            <p
              v-for="(codeItem, index) in footerData.codes"
              :key="`footer-code-${index}`"
              class="footer__middle-legal-text"
            >
              {{ codeItem }}
            </p>
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
          <p>{{ footerData.medicalLicense }}</p>
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
          {{ footerData.medicalLicense }}
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
const defaultFooterLogoUrl = new URL('../assets/images/header-logo.png', import.meta.url).href;

const defaultFooterData = {
  phone: '+7 (495) 215-25-51',
  phoneLink: '+74952152551',
  timeWork: 'ежедневно 09:00–21:00',
  address1: 'ул. Высокая 4',
  address2: 'г. Москва, м. Коломенская',
  email: 'naturemind.msk@yandex.ru',
  codes: ['ООО «ПРИРОДА РАЗУМА»', 'ИНН 9725177812', 'ОГРН 1257700052664'],
  medicalLicense: 'мед. лицензия № Л041-01137-77/02479950 от 18.06.2025',
};

const { data: footerResponse } = useFetch(`${strapiUrl}/api/footer-component`, {
  query: {
    'fields[0]': 'phone',
    'fields[1]': 'phone_link',
    'fields[2]': 'time_work',
    'fields[3]': 'address_1',
    'fields[4]': 'address_2',
    'fields[5]': 'email',
    'fields[6]': 'medical_license',
    'populate[logo]': true,
    'populate[codes]': true,
  },
});

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

function getStrapiMediaUrl(media) {
  const source = media?.data?.attributes ?? media?.data ?? media;
  const url = source?.url;

  if (!url) {
    return '';
  }

  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  return `${strapiUrl}${url}`;
}

const footerAttributes = computed(() => {
  return footerResponse.value?.data?.attributes ?? footerResponse.value?.data ?? {};
});

const footerData = computed(() => {
  const attrs = footerAttributes.value;
  const codes = (attrs.codes ?? [])
    .map((item) => {
      const codeAttrs = item?.attributes ?? item ?? {};
      return codeAttrs.text;
    })
    .filter(Boolean);
  const phoneLinkValue = attrs.phone_link || defaultFooterData.phoneLink;
  const emailValue = attrs.email || defaultFooterData.email;

  return {
    logoUrl: getStrapiMediaUrl(attrs.logo) || defaultFooterLogoUrl,
    phone: attrs.phone || defaultFooterData.phone,
    phoneHref: phoneLinkValue.startsWith('tel:') ? phoneLinkValue : `tel:${phoneLinkValue}`,
    timeWork: attrs.time_work || defaultFooterData.timeWork,
    address1: attrs.address_1 || defaultFooterData.address1,
    address2: attrs.address_2 || defaultFooterData.address2,
    email: emailValue,
    emailHref: emailValue.startsWith('mailto:') ? emailValue : `mailto:${emailValue}`,
    codes: codes.length ? codes : defaultFooterData.codes,
    medicalLicense: attrs.medical_license || defaultFooterData.medicalLicense,
  };
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
