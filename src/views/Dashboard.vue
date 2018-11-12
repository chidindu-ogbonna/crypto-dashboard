<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>

      <v-flex xs12 md6 sm6>
        <v-card flat class="card-border" color="white" style="min-height: 100%">
          <v-tabs :slider-color="sliderColor" fixed-tabs icons-and-text>
            <v-tab class="tab-headers" @click="tabClicked(n)" v-for="n in tabHeaders" :key="n">
              {{ n }}
              <v-icon>fa-wallet</v-icon>
            </v-tab>

            <v-tab-item v-for="n in 2" :key="n">
              <keep-alive>
                <v-card flat>
                  <component :is="currentTab"></component>
                </v-card>
              </keep-alive>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-flex>

      <v-flex xs12 md6 sm6>
        <home-bitcoin-price-chart />
      </v-flex>

      <v-flex xs12 md6 sm6>
        <home-recent-activity />
      </v-flex>

      <v-flex xs12 md6 sm6>
        <home-info />
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import HomeRecentActivity from "@/components/HomeRecentActivity";
import HomeBitcoinPriceChart from "@/components/HomeBitcoinPriceChart";
import HomeInfo from "@/components/HomeInfo";

const Total = () => import("@/components/AmountTotal");
const Wallet = () => import("@/components/AmountWallet");

export default {
  components: {
    HomeRecentActivity,
    HomeBitcoinPriceChart,
    HomeInfo,
    Total, // eslint-disable-line vue/no-unused-components
    Wallet // eslint-disable-line vue/no-unused-components
  },

  data() {
    return {
      tabHeaders: ["Total", "Wallet"],
      currentTab: "Total",
      sliderColor: "rgb(56, 56, 56)"
    };
  },

  methods: {
    tabClicked(tab) {
      this.currentTab = tab;
    }
  }
};
</script>
