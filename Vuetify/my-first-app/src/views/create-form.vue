<template>
  <!-- <div class="Form">
    <v-form>
      <v-text-field label="Name" v-model="name" :rules="nameRules"></v-text-field>
      <v-text-field label="Email" v-model="email" :rules="emailRules"></v-text-field>
      <v-select v-model="select" :items="items"  :rules="[v => !!v || 'Item is required']"  label="Item" required></v-select>

    </v-form>
  </div>-->
  <v-container fluid class="grey lighten-5">
    <v-row no-gutters justify="center">
      <v-col cols="6">
        <v-form>
          <v-text-field label="Name" v-model="name" :rules="nameRules"></v-text-field>
          <v-text-field label="Email" v-model="email" :rules="emailRules"></v-text-field>
          <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="Item"
            required
          ></v-select>
        </v-form>
      </v-col>
    </v-row>
    <v-row justify="end">
      <v-col cols="8">
        <v-card class="pa-2" outlined tile>1</v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    justify: "center"
  })
};
</script>
