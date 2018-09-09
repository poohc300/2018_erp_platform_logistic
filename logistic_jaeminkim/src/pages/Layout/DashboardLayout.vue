<template>
  <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}">
    <notifications></notifications>

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/home">
        <md-icon>dashboard</md-icon>
        <p>홈</p>
      </sidebar-link>
      <!-- <sidebar-link to="/table">
        <md-icon>content_paste</md-icon>
        <p>목록</p>
      </sidebar-link> -->
      <sidebar-link to="/users">
        <md-icon>person_add</md-icon>
        <p>회원가입</p>
      </sidebar-link>
      <sidebar-link to="/maps">
        <md-icon>local_shipping</md-icon>
        <p>지도보기</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>
    
      <dashboard-content>
      </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
import TopNavbar from './TopNavbar.vue'
import ContentFooter from './ContentFooter.vue'
import DashboardContent from './Content.vue'
import MobileMenu from '@/pages/Layout/MobileMenu.vue'


export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
  }
}
</script>
