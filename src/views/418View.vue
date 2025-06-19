<template>
  <div class="section particles">
    <!-- Contenu principal avec overlay de scan -->
    <div class="overlay">
      <div class="container">
        <!-- Titre principal avec effet glow -->
        <h1
          style="
            font-size: clamp(1.5rem, 4vw, 3rem);
            background: linear-gradient(45deg, #00ffff, #ff006e);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-align: center;
            margin: 2rem 0;
            animation: glow 3s ease-in-out infinite alternate;
          "
        >
          418 I'm a Teapot
        </h1>

        <!-- Icône de théière avec animation -->
        <div style="text-align: center" class="mb-4">
          <n-icon
            size="120"
            style="
              color: var(--primary-color);
              animation: pulse-icon 3s ease-in-out infinite alternate;
            "
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M4,19H20C20.55,19 21,19.45 21,20A1,1 0 0,1 20,21H4A1,1 0 0,1 3,20C3,19.45 3.45,19 4,19M20,16V7A1,1 0 0,0 19,6H17V4A2,2 0 0,0 15,2H9A2,2 0 0,0 7,4V6H5A1,1 0 0,0 4,7V16L6,18H18L20,16M16,16H8V8H16V16Z"
              ></path>
            </svg>
          </n-icon>
        </div>

        <!-- Message principal dans une carte -->
        <div
          style="
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 8px;
            backdrop-filter: blur(20px);
            padding: 2rem;
            margin: 1rem 0;
            position: relative;
            overflow: hidden;
            border: 2px solid #00ffff;
            box-shadow: 0 0 25px rgba(0, 255, 255, 0.7);
            animation: pulse-glow 2s ease-in-out infinite alternate;
          "
        >
          <p
            style="
              color: #00ffff !important;
              font-family: 'Courier New', monospace !important;
              font-weight: 600 !important;
              letter-spacing: 2px !important;
              text-transform: uppercase !important;
              text-shadow: 0 0 15px rgba(0, 255, 255, 0.8) !important;
              margin-bottom: 1.5rem !important;
            "
          >
            SERVER PROTOCOL ERROR DETECTED
          </p>
          <p
            style="
              color: rgb(0, 0, 0) !important;
              font-size: 1.1rem !important;
              line-height: 1.6 !important;
              margin-bottom: 1.5rem !important;
            "
          >
            En chinois, "teapot" se traduit par "Beiju" (悲剧), ce qui signifie littéralement
            "tragédie". Cette erreur HTTP humoristique indique que le serveur refuse de préparer du
            café car il s'agit d'une théière.
          </p>

          <!-- Détails de l'erreur avec composants Naive UI stylés -->
          <n-card
            embedded
            style="
              background: rgba(0, 0, 0, 0.4);
              border: 1px solid var(--primary-color);
              box-shadow: var(--shadow-glow);
            "
          >
            <n-space vertical size="small">
              <n-thing>
                <template #header>
                  <n-text
                    style="
                      color: #00ffff !important;
                      font-weight: bold;
                      font-family: 'Courier New', monospace;
                    "
                    >Status Code</n-text
                  >
                </template>
                <template #header-extra>
                  <n-tag
                    type="error"
                    style="
                      background: rgba(0, 255, 255, 0.25) !important;
                      border: 1px solid #00ffff !important;
                      color: #00ffff !important;
                    "
                  >
                    418
                  </n-tag>
                </template>
              </n-thing>

              <n-thing>
                <template #header>
                  <n-text
                    style="
                      color: #00ffff !important;
                      font-weight: bold;
                      font-family: 'Courier New', monospace;
                    "
                    >Protocol</n-text
                  >
                </template>
                <template #header-extra>
                  <n-tag
                    style="
                      background: rgba(255, 255, 255, 0.08) !important;
                      border: 1px solid rgba(0, 255, 255, 0.6) !important;
                      color: rgb(0, 0, 0) !important;
                    "
                  >
                    HTCPCP/1.0
                  </n-tag>
                </template>
              </n-thing>

              <n-thing>
                <template #header>
                  <n-text
                    style="
                      color: #00ffff !important;
                      font-weight: bold;
                      font-family: 'Courier New', monospace;
                    "
                    >Entity</n-text
                  >
                </template>
                <template #header-extra>
                  <n-tag
                    style="
                      background: rgba(255, 255, 255, 0.08) !important;
                      border: 1px solid rgba(0, 255, 255, 0.6) !important;
                      color: rgb(0, 0, 0) !important;
                    "
                  >
                    Short and Stout
                  </n-tag>
                </template>
              </n-thing>
            </n-space>
          </n-card>
        </div>

        <!-- Section d'actions avec espacement amélioré -->
        <div class="mt-4" style="text-align: center">
          <n-space justify="center" size="large" wrap class="mobile-stack">
            <n-button
              type="primary"
              size="large"
              class="btn-primary"
              style="
                background: var(--bg-selected);
                border-color: var(--primary-color);
                color: var(--primary-color);
                box-shadow: var(--shadow-intense);
                backdrop-filter: blur(10px);
              "
              @click="handleTruth"
            >
              <template #icon>
                <n-icon style="color: var(--primary-color)">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"
                    ></path>
                  </svg>
                </n-icon>
              </template>
              Accept the Truth
            </n-button>

            <n-button
              size="large"
              class="btn-primary"
              style="
                background: var(--bg-card);
                border: var(--border-primary);
                color: red;
                backdrop-filter: blur(10px);
              "
              @click="handleRetry">
              <template #icon>
                <n-icon>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"></path>
                  </svg>
                </n-icon>
              </template>
              Retry Request
            </n-button>

            <n-button
              size="large"
              class="btn-primary"
              style="
                background: var(--bg-card);
                border: var(--border-primary);
                color: green;
                backdrop-filter: blur(10px);
              "
              @click="handleHome">
              <template #icon>
                <n-icon>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"></path>
                  </svg>
                </n-icon>
              </template>
              Return Home
            </n-button>
          </n-space>
        </div>

        <!-- Citation amusante avec composant Naive UI -->
        <div class="card mt-4">
          <n-blockquote
            style="
              color: rgb(0, 0, 0) !important;
              border-left: 3px solid #7b2cbf;
              font-family: 'Courier New', monospace;">
            "The fundamental principle of brewing excellence: A teapot's duty is to steep, not to caffeinate."
            <template #footer>
              <n-text
                style="
                  color: #00ffff !important;
                  font-size: 0.9rem;
                  font-family: 'Courier New', monospace;
                "
              >
                — RFC 2324, The Philosophy of Tea
              </n-text>
            </template>
          </n-blockquote>
        </div>

        <!-- Indicateur de statut avec progress animé -->
        <div class="mt-4">
          <n-card
            embedded
            style="
              background: var(--bg-card);
              border: var(--border-primary);
              backdrop-filter: blur(20px);
            "
          >
            <n-space vertical size="medium">
              <n-text
                style="
                  color: rgba(0, 0, 0, 0.8) !important;
                  text-align: center;
                  display: block;
                  font-family: 'Courier New', monospace;
                "
              >
                Teapot Status Monitor
              </n-text>
              <n-progress
                type="line"
                :percentage="100"
                status="error"
                :show-indicator="false"
                style="--n-fill-color: #00ffff; --n-rail-color: rgba(0, 255, 255, 0.2)"
              />
              <n-space justify="space-between">
                <n-text
                  style="
                    color: rgba(0, 0, 0, 0.8) !important;
                    font-size: 0.8rem;
                    font-family: 'Courier New', monospace;
                  "
                >
                  Coffee Brewing: DISABLED
                </n-text>
                <n-text
                  style="
                    color: #00ffff !important;
                    font-size: 0.8rem;
                    font-family: 'Courier New', monospace;
                  "
                >
                  Tea Ready: ✓ ACTIVE
                </n-text>
              </n-space>
            </n-space>
          </n-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  NButton,
  NIcon,
  NSpace,
  NCard,
  NThing,
  NText,
  NTag,
  NBlockquote,
  NProgress,
  useMessage,
} from 'naive-ui'

