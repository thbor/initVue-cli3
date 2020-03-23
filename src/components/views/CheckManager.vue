<template>
    <div>
      <div>
        <div class="font-size-18 " :style="getMarginBottom(10)">查询</div>
        <div class="white" :style="getHeight(200)"></div>  
      </div>
      <div :style="getMarginTop(10)">
        <div class="white" :style="getHeight(740)"></div> 
      </div>
    
    </div>
</template>
<script>
export default {
  props:{
    screenHeight:Number
  },
  watch:{
    screenHeight:function () {
      console.log("screenHeight",this.screenHeight)
    }
  },
  data(){
    return{
      initScreenHeight:0
    }
  },
  mounted(){
    this.initScreenHeight = document.body.clientHeight
    // if(this.screenHeight==0){this.screenHeight=document.body.clientHeight}
  },
  methods:{
    //计算高度占比
    getPercentHieght(val){
      let newheight = 0;
      if(this.screenHeight==0){
        newheight = this.initScreenHeight*(val/1080);  
      }else{
        newheight = this.screenHeight*(val/1080);  
      }
      return newheight
    },
    getHeight(val){
      let newHeight = this.getPercentHieght(val);
      return {
        height:newHeight+"px"+"!important"
      }
    },
    getMarginBottom(val){
      let mb = this.getPercentHieght(val);
      return {
        marginBottom:mb+"px"+"!important"
      }
    },
    getMarginTop(val){
      let marginTop = this.getPercentHieght(val);
      return {
        marginTop:marginTop+"px"+"!important"
      }
    }

    
  }
}
</script>
<style lang="css" scoped>


.white{
  background: white;
}
</style>