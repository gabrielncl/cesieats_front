import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Cart from "../views/CartView.vue";
import Shop from "../views/ShopView.vue";
import Login from "../views/LoginView.vue";
import Register from "../views/RegisterView.vue";
import authentication from "../middleware/authentication.js";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	/*{
		path: "/",
		name: "login",
		component: Login,
	},*/
	{
		path: "/login",
		name: "login",
		component: Login,
	},
	{
		path: "/register",
		name: "register",
		component: Register,
	},
	{
		path: "/cart",
		name: "cart",
		component: Cart,
    beforeEnter: authentication,
	},
	{
		path: "/user-panel",
		name: "user-panel",
		/*component: Panel,*/
    beforeEnter: authentication,
	},
	{
		path: "/shop/restaurants",
		name: "restaurants",
		component: Shop,
		beforeEnter: authentication,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
