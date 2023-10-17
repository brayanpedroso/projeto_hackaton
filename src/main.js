import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App).use(router).mount('#app')

app.mount('#app')

createApp(App)
