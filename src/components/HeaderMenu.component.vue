<template>
  <n-menu :options="menuOptions" mode="horizontal" />
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const menuOptions = [
  {
    label: 'Home',
    key: '/',
    onClick: () => router.push('/')
  }
];
</script>
