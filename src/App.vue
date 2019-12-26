<template>
  <div id="app">
    <v-app>
    <v-app-bar
      app
      clipped-left
    >
      <v-toolbar-title>R2 Helper</v-toolbar-title>
    </v-app-bar>

      <v-content>
        <v-container
          class="fill-height"
          fluid
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col class="shrink">
              <v-tooltip right>
                <template v-slot:activator="{ on }">
                  <v-btn
                    to="/hello"
                    icon
                    large
                    target="_blank"
                    v-on="on"
                  >
                    <v-icon large>
                      mdi-code-tags
                    </v-icon>
                  </v-btn>
                </template>
                <span>Список монстров</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-container>
      </v-content>

    <router-view></router-view>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      drawer: null
    }
  },
  created () {
    this.$vuetify.theme.dark = true
  },
}
</script>

<style>

</style>
