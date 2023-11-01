<template>
    <router-view v-slot="{ Component }">
        <keep-alive>
            <component :is="Component" />
        </keep-alive>
    </router-view>
</template>

<script setup>
import { reactive, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const state = reactive({
    includeList: []
})
watch(() => route, (newVal, oldVal) => {
    console.log(newVal.meta.keepAlive, newVal.name);
    if (newVal.meta.keepAlive && state.includeList.indexOf(newVal.name) === -1) {
        state.includeList.push(newVal.name);
        console.log(state.includeList);
    }
}, { deep: true })
</script>
<style scoped></style>