<template>
  <v-container grid-list-md text-xs-center>
    <v-card class="card-border" flat>
      <v-layout row wrap>

        <v-flex xs12 md6 sm6 text-xs-left>
          <v-card-title>
            <div class="topic-header">
              A better way to trade crypto
            </div>
          </v-card-title>

          <v-card-text class="text">

            <v-flex>
              The faster, smarter way to trade your crypto.
            </v-flex>
            <v-flex>
              Upgrade now to enjoy the following benefits:
            </v-flex>
            <v-flex>
              <span class="subheader"> Lower cost </span> - Super competitive crypto exchange prices
            </v-flex>
            <v-flex>
              <span class="subheader"> Live rates </span> - You always get the most up to date price
            </v-flex>
            <v-flex>
              <span class="subheader"> Higher limits </span> - Limits from $2,000-$10,000
            </v-flex>
          </v-card-text>

          <v-card-actions>
            <v-btn large disabled class="btn btn--purpure mr-2">
              Coming Soon
            </v-btn>
          </v-card-actions>
        </v-flex>

        <v-flex xs12 md6 sm6>
          <v-responsive>
            <img :src="exchangeImage" alt="Image">
          </v-responsive>
        </v-flex>

      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import exchangeImage from "@/assets/exchange.png";

export default {
  data() {
    return {
      exchangeImage
    };
  }
};
</script>

<style scoped>
img {
  max-width: 100%;
  max-height: 100%;
}
.topic-header {
  font-weight: 600;
  font-size: 30px;
  text-transform: none;
  font-style: normal;
  color: rgb(0, 74, 124);
}
.subheader {
  font-weight: bold;
  font-size: 16px;
  text-transform: none;
  font-style: normal;
  color: rgb(0, 74, 124);
}
.text {
  font-weight: 300;
  font-size: 16px;
  text-transform: none;
  font-style: normal;
  color: rgb(84, 84, 86);
}
</style>
