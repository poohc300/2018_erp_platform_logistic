
 <!--    -->
<template>
  <div class="content">
    <img src="../assets/img/design/changeLogin.jpg"/>
    <div class="text-field">
      <md-field>
      <label>사원</label>
      <md-input v-model="id"></md-input>
      </md-field>
      <md-field>
      <label>비밀번호</label>
      <md-input v-model="password"></md-input>
      </md-field>
      <md-button class="md-success" @click="onSubmit">로그인</md-button>
    </div>
    
  </div>
</template>

<script>
import {
  StatsCard,
  NavTabsCard,
} from '@/components'


import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      user:{
        "userid":"",
        "userpw":""
      },
      selected: [],
      errors: [],
      items: [
        
      ]
    }
  },
  methods: {
    onSubmit(){
        
       var baseUrl = 'http://freshntech.cafe24.com'
        var getDeliveryOrder = "/order/getDelivererOrder/KRBS00001?condition={0}"
        var addressList = []
        var id = "01053530001"
        var password = "1234"
        var loginUrl = "http://freshntech.cafe24.com/deliverer/login"
        var basicAuth = 'Basic ' + btoa(id + ':' + password)
        this.user.userid = id
        this.user.userpw = password
       axios.post(loginUrl, this.user)
        .then(function(response) {
          console.log('Authenticated');
          console.log(response)
        }).catch(function(error) {
          console.log('Error on Authentication');
      })
    }
  }
}
</script>
<style>
  .content{
    position: relative;
  }
  .text-field{
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    font: white;
  }
</style>