<template>
  <v-card flat class="card-border" color="white">
    <v-card-title class="card-topic">
      Price Chart
    </v-card-title>
    <div class="btcwdgt-chart" bw-theme="light"></div>
  </v-card>
</template>

<script>
export default {
  created() {
    // load the bitcoin widget
    (function(b, i, t, C, O, I, N) {
      window.addEventListener(
        "load",
        function() {
          if (b.getElementById(C)) return;
          (I = b.createElement(i)), (N = b.getElementsByTagName(i)[0]);
          I.src = t;
          I.id = C;
          N.parentNode.insertBefore(I, N);
        },
        false
      );
    })(document, "script", "https://widgets.bitcoin.com/widget.js", "btcwdgt");
  }
};
</script>

<style>
</style>
