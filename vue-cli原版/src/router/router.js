import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import About from '../components/about';
import Home from '../components/home';
import Zhu from '../components/zhu';
import Child from '../components/child';
import User from '../components/user';

let router = new VueRouter({
	mode: 'history',
	routes: [
    {
			path: '/user/:abc?',
			component: User,
			name: 'User'
		},
		{
			path: '/',
			component: Zhu,
			name: 'Zhu'
		},
		{
			path: '/home',
			component: Home,
      name: 'Home',
      children: [
        {
          path: 'child',
          component: Child,
          name: 'Child'
        }
      ]
		},
		{
			path: '/about',
			component: About,
			name: 'About'
    }
    // ,
		// {
		// 	path: '*',
		// 	redirect: function(to) {//重定向执行的函数
		//  	// console.log(to);
		// 		switch (to.path) {
		// 			case '/about':
		// 				return '/home';
		// 				break;
		// 			case '/home':
		// 				return '/about';
		// 				break;
		// 			default:
		// 				return '/';
		// 				break;
		// 		}
		// 	}
		// }
	]
});
export default router;
