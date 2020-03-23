export default[
  {
    path:"/home",
    name:"Home",
    component:() => import('../components/views/Home.vue')
  },
  {
    path:"/inManager",
    name:"InManager",
    component:() => import('../components/views/InManager.vue')
  },
  {
    path:"/outManager",
    name:"OutManager",
    component:() => import('../components/views/OutManager.vue')
  },
  {
    path:"/checkManager",
    name:"CheckManager",
    component:() => import('../components/views/CheckManager.vue')
  },
  {
    path:"/queryAll",
    name:"QueryAll",
    component:() => import('../components/views/QueryAll.vue')
  }
  
]