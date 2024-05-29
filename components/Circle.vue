<template>
    <div class="relative">
        <div class="gradient-circle absolute inset-0 rounded-full" />
        <div class="inner-gradient-circle absolute inset-[39px] rounded-full" />
    </div>
</template>

<style scoped>
.inner-gradient-circle {
    background: radial-gradient(50% 50% at 50% 50%, rgba(68, 76, 231, 0.162) 0%, rgba(68, 76, 231, 0.058) 100%),
                linear-gradient(173.9deg, rgba(164, 188, 253, 0.2) 4.83%, rgba(68, 76, 231, 0.162) 91.13%);

}

.gradient-circle {
    background: radial-gradient(50% 50% at 50% 50%, rgba(68, 76, 231, 0.162) 0%, rgba(68, 76, 231, 0.058) 100%),
                linear-gradient(162.74deg, rgba(68, 76, 231, 0.162) 6.85%, rgba(0, 0, 0, 0) 89.34%);

}
</style>
