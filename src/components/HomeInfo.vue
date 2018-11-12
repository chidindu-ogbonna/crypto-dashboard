<template>
  <v-card flat class="card-border" color="white">
    <v-layout column>
      <v-flex>
        <v-card-title class="card-topic did-you-know">
          Did You Know ?
        </v-card-title>
      </v-flex>
      <v-flex>
        <v-layout row text-xs-left>
          <v-flex xs1 class="pl-4 pt-2 pr-4">
            <v-icon>fa-user-secret</v-icon>
          </v-flex>
          <v-flex class="card-topic" style="text-align: left; font-size: 14px; text-transform: none;">
            {{ infoToDisplay[0] }}
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-card-text v-html="infoToDisplay[1]" style="text-align: left; padding-top: 0px;">
        </v-card-text>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      infos: [
        [
          "We can’t suspend or lock your wallet.",
          "Beware of emails that say your FXtm Wallet is suspended or locked. Because we’re non-custodial, you’re the only one who can manage your funds, keep them secure, and access your wallet. Learn more about this topic here."
        ],
        [
          "What are phishing scams?",
          "Phishing scams exist to try and deceive users into providing personal or financial information. Outsmart them by learning about the most common tricks used."
        ],
        [
          "How it works.",
          "Client side encryption keeps you firmly in control of your funds. Not even we have access. Your wallet is encrypted within your browser before it’s sent to our servers."
        ],
        [
          "Report phishing sites",
          `Did you know you can help us take down phishing sites? Report them directly to Google using this <a href="https://support.google.com/google-ads/troubleshooter/4578507
        ">form</a>. Bookmark it so it’s always on hand!`
        ]
      ]
    };
  },

  computed: {
    infoToDisplay() {
      let randomInfo = this.infos[
        Math.floor(Math.random() * this.infos.length)
      ];
      return randomInfo;
    }
  }
};
</script>
