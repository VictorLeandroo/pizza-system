import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/pages/Login.vue';
import ClientRegister from '@/pages/ClientRegister.vue';
import OrderRegister from '@/pages/OrderRegister.vue';
import OrderView from '@/pages/OrderView.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/registrar', component: ClientRegister },
  { path: '/registrar-pedido', component: OrderRegister },
  { path: '/pedido', component: OrderView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;