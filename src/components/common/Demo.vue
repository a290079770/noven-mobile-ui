<template>
  <div class="demo">
     <Banner :bannerList="bannerList" type="detail"/>
     <!-- marqueeList 是数据列表   height 单位为rem -->
     <Marquee :marqueeList="lanternList" height="0.5"/>
     <!-- <Footer :footerList="footerList"/> -->

     <Scroll :scrollList="scrollList"/>

     <MailItem :data="mailData"/>

     <RecommendItem :data="recommendData"/>

     <!-- 
     isBackShow 是否显示返回按钮
     backImmediateExec 点击返回按钮直接返回上一页，不会执行backClick的回调
     isRightBtnShow 是否显示右侧按钮
     title 顶部标题
     rightTextIsBtn 右侧是否是按钮，如果是按钮就需要回调函数
     rightBtnTitle 右侧按钮的文字
     backClick 点击返回按钮的回调函数
     rightBtnClick 点击右侧按钮的回调函数
     border 决定显示下边框
     icon 右侧展示一个icon，配置见例
      -->
     <Header 
     :isBackShow="false" 
     :backImmediateExec="true"
     :isRightBtnShow="true"
     :title="'完成'"
     :rightBtnTitle="'查看订单'"
     :rightTextIsBtn="true"
     :border="true"
     :icon="icon"
     @backClick="backClick" 
     @rightBtnClick="rightBtnClick"
     />

     <!-- 
      text 默认的文字
      reloadText 重新加载的文字
      handleClick 点击倒计时的回调函数
      -->
     <MsgCode
       text="获取验证码" 
       reloadText="重新获取验证码"
       @handleClick="getCode"
       :disabled="false"
     />
     
     <!-- 
       value 默认值
       type 支持的类型 目前有 text、number、password,其他类型会被转换为text,

       maxLength - 原生这个属性，type为number时会失效，这里进行处理

       forbid - 接受一个数组，禁止输入的类型，目前支持中文和特殊字符
       @input="getInput"  接受输入的回调
      -->
     <Input 
       :value="'这里是默认值'"
       type="text"
       maxLength="11"
       :forbid="['chinese','spechars']"
       @input="getInputValue"
     />

     <!-- 
      code 数组  用户输入的验证码数组  — —
      type  字符串 用户输入类型  number,text number
      getinput  函数  用户每次输入后的回调函数,接受一个验证码字符串 — —
      success 函数  用户输入完成后的回调函数,接受一个验证码字符串 — —
      span-size 字符串 输入后的字体显示大小  — 20px
      span-color  字符串 输入后的字体显示颜色  — #f35252
      input-size  字符串 输入框的字体显示大小  — 20px
      input-color 字符串 输入框的字体显示颜色  — #000
      number  数字  验证码个数 — 6
      height  字符串 整个框的显示高度  — 60px
      -->

     <InputCode 
       span-size="0.2rem" 
       type="number" 
       :number="6" 
       height="0.5rem" 
       span-color="#f35252" 
       input-color="#3498db" 
       input-size="0.24rem" 
       :code="code" 
       @complete="codeComplete"
     ></InputCode>

     <button @click="selectShopModel = true">弹出商品</button>


     <SelectCommodity :selectShopModel="selectShopModel" @submitSelected="receiveSelected"
     />


     <div style="height:5rem;width:100%">
       <!-- 
        注意：该组件默认宽高是100%；可以通过限定父容器的宽高来限定这个组件
        type  
        显示的缺省模板，包括~~~~~~
        lookingForward - 尽请期待
        noNetWork - 无网络
        noCard - 无卡券
        noData - 无数据
        ~~~~~

        isHeaderShow  是否显示头部
        -->
       <Default 
         type="lookingForward"
         :isHeaderShow="false"
       />
     </div>

  </div>
