import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Shop from './views/shopping-demo.vue';
import ShopHome from './components/shopping/Home.vue';
import ShopCart from './components/shopping/Cart.vue';
import ShopMe from './components/shopping/Me.vue';
import AddressManage from './components/shopping/AddressManage.vue';
import AddAddress from './components/shopping/AddAddress.vue';
import EditAddress from './components/shopping/EditAddress.vue';
import ShopDetails from './components/shopping/DetailsPage.vue'
import PageNotFound from './components/shopping/404.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/begin',
      name: 'begin',
      component: () => import('./views/begin.vue'),
    },
    {
        path: '/shopping-demo',
        component: Shop,
        redirect: '/ShopHome',
        children: [
            {
                path: '/ShopHome',
                component: ShopHome,
                meta: {index: 1},
            },
            {
                path: '/ShopCart',
                component: ShopCart,
            },
            {
                path: '/ShopMe',
                component: ShopMe,
                children: [
                    {
                        path: '/AddressManage',
                        component: AddressManage,
                        children: [
                            {
                                path: '/AddAddress',
                                component: AddAddress,
                            },
                            {
                                path: '/EditAddress',
                                component: EditAddress,
                            }
                        ]
                    }

                ]
            },
            {
              path: '/DetailsPage',
              component: ShopDetails
            }
        ],

    },
      {
          path: '*',
          component: PageNotFound
      }
  ],
});
