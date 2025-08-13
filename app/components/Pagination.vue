<!-- components/Pagination.vue -->
<template>
    <div class="flex justify-center">
        <div class="flex justify-center mt-25px bg-white w-fit rounded-xl leading-normal">
            <!-- Кнопка "Назад" -->
            <button :disabled="currentPage === 1" @click="changePage(currentPage - 1)" v-if="currentPage != 1"
              @mouseover="setHoverState('leftArrow', true)" @mouseleave="setHoverState('leftArrow', false)"
              :class="buttonClasses('arrow', 'leftArrow')"
              class="arrow-btn rotate-180 p-[9px] rounded-xl mr-2 transition-colors border-mercury border text-transparent">
                <icon-arrow-right class="text-2xl arrow-style" /></button>

            <!-- Блок с кнопками страниц -->
            <div class="flex justify-center gap-x-[8px]">
                <!-- Первая страница -->
                <button v-if="shouldShowFirst" @click="changePage(1)" @mouseover="setHoverState(1, true)"
                  @mouseleave="setHoverState(1, false)" :class="buttonClasses('page', 1)"
                  class="p-1 min-w-11 h-11 text-base rounded-xl transition-colors">
                    1
                </button>

                <!-- Многоточие слева -->
                <span v-if="showLeftDots" class="p-2 min-w-10 h-10 text-base font-bold flex justify-center items-end">
                    ...
                </span>

                <!-- Основные страницы -->
                <button v-for="page in visiblePages" :key="page" :disabled="page === currentPage"
                  @click="changePage(page)" @mouseover="setHoverState(page, true)"
                  @mouseleave="setHoverState(page, false)" :class="buttonClasses('page', page)"
                  class="p-1 min-w-11 h-11 text-base rounded-xl transition-colors">
                    {{ page }}
                </button>

                <!-- Многоточие справа -->
                <span v-if="showRightDots" class="px-2 min-w-10 h-10 text-base font-bold flex justify-center items-end">
                    ...
                </span>

                <!-- Последняя страница -->
                <button v-if="shouldShowLast" @click="changePage(totalPages)"
                  @mouseover="setHoverState(totalPages, true)" @mouseleave="setHoverState(totalPages, false)"
                  :class="buttonClasses('page', totalPages)"
                  class="p-1 min-w-11 h-11 text-base rounded-xl transition-colors">
                    {{ totalPages }}
                </button>
            </div>

            <!-- Кнопка "Вперед" -->
            <button :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)"
              v-if="currentPage != totalPages" @mouseover="setHoverState('rightArrow', true)"
              @mouseleave="setHoverState('rightArrow', false)" :class="buttonClasses('arrow', 'rightArrow')"
              class="arrow-btn p-[9px] rounded-xl ml-2 transition-colors border-mercury border text-transparent">
                <icon-arrow-right class="text-2xl arrow-style" />
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    currentPage: { type: Number, required: true },
    totalPages: { type: Number, required: true },
});

const emit = defineEmits(['page-changed']);

const maxVisiblePages = 3;

const shouldShowFirst = computed(() => props.currentPage > 3);
const shouldShowLast = computed(() => props.currentPage < props.totalPages - 2);

const showLeftDots = computed(() => props.currentPage > maxVisiblePages);
const showRightDots = computed(() => props.currentPage < props.totalPages - maxVisiblePages + 1);

const visiblePages = computed(() => {
    const { currentPage, totalPages } = props;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage === totalPages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
});

const hoverState = ref({
    leftArrow: false,
    rightArrow: false,
    pages: {},
});

function setHoverState(key, value) {
    if (key === 'leftArrow' || key === 'rightArrow') {
        hoverState.value[key] = value;
    } else {
        hoverState.value.pages[key] = value;
    }
}

function changePage(page) {
    console.log(`Emitting page-changed for page ${page}`);
    emit('page-changed', page);
}

function buttonClasses(type, key) {
    if (type === 'arrow') {
        return hoverState.value[key] ? 'bg-cod' : 'bg-white';
    } else if (type === 'page') {
        if (props.currentPage === key) {
            return 'bg-cod text-white';
        }
        return hoverState.value.pages[key] ? 'bg-cod text-white' : 'bg-concrete text-cod';
    }
}
</script>

<style scoped>
.bg-cod.arrow-btn :deep(svg.arrow-style path) {
    stroke: #ffffff;
}
</style>