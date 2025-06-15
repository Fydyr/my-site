<template>
  <n-layout-header bordered class="header overlay">
    <div class="header-content container">
      <!-- Logo/Brand -->
      <div class="brand">
        <n-text strong class="text-primary text-glow brand-text">
          Enzo <br>Fournier
        </n-text>
      </div>

      <!-- Navigation Menu Desktop -->
      <n-menu :options="menuOptions" :value="selectedKey" mode="horizontal" :root-indent="36"
        class="nav-menu-centered desktop-only" />

      <!-- Menu Burger Mobile -->
      <n-button quaternary circle class="btn mobile-menu-button mobile-only" @click="showMobileMenu = true">
        <template #icon>
          <span class="burger-icon">☰</span>
        </template>
      </n-button>
    </div>

    <!-- Drawer pour le menu mobile -->
    <n-drawer v-model:show="showMobileMenu" :width="280" placement="right" class="mobile-drawer">
      <n-drawer-content title="Navigation" closable class="mobile-drawer-content">
        <n-menu :options="menuOptions" :value="selectedKey" mode="vertical" class="mobile-nav-menu" />
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
/* ========================================
   HEADER SPÉCIFIQUE
   ======================================== */
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--bg-primary);
  backdrop-filter: blur(20px);
  border-bottom: 2px solid;
  border-image: var(--border-gradient);
  box-shadow: var(--shadow-primary), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: center;
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

.brand-text {
  font-size: 20px;
  letter-spacing: var(--letter-spacing-wide);
}

/* ========================================
   NAVIGATION DESKTOP
   ======================================== */
.nav-menu-centered {
  display: flex;
  justify-content: center;
  flex: 1;
  z-index: 2;
  position: relative;
}

.nav-menu-centered :deep(.n-menu-item-content) {
  color: var(--text-primary) !important;
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing);
  text-transform: uppercase;
  position: relative;
  transition: var(--transition-smooth);
  border: var(--border-primary);
  border-radius: var(--border-radius);
  background: var(--bg-card);
  margin: 0 12px;
  padding: 12px 20px;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  text-align: center;
}

.nav-menu-centered :deep(.n-menu-item-content .n-menu-item-content__icon) {
  color: var(--text-primary) !important;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
}

.nav-menu-centered :deep(.n-menu-item-content .n-menu-item-content-header) {
  color: var(--text-primary) !important;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
}

