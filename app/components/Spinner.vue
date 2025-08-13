<template>
    <div>
        <span class="spinner"></span>
    </div>
</template>

<style scoped>
.spinner {
    width: 48px;
    height: 48px;
    border: 5px solid #e0e0e0;
    border-top: 5px solid #101010;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    display: inline-block;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>