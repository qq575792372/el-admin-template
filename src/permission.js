import router from './router'
import store from './store'
import defaultSettings from './settings'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach((to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = to.meta.title || defaultSettings.title

  // next
  next()

  // end progress bar
  NProgress.done()
})

router.afterEach((to, from) => {
  // finish progress bar
  NProgress.done()
})