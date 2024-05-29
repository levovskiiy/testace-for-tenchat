<template>
    <div class="flex h-screen items-center">
        <div class="flex-1 flex items-center justify-center h-full">
            <slot />
        </div>
        <div class="flex-1 flex flex-col h-full bg-[#6172F3]">
            <div class="w-[606px] h-[606px] m-auto relative">
                <Circle class="w-full h-full z-1" />
                <div class="absolute inset-0 flex items-center justify-center">
                    <img
                        width="586"
                        height="369"
                        alt="signin image"
                        src="/assets/icons/signin.svg"
                    >
                </div>
                <div class="mt-[50px] w-full text-center">
                    <h3 class="font-bold text-xl text-[#E0EAFF]">
                        Connect with any device.
                    </h3>
                    <p class="font-medium text-[16px] text-[rgba(224,234,255,0.75)]">
                        Everything you need is an internet connection.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
