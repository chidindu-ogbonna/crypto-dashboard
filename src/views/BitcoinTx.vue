<template>
  <v-container>
    <v-layout row>
      <v-flex>
        <v-card flat class="card-border">

          <v-list three-line>
            <v-subheader>
              Today
            </v-subheader>
            <template v-for="(item, index) in items">

              <v-divider :key="index"></v-divider>

              <v-list-tile :key="item.id" avatar @click="">
                <v-list-tile-content>
                  <v-list-tile-title class="list-item list-item--title" :class="{sent: item.sent, recieved: item.recieved}">{{ item.status }}</v-list-tile-title>
                  <v-list-tile-sub-title class="list-item list-item--sub-title hidden-sm-and-down">{{ new Date(parseInt(item.date)) | morph-date('MMMM DD YYYY @ hh:mm A') }}</v-list-tile-sub-title>
                  <v-list-tile-sub-title class="list-item list-item--sub-title hidden-md-and-up">{{ new Date(parseInt(item.date)) | morph-date('MM/DD/YY @ hh:mm A') }}</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-content class="hidden-sm-and-down">
                  <v-list-tile-title class="list-item list-item--title">To: {{ item.to }}</v-list-tile-title>
                  <v-list-tile-sub-title class="list-item list-item--sub-title">From: {{ item.from }}</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-content>
                  <v-list-tile-title class="list-item list-item--title">{{ item.amountDollars }}</v-list-tile-title>
                  <v-list-tile-sub-title class="list-item list-item--sub-title">{{ item.amountCrypto }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  filters: {
    date(value) {
      console.log(value);
    }
  },

  data() {
    return {
      items: [
        {
          id: "94as9494",
          sent: true,
          status: "Sent BTC",
          date: "1541922424742",
          to: "1Q8BdLTC9hHyfwgQPAbBgFNV3Z8njk1uRy",
          from: "My Bitcoin Wallet",
          amountDollars: "$114.59",
          amountCrypto: "0.01792766 BTC"
        },
        {
          id: "94949ff4flfl",
          recieved: true,
          status: "Recieved BTC",
          date: "1541922424742",
          to: "1Q8BdLTC9hHyfwgQPAbBgFNV3Z8njk1uRy",
          from: "My Bitcoin Wallet",
          amountDollars: "$114.59",
          amountCrypto: "0.01792766 BTC"
        },
        {
          id: "dkdkffdk",
          recieved: true,
          status: "Recieved BTC",
          date: "1541922424742",
          to: "1Q8BdLTC9hHyfwgQPAbBgFNV3Z8njk1uRy",
          from: "My Bitcoin Wallet",
          amountDollars: "$114.59",
          amountCrypto: "0.01792766 BTC"
        },
        {
          id: "949fs494",
          sent: true,
          status: "Sent BTC",
          date: "1541922424742",
          to: "1Q8BdLTC9hHyfwgQPAbBgFNV3Z8njk1uRy",
          from: "My Bitcoin Wallet",
          amountDollars: "$114.59",
          amountCrypto: "0.01792766 BTC"
        },
        {
          id: "9494agab94",
          sent: true,
          status: "Sent BTC",
          date: "1541922424742",
          to: "1Q8BdLTC9hHyfwgQPAbBgFNV3Z8njk1uRy",
          from: "My Bitcoin Wallet",
          amountDollars: "$114.59",
          amountCrypto: "0.01792766 BTC"
        },
        {
          id: "94asasba9494",
          recieved: true,
          status: "Recieved BTC",
          date: "1541922424742",
          to: "1Q8BdLTC9hHyfwgQPAbBgFNV3Z8njk1uRy",
          from: "My Bitcoin Wallet",
          amountDollars: "$114.59",
          amountCrypto: "0.01792766 BTC"
        }
      ]
    };
  }
};
</script>

<style scoped>
.sent {
  color: rgb(242, 108, 87) !important;
}
.recieved {
  color: rgb(0, 186, 188) !important;
}
</style>
