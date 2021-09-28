<template>
  <div class="home">
   <div class="nav" v-for=" (item,index) in permissionRoutes"  :key= "index">
    <van-button  class="user" type="primary" @click='handleClcik(item)'>{{item.meta.title}}</van-button>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: { },
  computed:{
    ...mapGetters([
      'permissionRoutes'
    ])
  },
  methods: {
    handleClcik({path}){
      this.$router.push(`${path}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav{
    padding: 10px;
    height: 50px;
    line-height: 50px;
    .user{
      margin-right: 10px;
    }
  }

</style>
