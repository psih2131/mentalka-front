<template>
  <div class="app-wrapper">
    <headerComponent :dataContacts="aboutData" />

    <slot />

    <footerComponent :dataContacts="aboutData" />

    <ModalsRoot />
  </div>
</template>

<script setup>
import headerComponent from "@/components/header.vue";
import footerComponent from "@/components/footer.vue";
import ModalsRoot from "@/components/modals/modals-root.vue";
</script>
