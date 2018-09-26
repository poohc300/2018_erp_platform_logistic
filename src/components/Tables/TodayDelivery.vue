<template>
  <div>
     <ul v-if="errors && errors.length">
      </ul>
      
      <md-table  v-model="items" v-for="(item, itemIdx) in items" :key='itemIdx' id= "dataIdx">
        <md-table-row slot="md-table-row" slot-scope="{ items }" md-auto-select v-on:click="detail(item.id)">
          <md-table-cell>
            <span> {{item.id}}</span>
            <br>
            <span> {{item.amount}}  {{ item.payment }}</span>
            <br>
            <span> {{ item.itemcount }}</span>
            <br>
            <span> {{ item.address1 }} {{item.address2}}</span>
          </md-table-cell>
          <md-table-cell>
            <span> {{item.orderstate}}</span>
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
    //http://freshntech.cafe24.com/order/getDelivererOrder/KRBS000001?condition=7
   //fetched when component is created
    mounted: function() {
         this.$http.get("http://freshntech.cafe24.com/order/getOrder/KRBS000001?condition=7")
          .then( response=>{

              
          console.log("디비에서 데이터 가져오기")
          
          this.items = response.data
          for(var i=0;i<response.data.length;i++){
            this.items[i].id = response.data[i].id
            this.items[i].tbcustomer_id = response.data[i].tbcustomer_id
            this.items[i].itemcount = response.data[i].itemcount
            this.items[i].amount = response.data[i].amount
            this.items[i].points = response.data[i].points
            this.items[i].payment = response.data[i].payment
            this.items[i].payMethod = response.data[i].payMethod
            this.items[i].tbdeliverer_id = response.data[i].tbdeliverer_id
            this.items[i].salespersonid = response.data[i].salespersonid
            this.items[i].orderstate = response.data[i].orderstate
            this.items[i].updatedate = response.data[i].updatedate
            this.items[i].address1 = response.data[i].address1
            this.items[i].address2 = response.data[i].address2
            this.items[i].address3 = response.data[i].address3
            this.items[i].memo = response.data[i].memo
            this.items[i].remark1 = response.data[i].remark1
            this.items[i].remark2 = response.data[i].remark2
            this.items[i].regdate = response.data[i].regdate
            console.log(response.data)
          }
          
          console.log(this.items)
        

      // //json에서 주소 받아오기
      // var addressData = getAddressData()
       
        var baseUrl = 'http://freshntech.cafe24.com'
        var getDeliveryOrder = "/order/getDelivererOrder/KRBS00001?condition={0}"
        var addressList = []
        var id = "01053530001"
        var password = "1234"
        var loginUrl = "http://freshntech.cafe24.com/deliverer/login"
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