<template>
  <div class="view">登录页面</div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const demo = ref<number[]>([0, 1, 2]);
onMounted(() => {
  demo.value = [5, 6];
});
</script>

<style lang="scss" scoped>
.view {
  color: #000000;
}
</style>
