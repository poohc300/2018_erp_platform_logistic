<template>
  <ul class="nav nav-mobile-menu">
    <li>
      <md-field>
        <label>(주)제이에이치코리아</label>
      </md-field>
    </li>
    <li>
      <drop-down>
        <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
          <i class="material-icons">notifications</i>
          <span class="notification"></span>
          <p>알림</p>
        </a>
        <ul class="dropdown-menu dropdown-menu-right">
          <li><a href="#">배송이 완료되었습니다</a></li>
          <li><a href="#">배송이 완료되었습니다</a></li>
          <li><a href="#">배송이 완료되었습니다</a></li>
        </ul>
      </drop-down>
    </li>
  </ul>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
