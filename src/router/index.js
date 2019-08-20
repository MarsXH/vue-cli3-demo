import Vue from "vue";
import Router from "vue-router";
import routers from './router'

Vue.use(Router);

const router =  new Router({
  // mode: "history",
  // scrollBehavior(to) {
  //   if (to.hash) {
  //     return {
  //       selector: to.hash
  //     };
  //   }
  // },
  routes: routers,
});
// router.beforeEach((to, next) => {
//   iView.LoadingBar.start()
//   var condition = true
//   if (to.meta.auth) {
//     if (condition) {
//       next()
//     }
//   } else {
//     next()
//   }
// })
// router.afterEach(() => {
//   window.scrollTo(0, 0);
// });

export default router
