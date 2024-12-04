import './assets/base.css'
import './assets/main.css'
import './assets/styles.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Button  from 'primevue/button'

const app = createApp(App)

app.use(router)
app.use(PrimeVue,{
  theme:'none'
})
app.component('Button',Button)

app.mount('#app')
