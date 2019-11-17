<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>Quasar App</q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-2">
      <q-list>
        <q-item-label header>Menu</q-item-label>
        <q-item clickable to="/Index">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Index</q-item-label>
            <q-item-label caption>Index</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/Register">
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Register</q-item-label>
            <q-item-label caption>Register</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/Users">
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Users</q-item-label>
            <q-item-label caption>Users</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/AddGame">
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Add game</q-item-label>
            <q-item-label caption>Add game</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/Games">
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Games</q-item-label>
            <q-item-label caption>Games</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-on:click="logout">
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Logout</q-item-label>
            <q-item-label caption>Logout</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MyLayout",
  data() {
    return {
      leftDrawerOpen: false
    };
  },
  methods: {
    logout: function() {
      this.$store.commit("logout");
      this.$router.push("/login");
    }
  }
};
</script>
