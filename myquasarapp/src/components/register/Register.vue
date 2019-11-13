<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: linear-gradient(#8274C5, #5A4A9F);"
  >
    <div class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width:600px;height:850px;">
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md">Registration</h4>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl q-pb-lg">
              <q-input square clearable v-model="email" type="email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input square clearable v-model="username" type="username" label="Username">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-date v-model="birthdate" minimal />
              <q-input square clearable v-model="password" type="password" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
              <q-input
                square
                clearable
                v-model="password2"
                type="password"
                label="Confirm Password"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn
              unelevated
              size="lg"
              color="purple-4"
              class="full-width text-white"
              label="Get Started"
              v-on:click="register"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
            <p class="text-grey-6">Return to login</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: "",
      username: "",
      password: "",
      password2: "",
      birthdate: ""
    };
  },
  methods: {
    register: function() {
      if (this.password === this.password2 && this.password.length > 0) {
        let users = JSON.parse(localStorage.getItem("users"));
        let userExists = users.find(u => u.user == this.email);

        if (userExists !== undefined) {
          return alert("user already exists");
        }

        users.push({
          email: this.email,
          password: this.password,
          username: this.username,
          birthdate: this.birthdate
        });
        localStorage.setItem("users", JSON.stringify(users));

        this.$router.push("/login");
      } else {
        this.password = "";
        this.password2 = "";

        return alert("Passwords do not match");
      }
    }
  }
};
</script>

<style>
</style>