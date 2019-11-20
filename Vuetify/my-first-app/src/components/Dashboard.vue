<template>
  <nav>
    <div>
      <v-toolbar flat app dark  src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title class="text-uppercase">MyFirst Vue App</v-toolbar-title>

        <v-spacer></v-spacer>
        <div class="hidden-md-and-down">
            <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon>
            <v-icon>mdi-account-tie</v-icon>
            </v-btn>
            <v-btn icon>
            <v-icon>mdi-export</v-icon>
            </v-btn>
        </div>
      </v-toolbar>

      <v-navigation-drawer v-model="drawer" app class="indigo">
          <v-list>
              <v-list-tile>
                  <v-list-tile-action>
                      <v-icon class="white--text">mdi-view-dashboard</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                      <v-list-tile-title class="white--text">Dashboard</v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>
          </v-list>
      </v-navigation-drawer>
    </div>
  </nav>
</template>

<script>
export default {
//   name: "Dashboard",
  data(){
      return{
          drawer: false
      }
  }
};
</script>