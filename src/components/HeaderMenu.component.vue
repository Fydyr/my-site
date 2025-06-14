<template>
  <n-layout-header bordered class="header">
    <div class="header-content">
      <!-- Logo/Brand -->
      <div class="brand">
        <n-text strong style="font-size: 20px; color: var(--primary-color)">
          Enzo <br>Fournier
        </n-text>
      </div>

      <!-- Navigation Menu Desktop -->
      <n-menu
        :options="menuOptions"
        :value="selectedKey"
        mode="horizontal"
        :root-indent="36"
        class="nav-menu-centered desktop-only"
      />

      <!-- Menu Burger Mobile -->
      <n-button
        quaternary
        circle
        class="mobile-menu-button mobile-only"
        @click="showMobileMenu = true"
      >
        <template #icon>
          <span class="burger-icon">☰</span>
        </template>
      </n-button>
    </div>

    <!-- Drawer pour le menu mobile -->
    <n-drawer
      v-model:show="showMobileMenu"
      :width="280"
      placement="right"
      class="mobile-drawer"
    >
      <n-drawer-content
        title="Navigation"
        closable
        class="mobile-drawer-content"
      >
        <n-menu
          :options="menuOptions"
          :value="selectedKey"
          mode="vertical"
          class="mobile-nav-menu"
        />
      </n-drawer-content>
    </n-drawer>
  </n-layout-header>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
import { h, computed, ref } from 'vue';
import {
  NLayoutHeader,
  NMenu,
  NText,
  NButton,
  NDrawer,
  NDrawerContent,
} from 'naive-ui';

const router = useRouter();
const route = useRoute();

// État pour le menu burger mobile
const showMobileMenu = ref(false);

// Fonction pour fermer le menu mobile lors de la navigation
const navigateAndClose = (path: string) => {
  router.push(path);
  showMobileMenu.value = false;
};

// Utilisation d'icônes simples en SVG ou emoji
const renderIcon = (iconContent: string) => () => h('span', { style: 'font-size: 16px;' }, iconContent);

const menuOptions = computed(() => [
  {
    label: 'Accueil',
    key: '/',
    icon: renderIcon('🏠'),
    onClick: () => navigateAndClose('/')
  },
  {
    label: 'Présentation',
    key: '/presentation',
    icon: renderIcon('👨'),
    onClick: () => navigateAndClose('/presentation')
  },
  {
    label: 'Projets',
    key: '/projets',
    icon: renderIcon('📂'),
    onClick: () => navigateAndClose('/projets')
  },
  {
    label: 'Contact',
    key: '/contact',
    icon: renderIcon('✉️'),
    onClick: () => navigateAndClose('/contact')
  },
]);

// Valeur sélectionnée basée sur la route actuelle
const selectedKey = computed(() => route.path);
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
  backdrop-filter: blur(20px);
  border-bottom: 2px solid;
  border-image: linear-gradient(90deg, #00d4ff, #7b2cbf, #ff006e) 1;
  box-shadow:
    0 4px 30px rgba(0, 212, 255, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.header::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.15), transparent);
  animation: scan 3s linear infinite;
}

@keyframes scan {
  0% { left: -100%; }
  100% { left: 100%; }
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 64px;
  position: relative;
}

.brand {
  position: absolute;
  left: 24px;
  display: flex;
  align-items: center;
  z-index: 2;
}

.brand .n-text {
  color: #00ffff !important;
  text-shadow: 0 0 15px rgba(0, 255, 255, 0.8);
  font-family: 'Courier New', monospace;
  letter-spacing: 2px;
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from { text-shadow: 0 0 15px rgba(0, 255, 255, 0.8); }
  to { text-shadow: 0 0 25px rgba(0, 255, 255, 1), 0 0 35px rgba(0, 255, 255, 0.5); }
}

.nav-menu-centered {
  display: flex;
  justify-content: center;
  flex: 1;
  z-index: 2;
  position: relative;
}

/* Styles futuristes */
.nav-menu-centered :deep(.n-menu-item-content) {
  color: white !important;
  font-family: 'Courier New', monospace;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: none;
  text-shadow: none;
  margin: 0 12px;
  padding: 12px 20px;
}

.nav-menu-centered :deep(.n-menu-item) {
  margin: 0 8px;
}

.nav-menu-centered :deep(.n-menu-item:first-child) {
  margin-left: 0;
}

.nav-menu-centered :deep(.n-menu-item:last-child) {
  margin-right: 0;
}

.nav-menu-centered :deep(.n-menu-item-content .n-menu-item-content__icon),
.nav-menu-centered :deep(.n-menu-item-content .n-menu-item-content-header) {
  color: white !important;
}

.nav-menu-centered :deep(.n-menu-item:not(.n-menu-item--selected)) .n-menu-item-content {
  color: white !important;
}

.nav-menu-centered :deep(.n-menu-item:not(.n-menu-item--selected)) .n-menu-item-content * {
  color: white !important;
}

