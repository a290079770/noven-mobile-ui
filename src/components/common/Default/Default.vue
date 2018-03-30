<template>
  <div class="default-component">
     <Header 
       v-if="isHeaderShow"
       :isBackShow="true"   
       :title="'尽请期待'"
       :backImmediateExec="true"
       />
     <figure>
       <img :src="defaultImg">
     </figure>
     <p>{{defaultText}}</p>
     <section v-show="type == 'lookingForward'">敬请期待~</section>
  </div>
</template>
<script>
export default {
  props:{
    type: {
      type: String,
      default: 'lookingForward',
    },//用户输入错误的时候调用的函数
    isHeaderShow: {
      type: Boolean,
      default: true,
    },//用户输入错误的时候调用的函数
  },
  data() {
    return {
       defaultImg:"./static/img/ic-default -Waiting@2x.png",
       defaultText:'更多功能开发ing...',
    }
  },
  methods:{
    /**
     * [renderDefaultText 渲染默认文本]
     * @Author   罗文
     * @DateTime 2018-03-22
     * @return   {[type]}   [description]
     */
    renderDefaultText() {
       switch(this.type) {
         case 'lookingForward':
           this.defaultImg = "./static/img/ic-default -Waiting@2x.png";
           this.defaultText = '更多功能开发ing...'
           break;
         case 'noNetWork':
           this.defaultImg = "./static/img/ic_default-nowifi@2x.png";
           this.defaultText = '亲，暂无网络啦~'
           break;
         case 'noCard':
           this.defaultImg = "./static/img/ic-default-nocard@2x.png";
           this.defaultText = '暂无可用现金券'
           break;
         case 'noData':
           this.defaultImg = "./static/img/ic_default-data@2x.png";
           this.defaultText = '亲，还木有相关数据哟~'
           break;
         default:
           this.defaultImg = "./static/img/ic-default -Waiting@2x.png";
           this.defaultText = '更多功能开发ing...'
           break;    
       }
    }
  },
  created() {
    this.renderDefaultText();
  },
  mounted() {

  },
}

</script>
<style lang='less'>
   .default-component {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 100%;
      min-height: 1.5rem;
      background: white;

      figure {
        width: 1.8rem;
        height: 1.8rem;
        img {
          width: 100%;
          height: 100%;
        }
      }

      p {
        margin: 0.15rem 0;
        font-size: 0.24rem;
        color:#888;
        line-height: 0.33rem;
      }

      section {
        color:#fe4004;
        font-size: 0.32rem;
        line-height: 0.45rem;
      }
   }
</style>
