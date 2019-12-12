<template>
  <v-navigation-drawer v-model="drawer"  app clipped>
    <v-list dense>
      <v-list-item-group color="primary">
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    source: String
  },
  data() {
    return {
      drawer: true,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-account", text: "Users", route: "/add-user" },
        {
          icon: "mdi-file-document-box",
          text: "Create Form",
          route: "/create-ticket"
        },
        {
          icon: "mdi-file-document-box",
          text: "List Ticket",
          route: "/list-ticket"
        }
      ],
      profile: { name: "Aa", email: "aan@mail" }
    };
  }
};
</script>