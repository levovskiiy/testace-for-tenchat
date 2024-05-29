<template>
    <div class="flex h-screen items-center">
        <div class="flex-1 flex items-center justify-center h-full">
            <slot />
        </div>
        <div class="flex-1 flex flex-col h-full bg-[#6172F3]">
            <div class="w-[606px] h-[606px] relative m-auto">
                <Circle class="w-full h-full" />
                <div class="absolute top-[84px] flex items-center justify-center">
                    <img src="/assets/icons/signup.svg">
                </div>
                <div class="mt-[50px] w-full text-center">
                    <h3 class="font-bold text-xl text-[#E0EAFF]">
                        Join us!
                    </h3>
                    <p class="font-medium text-[16px] text-[rgba(224,234,255,0.75)]">
                        Just go through the boring process of creating an account.
                    </p>
                </div>
            </div>
            <div class="w-full" />
        </div>
    </div>
</template>
