<template>
  <v-content>
        <h1 class="text-md-center">Выберите наблюдаемых монстров</h1>
    <v-card
      max-width="1000"
      class="mx-auto"
    >
      <v-list>
        <monster-row
          v-for="monster in monsters"
          :monster="monster"
        ></monster-row>
      </v-list>

      <v-card-actions class="justify-center">
        <v-btn color="primary" @click="addToUserList">Добавить в список</v-btn>
      </v-card-actions>
    </v-card>

    <user-list
      v-if="isMonsters"
      :user-list="userList"
    >
    </user-list>
  </v-content>
</template>

<script>
  import MonsterRow from "../components/MonsterRow.vue";
  import UserList from "./UsersList";
  const data = require('../monsters.json').monsters

    export default {
      name: "Hello",
      components: {UserList, MonsterRow},
      data () {
        return {
          monsters: data,
          userList: [],
          isMonsters: false
        }
      },methods: {
        addToUserList() {
          this.isMonsters = true;
          this.userList = [];

          for(let m in this.monsters) {
            if(this.monsters[m].active) {
              this.userList.push(this.monsters[m]);
            }
          }

          this.userList.sort(((a, b) => - (b.killTime - a.killTime)));

          this.$emit("list", this.userList);

          console.log(this.userList);
        }
      },
    }
</script>

<style scoped>

</style>
