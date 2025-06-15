// Gestion des redirections GitHub Pages
(function (l: Location) {
  if (l.search) {
    const q: Record<string, string> = {};
    l.search.slice(1).split('&').forEach(function (v: string) {
      const a = v.split('=');
      q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
    });
    if (q.p !== undefined) {
      window.history.replaceState(null, '',
        l.pathname.slice(0, -1) + (q.p || '') +
        (q.q ? ('?' + q.q) : '') +
        l.hash
      );
    }
  }
}(window.location));

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { router } from './router.ts'
import './assets/style/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const appElement = document.getElementById('app')
if (appElement) {
  app.mount(appElement)
} else {
  console.error('Could not find #app element')
}