.nav-menu-centered :deep(.n-menu-item-content::before) {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent, rgba(0, 255, 255, 0.2), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 8px;
}

.nav-menu-centered :deep(.n-menu-item-content:hover) {
  background: rgba(0, 255, 255, 0.15) !important;
  color: #00ffff !important;
  border-color: rgba(0, 255, 255, 0.6);
  box-shadow:
    0 0 20px rgba(0, 255, 255, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  text-shadow: 0 0 15px rgba(0, 255, 255, 0.8);
}

.nav-menu-centered :deep(.n-menu-item-content:hover::before) {
  opacity: 1;
}

.nav-menu-centered :deep(.n-menu-item-content--selected) {
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.25), rgba(255, 0, 150, 0.15)) !important;
  color: #00ffff !important;
  border-color: #00ffff;
  box-shadow:
    0 0 25px rgba(0, 255, 255, 0.7),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    0 4px 15px rgba(0, 255, 255, 0.3);
  text-shadow: 0 0 20px rgba(0, 255, 255, 1);
  transform: scale(1.05);
}

/* Animation des icônes emoji */
.nav-menu-centered :deep(.n-menu-item-content) span {
  filter: none;
  transition: all 0.3s ease;
}

.nav-menu-centered :deep(.n-menu-item-content:hover) span {
  filter: drop-shadow(0 0 15px rgba(0, 255, 255, 1));
  transform: scale(1.2);
}

.nav-menu-centered :deep(.n-menu-item-content--selected) span {
  filter: drop-shadow(0 0 20px rgba(0, 255, 255, 1));
  transform: scale(1.3);
  animation: pulse-icon 2s ease-in-out infinite alternate;
}

@keyframes pulse-icon {
  from { filter: drop-shadow(0 0 20px rgba(0, 255, 255, 1)); }
  to { filter: drop-shadow(0 0 30px rgba(0, 255, 255, 1)) drop-shadow(0 0 40px rgba(255, 0, 150, 0.5)); }
}

/* Menu burger mobile */
.mobile-menu-button {
  border: 2px solid rgba(0, 255, 255, 0.6) !important;
  background: rgba(0, 255, 255, 0.1) !important;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.mobile-menu-button:hover {
  background: rgba(0, 255, 255, 0.2) !important;
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.5);
  transform: scale(1.1);
}

.burger-icon {
  color: #00ffff;
  font-size: 20px;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
}

/* Styles pour le drawer mobile */
.mobile-drawer :deep(.n-drawer) {
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
}

.mobile-drawer-content {
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%) !important;
  border-left: 2px solid;
  border-image: linear-gradient(90deg, #00d4ff, #7b2cbf, #ff006e) 1;
}

.mobile-drawer-content :deep(.n-drawer-header) {
  border-bottom: 1px solid rgba(0, 255, 255, 0.3);
  color: #00ffff !important;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.mobile-drawer-content :deep(.n-drawer-header__main) {
  color: #00ffff !important;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
}

/* Menu mobile vertical */
.mobile-nav-menu :deep(.n-menu-item-content) {
  color: white !important;
  font-family: 'Courier New', monospace;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 8px 0;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
  text-shadow: none;
}

.mobile-nav-menu :deep(.n-menu-item-content .n-menu-item-content__icon),
.mobile-nav-menu :deep(.n-menu-item-content .n-menu-item-content-header) {
  color: white !important;
}

.mobile-nav-menu :deep(.n-menu-item) .n-menu-item-content {
  color: white !important;
}

.mobile-nav-menu :deep(.n-menu-item:not(.n-menu-item--selected)) .n-menu-item-content {
  color: white !important;
}

.mobile-nav-menu :deep(.n-menu-item:not(.n-menu-item--selected)) .n-menu-item-content *{
  color: white !important;
}

.mobile-nav-menu :deep(.n-menu-item-content:hover) {
  background: rgba(0, 255, 255, 0.15) !important;
  color: #00ffff !important;
  border-color: rgba(0, 255, 255, 0.6);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
  text-shadow: 0 0 15px rgba(0, 255, 255, 0.8);
}

.mobile-nav-menu :deep(.n-menu-item-content--selected) {
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.25), rgba(255, 0, 150, 0.15)) !important;
  color: #00ffff !important;
  border-color: #00ffff;
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.7);
  text-shadow: 0 0 20px rgba(0, 255, 255, 1);
}

/* Responsive classes */
.desktop-only {
  display: flex;
}

.mobile-only {
  display: none;
}

/* Responsive */
@media (max-width: 768px) {
  .header-content {
    padding: 0 16px;
  }

  .brand {
    left: 16px;
  }

  .desktop-only {
    display: none;
  }

  .mobile-only {
    display: flex;
  }
}

@media (max-width: 640px) {
  .brand {
    position: static;
    margin-bottom: 8px;
  }

  .header-content {
    flex-direction: row;
    justify-content: space-between;
    height: 64px;
    padding: 12px 16px;
  }

  .header::before {
    animation-duration: 2s;
  }
}
</style>
