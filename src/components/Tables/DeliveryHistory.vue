<template>
  <div>
     <ul v-if="errors && errors.length">
      </ul>
      
      <md-table  v-model="items" v-for="(item, itemIdx) in items" :key='itemIdx' id= "dataIdx">
        <md-table-row slot="md-table-row" slot-scope="{ items }" md-selectable="multiple" md-auto-select>
          <md-table-cell v-on:click="dialog=true">
            <span>배송번호: {{item.orderNumber}}</span>
            <br>
            <span>배송회사: {{item.account}}</span>
            <br>
            <span>배송주소: {{ item.address }}</span>
            <br>
            <span>배송날짜: {{item.deliveryRequest}}</span>
            <br>
            <span>배송수량: {{item.allOrder}}</span>
          </md-table-cell>
          <md-table-cell>
            <span>{{item.orderStatus}}</span>
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
  name: 'DeliveryHistory',
  data () {
    return {
      user:0,
      selected: [],
      errors: [],
      items: [
        {
          
             number: 'number',
             address: 'address',
             allOrder: 'allOrder',
             account:'account',
             deliveryRequest:'deliveryRequest',
             orderStatus:'orderStatus'
          
        }
      ]
    }
  },
  methods: {
    getData: function() {
      var baseUrl ='http://freshntech.cafe24.com'
      axios.get('http://freshntech.cafe24.com/order')
      .then(response => {
        this.items = response.data
        console.log("데이터:")
        console.log(this.items[2])
      })
      .catch(e =>{
        this.errors.push(e)
      }) 
    },
    showModal: function (){
      
    }  
  },
   //fetched when component is created
    created: function() {
      // this.getData(),
      this.getData()
    }
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