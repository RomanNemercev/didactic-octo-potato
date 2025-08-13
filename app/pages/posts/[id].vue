<template>
    <div class="max-w-[1520px] pt-[119px] mx-auto px-28 pb-20">
        <div v-if="pending">Загрузка...</div>
        <div v-else-if="error">Ошибка: {{ error.message }}</div>
        <div v-else-if="post">
            <h1 class="text-84px leading-100 mb-[73px]">{{ post.title }}</h1>
            <div class="w-full max-h-[700px]">
                <ImageWithFallback :original-src="post.image"
                  :fallback-src="fallbackImages[imageIndex % fallbackImages.length]" alt="Post image" height="700px"
                  margin-bottom="80px" />
            </div>
            <p class="text-base leading-100 mb-8">About</p>
            <!-- <p><strong>Создано:</strong> {{ formatDate(post.createdAt) }}</p> -->
            <!-- <p><strong>Превью:</strong> {{ post.preview }}</p> -->
            <p class="text-[36px] leading-[124%] max-w-[57.155%] mb-8">
                <!-- <strong>Описание:</strong> -->
                {{ post.description }}
            </p>
            <NuxtLink :to="backLink"
              class="text-xl font-normal text-white py-11px px-[26.17px] bg-cod rounded-full leading-normal inline-block">
                Назад к
                списку</NuxtLink>
        </div>
        <div v-else>Пост не найден</div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { fallbackImages } from '~/utils/fallbackImages';

const route = useRoute();
const postId = route.params.id;
const fromPage = computed(() => Number(route.query.fromPage) || 1);
const imageIndex = computed(() => Number(route.query.imageIndex) || 0);

const { data, pending, error } = await useAsyncData(`post-${postId}`, () =>
    $fetch(`/api/post/${postId}`)
);

const post = computed(() => data.value || null);
const backLink = computed(() => `/?page=${fromPage.value}`);

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
}
</script>