<template>
  <div class="user-profile">
    <div class="Form">
      <v-container>
        <v-row justify="center">
        <v-card width="80%">
          <v-card-title><h4 clas>User Profile</h4></v-card-title>
          <v-form>
            <v-row justify="center">
              <v-col cols="12">
                <v-text-field label="Name" v-model="name" :rules="nameRules"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Username" v-model="uname" :rules="userName"></v-text-field>
              </v-col>
              <v-col :cols="12">
                <v-text-field label="Email" v-model="email" :rules="emailRules"></v-text-field>
              </v-col>
              <v-col>
                <input :type="passwordFieldType" v-model="password">
              </v-col>
              <v-col cols="12">
                <v-select
                  v-model="select"
                  :items="items"
                  :rules="[v => !!v || 'Item is required']"
                  label="Item"
                  required
                ></v-select>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "user-profile"
  // components: {
  //   HelloWorld
  // }
};
</script>
