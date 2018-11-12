<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 md12 sm12 mb-2>

        <v-card flat class="card-border mb-2">
          <v-data-table hide-actions :headers="headers" :items="wallets" class="table-item table-item--sub-title" >
            <template slot="items" slot-scope="props">
              <td class="table-item table-item--sub-title">{{ props.item.name }}</td>
              <td class="text-xs-center table-item table-item--title">{{ props.item.amount }}</td>
              <td class="text-xs-center">{{ props.item.address }}</td>
            </template>
          </v-data-table>
        </v-card>

        <v-card flat class="card-border mb-2">
          <v-list three-line>
            <v-list-tile avatar @click="">

              <v-list-tile-avatar class="hidden-sm-and-down">
                <v-icon style="font-size: 40px !important;">fa-user-check</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content class="hidden-sm-and-down">
                <v-list-tile-title class="list-item list-item--title">Email Account</v-list-tile-title>
                <v-list-tile-sub-title>
                  You’ve verified
                  <span class="list-item list-item--title">
                    {{ user.email }}.
                  </span>
                  Select "Change Email" to modify this existing address. </v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-content class="hidden-md-and-up">
                <v-list-tile-title class="list-item list-item--title">{{ user.email }}</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-btn flat style="text-transform: none;" color="blue">
                  Change Your Email
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>

          </v-list>
        </v-card>

        <v-card flat class="card-border mb-2">
          <v-list three-line>
            <v-list-tile avatar @click="">

              <v-list-tile-avatar class="hidden-sm-and-down">
                <v-icon style="font-size: 40px !important;">fa-lock</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title class="list-item list-item--title">Two Step Verification</v-list-tile-title>
                <v-list-tile-sub-title>
                  Use an Authenticator app, Yubikey, or SMS Codes
                </v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-btn style="text-transform: none !important;" class="btn btn--full btn--blue">
                  Enable
                </v-btn>
              </v-list-tile-action>

            </v-list-tile>

          </v-list>
        </v-card>

        <v-card flat class="card-border">
          <v-list three-line>
            <v-list-tile avatar @click="">

              <v-list-tile-avatar class="hidden-sm-and-down">
                <v-icon style="font-size: 40px !important;">fa-user-check</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title class="list-item list-item--title">Backup Phrase</v-list-tile-title>
                <v-list-tile-sub-title>
                  Your backup phrase contains all of the private keys within your wallet.
                </v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-btn style="text-transform: none !important;" class="btn btn--blue">
                  Backup
                </v-btn>
              </v-list-tile-action>

            </v-list-tile>

          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      headers: [
        { text: "Wallet Name", align: "left", sortable: false, value: "name" },
        { text: "Balance", align: "center", sortable: false, value: "amount" },
        { text: "Address", align: "center", sortable: false, value: "address" }
      ],
      wallets: [
        {
          value: false,
          name: "Bitcoin Wallet",
          amount: "6 BTC",
          address: "YI5PT2EONYFE57F3CWZJTURFXL62HBBKLV5DFZUNAHHSWHMBIVOA"
        },
        {
          value: false,
          name: "Ethereum Wallet",
          amount: "9.0 BTC",
          address: "YI5PT2EONYFE57F3CWZJTURFXL62HBBKLV5DFZUNAHHSWHMBIVOA"
        },
        {
          value: false,
          name: "Bitcoin Cash Wallet",
          amount: "16.0",
          address: "YI5PT2EONYFE57F3CWZJTURFXL62HBBKLV5DFZUNAHHSWHMBIVOA"
        }
      ]
    };
  },

  computed: {
    ...mapState(["user"])
  }
};
</script>

<style scoped>
.table-item {
  color: rgb(84, 84, 86) !important;
  font-style: normal;
  text-transform: none;
}
.table-item--title {
  font-weight: bold !important;
  font-size: 14px;
}
.table-item--sub-title {
  font-weight: 500 !important;
  font-size: 14px;
}
</style>
