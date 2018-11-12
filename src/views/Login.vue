<template>
  <v-container style="height: 100%;" xs12 sm6 md6>
    <v-layout>
      <div class="tia">
        This is Africa
      </div>
    </v-layout>

    <v-layout align-center justify-center pa-2>

      <v-card class="card-border" flat width="500">
        <v-container>

          <v-layout column>
            <v-flex justify-space-around>
              <v-layout>
                <v-flex class="create-your-wallet">
                  Welcome Back !
                </v-flex>
                <v-flex text-xs-right style="align-self: center;">
                  <router-link to="signup" class="sign-up">Signup</router-link>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex class="text">
              Sign in to your wallet below
            </v-flex>
          </v-layout>

          <v-divider class="my-3"></v-divider>

          <v-layout column>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-flex>
                <div class="input-name">Email</div>
                <v-text-field class="input-field" type="email" v-model="email" :rules="emailRules" required single-line outline></v-text-field>
              </v-flex>
              <v-flex>
                <div class="input-name">Password</div>
                <v-text-field class="input-field" type="password" v-model="password" required single-line outline></v-text-field>
              </v-flex>

              <v-flex text-xs-center>
                <v-btn style="width: 100%" :disabled="!valid" @click="submit" large class="btn btn--blue">Log In</v-btn>
              </v-flex>
            </v-form>
            <div>
              Having some trouble?
              <router-link to="signup" class="sign-up">Get help logging in</router-link>
            </div>
          </v-layout>
        </v-container>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      password: "",
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      select: null,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      checkbox: false
    };
  },

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        console.log("Submit the event to the world");
      }
      this.$router.push("/");
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style>
.create-your-wallet {
  font-weight: 300;
  font-size: 24px;
  text-transform: capitalize;
  font-style: normal;
  color: rgb(84, 84, 86);
}
.sign-up {
  font-size: 13px;
  font-weight: 300;
  color: rgb(16, 173, 228) !important;
  text-transform: none;
  text-decoration: none;
}
.text {
  font-size: 13px;
  font-weight: 300;
  color: rgb(84, 84, 86);
  text-transform: none;
}
.input-name {
  font-weight: bold;
  font-size: 14px;
  text-transform: none;
  font-style: normal;
  color: rgb(84, 84, 86);
  margin-bottom: 5px;
}
.tia {
  font-size: 40px;
  color: blue;
}
</style>