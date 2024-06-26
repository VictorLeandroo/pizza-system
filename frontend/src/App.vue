<template>
  <span>{{ ordersList }}</span>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  components: {
  },
  
  data(){
    return {
      ordersList: []
    }
  },

  methods: {
    getListOrders(){
      axios.get('http://localhost:3000/getOrders')
      .then((response)=>{
        this.ordersList = response.data.result
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  },

  mounted() {
    this.getListOrders()
  }
}
</script>
