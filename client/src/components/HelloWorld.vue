<template>
  <div class="hello">
    <button @click="changePict">CHANGE</button>
    <img :src="image[number]">
    {{ number }}
  </div>
</template>

<script>
import io from 'socket.io-client'
const socket = io('http://localhost:3000')
export default {
  data () {
    return {
      number: 0,
      image: [
        'https://cdns.klimg.com/dream.co.id/resized/640x320/news/2019/12/15/125012/dituding-bangkrut-tamara-bleszynski-buka-suara-1912156.jpg',
        'https://www.serumpi.com/wp-content/uploads/2017/03/10-2.jpg'
      ]
    }
  },
  name: 'HelloWorld',
  methods: {
    changePict () {
      socket.emit('hay', this.number)
    }
  },
  created () {
    socket.on('hay', (msg) => {
      this.number = msg
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
