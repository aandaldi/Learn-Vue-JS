<template>
  <nav>
    <div>
      <v-toolbar dark  src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

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
    </div>
  </nav>
</template>

<script>
export default {
  name: "Dashboard"
};
</script>