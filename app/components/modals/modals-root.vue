<template>
    <Teleport to="body">
        <div
            v-if="modalStore.activeModal"
            class="modal"
            @click.self="modalStore.closeModal()"
        >
            <ModalAppointment v-if="modalStore.activeModal === MODAL_NAMES.APPOINTMENT" />
        </div>
    </Teleport>
</template>

<script setup>
import { watch, onUnmounted } from 'vue';
import { MODAL_NAMES, useModalStore } from '@/stores/modal';
import ModalAppointment from '@/components/modals/modal-appointment.vue';

const modalStore = useModalStore();

function setBodyScrollLocked(locked) {
    if (!import.meta.client) {
        return;
    }

    document.body.style.overflow = locked ? 'hidden' : '';
}

watch(
    () => modalStore.activeModal,
    (value) => {
        setBodyScrollLocked(!!value);
    },
);

onUnmounted(() => {
    setBodyScrollLocked(false);
});
</script>
