import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import * as Icons from '@element-plus/icons-vue';

const app = createApp(App);
// 注册Element Plus组件
app.use(ElementPlus);
// 注册Element Plus图标组件
for (const [key, component] of Object.entries(Icons)) {
    app.component(key, component);
}
app.mount('#app');