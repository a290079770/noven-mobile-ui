<template>
  <div>
    <div :class="'nav-menu ' + customClass" v-if="type == 'normal'">
      <ul class="nav-ul">
        <li 
        :style="{width: (100 / navData.length) + '%',color:index == indexId ? '#75a1fe':'#202e3f',transition: 'all '+ speed + 's'}"
        v-for="(item,index) in navData" 
        @click="selectChange(item,index,type)"
        >
          {{item.title}}
        </li>

        
        <li class="active list-translate" :style="{width: (100 / navData.length) + '%',transform:'translate3d('+ 100 * indexId + '%' +',0,0)',transition: 'all '+ speed + 's'}"></li>
      </ul>

    </div>



 
    <!-- 下面是切换页面不会重置的 -->
    <div :class="'nav-menu ' + customClass" v-if="type == 'hash'">
      <ul class="nav-ul">
        <li 
        :style="{width: (100 / navData.length) + '%',color:index == indexId ? '#75a1fe':'#202e3f',transition: 'all '+ speed + 's'}"
        v-for="(item,index) in navData" 
        @click="selectChange(item,index,type)"
        >
          {{item.title}}
        </li>

        
        <li class="active list-translate" :style="{width: (100 / navData.length) + '%',transform:'translate3d('+ 100 * indexId + '%' +',0,0)',transition: 'all '+ speed + 's'}"></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    navData:{
      type:Array,
      default:() =>{
        return []
      }
    },
    type:{
      type:String,
      default:'hash'
    },
    speed:{
      type:Number,
      default:0.5
    },
    customClass:{
      type:String,
      default:''
    },

  },
  data() {
    return {
      indexId:0,
    }
  },
  methods:{
     /**
      * [selectChange 当导航切换的时候]
      * @Author   罗文
      * @DateTime 2018-07-16
      */
    selectChange(item,index){
      if(this.type == 'normal') {
         this.indexId = index;
      }else if(this.type == 'hash') {
         //切换页面
      }
    },
  },
  created() {
    
  },

}

</script>

<style lang="less" scoped>
.nav-menu{
  width: 100%;
  border-bottom: .01rem solid #eeeff3;
  font-size: .3rem;
  color: #202e3f;
  overflow-x:scroll;
  z-index: 99;
  white-space: nowrap;
   .nav-ul{
    position: relative;
    height: .88rem;
    margin:0 auto;
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #dedede;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
    }
    .active{
      border-bottom: .06rem solid #75a1fe;
    }

    .list-translate {
      position: absolute;
      left: 0;
      height: 100%;
    }
  } 
}
.nav-menu::-webkit-scrollbar{ 
  width: 0; 
  height: 0;   
  background-color: #fff;  
}



</style>
