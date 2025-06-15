<script setup lang="ts">
import {NConfigProvider} from 'naive-ui';
import { RouterView } from 'vue-router'
import HeaderMenu from './components/HeaderMenu.component.vue'
import FooterMenu from './components/FooterMenu.component.vue'

</script>

<template>
  <n-config-provider>
    <n-layout>
      <n-layout-header>
        <HeaderMenu/>
      </n-layout-header>
      <n-layout-content class="content">
        <n-space justify="center">
          <n-message-provider>
            <RouterView/>
          </n-message-provider>
        </n-space>
      </n-layout-content>
      <n-layout-footer>
        <FooterMenu/>
      </n-layout-footer>
    </n-layout>
  </n-config-provider>
</template>

<style scoped>
.content {
  margin-top: 1em;
  margin-left: 3em;
  margin-right: 3em;
}
</style>
