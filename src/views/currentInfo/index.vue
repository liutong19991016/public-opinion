<template>
  <div>
    <current-sidebar class="sidebar-container" />
    <div class="main-container">
      <router-view :key="key" />
    </div>
  </div>
</template>

<script>
import CurrentSidebar from './components/Sidebar';

export default {
  name: 'CurrentInfo',
  components: {
    CurrentSidebar
  },
  computed: {
    key() {
      return this.$route.path;
    }
  },
  mounted() {
    this.$store.dispatch('group/getAllGroups');
  }
};
</script>

<style lang="scss" scoped>
.sidebar-container {
  width: 240px;
  background-color: #fff;
  height: 100%;
  position: fixed;
  top: 55px;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  user-select: none;
}
.main-container {
  min-height: 100%;
  margin-left: 240px;
  position: relative;
  }
</style>
