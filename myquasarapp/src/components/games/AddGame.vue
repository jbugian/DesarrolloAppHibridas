<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: linear-gradient(#8274C5, #5A4A9F);"
  >
    <div class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width:300px;height:485px;">
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md">Add new game</h4>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl">
              <q-input square clearable v-model="name" type="email" label="Name">
                <template v-slot:prepend>
                  <q-icon name="text" />
                </template>
              </q-input>
              <q-input square clearable v-model="tags" type="text" label="Tags">
                <template v-slot:prepend>
                  <q-icon name="text" />
                </template>
              </q-input>
              <q-input square clearable v-model="esrb" type="text" label="ESRB">
                <template v-slot:prepend>
                  <q-icon name="text" />
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
              label="Add game"
              v-on:click="addGame"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "AddGame",
  data() {
    return {
      name: "",
      tags: "",
      esrb: ""
    };
  },
  methods: {
    addGame: function() {
      let games = this.$store.getters.getGames;
      if (games.find(g => g.name == this.name) === undefined) {
        this.$store.commit("addGame" , {
            name: this.name,
            tags: this.tags,
            esrb: this.esrb
        })
        this.$router.push("/Games");
      }
      else {
        alert("the game already exists")
        this.$router.push("/games/addGame");
      }
    }
  }
};
</script>

<style>
</style>