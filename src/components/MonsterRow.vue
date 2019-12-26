<template>
    <v-list-item>

      <v-list-item-avatar>
        <v-img :src="require(`../assets/boss-images/${monster.picture}`)" alt=""></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>{{monster.name}}</v-list-item-title>
      </v-list-item-content>

      <v-list-item-icon>
        <v-list-item-action>
          <v-checkbox
            v-model="monster.active"
            color="primary"
          ></v-checkbox>
        </v-list-item-action>
      </v-list-item-icon>

    </v-list-item>
</template>

<script>
    export default {
      name: "MonsterRow",
      props: ['monster'],
    }
</script>

<style scoped>

</style>
