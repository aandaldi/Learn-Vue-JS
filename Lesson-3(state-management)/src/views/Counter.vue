<template>
  <div id="app">
    <div>{{ ini }}</div>
    <div><input v-model="ganti" @keyup="set" /></div>
    <div class="counter">{{ counter }}</div>
    <button @click="increment" class="increment">Tambah</button>
    <button @click="decrement" class="decrement">Kurangi</button>
  </div>
  <!-- <div id="app" v-else>
    <div>{{ini}}</div>
  </div>-->
</template>

<script>
export default {
  data() {
    return {
      ganti: ""
    };
  },
  methods: {
    increment() {
      // this.$store.commit("increment");
      console.log(this.$store.state.token);
    },
    decrement() {
      this.$store.commit("decrement");
    },
    set() {
      this.$store.commit("setter", this.ganti);
      console.log(this.$store.state.token);
    }
  },
  computed: {
    counter() {
      return this.$store.getters.getCounter;
    },
    ini() {
      // get value from state
      return this.$store.getters.getToken;
    }
  }
};
</script>

<style scoped>
#app {
  width: 30%;
  margin: 100px auto;
  background: #f1f1f1;
  padding: 15px;
}
.counter {
  width: 70%;
  padding: 50px 5px;
  margin: 20px auto;
  background: #3498db;
  color: #fff;
  font-size: 100px;
}
button {
  border: 0;
  padding: 13px 45px;
  font-weight: bold;
  margin-bottom: 20px;
}
.increment {
  background: #2c3e50;
  color: #fff;
}
.increment:hover {
  transition: 0.7s;
  opacity: 0.8;
  cursor: pointer;
}
.decrement {
  background: #c0392b;
  color: #fff;
}
.decrement:hover {
  transition: 0.7s;
  opacity: 0.9;
  cursor: pointer;
}
</style>