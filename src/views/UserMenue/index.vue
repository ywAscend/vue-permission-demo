<template>
    <div class="userInfo">
        普通信息
        <div @click='handleClcik' >111</div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: { },
  computed:{
    ...mapGetters({
       routes: 'permission/routes'
    })
  },
  methods: {
    handleClcik(){
      console.log('路由',this.routes)
    }
  }
}

</script>

<style>

</style>