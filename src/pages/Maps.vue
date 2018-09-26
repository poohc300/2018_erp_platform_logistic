<template>
  <div id="map">
   
  </div>
</template>
<script>

import axios from 'axios'
import Vue from 'vue'
import $ from 'jquery'

Vue.prototype.$http = axios
// import products from '../../assets/data/product.json'

let x;
let y;
export default {
  data (){
   
      posts:[]
  
  },

  methods: {


    //시작
    initMap () {
      console.log("initialize drawing map")
          
          
          var map = new Tmap.Map({
          
              div: 'map',
              width: '100%',
              height: '400px'
            
          })
      map.setCenter(new Tmap.LonLat("126.986072", "37.570028").transform("EPSG:4326", "EPSG:3857"), 15);
      var routeLayer = new Tmap.Layer.Vector("route");
      map.addLayer(routeLayer);
      var tData = new Tmap.TData();
      var appKey ="f5f4664e-4b6a-4b0d-9db0-5732b9808bb2"

      // //json에서 주소 받아오기
      // var addressData = getAddressData()
       
        var baseUrl = 'http://freshntech.cafe24.com'
        var getDeliveryOrder = "/order/getDelivererOrder/KRBS00001?condition={0}"
        var addressList = []
        var id = "01053530001"
        var password = "1234"
        var loginUrl = baseUrl+"/deliverer/login"
        var basicAuth = 'Basic ' + btoa(id + ':' + password)
       
       axios.post(loginUrl, {}, {
          headers: { 'Authorization': + basicAuth }
        }).then(function(response) {
          console.log('Authenticated');
        }).catch(function(error) {
          console.log('Error on Authentication');
      })

      

          
      //   var addData 

      //   $.ajax({
      //   method:"get",
      //   url:"http://192.168.64.131:8080/app/order/getDelivererOrder/KRBS000001?condition=7", //FullTextGeocoding api 요청 url입니다.
      //   async:false,
      //   dataType:'json',
      //   data:{
        
      //   },
      //   //데이터 로드가 성공적으로 완료되었을 때 발생하는 함수입니다.
      //   success:function(response) {
 
          
      //     this.results = response.bind(this)
      //     for(var i=0; i<this.results.length; i++){
      //       console.log(this.results[0].address1)
      //     }
      //     console.log(JSON.stringify(response))
      //     addData = JSON.stringify(response)
          
      //   }
      //   ,
      //   error:function(request,status,error){
      //     console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
      //     }
      // })
      
      
        
       
        
        
        var url= "https://api2.sktelecom.com/tmap/geo/fullAddrGeo?version=1&format=xml&callback=result"
        //마커 
        var home ="부산광역시 수영구 수영동 구락로25번가길 22"
        
      

              
    // 2. 시작, 도착 심볼찍기
      // 시작
      var markerStartLayer = new Tmap.Layer.Markers("start");
      map.addLayer(markerStartLayer);
      
      var size = new Tmap.Size(24, 38);
      var offset = new Tmap.Pixel(-(size.w / 2), -size.h);
      var icon = new Tmap.IconHtml("<img src='http://tmapapis.sktelecom.com/upload/tmap/marker/pin_r_m_s.png' />", size, offset);
      var marker_s = new Tmap.Marker(new Tmap.LonLat("126.96665", "37.56558").transform("EPSG:4326", "EPSG:3857"), icon);
      markerStartLayer.addMarker(marker_s);
      
      // 도착
      var markerEndLayer = new Tmap.Layer.Markers("end");
      map.addLayer(markerEndLayer);
      
      var size = new Tmap.Size(24, 38);
      var offset = new Tmap.Pixel(-(size.w / 2), -size.h);
      var icon = new Tmap.IconHtml("<img src='http://tmapapis.sktelecom.com/upload/tmap/marker/pin_r_m_e.png' />", size, offset);
      var marker_e = new Tmap.Marker(new Tmap.LonLat("127.00197", "37.57079").transform("EPSG:4326", "EPSG:3857"), icon);
      markerEndLayer.addMarker(marker_e);


      // 3. 경유지 심볼 찍기
      var markerWaypointLayer = new Tmap.Layer.Markers("waypoint");
      map.addLayer(markerWaypointLayer);
      
      var size = new Tmap.Size(24, 38);
      var offset = new Tmap.Pixel(-(size.w / 2), -size.h);
      var icon = new Tmap.IconHtml("<img src='http://tmapapis.sktelecom.com/upload/tmap/marker/pin_b_m_p.png' />", size, offset);
      var marker = new Tmap.Marker(new Tmap.LonLat("126.97201", "37.56994").transform("EPSG:4326", "EPSG:3857"), icon);
      markerWaypointLayer.addMarker(marker);
      
      icon = new Tmap.IconHtml("<img src='http://tmapapis.sktelecom.com/upload/tmap/marker/pin_b_m_p.png' />", size, offset);
      marker = new Tmap.Marker(new Tmap.LonLat("126.98227", "37.56990").transform("EPSG:4326", "EPSG:3857"), icon);
      markerWaypointLayer.addMarker(marker);

      icon = new Tmap.IconHtml("<img src='http://tmapapis.sktelecom.com/upload/tmap/marker/pin_b_m_p.png' />", size, offset);
      marker = new Tmap.Marker(new Tmap.LonLat("126.98334", "37.56575").transform("EPSG:4326", "EPSG:3857"), icon);
      markerWaypointLayer.addMarker(marker);

      icon = new Tmap.IconHtml("<img src='http://tmapapis.sktelecom.com/upload/tmap/marker/pin_b_m_p.png' />", size, offset);
      marker = new Tmap.Marker(new Tmap.LonLat("126.98781", "37.56637").transform("EPSG:4326", "EPSG:3857"), icon);
      markerWaypointLayer.addMarker(marker);

      icon = new Tmap.IconHtml("<img src='http://tmapapis.sktelecom.com/upload/tmap/marker/pin_b_m_p.png' />", size, offset);
      marker = new Tmap.Marker(new Tmap.LonLat("126.99074", "37.56796").transform("EPSG:4326", "EPSG:3857"), icon);
      markerWaypointLayer.addMarker(marker);

      icon = new Tmap.IconHtml("<img src='http://tmapapis.sktelecom.com/upload/tmap/marker/pin_b_m_p.png' />", size, offset);
      marker = new Tmap.Marker(new Tmap.LonLat("126.99151", "37.57316").transform("EPSG:4326", "EPSG:3857"), icon);
      markerWaypointLayer.addMarker(marker);

      icon = new Tmap.IconHtml("<img src='http://tmapapis.sktelecom.com/upload/tmap/marker/pin_b_m_p.png' />", size, offset);
      marker = new Tmap.Marker(new Tmap.LonLat("126.99666", "37.57092").transform("EPSG:4326", "EPSG:3857"), icon);
      markerWaypointLayer.addMarker(marker);

        // 4. 경유지 최적화 API 사용요청
      var prtcl;
      var headers = {}; 
      headers["appKey"]="f5f4664e-4b6a-4b0d-9db0-5732b9808bb2";
      $.ajax({
        type:"POST",
        headers : headers,
        url:"https://api2.sktelecom.com/tmap/routes/routeOptimization10?version=1&format=xml",//
        async:false,
        contentType: "application/json",
        data: JSON.stringify({
              "reqCoordType": "WGS84GEO",
              "resCoordType" : "EPSG3857",
              "startName": "출발",
              "startX": "126.96665",
              "startY": "37.56558",
              "startTime": "201711121314",
              "endName": "도착",
              "endX": "126.997589",
              "endY": "37.570594",
              "viaPoints": [
                  {
                    "viaPointId": "test01",
                    "viaPointName": "test01",
                    "viaX": "126.97201",
                    "viaY": "37.56994"
                  },
                  {
                    "viaPointId": "test02",
                    "viaPointName": "test02",
                    "viaX": "126.98227",
                    "viaY": "37.56990"
                  },
                  {
                    "viaPointId": "test03",
                    "viaPointName": "test03",
                    "viaX": "126.98334",
                    "viaY": "37.56575"
                  },
                  {
                    "viaPointId": "test04",
                    "viaPointName": "test04",
                    "viaX": "126.98781",
                    "viaY": "37.56637"
                  },
                  {
                    "viaPointId": "test05",
                    "viaPointName": "test05",
                    "viaX": "126.99074",
                    "viaY": "37.56796"
                  },
                  {
                    "viaPointId": "test06",
                    "viaPointName": "test06",
                    "viaX": "126.99151",
                    "viaY": "37.57316"
                  },
                  {
                    "viaPointId": "test07",
                    "viaPointName": "test07",
                    "viaX": "126.99666",
                    "viaY": "37.57092"
                  }
                ]
        }),
        success:function(response){
          prtcl = response;
          
          // 5. 경유지 최적화 결과 Line 그리기 
          //경유지 최적화 결과 POINT 찍기
          /* -------------- Geometry.Point -------------- */
          var pointLayer = new Tmap.Layer.Vector("point");
          var prtclString = new XMLSerializer().serializeToString(prtcl);//xml to String	
          var xmlDoc = $.parseXML(prtclString),
            $xml = $(xmlDoc),
            $intRate = $xml.find("Placemark")
            
            var style_red = {
                    fillColor:"#FF0000",
                    fillOpacity:0.2,
                    strokeColor: "#FF0000",
                    strokeWidth: 3,
                    strokeDashstyle: "solid",
                    pointRadius: 2,
                    title: "this is a red line"
              };
            $intRate.each(function(index, element) {
              var nodeType = element.getElementsByTagName("tmap:nodeType")[0].childNodes[0].nodeValue;
            if(nodeType == "POINT"){
              var point = element.getElementsByTagName("coordinates")[0].childNodes[0].nodeValue.split(',');
              var geoPoint =new Tmap.Geometry.Point(point[0],point[1]);
              var pointFeature = new Tmap.Feature.Vector(geoPoint, null, style_red); 
              pointLayer.addFeatures([pointFeature]);
            }
            });
            map.addLayer(pointLayer);
            /* -------------- Geometry.Point -------------- */
            //경유지 최적화 결과 Line 그리기
          routeLayer.style ={
              fillColor:"#FF0000",
                  fillOpacity:0.2,
                  strokeColor: "#FF0000",
                  strokeWidth: 3,
                  strokeDashstyle: "solid",
                  pointRadius: 2,
                  title: "this is a red line"	
          }
          var kmlForm = new Tmap.Format.KML().read(prtcl);
            routeLayer.addFeatures(kmlForm);
        
        
          // 6. 경유지 최적화 결과 반경만큼 지도 레벨 조정
          map.zoomToExtent(routeLayer.getDataExtent());
        
        },
        error:function(request,status,error){
          console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
          }
         })  
      }
      
  },

    //데이터 가져오기
    // getAddressData (){
    //   console.log("데이터가져오기 실행")
    //     var baseUrl = 'http://192.168.64.131:8080/app'
    //     var getDeliveryOrder = "/order/getDelivererOrder/KRBS00001?condition={0}"
    //     var addressList = []
    //     var id = "01053530001"
    //     var password = "1234"
    //     var loginUrl = "http://192.168.64.131:8080/app/deliverer/login"
    //     var basicAuth = 'Basic ' + btoa(id + ':' + password)

    //    axios.post(loginUrl, {}, {
    //       headers: { 'Authorization': + basicAuth }
    //     }).then(function(response) {
    //       console.log('Authenticated');
    //     }).catch(function(error) {
    //       console.log('Error on Authentication');
    //   })

    //   axios.get("http://192.168.64.131:8080/app/order/getDelivererOrder/KRBS000001?condition={0}")
    //     .then(function (response){
    //       console.log(response)
           
            
    //         //배열에 담기
    //         for(var i=0; i<response.data.length ; i++){
    //           addressList[i] = response.data[i]
    //         }
    //       })
    //       .catch(function(){
    //         console.log(response)
    //       })

    //     console.log(addressList)
      
    //     return addressList
    // },

    

    // //주소를 위도&경도 좌표로 바꾸기
    // getXYfromGPS (addressData) {
        
    // },

    getBestway (){
          
      // // 4. 경유지 최적화 API 사용요청
      // var prtcl;
      // var headers = {}; 
      // headers["appKey"]="f5f4664e-4b6a-4b0d-9db0-5732b9808bb2";
      // $.ajax({
      //   type:"POST",
      //   headers : headers,
      //   url:"https://api2.sktelecom.com/tmap/routes/routeOptimization10?version=1&format=xml",//
      //   async:false,
      //   contentType: "application/json",
      //   data: JSON.stringify({
      //         "reqCoordType": "WGS84GEO",
      //         "resCoordType" : "EPSG3857",
      //         "startName": "출발",
      //         "startX": "126.96665",
      //         "startY": "37.56558",
      //         "startTime": "201711121314",
      //         "endName": "도착",
      //         "endX": "126.997589",
      //         "endY": "37.570594",
      //         "viaPoints": [
      //             {
      //               "viaPointId": "test01",
      //               "viaPointName": "test01",
      //               "viaX": "126.97201",
      //               "viaY": "37.56994"
      //             },
      //             {
      //               "viaPointId": "test02",
      //               "viaPointName": "test02",
      //               "viaX": "126.98227",
      //               "viaY": "37.56990"
      //             },
      //             {
      //               "viaPointId": "test03",
      //               "viaPointName": "test03",
      //               "viaX": "126.98334",
      //               "viaY": "37.56575"
      //             },
      //             {
      //               "viaPointId": "test04",
      //               "viaPointName": "test04",
      //               "viaX": "126.98781",
      //               "viaY": "37.56637"
      //             },
      //             {
      //               "viaPointId": "test05",
      //               "viaPointName": "test05",
      //               "viaX": "126.99074",
      //               "viaY": "37.56796"
      //             },
      //             {
      //               "viaPointId": "test06",
      //               "viaPointName": "test06",
      //               "viaX": "126.99151",
      //               "viaY": "37.57316"
      //             },
      //             {
      //               "viaPointId": "test07",
      //               "viaPointName": "test07",
      //               "viaX": "126.99666",
      //               "viaY": "37.57092"
      //             }
      //           ]
      //   }),
      //   success:function(response){
      //     prtcl = response;
          
      //     // 5. 경유지 최적화 결과 Line 그리기 
      //     //경유지 최적화 결과 POINT 찍기
      //     /* -------------- Geometry.Point -------------- */
      //     var pointLayer = new Tmap.Layer.Vector("point");
      //     var prtclString = new XMLSerializer().serializeToString(prtcl);//xml to String	
      //     var xmlDoc = $.parseXML(prtclString),
      //       $xml = $(xmlDoc),
      //       $intRate = $xml.find("Placemark")
            
      //       var style_red = {
      //               fillColor:"#FF0000",
      //               fillOpacity:0.2,
      //               strokeColor: "#FF0000",
      //               strokeWidth: 3,
      //               strokeDashstyle: "solid",
      //               pointRadius: 2,
      //               title: "this is a red line"
      //         };
      //       $intRate.each(function(index, element) {
      //         var nodeType = element.getElementsByTagName("tmap:nodeType")[0].childNodes[0].nodeValue;
      //       if(nodeType == "POINT"){
      //         var point = element.getElementsByTagName("coordinates")[0].childNodes[0].nodeValue.split(',');
      //         var geoPoint =new Tmap.Geometry.Point(point[0],point[1]);
      //         var pointFeature = new Tmap.Feature.Vector(geoPoint, null, style_red); 
      //         pointLayer.addFeatures([pointFeature]);
      //       }
      //       });
      //       map.addLayer(pointLayer);
      //       /* -------------- Geometry.Point -------------- */
      //       //경유지 최적화 결과 Line 그리기
      //     routeLayer.style ={
      //         fillColor:"#FF0000",
      //             fillOpacity:0.2,
      //             strokeColor: "#FF0000",
      //             strokeWidth: 3,
      //             strokeDashstyle: "solid",
      //             pointRadius: 2,
      //             title: "this is a red line"	
      //     }
      //     var kmlForm = new Tmap.Format.KML().read(prtcl);
      //       routeLayer.addFeatures(kmlForm);
        
        
      //     // 6. 경유지 최적화 결과 반경만큼 지도 레벨 조정
      //     map.zoomToExtent(routeLayer.getDataExtent());
        
      //   },
      //   error:function(request,status,error){
      //     console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
      //     }
      //    })  
    },

    // //마커 찍기
    // makeMarkers (){
          
    // // 2. 시작, 도착 심볼찍기
    //   // 시작
    //   var markerStartLayer = new Tmap.Layer.Markers("start");
    //   map.addLayer(markerStartLayer);
      
    //   var size = new Tmap.Size(24, 38);
    //   var offset = new Tmap.Pixel(-(size.w / 2), -size.h);
    //   var icon = new Tmap.IconHtml("<img src='http://tmapapis.sktelecom.com/upload/tmap/marker/pin_r_m_s.png' />", size, offset);
    //   var marker_s = new Tmap.Marker(new Tmap.LonLat("126.96665", "37.56558").transform("EPSG:4326", "EPSG:3857"), icon);
    //   markerStartLayer.addMarker(marker_s);
      
    //   // 도착
    //   var markerEndLayer = new Tmap.Layer.Markers("end");
    //   map.addLayer(markerEndLayer);
      
    //   var size = new Tmap.Size(24, 38);
    //   var offset = new Tmap.Pixel(-(size.w / 2), -size.h);
    //   var icon = new Tmap.IconHtml("<img src='http://tmapapis.sktelecom.com/upload/tmap/marker/pin_r_m_e.png' />", size, offset);
    //   var marker_e = new Tmap.Marker(new Tmap.LonLat("127.00197", "37.57079").transform("EPSG:4326", "EPSG:3857"), icon);
    //   markerEndLayer.addMarker(marker_e);


    //   // 3. 경유지 심볼 찍기
    //   var markerWaypointLayer = new Tmap.Layer.Markers("waypoint");
    //   map.addLayer(markerWaypointLayer);
      
    //   var size = new Tmap.Size(24, 38);
    //   var offset = new Tmap.Pixel(-(size.w / 2), -size.h);
    //   var icon = new Tmap.IconHtml("<img src='http://tmapapis.sktelecom.com/upload/tmap/marker/pin_b_m_p.png' />", size, offset);
    //   var marker = new Tmap.Marker(new Tmap.LonLat("126.97201", "37.56994").transform("EPSG:4326", "EPSG:3857"), icon);
    //   markerWaypointLayer.addMarker(marker);
      
    //   icon = new Tmap.IconHtml("<img src='http://tmapapis.sktelecom.com/upload/tmap/marker/pin_b_m_p.png' />", size, offset);
    //   marker = new Tmap.Marker(new Tmap.LonLat("126.98227", "37.56990").transform("EPSG:4326", "EPSG:3857"), icon);
    //   markerWaypointLayer.addMarker(marker);

    //   icon = new Tmap.IconHtml("<img src='http://tmapapis.sktelecom.com/upload/tmap/marker/pin_b_m_p.png' />", size, offset);
    //   marker = new Tmap.Marker(new Tmap.LonLat("126.98334", "37.56575").transform("EPSG:4326", "EPSG:3857"), icon);
    //   markerWaypointLayer.addMarker(marker);

    //   icon = new Tmap.IconHtml("<img src='http://tmapapis.sktelecom.com/upload/tmap/marker/pin_b_m_p.png' />", size, offset);
    //   marker = new Tmap.Marker(new Tmap.LonLat("126.98781", "37.56637").transform("EPSG:4326", "EPSG:3857"), icon);
    //   markerWaypointLayer.addMarker(marker);

    //   icon = new Tmap.IconHtml("<img src='http://tmapapis.sktelecom.com/upload/tmap/marker/pin_b_m_p.png' />", size, offset);
    //   marker = new Tmap.Marker(new Tmap.LonLat("126.99074", "37.56796").transform("EPSG:4326", "EPSG:3857"), icon);
    //   markerWaypointLayer.addMarker(marker);

    //   icon = new Tmap.IconHtml("<img src='http://tmapapis.sktelecom.com/upload/tmap/marker/pin_b_m_p.png' />", size, offset);
    //   marker = new Tmap.Marker(new Tmap.LonLat("126.99151", "37.57316").transform("EPSG:4326", "EPSG:3857"), icon);
    //   markerWaypointLayer.addMarker(marker);

    //   icon = new Tmap.IconHtml("<img src='http://tmapapis.sktelecom.com/upload/tmap/marker/pin_b_m_p.png' />", size, offset);
    //   marker = new Tmap.Marker(new Tmap.LonLat("126.99666", "37.57092").transform("EPSG:4326", "EPSG:3857"), icon);
    //   markerWaypointLayer.addMarker(marker);
    // },

  mounted(){
    // this.getAddressData()
    this.$http.get("http://freshntech.cafe24.com/order/getOrder/KRBS000001?condition=7")
          .then( response=>{
          console.log("지도에 그릴 배송 데이터정보 받아오기")
          this.posts = response.data
          console.log(this.posts)
          for(var i=0;i<response.data.length;i++){
            this.posts[i].address = response.data[i].address1 + response.data[i].address2
          }
          console.log(this.posts.address)
          var map = new Tmap.Map({
          
              div: 'map',
              width: '100%',
              height: '400px'
            
          })
      map.setCenter(new Tmap.LonLat("126.986072", "37.570028").transform("EPSG:4326", "EPSG:3857"), 15);
      var routeLayer = new Tmap.Layer.Vector("route");
      map.addLayer(routeLayer);
      var tData = new Tmap.TData();
      var appKey ="f5f4664e-4b6a-4b0d-9db0-5732b9808bb2"

      // //json에서 주소 받아오기
      // var addressData = getAddressData()
       
        var baseUrl = 'http://freshntech.cafe24.com/'
        var getDeliveryOrder = "/order/getDelivererOrder/KRBS00001?condition={0}"
        var addressList = []
        var id = "01053530001"
        var password = "1234"
        var loginUrl = baseUrl+"/deliverer/login"
        var basicAuth = 'Basic ' + btoa(id + ':' + password)
       
       axios.post(loginUrl, {}, {
          headers: { 'Authorization': + basicAuth }
        }).then(function(response) {
          console.log('Authenticated');
        }).catch(function(error) {
          console.log('Error on Authentication');
      })

      
          
            var home = []
            for(var i=0;i<this.posts.length;i++){
             
              home[i] = this.posts[i].address
              console.log(this.posts[i].address)
                 $.ajax({
        method:"post",
        url:"https://api2.sktelecom.com/tmap/geo/fullAddrGeo?version=1&format=xml&callback=result", //FullTextGeocoding api 요청 url입니다.
        async:false,
        data:{
          "coordType" : "WGS84GEO",//지구 위의 위치를 나타내는 좌표 타입입니다.
          "fullAddr" : this.posts[i].address, //주소 정보 입니다, 도로명 주소 표준 표기 방법을 지원합니다.  
          "page" : "1",//페이지 번호 입니다.
          "count" : "20",//페이지당 출력 갯수 입니다.
          "appKey" : "f5f4664e-4b6a-4b0d-9db0-5732b9808bb2",//실행을 위한 키 입니다. 발급받으신 AppKey를 입력하세요.
        },
        //데이터 로드가 성공적으로 완료되었을 때 발생하는 함수입니다.
        success:function(response){
          var prtcl = response;
          console.log(prtcl)
          // 3. 마커 찍기
          var prtclString = new XMLSerializer().serializeToString(prtcl);//xml to String	
          var xmlDoc = $.parseXML( prtclString ),
          $xml = $( xmlDoc ),
          $intRate = $xml.find("coordinate");

          //검색 결과 정보가 없을 때 처리
          if($intRate.length==0){
            //예외처리를 위한 파싱 데이터
            $intError = $xml.find("error");
                
            // 주소가 올바르지 않을 경우 예외처리
            if($intError.context.all[0].nodeName == "error"){
              $("#result").text("요청 데이터가 올바르지 않습니다.");
            }
          }	
                      
          var lon, lat;
          if($intRate[0].getElementsByTagName("lon").length>0){//구주소
            lon = $intRate[0].getElementsByTagName("lon")[0].childNodes[0].nodeValue;
              lat = $intRate[0].getElementsByTagName("lat")[0].childNodes[0].nodeValue;
          }else{//신주소
            lon = $intRate[0].getElementsByTagName("newLon")[0].childNodes[0].nodeValue;
            lat = $intRate[0].getElementsByTagName("newLat")[0].childNodes[0].nodeValue;
          }
              
          var markerStartLayer = new Tmap.Layer.Markers("marker");//마커 레이어 생성
          map.addLayer(markerStartLayer);//map에 마커 레이어 추가
              
          var size = new Tmap.Size(24, 38);//아이콘 크기 설정
          var offset = new Tmap.Pixel(-(size.w / 2), -size.h);//아이콘 중심점 설정
          var icon = new Tmap.IconHtml("<img src='http://tmapapis.sktelecom.com/upload/tmap/marker/pin_b_m_a.png' />", size, offset);//마커 아이콘 설정
          var marker_s = new Tmap.Marker(new Tmap.LonLat(lon, lat).transform("EPSG:4326", "EPSG:3857"), icon);//설정한 좌표를 "EPSG:3857"로 좌표변환한 좌표값으로 설정합니다.
          markerStartLayer.addMarker(marker_s);//마커 레이어에 마커 추가
          
          map.setCenter(new Tmap.LonLat(lon, lat).transform("EPSG:4326", "EPSG:3857"), 15);//설정한 좌표를 "EPSG:3857"로 좌표변환한 좌표값으로 즁심점을 설정합니다.
          
          //검색 결과 표출
          var matchFlag, newMatchFlag;
            //검색 결과 주소를 담을 변수
            var address = '', newAddress = '';
            var city, gu_gun, eup_myun, legalDong, adminDong, ri, bunji;
            var buildingName, buildingDong, newRoadName, newBuildingIndex, newBuildingName, newBuildingDong;
          //새주소일 때 검색 결과 표출
          //새주소인 경우 newMatchFlag가 응닶값으로 온다
          if($intRate[0].getElementsByTagName("newMatchFlag").length>0){
            // 새(도로명) 주소 좌표 매칭 구분 코드
            newMatchFlag = $intRate[0].getElementsByTagName("newMatchFlag")[0].childNodes[0].nodeValue;
            
            // 시/도 명칭
            if($intRate[0].getElementsByTagName("city_do").length>0){
              city = $intRate[0].getElementsByTagName("city_do")[0].childNodes[0].nodeValue;
              newAddress += city+"\n";
            }
            // 군/구 명칭
            if($intRate[0].getElementsByTagName("gu_gun").length>0){
              gu_gun = $intRate[0].getElementsByTagName("gu_gun")[0].childNodes[0].nodeValue;
              newAddress += gu_gun+"\n";
            }
            // 읍면동 명칭
            if($intRate[0].getElementsByTagName("eup_myun").length>0){
              eup_myun = $intRate[0].getElementsByTagName("eup_myun")[0].childNodes[0].nodeValue;
              newAddress += eup_myun+"\n";
            }
            // 출력 좌표에 해당하는 법정동 명칭
            if($intRate[0].getElementsByTagName("legalDong").length>0){
              legalDong = $intRate[0].getElementsByTagName("legalDong")[0].childNodes[0].nodeValue;
              newAddress += legalDong+"\n";
            }
            // 출력 좌표에 해당하는 법정동 명칭
            if($intRate[0].getElementsByTagName("adminDong").length>0){
              adminDong = $intRate[0].getElementsByTagName("adminDong")[0].childNodes[0].nodeValue;
              newAddress += adminDong+"\n";
            }
            // 출력 좌표에 해당하는 리 명칭
            if($intRate[0].getElementsByTagName("ri").length>0){
              ri = $intRate[0].getElementsByTagName("ri")[0].childNodes[0].nodeValue;
              newAddress += ri+"\n";
            }
            // 출력 좌표에 해당하는 지번 명칭
            if($intRate[0].getElementsByTagName("bunji").length>0){
              bunji = $intRate[0].getElementsByTagName("bunji")[0].childNodes[0].nodeValue;
              newAddress += bunji+"\n";
            }
            // 새(도로명) 주소 매칭을 한 경우, 길 이름을 반환
            if($intRate[0].getElementsByTagName("newRoadName").length>0){
              newRoadName = $intRate[0].getElementsByTagName("newRoadName")[0].childNodes[0].nodeValue;
              newAddress += newRoadName+"\n";
            }
            // 새(도로명) 주소 매칭을 한 경우, 건물 번호를 반환
            if($intRate[0].getElementsByTagName("newBuildingIndex").length>0){
              newBuildingIndex = $intRate[0].getElementsByTagName("newBuildingIndex")[0].childNodes[0].nodeValue;
              newAddress += newBuildingIndex+"\n";
            }
            // 새(도로명) 주소 건물명 매칭을 한 경우, 건물 이름을 반환
            if($intRate[0].getElementsByTagName("newBuildingName").length>0){
              newBuildingName = $intRate[0].getElementsByTagName("newBuildingName")[0].childNodes[0].nodeValue;
              newAddress += newBuildingName+"\n";
            }
            // 새주소 건물을 매칭한 경우 새주소 건물 동을 반환
            if($intRate[0].getElementsByTagName("newBuildingDong").length>0){
              newBuildingDong = $intRate[0].getElementsByTagName("newBuildingDong")[0].childNodes[0].nodeValue;
              newAddress += newBuildingDong+"\n";
            }
            
            // 검색 결과 표출
            var docs = "< a style='color:orange' href='#webservice/docs/fullTextGeocoding' >Docs< /a >"
            $("#result").html("검색결과(새주소) : "+newAddress+","+"\n"+"응답코드:"+newMatchFlag+"(상세 코드 내역은 "+docs+"에서 확인)");
          }
          
          //구주소일 때 검색 결과 표출
          //구주소인 경우 MatchFlag가 응닶값으로 온다
          if($intRate[0].getElementsByTagName("matchFlag").length>0){
            // 매칭 구분 코드
            matchFlag = $intRate[0].getElementsByTagName("matchFlag")[0].childNodes[0].nodeValue;
            
            // 시/도 명칭
            if($intRate[0].getElementsByTagName("city_do").length>0){
              city = $intRate[0].getElementsByTagName("city_do")[0].childNodes[0].nodeValue;
              address += city+"\n";
            }
            // 군/구 명칭
            if($intRate[0].getElementsByTagName("gu_gun").length>0){
              gu_gun = $intRate[0].getElementsByTagName("gu_gun")[0].childNodes[0].nodeValue;
              address += gu_gun+"\n";
            }
            // 읍면동 명칭
            if($intRate[0].getElementsByTagName("eup_myun").length>0){
              eup_myun = $intRate[0].getElementsByTagName("eup_myun")[0].childNodes[0].nodeValue;
              address += eup_myun+"\n";
            }
            // 출력 좌표에 해당하는 법정동 명칭
            if($intRate[0].getElementsByTagName("legalDong").length>0){
              legalDong = $intRate[0].getElementsByTagName("legalDong")[0].childNodes[0].nodeValue;
              address += legalDong+"\n";
            }
            // 출력 좌표에 해당하는 법정동 명칭
            if($intRate[0].getElementsByTagName("adminDong").length>0){
              adminDong = $intRate[0].getElementsByTagName("adminDong")[0].childNodes[0].nodeValue;
              address += adminDong+"\n";
            }
            // 출력 좌표에 해당하는 리 명칭
            if($intRate[0].getElementsByTagName("ri").length>0){
              ri = $intRate[0].getElementsByTagName("ri")[0].childNodes[0].nodeValue;
              address += ri+"\n";
            }
            // 출력 좌표에 해당하는 지번 명칭
            if($intRate[0].getElementsByTagName("bunji").length>0){
              bunji = $intRate[0].getElementsByTagName("bunji")[0].childNodes[0].nodeValue;
              address += bunji+"\n";
            }
            // 출력 좌표에 해당하는 지번 명칭
            if($intRate[0].getElementsByTagName("buildingName").length>0){
              buildingName = $intRate[0].getElementsByTagName("buildingName")[0].childNodes[0].nodeValue;
              address += buildingName+"\n";
            }
            // 출력 좌표에 해당하는 지번 명칭
            if($intRate[0].getElementsByTagName("buildingDong").length>0){
              buildingDong = $intRate[0].getElementsByTagName("buildingDong")[0].childNodes[0].nodeValue;
              address += buildingDong+"\n";
            }
            
            // 검색 결과 표출
            var docs = "< a style='color:orange' href='#webservice/docs/fullTextGeocoding' >Docs< /a >"
            $("#result").html("검색결과(지번주소) : "+address+","+"\n"+"응답코드:"+matchFlag+"(상세 코드 내역은 "+docs+"에서 확인)");
            
          }
        },
        //요청 실패시 콘솔창에서 에러 내용을 확인할 수 있습니다.
        error:function(request,status,error){
          console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
         }
        })
       }
      })
          .catch( response =>{
            console.log(response)
    })

    // this.initMap()

   
  }
  
}

</script>
