<template>
  <div>
    <md-table v-model="items" md-card @md-selected="onSelect" v-for="(item, itemIdx) in items" :key='itemIdx' id= "dataIdx">

      <md-table-row slot="md-table-row" slot-scope="{ items }" md-selectable="multiple" md-auto-select>
        <md-table-cell>
        <span>{{item.orderitem.id}}
        {{item.orderitem.qty}} 개 
        {{ item.orderitem.amount }} 원<br>
        정보: {{item.item.unit}}<br>
        원산지: {{item.item.origin}}<br>
        주소<br>
        보류메모: {{item.item.memo}}<br><br>
        </span></md-table-cell>
      </md-table-row>
    </md-table>
    총주문수량<br>
    총주문금액<br><br><br>
    <button v-on:click="refund">반품신청</button>
    <button v-on:click="finished">배송완료</button>
    <modal v-if="showModal" @close="showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->
    <h3 slot="header">custom header</h3>
    
  </modal>
  <!-- <Modal/> -->
  </div>
</template>

<script>

//to get data from rest api server
import axios from 'axios'
import Vue from 'vue'
import $ from 'jquery'
export default {
  name: 'DetailView',
  data () {
    return {
      user:0,
      selected: [],
      errors: [],
      items: [
        
      ],
      //현재 this.$route 정보
      urls:[

      ],
      showModal:false
    }    
  },
  methods: {
    refund: function(){
      if(this.showModal == false){
        this.showModal = true
      }
    },
    finished: function(){
       if(this.showModal == false){
        this.showModal = true
      }
    }
  },
   //fetched when component is created
    created: function() {
     
    },

    mounted: function(){
        this.$http.get("http://192.168.64.131:8080/app/orderdetail/"+this.$route.params.id)
          .then( response=>{

                         
          console.log("상세보기")
          
          this.items = response.data
          for(var i=0;i<response.data.length;i++){
            this.items[i].item = response.data[i].item
            this.items[i].orderitem = response.data[i].orderitem
            
             
          }
          
          console.log(this.items[0].item)
        
        
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
    font-size: "xx-small";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>