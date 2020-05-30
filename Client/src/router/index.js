import Vue from 'vue'
import Router from 'vue-router'

import Default from '@/components/Default'
import ExampleIndex from '@/components/example/Index'
import ExampleView from '@/components/example/View'
import StudentIndex from '@/components/students/Index'
import StudentCreateOrUpdate from '@/components/students/CreateOrUpdate'
import HojaDeTiemposIndex from '@/components/HojaDeTiempos/Index'
import HojaDeTiemposCreateOrUpdate from '@/components/HojaDeTiempos/CreateOrUpdate'

Vue.use(Router)

const routes = [
  { path: '/', name: 'Default', component: Default },
  { path: '/example', name: 'ExampleIndex', component: ExampleIndex },
  { path: '/example/:id', name: 'ExampleView', component: ExampleView },
  { path: '/students/', name: 'StudentIndex', component: StudentIndex },
  { path: '/students/add', name: 'StudentCreate', component: StudentCreateOrUpdate },
  { path: '/students/:id/edit', name: 'StudentEdit', component: StudentCreateOrUpdate },  
  { path: '/HojaDeTiempos/', name: 'HojaDeTiemposIndex', component: HojaDeTiemposIndex },
  { path: '/HojaDeTiempos/add', name: 'HojaDeTiemposCreate', component: HojaDeTiemposCreateOrUpdate },
  { path: '/HojaDeTiempos/:id/edit', name: 'HojaDeTiemposEdit', component: HojaDeTiemposCreateOrUpdate }
]

export default new Router({
  routes
})
