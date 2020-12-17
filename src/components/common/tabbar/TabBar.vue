<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  import TabBarItem from "./TabBarItem";
  export default {
    name: "TabBar",
    components: {TabBarItem}
  }
</script>

<style scoped>
  @import "../../assets/css/base.css";
  #tab-bar{
    display: flex;
    justify-content: space-around;
    background-color: #f6f6f6;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(0,0,0,0.1);
  }
</style>
