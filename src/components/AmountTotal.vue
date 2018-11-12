<template>
  <v-list two-line>
    <v-subheader class="card-topic">$31.12</v-subheader>
    <template v-for="(item, index) in items">
      <v-divider :key="`${index}-divider`"></v-divider>

      <v-list-tile :key="`${index}-tile`" avatar @click="">
        <v-list-tile-avatar>
          <img :src="item.avatar">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>{{item.title}}</v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-content>
          <v-list-tile-title>0.00000546 BTC</v-list-tile-title>
          <v-list-tile-sub-title>$ 3.6764</v-list-tile-sub-title>
        </v-list-tile-content>

      </v-list-tile>
    </template>
  </v-list>
</template>

<script>
import bitcoin from "cryptocurrency-icons/svg/color/btc.svg";
import ethereum from "cryptocurrency-icons/svg/color/eth.svg";
import bitcoinCash from "cryptocurrency-icons/svg/color/bch.svg";

export default {
  data() {
    return {
      bitcoin,
      ethereum,
      items: [
        {
          avatar: bitcoin,
          title: "Bitcoin",
          subtitle: ""
        },
        {
          avatar: ethereum,
          title: "Ethereum",
          subtitle: ""
        },
        {
          avatar: bitcoinCash,
          title: "Bitcoin Cash",
          subtitle: ""
        }
      ]
    };
  }
};
</script>
