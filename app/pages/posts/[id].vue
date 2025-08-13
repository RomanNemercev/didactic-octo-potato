<template>
    <div class="max-w-[1520px] pt-[115px] mx-auto px-28 pb-20">
        <div v-if="pending" class="flex justify-center items-center h-[300px]">
            <Spinner />
        </div>
        <div v-else-if="error">Ошибка: {{ error.message }}</div>
        <div v-else-if="post">
            <h1 class="text-84px leading-100 mb-[68px]">{{ post.title }}</h1>
            <!-- <h1 class="text-84px leading-100 mb-[72px]">At Test & Code, you can learn about software design</h1> -->
            <div class="w-full max-h-[700px]">
                <ImageWithFallback :original-src="post.image"
                  :fallback-src="fallbackImages[imageIndex % fallbackImages.length]" alt="Post image" height="700px"
                  margin-bottom="81px" />
            </div>
            <p class="text-base leading-100 mb-9">About</p>
            <!-- <p><strong>Создано:</strong> {{ formatDate(post.createdAt) }}</p> -->
            <!-- <p><strong>Превью:</strong> {{ post.preview }}</p> -->
            <p class="text-[36px] leading-[124%] max-w-[57.155%] mb-8">
                <!-- <strong>Описание:</strong> -->
                {{ post.description }}
            </p>
            <!-- <p class="text-[36px] leading-[124%] max-w-[57.155%]"> -->
            <!-- <strong>Описание:</strong> -->
            <!-- The business model of this service is an aggregator that brings together commercial and noncommercial
                organizations and charges a commission for transactions. The percentage that goes to the account of the
                platform owner is discussed individually with each company. The platform also has a subscription system.
                It allows nonprofits to post more than one project for which they collect donations. -->
            <!-- </p> -->
            <NuxtLink :to="backLink"
              class="hidden text-xl font-normal text-white py-11px px-[26.17px] bg-cod rounded-full leading-normal">
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