.nav-menu-centered :deep(.n-menu-item) {
  margin: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-menu-centered :deep(.n-menu-item:first-child) {
  margin-left: 0;
}

.nav-menu-centered :deep(.n-menu-item:last-child) {
  margin-right: 0;
}

.nav-menu-centered :deep(.n-menu-item:not(.n-menu-item--selected)) .n-menu-item-content {
  color: var(--text-primary) !important;
}

.nav-menu-centered :deep(.n-menu-item:not(.n-menu-item--selected)) .n-menu-item-content * {
  color: var(--text-primary) !important;
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
  border-radius: var(--border-radius);
}

.nav-menu-centered :deep(.n-menu-item-content:hover) {
  background: var(--bg-hover) !important;
  color: var(--primary-color) !important;
  border-color: var(--border-glow);
  box-shadow: var(--shadow-glow), inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  text-shadow: var(--text-glow);
}

.nav-menu-centered :deep(.n-menu-item-content:hover::before) {
  opacity: 1;
}

.nav-menu-centered :deep(.n-menu-item-content--selected) {
  background: var(--bg-selected) !important;
  color: var(--primary-color) !important;
  border-color: var(--primary-color);
  box-shadow: var(--shadow-intense), inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 4px 15px rgba(0, 255, 255, 0.3);
  text-shadow: var(--text-glow-intense);
  transform: scale(1.05);
}

/* Animation des icônes emoji */
.nav-menu-centered :deep(.n-menu-item-content) span {
  filter: none;
  transition: var(--transition-fast);
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

/* ========================================
   MENU BURGER MOBILE
   ======================================== */
.mobile-menu-button {
  border: 2px solid var(--border-glow) !important;
  background: rgba(0, 255, 255, 0.1) !important;
  box-shadow: var(--shadow-glow);
  width: 44px;
  height: 44px;
  min-width: 44px;
  max-width: 44px;
  flex-shrink: 0;
}

.mobile-menu-button:hover {
  background: var(--bg-hover) !important;
  box-shadow: var(--shadow-intense);
  transform: scale(1.1);
}

.burger-icon {
  color: var(--primary-color);
  font-size: 20px;
  text-shadow: var(--text-glow);
}

/* ========================================
   DRAWER MOBILE
   ======================================== */
.mobile-drawer :deep(.n-drawer) {
  background: var(--bg-primary);
}

.mobile-drawer-content {
  background: var(--bg-primary) !important;
  border-left: 2px solid;
  border-image: var(--border-gradient);
}

.mobile-drawer-content :deep(.n-drawer-header) {
  border-bottom: 1px solid rgba(0, 255, 255, 0.3);
  color: var(--primary-color) !important;
  font-family: var(--font-primary);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
}

.mobile-drawer-content :deep(.n-drawer-header__main) {
  color: var(--primary-color) !important;
  text-shadow: var(--text-glow);
}

/* ========================================
   MENU MOBILE VERTICAL
   ======================================== */
.mobile-nav-menu :deep(.n-menu-item-content) {
  color: var(--text-primary) !important;
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing);
  text-transform: uppercase;
  margin: 8px 0;
  border: var(--border-primary);
  border-radius: var(--border-radius);
  background: var(--bg-card);
  transition: var(--transition-fast);
  display: flex !important;
  align-items: center !important;
  justify-content: flex-start !important;
  text-align: left;
  padding: 16px 20px;
}

.mobile-nav-menu :deep(.n-menu-item-content .n-menu-item-content__icon) {
  color: var(--text-primary) !important;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  flex-shrink: 0;
}

.mobile-nav-menu :deep(.n-menu-item-content .n-menu-item-content-header) {
  color: var(--text-primary) !important;
  display: flex;
  align-items: center;
  flex: 1;
}

.mobile-nav-menu :deep(.n-menu-item) {
  display: flex;
  align-items: center;
}

.mobile-nav-menu :deep(.n-menu-item:not(.n-menu-item--selected)) .n-menu-item-content {
  color: var(--text-primary) !important;
}

.mobile-nav-menu :deep(.n-menu-item:not(.n-menu-item--selected)) .n-menu-item-content * {
  color: var(--text-primary) !important;
}

.mobile-nav-menu :deep(.n-menu-item-content:hover) {
  background: var(--bg-hover) !important;
  color: var(--primary-color) !important;
  border-color: var(--border-glow);
  box-shadow: var(--shadow-glow);
  text-shadow: var(--text-glow);
}

.mobile-nav-menu :deep(.n-menu-item-content--selected) {
  background: var(--bg-selected) !important;
  color: var(--primary-color) !important;
  border-color: var(--primary-color);
  box-shadow: var(--shadow-intense);
  text-shadow: var(--text-glow-intense);
}

/* ========================================
   CLASSES RESPONSIVE
   ======================================== */
.desktop-only {
  display: flex;
}

.mobile-only {
  display: none;
}

/* ========================================
   RESPONSIVE
   ======================================== */
@media (max-width: 768px) {
  .header-content {
    padding: 0 16px;
    justify-content: space-between;
  }

  .brand {
    position: relative;
    left: auto;
    flex-shrink: 0;
  }

  .desktop-only {
    display: none;
  }

  .mobile-only {
    display: flex;
    flex-shrink: 0;
  }
}

@media (max-width: 480px) {
  .header-content {
    padding: 12px 16px;
    justify-content: space-between;
  }

  .brand {
    position: relative;
    left: auto;
    flex-shrink: 0;
  }

  .brand-text {
    font-size: 16px;
  }

  .mobile-menu-button {
    flex-shrink: 0;
    width: 44px;
    height: 44px;
    min-width: 44px;
  }
}

@media (max-width: 320px) {
  .header-content {
    padding: 8px 12px;
  }

  .brand-text {
    font-size: 14px;
  }
}
</style>
