<template>
  <div>
    <md-table v-model="items" md-card @md-selected="onSelect" v-for="(item, itemIdx) in items" :key='itemIdx' id= "dataIdx">

      <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple" md-auto-select> 
        <md-table-cell md-label="날짜" md-sort-by="date">{{item.orderitem.updateDate}}</md-table-cell>
        <md-table-cell md-label="품명" md-sort-by="name"> {{item.orderitem.tbItem_Id}}</md-table-cell>
        <md-table-cell md-label="수량" md-sort-by="qty">{{item.orderitem.qty}}</md-table-cell>
        <md-table-cell md-label="상태" md-sort-by="state">{{item.orderitem.state}}</md-table-cell>
        <md-table-cell md-label="가격" md-sort-by="amount">{{item.orderitem.amount}}</md-table-cell>
        <md-table-cell md-label="비고" md-sort-by="memo">{{item.item.memo}}</md-table-cell>
      </md-table-row> 
    </md-table>
    
      <strong>선택된 아이템:</strong>
      {{selected}} <br>
    <md-table class="button">
    <md-button class="md-raised md-success" v-on:click="refund" md-alignment="centered" >반품신청</md-button>
    <md-button class="md-raised md-success" v-on:click="finished" md-alignment="centered">배송완료</md-button>
    </md-table>
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
      checkedItem: {
        "orderItemList":[
          {
            "orderItemId":"",
            "orderItemState": ""
          }
        ],
        "orderId" :"",
        "orderState" : ""
      },
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
      console.log("반품버튼누르면")
      console.log(this.selected[0].orderitem.id)
      this.checkedItem.orderItemList.orderItemId = this.selected[0].orderitem.id
      this.checkedItem.orderItemList.orderItemState = "반품접수"
      this.checkedItem.orderId = this.selected[0].orderitem.id
      this.checkedItem.orderState = "반품접수"
      console.log(this.checkedItem)

      axios.put("http://freshntech.cafe24.com/orderdetail/", this.checkedItem
        ).then(function(response) {
          console.log('반품접수');
        }).catch(function(error) {
          console.log('Error');
      })
    },
    finished: function(){
      console.log("배송완료버튼누르면")
      console.log(this.selected[0].orderitem.id)
      this.checkedItem.orderItemList.orderItemId = this.selected[0].orderitem.id
      this.checkedItem.orderItemList.orderItemState = "배송완료"
      this.checkedItem.orderId = this.selected[0].orderitem.id
      this.checkedItem.orderState = "배송완료"
      console.log(this.checkedItem)

      axios.put("http://freshntech.cafe24.com/orderdetail/", this.checkedItem
        ).then(function(response) {
          console.log('배송완료접수');
        }).catch(function(error) {
          console.log('Error');
      })
    },
    onSelect: function(event){ 
      this.selected = event
      console.log(event)
    }
  },
   //fetched when component is created
    created: function() {
     
    },

    mounted: function(){
        this.$http.get("http://freshntech.cafe24.com/orderdetail/"+this.$route.params.id)
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
    font-size: "xx-small";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .button {
    color: #2c3e50;
  }
</style>