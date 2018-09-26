<template>
  <div>
     <ul v-if="errors && errors.length">
      </ul>
      
      <md-table  v-model="items" v-for="(item, itemIdx) in items" :key='itemIdx' id= "dataIdx">
        <md-table-row slot="md-table-row" slot-scope="{ items }"  md-auto-select>
          <md-table-cell v-on:click="dialog=true">
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
            <span>{{item.OrderState}}</span>
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
  name: 'RefundHistory',
  data () {
    return {
      user:0,
      selected: [],
      errors: [],
      items: [
        
      
            
      ]
    }
  },
  methods: {
   
  },
   //fetched when component is created
    mounted: function() {
      
      // this.getData(),
         this.$http.get("http://freshntech.cafe24.com/order/getDelivererRefund/KRBS000001?condition=7")
          .then( response=>{

              
          console.log("반품내역정보 가져오기")
          
          this.items = response.data
          for(var i=0;i<response.data.length;i++){
            this.items[i].tbCustom_ID = response.data[i].tbCustom_ID
            this.items[i].Amount = response.data[i].Amount
            this.items[i].Address2 = response.data[i].Address2
            this.items[i].Address3 = response.data[i].Address3 
            this.items[i].Address1 = response.data[i].Address1
            this.items[i].Requests = response.data[i].Requests
            this.items[i].OrderDate = response.data[i].OrderDate 
            this.items[i].UpdateDate = response.data[i].UpdateDate 
            this.items[i].Points = response.data[i].Points 
            this.items[i].Payment = response.data[i].Payment 
            this.items[i].Remark2 = response.data[i].Remark2 
            this.items[i].Remark1 = response.data[i].Remark1 
            this.items[i].PayMethod = response.data[i].PayMethod 
            this.items[i].ItemCount = response.data[i].ItemCount 
            this.items[i].tbDeliverer_ID = response.data[i].tbDeliverer_ID 
            this.items[i].ID = response.data[i].ID 
            this.items[i].ReqDate = response.data[i].ReqDate 
            this.items[i].OrderState = response.data[i].OrderState 
            this.items[i].SalesPersonID = response.data[i].SalesPersonID 
            this.items[i].Memo = response.data[i].Memo 
            this.items[i].customerBName = response.data[i].customerBName 
            
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