const message = useMessage()

const handleTruth = () => {
  message.success('Truth accepted! The teapot remains proud of its identity. 🫖', {
    duration: 3000,
  })
}

const handleRetry = () => {
  message.warning('Retrying... (Spoiler: Still a teapot)', {
    duration: 2000,
  })
  // Simuler un rechargement
  setTimeout(() => {
    location.reload()
  }, 1500)
}

const handleHome = () => {
  message.info('Redirecting to home...', {
    duration: 2000,
  })
  // Navigation vers l'accueil
  setTimeout(() => {
    window.location.href = '/'
  }, 1000)
}
</script>

<style scoped>
/* Override des styles Naive UI pour s'adapter au thème futuriste */
:deep(.n-card) {
  transition: var(--transition-smooth);
}

:deep(.n-card:hover) {
  border-color: var(--border-glow);
  box-shadow: var(--shadow-glow);
}

:deep(.n-button) {
  transition: var(--transition-smooth);
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing);
  text-transform: uppercase;
}

:deep(.n-button:hover) {
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}

:deep(.n-button:active) {
  transform: translateY(0);
}

:deep(.n-tag) {
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing);
  backdrop-filter: blur(10px);
}

:deep(.n-progress .n-progress-graph .n-progress-graph-line-fill) {
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  box-shadow: var(--shadow-glow);
}

:deep(.n-thing-header) {
  font-family: var(--font-primary);
}

/* Animation pour l'icône */
@keyframes pulse-icon {
  from {
    filter: drop-shadow(0 0 20px rgba(0, 255, 255, 1));
  }
  to {
    filter: drop-shadow(0 0 30px rgba(0, 255, 255, 1)) drop-shadow(0 0 40px rgba(255, 0, 150, 0.5));
  }
}

/* Responsive pour les composants Naive UI */
@media (max-width: 768px) {
  :deep(.n-space) {
    flex-direction: column;
  }

  :deep(.n-button) {
    width: 100%;
    margin: 0.25rem 0;
  }

  :deep(.n-thing) {
    flex-direction: column;
    align-items: flex-start;
  }

  :deep(.n-thing-header-wrapper) {
    margin-bottom: 0.5rem;
  }
}
</style>
