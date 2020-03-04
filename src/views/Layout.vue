<template>
  <div>
    2
  </div>
</template>

<script>
import config from '../config'
export default {
  components: {
  },
  data(){
    return{

    }
  },
  mounted(){
    this.toLogin();
  },
  methods:{
    toLogin(){
      window.location.href = config.loginUri;
    },
  },
  
}
</script>
