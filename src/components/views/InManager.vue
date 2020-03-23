<template>
    <div >
    <div class="font-size-18">仓库状态</div>
    <div class="res-status ">
    </div>  
    <div class="font-size-18 title">仓库历史</div>
    <div class="res-history ">
    </div> 
    </div>
</template>
<script>
export default {
  data(){
    return{

    }
  }
}
</script>
<style lang="css" scoped>
 .res-status{
  background: white;
  margin-top:(9/16)+rem;  
  height: 180px !important;
  width: 100% !important;
}
.title{
  margin-top:(32/16)+rem !important; 
  margin-bottom:(9/16)+rem !important; 
}
.res-history{
  background: white;
  height: (690/16)+rem !important;
  width: (1630/16)+rem !important;
}
</style>