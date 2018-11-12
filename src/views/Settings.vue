<template>
  <v-container>
    <v-layout row wrap>

      <v-flex xs12 md12 sm12 mb-2>


      </v-flex>

      <v-flex xs12 md12 sm12>

        <v-card flat class="card-border">
          <v-list three-line>
            <template v-for="(item, index) in items">

              <v-list-tile :key="index" @click="">

                <v-list-tile-content>
                  <v-list-tile-title class="list-item list-item--title">{{ item.title }}</v-list-tile-title>
                  <v-list-tile-sub-title class="list-item list-item--sub-title">{{ item.text }}</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                <v-btn flat outline class="">
                  <v-icon>
                    fa-share-square
                  </v-icon>
                </v-btn>
              </v-list-tile-action>

              </v-list-tile>

              <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>

            </template>
          </v-list>
        </v-card>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  filters: {
    date(value) {
      console.log(value);
    }
  },

  data() {
    return {
      items: [
        // {
        //   title: "Email Address",
        //   text:
        //     "Your email address can be used to enable two-factor authentication, helping to secure your wallet from unauthorized access,and to send bitcoin payment alerts when you receive funds. ",
        // },
        // {
        //   title: "Notifications",
        //   text: "Get notified when you recieve bitcoin"
        // },
        {
          title: "Privacy Policy",
          text:
            "Read about the privacy and security of your personal information."
        },
        {
          title: "Terms of Service",
          text: "Read our terms and services agreement."
        },
        {
          title: "About",
          text: "Learn more about our company."
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
.share-buttons {

}
</style>
