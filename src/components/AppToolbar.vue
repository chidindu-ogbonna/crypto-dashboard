<template>
  <v-toolbar class="toolbar" dark fixed app clipped-right>
    <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
    <v-toolbar-title>Cryptocurrency Dashboard</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-toolbar-items>

      <v-btn icon>
        <v-tooltip bottom>
          <v-icon slot="activator" class="header-icons">fa-bell</v-icon>
          <span>Notifications</span>
        </v-tooltip>
      </v-btn>

      <v-btn icon>
        <v-tooltip bottom>
          <v-icon slot="activator" class="header-icons">fa-redo</v-icon>
          <span>Refresh</span>
        </v-tooltip>
      </v-btn>

      <v-btn @click="signOut" flat>
        <v-layout row>
          <v-flex hidden-md-and-up>
            <v-btn icon>
              <v-tooltip bottom>
                <v-icon slot="activator" class="header-icons">fa-power-off</v-icon>
                <span>Sign Out</span>
              </v-tooltip>
            </v-btn>
          </v-flex>
          <v-flex class="sign-out" hidden-sm-and-down>
            Sign Out
          </v-flex>
        </v-layout>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {};
  },

  methods: {
    toggleDrawer() {
      window.scrollTo(0, 0);
      this.$emit("toggle-drawer", !this.drawer);
    },

    signOut() {
      this.$router.push("login");
    }
  }
};
</script>

<style scoped>
.header-icons {
  font-size: 16px !important;
}
.header-buttons {
  background: transparent;
  padding: 0;
}
.sign-out {
  font-size: 14px;
  font-weight: bolder;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  cursor: pointer;
}
</style>
