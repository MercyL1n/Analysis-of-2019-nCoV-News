<template>
  <div id="app">
    <router-view>
      <vue-particles color="#dedede"></vue-particles>
    </router-view>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
