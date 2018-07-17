<template>
  <div class="nav-menu" :style="{height:MinHeight,lineHeight:LineHeight,backgroundColor:bgColor,top:Top}">
    <ul class="nav-ul" :style="{width:MinWidth}">
      <li 
      :class="item.orderStatus == indexId? 'nav-list active' : 'nav-list'" 
      v-for="(item,index) in navData" 
      @click="selectChange(item,index)"
      >
        {{item.title}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props:[
  'navData',
  'bgColor',
  'MinWidth',
  'Top',
  'MinHeight',
  'LineHeight'
  ],
  data() {
    return {
      buttonClass:'',
      indexId:-1,
    }
  },
  methods:{
     // 选择不同的订单状态
    selectChange(item,index){
      console.log(index)
      switch(index){
        case 0:
          this.indexId = -1;
          this.detailsPath(item.path,this.indexId);
          break;
        case 1:
          this.indexId = 0;
          this.detailsPath(item.path,this.indexId);
          break;
        case 2:
          this.indexId = 2;
          this.detailsPath(item.path,this.indexId);
          break;
        case 3:
          this.indexId = 3;
          this.detailsPath(item.path,this.indexId);
          break;
        default:
         break;
      };
    },
  },
  created() {
    
  },

  watch:{
    'indexId':function(val){
      this.indexId = val;
    }
  }
}

</script>

<style lang="less" scoped>
.nav-menu{
  width: 100%;
  border-bottom: .01rem solid #E
  EEFF3;
  font-size: .3rem;
  color: #202e3f;
  overflow-x:scroll;
  z-index: 99;
  white-space: nowrap;
   .nav-ul{
    height: .88rem;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
    .nav-list{
      width: auto;
      display: block;
      text-align: center;
    }
    .discount-nav-list{
      width: auto;
      padding: .2rem 0;
      margin:0 .7rem;
      display: inline;
    }
    .active{
      border-bottom: .06rem solid #75a1fe;
      color:#75a1fe ;
    }
  } 
}
.nav-menu::-webkit-scrollbar{ 
  width: 0; 
  height: 0;   
  background-color: #fff;  
}

</style>
