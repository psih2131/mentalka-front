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
          <h1 class="hero-sec__title">
            {{ pageBlog?.hero_section_title }}
          </h1>
          <p class="hero-sec__text">
            {{ pageBlog?.hero_section_subtitle }}
          </p>
          <div class="hero-sec__buttons">
            <BtnCtrV1 :titleBtn="pageBlog?.hero_section_button_text_1" />
            <BtnCtrV1 :titleBtn="pageBlog?.hero_section_button_text_2" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="blog-list-sec">
    <div class="container">
      <h2 class="blog-list-sec__title" v-html="pageBlog?.post_section_title"></h2>

      <div class="blog-list-sec__posts">
        <BlogPost v-for="post in posts" :key="post.slug || post.id" :post="post" />
      </div>
      <div v-if="showLoadMore" class="blog-list-sec__load-more-row">
        <div class="blog-list-sec__load-more-btn" @click="loadMorePosts">
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

const PAGE_SIZE = 6;

const config = useRuntimeConfig();
const strapiUrl = config.public.strapiUrl;

const { data: pageBlogResponse } = await useFetch(`${strapiUrl}/api/page-blog`, {
    query: {
        'populate[Seo][populate][shareImage]': true,
        'populate[Seo][populate][twitterImage]': true,
    },
});

const { data: blogsResponse } = await useFetch(`${strapiUrl}/api/blogs`, {
    query: {
        'populate[post_image]': true,
        'pagination[page]': 1,
        'pagination[pageSize]': PAGE_SIZE,
        'sort[0]': 'publishedAt:desc',
    },
});

function mapPageBlog(response) {
    const item = response?.data;

    if (!item) {
        return null;
    }

    return item.attributes ?? item;
}

function getStrapiMediaUrl(media) {
    if (!media) {
        return null;
    }

    const file = media.data ?? media;
    const url = file.url ?? file.attributes?.url;

    if (!url) {
        return null;
    }

    return url.startsWith('http') ? url : `${strapiUrl}${url}`;
}

function formatPostDate(dateValue) {
    if (!dateValue) {
        return '';
    }

    return new Date(dateValue).toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
}

function mapBlogPost(item) {
    const raw = item.attributes ?? item;

    return {
        id: item.documentId ?? item.id,
        slug: raw.slug,
        title: raw.post_title,
        text: raw.short_description,
        img: getStrapiMediaUrl(raw.post_image),
        date: formatPostDate(raw.publishedAt ?? item.publishedAt ?? raw.createdAt ?? item.createdAt),
    };
}

function mapBlogPosts(response) {
    return (response?.data ?? []).map(mapBlogPost);
}

const pageBlog = mapPageBlog(pageBlogResponse.value);
const posts = ref(mapBlogPosts(blogsResponse.value));
const currentPage = ref(1);
const totalPosts = ref(blogsResponse.value?.meta?.pagination?.total ?? posts.value.length);
const showLoadMore = ref(posts.value.length < totalPosts.value);
const isLoadingMore = ref(false);

async function loadMorePosts() {
    if (isLoadingMore.value || !showLoadMore.value) {
        return;
    }

    isLoadingMore.value = true;

    try {
        const nextPage = currentPage.value + 1;
        const response = await $fetch(`${strapiUrl}/api/blogs`, {
            query: {
                'populate[post_image]': true,
                'pagination[page]': nextPage,
                'pagination[pageSize]': PAGE_SIZE,
                'sort[0]': 'publishedAt:desc',
            },
        });

        posts.value = [...posts.value, ...mapBlogPosts(response)];
        currentPage.value = nextPage;
        totalPosts.value = response?.meta?.pagination?.total ?? posts.value.length;
        showLoadMore.value = posts.value.length < totalPosts.value;
    } finally {
        isLoadingMore.value = false;
    }
}

const seo = pageBlog?.Seo;
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
