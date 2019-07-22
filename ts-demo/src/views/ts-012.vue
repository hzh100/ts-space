
<template>
  <div class="home">
    <h1>{{$route.name}}</h1>
    <h3>{{demo}}</h3>
  </div>
</template>

<script lang="js">

export default {
  data() {
    return {
      demo: 'javascript'
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      
    }
  },
}
</script>
