<template>
  <footer class="footer">
    <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
        <md-card md-sync-route class="md-warning" md-alignment="centered">     
            <md-icon>local_shipping</md-icon>
            <router-link :to="{path:'/maps'}">지도보기</router-link>   
        </md-card>
    </div>
  </footer>
</template>
<script>
export default {}

</script>
<style>
    .footer{
        height:100%;
        width:100%;
    }
</style>
