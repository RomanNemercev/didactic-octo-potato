<template>
    <div>
        <div v-if="pending">Загрузка...</div>
        <div v-else-if="error">Ошибка: {{ error.message }}</div>
        <div v-else-if="post">
            <h1>{{ post.title }}</h1>
            <div class="max-w-[400px]">
                <ImageWithFallback :original-src="post.image"
                  :fallback-src="fallbackImages[imageIndex % fallbackImages.length]" alt="Post image"
                  class="post-image" />
            </div>
            <p><strong>Создано:</strong> {{ formatDate(post.createdAt) }}</p>
            <p><strong>Превью:</strong> {{ post.preview }}</p>
            <p><strong>Описание:</strong> {{ post.description }}</p>
            <NuxtLink :to="backLink" class="back-link">Назад к списку</NuxtLink>
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

<style>
.post-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 1rem;
}

.back-link {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
}

.back-link:hover {
    background-color: #0056b3;
}
</style>