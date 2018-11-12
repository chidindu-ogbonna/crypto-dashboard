<template>
  <v-app id="inspire">
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      //
    };
  }
};
</script>

<style>
#inspire {
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  background: #f2f5f6;
}
.v-icon {
  font-size: 20px !important;
}
.v-list__tile {
  padding: 0 10px !important;
}
.v-btn {
  margin: 6px 0px;
}
.v-text-field--outline .v-input__slot {
  border-radius: 0 !important;
}
.error--text {
  caret-color: black !important;
  color: red;
}
.v-input__slot {
  display: block;
  width: 100%;
  height: 40px;
  min-height: 40px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 300;
  color: rgb(84, 84, 86) !important;
  background-color: rgb(255, 255, 255) !important;
  outline-width: 0px;
  padding: 6px 12px;
  border-width: 1px !important;
  border-style: solid !important;
  border-color: rgb(204, 204, 204) !important;
}
.v-input__slot .checkbox-input {
  border-style: none !important;
}
.btn {
  border-radius: 5px;
  line-height: 45px;
  height: 45px;
  display: inline-block;
  padding: 0 25px;
  color: #fefefe !important;
  text-transform: uppercase;
  letter-spacing: 0.55px;
  font-size: 15px;
  font-weight: bold;
  transition: background-color 0.4s;
  border: none;
}
.btn--purpure {
  box-shadow: 0 3px 9px rgba(113, 78, 253, 0.52) !important;
  background-color: #714efd !important;
}
.btn--blue {
  box-shadow: 0 3px 9px rgba(94, 111, 249, 0.52) !important;
  background-color: #557ef8 !important;
}
.btn--full {
  width: 100%;
  display: block;
  text-align: center;
  padding: 0;
}
.toolbar {
  box-shadow: 0 0 68px rgba(225, 230, 232, 0.67);
  background-image: linear-gradient(to right, #724cfd 0, #3da8f3 100%);
}
.tab-items {
  color: rgb(56, 56, 56);
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-transform: none;
  font-style: normal;
}
.card-topic {
  text-transform: uppercase;
  font-size: 28px;
  font-weight: 300;
  color: rgb(0, 74, 124) !important;
  margin: 5px 0px;
}
.card-border {
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(234, 234, 234) !important;
}
.list-item {
  color: rgb(84, 84, 86) !important;
  font-style: normal;
  text-transform: none;
}
.list-item--title {
  font-weight: bold;
  font-size: 14px;
}
.list-item--sub-title {
  font-weight: 500;
  font-size: 14px;
}
.transaction-items {
  text-transform: none;
  font-style: normal;
  color: rgb(84, 84, 86);
  cursor: inherit;
  display: block;
  opacity: 1;
}
</style>

