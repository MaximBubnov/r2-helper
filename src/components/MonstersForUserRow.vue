<template>
  <v-list-item>

    <v-list-item-avatar>
      <v-img :src="require(`../assets/boss-images/${monster.picture}`)" alt=""></v-img>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title>{{monster.name}}</v-list-item-title>
      <v-list-item-subtitle>{{monster.killTime}}</v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action>
      <timer></timer>
    </v-list-item-action>

  </v-list-item>
</template>

<script>
    import Timer from "./Timer";

    export default {
      name: "MonstersForUserRow",
      components: {Timer},
      props: ['monster'],
      methods: {
        setKillTime(){
          let date = new Date().toLocaleTimeString();
          this.monster.killTime = date;
        }
      }
    }
</script>

<style scoped>

</style>
