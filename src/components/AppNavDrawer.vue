<template>
  <v-navigation-drawer width="250" :value="navDrawer" @input="closeDrawer" :mini-variant="mini" absolute light temporary clipped>

    <v-list class="pa-1">
      <v-list-tile v-if="mini" @click.stop="mini = !mini">
        <v-list-tile-action>
          <v-icon>fa-chevron-right</v-icon>
        </v-list-tile-action>
      </v-list-tile>

      <v-list-tile avatar tag="div">
        <v-list-tile-avatar>
          <img src="https://randomuser.me/api/portraits/men/70.jpg">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>Rice And Stew</v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-btn icon @click.stop="mini = !mini">
            <v-icon>fa-chevron-left</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>

    <v-list class="pt-0" dense>

      <template v-for="(item, index) in navigationItems">

        <v-subheader class="pl-4 pt-3 nav-drawer-headers" v-if="item.header" :key="`${index}-uid`">
          {{ item.header }}
        </v-subheader>

        <v-list-tile :class="{ 'active-background': item.active }" v-else :key="`${index}-uid`" avatar @click="routeClicked(item)">

          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title class="nav-drawer-items" :class="{active: item.active}">{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>
      </template>

    </v-list>
  </v-navigation-drawer>
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
    return {
      mini: true,
      navigationItems: [
        {
          title: "Dashboard",
          route: "dashboard",
          icon: "fa-home",
          active: true
        },
        {
          title: "Exchange",
          route: "exchange",
          icon: "fa-exchange-alt",
          active: false
        },
        { header: "Transactions" },
        {
          title: "Bitcoin",
          route: "bitcoin-transactions",
          icon: "fa-money-bill-alt",
          active: false
        },
        { header: "Security & Settings" },
        {
          title: "Security",
          route: "security",
          icon: "fa-shield-alt",
          active: false
        },
        { title: "Settings", route: "settings", icon: "fa-cogs", active: false }
      ]
    };
  },

  computed: {
    navDrawer() {
      return this.drawer;
    }
  },

  methods: {
    closeDrawer(state) {
      // close the drawer when clicked outside the nav drawer
      if (!state && this.drawer) {
        // if state is false and this.drawer is still true
        this.$emit("close-drawer", false);
      }
    },

    routeClicked(route) {
      this.navigationItems.forEach(item => {
        item.active = false; // make all item.active "false"
        if (item === route) {
          item.active = true; // make the clicked route "true"
        }
      });
      this.$router.push({ name: route.route });
    }
  }
};
</script>

<style scoped>
.nav-drawer-headers {
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  color: rgb(84, 84, 86) !important;
}
.nav-drawer-items {
  color: rgb(84, 84, 86) !important;
  transition: color 0.3s ease 0s;
}
.nav-drawer-items.active {
  color: rgb(53, 88, 168) !important;
  font-weight: bold;
}
.active-background {
  background-color: #dcdcdc;
}
.nav-drawer {
  display: flex;
  position: absolute;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  left: 0px;
  width: 270px;
  height: 100%;
  box-sizing: border-box;
  z-index: 11;
  padding: 15px;
  overflow: scroll;
  background: rgb(245, 247, 249) !important;
  border-right: 1px solid rgb(234, 234, 234) !important;
  transition: left 0.3s ease-in-out 0s;
}
</style>
