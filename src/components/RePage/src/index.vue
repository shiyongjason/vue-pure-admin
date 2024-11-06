<script lang="ts" setup>
import { h, onMounted, ref, useSlots } from "vue";

defineOptions({
  name: "RePage"
});

const props = defineProps({
  // 行数
});

const $slots = useSlots();

const textRef = ref();
const tippyFunc = ref();

function handleHover(event: MouseEvent) {}

onMounted(() => {});
</script>

<template>
  <div class="re-page">
    <!-- <div class="title"></div> -->
    <slot />
  </div>
</template>
