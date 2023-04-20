<template>
    <div>
        <div class="flex h-16 items-center justify-between bg-gray-800 text-gray-100 px-4">
            <div class="flex h-full items-center space-x-2 justify-start">
                <router-link :to="{name:'home'}">home</router-link>
                <router-link :to="{name:'about'}">about</router-link>
            </div>
            <router-link :to="{name:'home'}">logout</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
</script>

<style>
</style>