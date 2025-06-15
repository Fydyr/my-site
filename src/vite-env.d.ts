declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly BASE_URL: string
  // Add other env variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
