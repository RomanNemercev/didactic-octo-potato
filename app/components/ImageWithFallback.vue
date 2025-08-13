<template>
    <img :src="currentSrc" :alt="alt" class="w-full h-[280px] object-cover mb-6" loading="lazy"
      @error="handleImageError" />
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Определяем props
const { originalSrc, fallbackSrc, alt } = defineProps({
    originalSrc: {
        type: String,
        default: '',
    },
    fallbackSrc: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        default: 'Image',
    },
});

const currentSrc = ref(fallbackSrc);

onMounted(() => {
    if (originalSrc) {
        const img = new Image();
        img.src = originalSrc;
        img.onload = () => {
            console.log(`Loaded original image: ${originalSrc}`);
            currentSrc.value = originalSrc;
        };
        img.onerror = () => {
            console.log(`Failed to load original image: ${originalSrc}, using fallback: ${fallbackSrc}`);
        };
    } else {
        console.log(`No originalSrc provided, using fallback: ${fallbackSrc}`);
    }
});

function handleImageError() {
    console.log(`Image failed to load, staying with fallback: ${fallbackSrc}`);
}
</script>