import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'
import Home from '@/pages/Home.vue'
import Maps from '@/pages/Maps.vue'
import EditProfileForm from '@/pages/UserProfile/EditProfileForm.vue'
import DetailDelivery from '@/pages/DetailDelivery.vue'
import Login from '@/pages/Login.vue'

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'home/detail-delivery/:id',
        name: 'DetailDelivery',
        component: DetailDelivery
      },
      {
        path: 'edit-profileform',
        name: 'EditProfileForm',
        component: EditProfileForm
      },
      {
        path: 'maps',
        name: 'Maps',
        meta: {
          hideFooter: true
        },
        component: Maps
      }
    ]
  }
]

export default routes
