<template>
  <div class="wj-marquee" :style="{height:copyHeight + 'rem'}"> 
   <ul class="wj-marquee-content" :style="{top: top / 100 + 'rem'}">
       <li  v-for="(item,index) in copyMarqueeList" 
       :style="{height:copyHeight + 'rem',lineHeight:copyHeight + 'rem','-webkit-box-orient': 'vertical','box-orient': 'vertical' }"
       >
          <a :class="textClass" :href="item[fields.redirectUrl] ? item[fields.redirectUrl] :'javascript:void(0)'" >{{item[fields.text]}}</a>
       </li>
   </ul>
  </div>
</template>
<script>
export default {
   props:{
     marqueeList:{
       type:Array,
       default:[]
     },
     height:{
       type:String,
       default:() =>{
         return []
       }
     },
     fields:{
       type:Object,
       default:() =>{
         return {
           redirectUrl:'redirectUrl',
           text:'lanternContent'
         }
       }
     },
     textClass:{
       type:String,
       default:''
     },
     speed:{ //切换过程中的速度
       type:Number,
       default:5
     },
     duration:{  //切换的间隔时间
       type:Number,
       default:2500
     },
   },
   data () {
    return {
			copyMarqueeList:[],//底部基本数据
      timer:null,   //用于存储定时器
      top:-50,  //定义走马灯上下滚动
      scrollIndex:0,  //滚动的索引
      percent:50,   //每次滚动的距离，如果是移动端，50 == 1rem
      copyHeight:0.5, //走马灯的高度
    }
  },

  methods:{
     /**
      * [scrolling 开始滚动]
      * @Author   罗文
      * @DateTime 2018-03-16
      * @return   {[type]}   [description]
      */
     scrolling() {
        this.timer = setInterval(()=>{
           //每次切换时的滚动效果，需要较快的切换
           let count = 0;
           let end = this.top - this.percent;

           let animate = setInterval(()=>{
               if(this.top <= end) {
                 this.top = end;
                 this.scrollIndex --;
                 clearInterval(animate);
                 
                 //如果是朝上滚动，则滚动到最后一个的时候，需要立即回到第一个
                 if(Math.abs(this.scrollIndex) == this.copyMarqueeList.length - 2) {
                    this.scrollIndex = 0;
                    this.top = - this.copyHeight * 100;
                 }
               }else {
                 this.top -- ;
               }
           },this.speed)
        },this.duration)
     }
	},
  created() {
    //处理默认值
    if(this.marqueeList.length > 0) {
       this.copyMarqueeList = [this.marqueeList[this.marqueeList.length - 1],...this.marqueeList,this.marqueeList[0]]
    }

    this.copyHeight = this.height || 0.5; 
    this.percent = this.copyHeight * 100;
    this.top = - this.copyHeight * 100;

  },
  mounted(){
    this.scrolling();
    //处理定时器切换tab被中断的bug
    document.addEventListener("visibilitychange", ()=> {
      if(document.hidden === true) {
          // 页面被挂起,需要清除掉定时器，避免切换回tab时定时器功能迷乱
          clearInterval(this.timer);
          this.timer = null;
      } else {
          // 页面由挂起被激活
          // 重启定时器
          this.scrolling();
      }
    });
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  watch:{
    'marqueeList':function(val) {
      if(val && val.length > 0 ) {
         //在滚动之前，先提取首尾两条数据，组成无限滚动模型
         this.copyMarqueeList = [val[val.length - 1],...val,val[0]];
      }
    }
  },


}
</script>

<style scoped>

   .wj-marquee {
      position: relative;
      width: 100%;
      overflow: hidden;
   }

   .wj-marquee-content {
      position: absolute;
      left: 0;
      top: 0;
      height: auto;
   }

   li {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
   }

   .wj-marquee a {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color:#202E3F;
   }
</style>

