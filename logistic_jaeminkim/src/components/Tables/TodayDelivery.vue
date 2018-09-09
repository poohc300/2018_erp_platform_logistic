<template>
  <div>
     <ul v-if="errors && errors.length">
      </ul>
      
      <md-table  v-model="items" v-for="(item, itemIdx) in items" :key='itemIdx' id= "dataIdx">
        <md-table-row slot="md-table-row" slot-scope="{ items }" md-auto-select v-on:click="detail(item.ID)">
          <md-table-cell>
            <span> {{item.ID}}</span>
            <br>
            <span> {{item.customerBName}}</span>
            <br>
            <span> {{ item.address }}</span>
            <br>
            <span> {{item.OrderDate}}</span>
            <br>
            <span> {{item.amount}}</span>
          </md-table-cell>
          <md-table-cell>
            <span> {{item.OrderState}}</span>
            <br>
          </md-table-cell> 
        </md-table-row>
      </md-table>
  </div>
</template>

<script>

//to get data from rest api server
import axios from 'axios'
export default {
  name: 'TodayDelivery',
  data () {
    return {
      user:0,
      selected: [],
      errors: [],
      items: [
        {}
      ]
    }
  },
  methods: {
    detail(id){
      this.$router.push('/home/detail-delivery/'+id)
    }
  },
   //fetched when component is created
    mounted: function() {
         this.$http.get("http://192.168.64.131:8080/app/order/getDelivererOrder/KRBS000001?condition=7")
          .then( response=>{

              
          console.log("디비에서 데이터 가져오기")
          
          this.items = response.data
          for(var i=0;i<response.data.length;i++){
            this.items[i].customerBName = response.data[i].customerBName
            this.items[i].ID = response.data[i].ID
            this.items[i].OrderDate = response.data[i].OrderDate
            this.items[i].address = response.data[i].Address1 + response.data[i].Address2
            this.items[i].amount = response.data[i].amount
            this.items[i].OrderState = response.data[i].OrderState
             
          }
          
          console.log(this.items)
        

      // //json에서 주소 받아오기
      // var addressData = getAddressData()
       
        var baseUrl = 'http://192.168.64.131:8080/app'
        var getDeliveryOrder = "/order/getDelivererOrder/KRBS00001?condition={0}"
        var addressList = []
        var id = "01053530001"
        var password = "1234"
        var loginUrl = "http://192.168.64.131:8080/app/deliverer/login"
        var basicAuth = 'Basic ' + btoa(id + ':' + password)
       
       axios.post(loginUrl, {}, {
          headers: { 'Authorization': + basicAuth }
        }).then(function(response) {
          console.log('Authenticated');
        }).catch(function(error) {
          console.log('Error on Authentication');
      })

      
    }
   )}
}
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>