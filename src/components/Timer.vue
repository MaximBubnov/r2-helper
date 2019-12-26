<template>
  <v-container>
        <v-btn @click="start">Kill</v-btn>
        {{ prettyTime }}
  </v-container>
</template>

<script>

    export default {
      name: "Timer",
      data() {
        return {
          timeNow: "",
          isRunning: false,
          minutes:0,
          secondes:0,
          time: 1170,
          timer:null,
          sound:new Audio("http://s1download-universal-soundbank.com/wav/nudge.wav")

        }
      },
      computed: {
        prettyTime () {
          let time = this.time / 60
          let minutes = parseInt(time)
          let secondes = Math.round((time - minutes) * 60)
          return minutes+":"+secondes
        }
      },
      methods: {
        start () {
          this.timeNow = new Date().toLocaleTimeString();
          this.isRunning = true
          if (!this.timer) {
            this.timer = setInterval( () => {
              if (this.time > 0) {
                this.time--
              } else {
                clearInterval(this.timer)
                this.sound.play()
                this.reset()
                this.time = 1170;
              }
            }, 1000 )
          }
        },
        stop () {
          this.isRunning = false
          clearInterval(this.timer)
          this.timer = null
        },
        reset () {
          this.stop()
          this.time = 0
          this.secondes = 0
          this.minutes = 0
        }
      }
    }
</script>

<style scoped>

</style>
