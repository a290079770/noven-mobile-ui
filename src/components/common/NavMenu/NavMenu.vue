<template>
  <div>
    <div :class="'nav-menu ' + customClass" v-if="type == 'normal'">
      <ul class="nav-ul">
        <li 
        :style="{width: (100 / navData.length) + '%',color:index == indexId ? '#75a1fe':'#202e3f',transition: 'all '+ speed + 's'}"
        v-for="(item,index) in navData" 
        @click="selectChange(item,index,type)"
        >
          {{item[defaultKey]}}
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
          {{item[defaultKey]}}
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
    defaultKey:{
      type:String,
      default:'title'
    },
    defaultIndex:{
      type:Number,
      default:0
    },
    //模式  normal - 正常页内切换，刷新重置    hash - 页面切换，刷新不重置
    type:{
      type:String,
      default:'normal'
    },
    //normal模式下 页面切换速度
    speed:{
      type:Number,
      default:0.5
    },
    customClass:{
      type:String,
      default:''
    },
    //要记录的键名
    queryParams:{
      type:Array,
      default:() =>{
        return ['title'];
      }
    }

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
         var query = {};
         
         this.queryParams.forEach((citem,cindex)=>{
            query[citem] = item[citem];
         })

         this.$router.push({
           path:this.$route.path,
           query
         })
      }

      this.$emit('change',item);
    },
  },
  created() {
    if(this.type == 'hash') {
       let query = this.$route.query;
       
       //保存筛选出来的数组
       let arr = [];

       //渲染选中项
       this.queryParams.forEach((item,index)=>{
         //匹配所有的保存项
         if(index === 0) {
            arr = filter(this.navData,item,true).slice(0);
         }else {
            arr = filter(arr,item).slice(0);
         }
       })

       function filter(dataList,search,isFirstRun = false) {
         var arr1 = [];
         dataList.forEach((citem,cindex)=>{
            if(citem[search] == query[search]) {
               if(isFirstRun) citem['itemIndex'] = cindex;  
               arr1.push(citem);
            }
         })

         return arr1;
       }
 

       //获取到筛选的那一项
       if(arr.length > 0) {
         //如果arr[0].itemIndex 不等于defaultIndex，以arr[0].itemIndex为准
         this.indexId = arr[0].itemIndex;
       }else{
         //hash模式下，defaultIndex只有第一次有效
         this.selectChange(this.navData[this.defaultIndex],this.defaultIndex);
       }

    }else {
       this.indexId = this.defaultIndex;
    } 
  },

  mounted() {
    
  }

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
