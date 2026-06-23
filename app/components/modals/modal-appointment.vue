<template>
    <div class="modal__window">
        <button
            type="button"
            class="modal__close"
            aria-label="Закрыть"
            @click="modalStore.closeModal()"
        >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L13 13M13 1L1 13" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" />
            </svg>
        </button>

        <h2 class="modal__title">Записаться на прием</h2>

        <ContactsForm class="modal__form" />
    </div>
</template>

<script setup>
import ContactsForm from '@/components/contacts-form.vue';
import { useModalStore } from '@/stores/modal';

const modalStore = useModalStore();
</script>
