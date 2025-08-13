<template>
    <div class="pt-[117px] pb-[140px] px-28 max-w-[1520px] mx-auto">
        <h1 class="text-[84px] leading-100 mb-[58px]">Articles</h1>
        <div class="min-h-[836px]">
            <div v-if="pending" class="flex justify-center items-center h-[836px]">
                <Spinner />
            </div>
            <div v-else-if="error">Ошибка: {{ error.message }}</div>
            <div v-else>
                <div class="grid grid-cols-4 gap-4">
                    <NuxtLink v-for="(post, index) in posts" :key="post.id"
                      :to="`/posts/${post.id}?fromPage=${currentPage}&imageIndex=${index}`" class="card relative"
                      @mouseover="hoveredIndex = index" @mouseleave="hoveredIndex = null">
                        <div :class="{ 'transform-on': hoveredIndex === index }">
                            <ImageWithFallback :original-src="post.image"
                              :fallback-src="fallbackImages[index % fallbackImages.length]" alt="Preview"
                              margin-bottom="16px" />
                            <div :class="[
                                'py-5 text-xl leading-6',
                                index % 2 === 1 ? 'pt-2.5 pb-2.5' : ''
                            ]">
                                <h2 class="truncate">{{ post.title }}</h2>
                                <p class="line-clamp-2">{{ post.preview }}</p>
                            </div>
                        </div>
                        <p class="text-mauve text-xl leading-120 absolute bottom-0 left-0 transition-custom" :class="{
                            'opacity-100 visible': hoveredIndex === index,
                            'opacity-0 invisible': hoveredIndex !== index
                        }">
                            Read more
                        </p>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="w-fit mt-[39px]">
            <Pagination :current-page="currentPage" :total-pages="totalPages" @page-changed="changePage" />
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { fallbackImages } from '~/utils/fallbackImages';

const route = useRoute();
const router = useRouter();
const currentPage = computed(() => Number(route.query.page) || 1);
const limit = 8;
const hoveredIndex = ref(null);

const { data, pending, error, refresh } = await useAsyncData(
    `posts-${currentPage.value}`,
    () => $fetch(`/api/posts`, { query: { page: currentPage.value } }),
    {
        watch: [currentPage],
        cache: {
            maxAge: 60 * 10000 // кешировать на 10 минут
        }
    }
);


const posts = computed(() => data.value?.posts || []);
const total = computed(() => data.value?.total || 0);
const totalPages = computed(() => Math.ceil(total.value / limit));

function changePage(page) {
    console.log(`Changing to page ${page}`);
    router.push({ query: { ...route.query, page } });
}
</script>

<style>
.card div {
    transition: transform, .3s ease-out;
}

.card div.transform-on {
    transform: translateY(-20px);
}

.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 32px;
    row-gap: 30px;
}

.transition-custom {
    transition-property: opacity, visibility;
    transition-duration: .3s;
    transition-timing-function: ease-in-out;
}
</style>