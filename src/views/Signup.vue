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
                  Create Your Wallet
                </v-flex>
                <v-flex text-xs-right style="align-self: center;">
                  <router-link to="login" class="sign-up">Login</router-link>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex class="text">
              Sign up for a free wallet below
            </v-flex>
          </v-layout>

          <v-divider class="my-3"></v-divider>

          <v-layout column>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-flex>
                <div class="input-name">Email</div>
                <v-text-field class="input-field" v-model="email" :rules="emailRules" required single-line outline></v-text-field>
              </v-flex>
              <v-flex>
                <div class="input-name">Password</div>
                <v-text-field type="password" class="input-field" v-model="password" required :rules="passwordRules" :counter="10" single-line outline></v-text-field>
              </v-flex>
              <v-flex>
                <div class="input-name">Confirm Password</div>
                <v-text-field type="password" class="input-field" v-model="confirmPassword" required :counter="10" single-line outline></v-text-field>
              </v-flex>
              <v-flex class="pl-2">
                <v-layout>
                  <v-flex pr-2>
                    <input v-model="checkbox" style="height: 20px; width: 20px" type="checkbox">
                  </v-flex>
                  <v-flex>
                    <div class="text">
                      I have read and agreed to the <span class="sign-up"> Terms of Service </span> & <span class="sign-up">Privacy Policy </span>
                    </div>
                  </v-flex>
                </v-layout>
              </v-flex>

              <v-flex text-xs-center>
                <v-btn style="width: 100%" :disabled="!valid" @click="submit" large class="btn btn--blue">Continue</v-btn>
              </v-flex>
            </v-form>
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
      passwordRules: [
        v => !!v || "Password is required",
        v =>
          (v && v.length >= 6) || "Password must not be less than 6 characters"
      ],
      confirmPassword: "",
      confirmPasswordRules: [
        v => !!v || "Confirm password is required",
        v => v && v == this.passwordRules
      ],
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
      if (this.$refs.form.validate() && this.checkbox) {
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