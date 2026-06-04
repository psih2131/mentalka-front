<template>
    <div class="blog-post">
        <div class="blog-post__top">
            <img :src="post.img" alt="" class="blog-post__img">
            <div class="blog-post__data">
                <p class="blog-post__title">{{ post.title }}</p>
                <p class="blog-post__text">{{ post.text }}</p>
            </div>
           
        </div>

        <div class="blog-post__bottom">
            <BtnCtrV3 :titleBtn="'Подробнее'"  :link="`/blog/${post.id}`" />
           <p class="blog-post__date">{{ post.date }}</p>
        </div>
    </div>
</template>
<script setup>
import BtnCtrV3 from "@/components/btn-ctr-v3.vue";

const props = defineProps({
    post: {
        type: Object,
        required: true
    }
});
</script>