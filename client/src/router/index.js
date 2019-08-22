import Vue from 'vue'
import Router from 'vue-router'
import Complaint from '@/components/Complaint'
import displayComplaint from '@/components/displayComplains'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/complains',
      name: 'Complaint',
      component: Complaint
    },
    {
    	path: '/showComplains',
    	name: 'displayComplains',
    	component:displayComplaint
    }
  ]
})
