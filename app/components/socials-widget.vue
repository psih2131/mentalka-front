<template>
  <div
    v-if="socialLinks.length"
    ref="widgetRef"
    class="socials-widget"
    :class="{ 'socials-widget--open': isOpen }"
  >
    <div class="socials-widget__list">
      <a
        v-for="(social, index) in socialLinks"
        :key="social.id"
        :href="social.link"
        class="socials-widget__link"
        :style="{ '--social-index': index }"
        target="_blank"
        rel="noopener noreferrer"
        @click="isOpen = false"
      >
        <img :src="social.iconUrl" alt="" />
      </a>
    </div>

    <button
      type="button"
      class="socials-widget__toggle"
      :aria-expanded="isOpen"
      :aria-label="isOpen ? 'Закрыть соцсети' : 'Открыть соцсети'"
      @click.stop="isOpen = !isOpen"
    >
      <Transition name="socials-widget-icon" mode="out-in">
        <svg
          v-if="!isOpen"
          key="chat"
          class="socials-widget__toggle-icon"
          width="30"
          height="24"
          viewBox="0 0 30 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.612 0H9.505C4.565 0 .56 4.433.56 9.895c0 4.368 2.558 8.064 6.105 9.38L10.916 24l3.803-4.206h5.893c4.942 0 8.947-4.43 8.947-9.899C29.559 4.433 25.553 0 20.612 0ZM8.154 11.998c-1.096 0-1.985-.98-1.985-2.195 0-1.211.889-2.196 1.985-2.196s1.985.984 1.985 2.196c0 1.214-.889 2.195-1.985 2.195Zm6.905 0c-1.096 0-1.985-.98-1.985-2.195 0-1.211.888-2.196 1.985-2.196 1.096 0 1.985.984 1.985 2.196 0 1.214-.89 2.195-1.985 2.195Zm6.905 0c-1.097 0-1.986-.98-1.986-2.195 0-1.211.889-2.196 1.986-2.196 1.096 0 1.985.984 1.985 2.196 0 1.214-.89 2.195-1.985 2.195Z"
            fill="currentColor"
          />
        </svg>

        <svg
          v-else
          key="close"
          class="socials-widget__toggle-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 7L17 17M17 7L7 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
      </Transition>
    </button>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';

const config = useRuntimeConfig();
const strapiUrl = config.public.strapiUrl;

const isOpen = ref(false);
const widgetRef = ref(null);

const { data: socialsWidgetResponse } = useFetch(`${strapiUrl}/api/socials-widget-component`, {
  query: {
    'populate[socials_media_links][populate][icon]': true,
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

const socialLinks = computed(() => {
  const attrs = socialsWidgetResponse.value?.data?.attributes ?? socialsWidgetResponse.value?.data ?? {};
  const items = attrs.socials_media_links ?? [];

  return items
    .map((item, index) => {
      const social = item?.attributes ?? item ?? {};
      const iconUrl = getStrapiMediaUrl(social.icon);

      return {
        id: item?.id ?? `social-link-${index}`,
        link: social.link,
        iconUrl,
      };
    })
    .filter((item) => item.link && item.iconUrl);
});

function onDocumentClick(event) {
  if (!isOpen.value || !widgetRef.value) {
    return;
  }

  if (!widgetRef.value.contains(event.target)) {
    isOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick);
});

onUnmounted(() => {
  document.removeEventListener('click', onDocumentClick);
});
</script>
