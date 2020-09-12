import blogform from './form.vue'
import blogs from './blogs.vue'
import params from './params.vue'

export default[
	{path:'/',component:blogs},
	{path:'/blogs',component:blogform},
	{path:'/:id',component:params}

]