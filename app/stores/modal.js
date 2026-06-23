import { ref } from 'vue';
import { defineStore } from 'pinia';

export const MODAL_NAMES = {
    APPOINTMENT: 'appointment',
};

export const useModalStore = defineStore('modal', () => {
    const activeModal = ref(null);

    function openModal(name) {
        activeModal.value = name;
    }

    function closeModal() {
        activeModal.value = null;
    }

    return {
        activeModal,
        openModal,
        closeModal,
    };
});
