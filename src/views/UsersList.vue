<template>
  <div>
    <v-content>
      <h1 class="text-md-center">Убейте монстра и нажмите Kill</h1>
      <v-card
        max-width="1000"
        class="mx-auto"
      >
        <v-list>
          <monsters-for-user-row
            v-for="u_m in userList"
            :monster="u_m"
          >
          </monsters-for-user-row>
        </v-list>

      </v-card>
    </v-content>
  </div>
</template>

<script>
    import MonstersForUserRow from "../components/MonstersForUserRow.vue";
    export default {
      name: "UserList",
      components: {MonstersForUserRow},
      props: ['userList']

    }
</script>

<style scoped>

</style>
