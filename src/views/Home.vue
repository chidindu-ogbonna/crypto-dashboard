<template>
  <div>

    <app-toolbar :drawer="drawer" @toggle-drawer="toggleDrawer"></app-toolbar>

    <app-nav-drawer :drawer="drawer" @close-drawer="closeDrawer"></app-nav-drawer>

    <app-header />

    <router-view />

  </div>
</template>

<script>
import AppToolbar from "@/components/AppToolbar";
import AppNavDrawer from "@/components/AppNavDrawer";

import AppHeader from "@/components/AppHeader";

export default {
  components: {
    AppToolbar,
    AppNavDrawer,
    AppHeader
  },

  props: {
    source: String
  },

  data() {
    return {
      model: "tab-2",
      active: 1,
      drawer: false,
      text: "This is us",
      tabs: null
    };
  },

  methods: {
    toggleDrawer(event) {
      this.drawer = event;
    },
    closeDrawer(event) {
      // neccessary to close the drawer when clicked outside the nav drawer
      this.drawer = event;
    }
  }
};
</script>
