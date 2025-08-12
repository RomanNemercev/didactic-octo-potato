<template>
    <div class="max-w-[1520px] px-10 py-35px w-full flex items-center">
        <NuxtLink to="/" class="mr-auto">
            <IconLogoBlack class="w-[84px] h-[25px]" :fontControlled="false" />
        </NuxtLink>
        <div class="max-w-[455px] w-full items-center justify-between flex">
            <nav>
                <ul class="flex gap-x-[58px]">
                    <li>
                        <NuxtLink to="/" class="text-xl">Works</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" class="text-xl">About</NuxtLink>
                    </li>
                </ul>
            </nav>
            <div class="gap-x-4 flex">
                <button class="border-2 border-semiwhite rounded-full p-3">
                    <IconBritish class="text-2xl" filled />
                </button><button
                  class="text-xl font-normal text-white py-11px px-[26.17px] bg-cod rounded-full leading-normal">Let’s
                    work</button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped></style>