<template>
  <v-container pb-0 grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 md12 sm12>
        <v-card flat class="card-border">
          <v-container>

            <v-layout hidden-sm-and-down>
              <v-flex text-xs-left>
                <div class="be-your-own-bank">
                  Be your own bank <span style="font-size: 20px;">&reg;</span>
                </div>
                <v-btn class="btn btn--purpure mr-2">
                  Send
                </v-btn>
                <v-btn class="btn btn--blue">
                  Request
                </v-btn>
              </v-flex>

              <v-flex text-xs-right>
                <div class="total-balance">
                  Total Balance
                </div>
                <div class="money-header">
                  $31.55
                </div>
              </v-flex>
            </v-layout>

            <v-layout hidden-md-and-up column text-xs-center>
              <v-flex class="total-balance">
                Total Balance
              </v-flex>
              <v-flex class="money-header">
                $33.76
              </v-flex>
              <v-flex>
                <v-btn class="btn btn--purpure mr-2">
                  Send
                </v-btn>
                <v-btn class="btn btn--blue">
                  Request
                </v-btn>
              </v-flex>
            </v-layout>

          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.be-your-own-bank {
  font-weight: 200;
  font-size: 28px;
  text-transform: uppercase;
  font-style: normal;
  color: rgb(84, 84, 86);
  opacity: 1;
}
.total-balance {
  font-weight: 300;
  font-size: 20px;
  text-transform: none;
  font-style: normal;
  color: rgb(84, 84, 86);
}
.money-header {
  color: rgb(169, 169, 169) !important;
  font-size: 30px;
  font-weight: 200;
  padding-right: 15px;
}
</style>