</template>
<script>
import Banner from './banner.vue';
import Marquee from './Marquee.vue'
import Footer from './Footer.vue'
export default {
  components:{
    Banner,
    Marquee,
    Footer
  },
  data() {
    return {
      bannerList:[
         { url: 'javascript:', 
           img: './static/img/ic_mine_bg@2x.png',
           title: '送你一朵fua' 
         },
          { url: 'javascript:', 
            img: './static/img/ic_mine_bg@2x.png',
            title: '送你一次旅行',
          }
       ],

      lanternList: [
        { redirectUrl: 'javascript:', 
           img: './static/img/ic_mine_bg@2x.png',
           lanternContent: '送你一朵fua' 
         },
          { redirectUrl: 'javascript:', 
           img: './static/img/ic_mine_bg@2x.png',
           lanternContent: '送你一朵草' 
         },
      ],//走马灯数据

      //footer的数据
      footerList:[
        { 
          id:0,
          title:'首页',
          defaultIcon:'./static/img/商城icon@2x.png',
          activeIcon:'./static/img/商城icon-on@2x.png',
          path:'/',  //对应路由路径
          query:{}   //路由携带的参数
        },
        {
          id:1,
          title:'分期商城',
          defaultIcon:'./static/img/首页icon@2x.png',
          activeIcon:'./static/img/首页icon-on@2x.png',
          path:'/',
          query:{}
        },
        {
          id:2,
          title:'信用生活',
          defaultIcon:'./static/img/信用icon@2x.png',
          activeIcon:'./static/img/信用icon-on@2x.png',
          path:'/',
          query:{}
        },
        {
          id:3,
          title:'我的',
          defaultIcon:'./static/img/我的icon@2x.png',
          activeIcon:'./static/img/我的icon-on@2x.png',
          path:'/',
          query:{}
        },
      ],

      scrollList:[
        { 
          price:2000.15,
          title:'Apple苹果IphoneX现货9999元128G',
          img:'./static/img/scrollitem.png',
          hasAmortizeNumber:true
        },
        { 
          price:200.5,
          title:'Apple苹果IphoneX现货9999元128G',
          img:'./static/img/scrollitem.png',
          hasAmortizeNumber:true
        },
        { 
          price:200.51,
          title:'Apple苹果IphoneX现货9999元128G',
          img:'./static/img/scrollitem.png',
          hasAmortizeNumber:true
        },
        { 
          price:200,
          title:'Apple苹果IphoneX现货9999元128G',
          img:'./static/img/scrollitem.png',
          hasAmortizeNumber:true
        },
        { 
          price:200,
          title:'Apple苹果IphoneX现货9999元128G',
          img:'./static/img/scrollitem.png'
        },
        { 
          price:200,
          title:'Apple苹果IphoneX现货9999元128G',
          img:'./static/img/scrollitem.png'
        },
        { 
          price:200,
          title:'Apple苹果IphoneX现货9999元128G',
          img:'./static/img/scrollitem.png'
        },
        { 
          price:200,
          title:'Apple苹果IphoneX现货9999元128G',
          img:'./static/img/scrollitem.png'
        },
      ],


      mailData:{
        title:'华为HUAWEI Mate 10 Pro 现货分期',
        price:2001.88,
        img:'./static/img/mailItem.png'
      },  //商城item的数据
      recommendData:{
        title:'华为HUAWEI Mate 10 Pro 现货分期 Apple Iphone 1 Plus 128G 红色特别版 移动联通电信',
        price:2001.88,
        img:'./static/img/recommendItem.png'
      },  //商城item的数据

      //头部右侧icon配置
      icon:{
         width:'0.4rem',
         height: '0.45rem',
         src:'./static/img/recommendItem.png'
      },

      code:[], //用户输入的验证码
      selectShopModel:false,  //弹出商品选择
    }
  },
  methods:{
    backClick() {
      console.log('back');
    },
    rightBtnClick() {
      console.log('right');
    },

    getCode() {
      console.log('get code');
    },


    getInputValue(input) {
      console.log(input);
    },


    codeComplete(code) {
      console.log(code);
    },


    receiveSelected(selected) {
      console.log(selected);
      this.selectShopModel = false;
    }

  },
  created() {
 
  },
  mounted() {

  }
}

</script>
<style lang='less'>
   .demo {
     width: 100%;
     height: 100%;
   }
</style>
