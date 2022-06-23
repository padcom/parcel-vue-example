import { createApp } from 'vue'

import App from './App.vue'

globalThis.__VUE_OPTIONS_API__ = false
globalThis.__VUE_PROD_DEVTOOLS__ = false

createApp(App).mount('#app')
