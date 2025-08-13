<template>
    <div class="bg-mauve relative">
        <div class="pt-[138px] px-28 pb-[28px] max-w-[1520px] mx-auto">
            <div class="flex">
                <div class="mr-4">
                    <p class="text-base text-cod font-normal mb-[54px] tracking-min">Is there a project?</p>
                    <p class="text-[112px] text-cod leading-[100%] w-fit underline"
                      style="text-underline-offset: 14px; text-decoration-thickness: 1px;">Let’s work <span><br></span>
                        together</p>
                </div>
                <div class="ml-[31.3%] pt-[78px]">
                    <div class="pb-[34px]">
                        <p class="text-base leading-120 tracking-min mb-[9px] text-cod">For all questions</p>
                        <ul>
                            <li><a href="tel:79202780068" class="mb-1 text-base font-normal text-cod tracking-min">+7
                                    (920)
                                    278—00—68</a>
                            </li>
                            <li><a href="mailto:qtim@agency.com" class="tracking-min">qtim@agency.com</a></li>
                        </ul>
                    </div>
                    <div class="pb-9">
                        <p class="text-base leading-120 tracking-min mb-[9px] text-cod">Office in Russia</p>
                        <ul>
                            <li>
                                <address class="tracking-min leading-5 not-italic text-base text-cod mb-[7px]">
                                    139 Ruben Station Lake<span><br></span>Drew, NM 52678
                                </address>
                                <button class="bg-cod rounded-full p-2.5"><icon-arrow-mauve class="w-3 h-3"
                                      :fontControlled="false" /></button>
                            </li>
                            <li></li>
                        </ul>
                    </div>
                    <div>
                        <p class="text-base leading-120 tracking-min mb-[9px] text-cod">Office in Dubai</p>
                        <address class="tracking-min leading-5 not-italic text-base text-cod mb-[7px]">
                            139 Ruben Station Lake<span><br></span>Drew, NM 52678
                        </address>
                        <button class="bg-cod rounded-full p-2.5"><icon-arrow-mauve class="w-3 h-3"
                              :fontControlled="false" /></button>
                    </div>
                </div>
            </div>
            <div class="flex justify-between pt-[271px]">
                <nav>
                    <ul class="flex gap-x-8">
                        <li><a href="#"
                              class="text-base leading-120 tracking-min underline underline-offset-[6px]">Facebook</a>
                        </li>
                        <li><a href="#"
                              class="text-base leading-120 tracking-min underline underline-offset-[6px]">Instagram</a>
                        </li>
                        <li><a href="#"
                              class="text-base leading-120 tracking-min underline underline-offset-[6px]">Telegram</a>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <ul class="flex gap-x-8">
                        <li><a href="#"
                              class="text-base leading-120 tracking-min underline underline-offset-[6px]">Behance</a>
                        </li>
                        <li><a href="#"
                              class="text-base leading-120 tracking-min underline underline-offset-[6px]">Linkedn</a>
                        </li>
                        <li><a href="#"
                              class="text-base leading-120 tracking-min underline underline-offset-[6px]">Privacy
                                Policy</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <button class="btn-go">Go</button>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.btn-go {
    width: 24.862vw;
    aspect-ratio: 2 / 1;
    background-color: black;
    color: white;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-top-left-radius: 50vw;
    border-top-right-radius: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    font-size: clamp(14px, 2vw, 20px);
}
</style>