<template>
    <img :src="currentSrc" :alt="alt" loading="lazy" @error="handleImageError" class="w-full object-cover"
      :style="{ height, marginBottom }" />
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Определяем props
const { originalSrc, fallbackSrc, alt, height = '280px', marginBottom = '1.5rem' } = defineProps({
    originalSrc: { type: String, default: '' },
    fallbackSrc: { type: String, required: true },
    alt: { type: String, default: 'Image' },
    height: { type: String, default: '280px' },
    marginBottom: { type: String, default: '1.5rem' }
});

const currentSrc = ref(fallbackSrc);

onMounted(() => {
    if (originalSrc) {
        const img = new Image();
        img.src = originalSrc;
        img.onload = () => {
            currentSrc.value = originalSrc;
        };
    }
});

function handleImageError() {
    console.log(`Image failed to load, staying with fallback: ${fallbackSrc}`);
}
</script>