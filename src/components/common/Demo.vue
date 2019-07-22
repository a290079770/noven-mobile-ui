<template>
  <div class="demo">
     
       
     <!-- 
     isBackShow 是否显示返回按钮
     backImmediateExec 点击返回按钮直接返回上一页，不会执行backClick的回调
     isRightBtnShow 是否显示右侧按钮  默认false
     title 顶部标题  默认‘标题’
     bgColor 背景色  默认‘white’
     color 字体色  默认‘202E3F’
     rightTextIsBtn 右侧是否是按钮，如果是按钮就需要回调函数
     rightBtnTitle 右侧按钮的文字  默认‘右侧按钮’
     backClick 点击返回按钮的回调函数
     rightBtnClick 点击右侧按钮的回调函数
     border 决定显示下边框
     icon 右侧展示一个icon，配置见例
      -->
     <Header 
     :isBackShow="true" 
     :backImmediateExec="true"
     :isRightBtnShow="true"
     bgColor="white"
     color="black"
     :title="'完成'"
     :rightBtnTitle="'查看订单'"
     :rightTextIsBtn="true"
     :border="true"
     :icon="icon"
     @backClick="backClick" 
     @rightBtnClick="rightBtnClick"
     />


     <table class="demo-list">
       <tbody>
         <tr>
           <td @click="toPath('/keybordNumber')">KeybordNumber<span>数字键盘</span></td>
           <td @click="toPath('/pay')">Pay<span>支付密码</span></td>
           <td @click="toPath('/canvasCycle')">CanvasCycle<span>比例环形图</span></td>
         </tr>
         <tr>
           <td @click="toPath('/header')">Header<span>头部导航</span></td>
           <td @click="toPath('/footer')">Footer<span>底部导航</span></td>
           <td @click="toPath('/button')">Button<span>自定义按钮</span></td>
         </tr>

         <tr>
           <td @click="toPath('/input')">Input<span>文本输入框</span></td>
           <td @click="toPath('/navMenu')">NavMenu<span>导航菜单</span></td>
           <td @click="toPath('/swipeOut')">SwipeOut<span>左滑删除</span></td>
         </tr>

         <tr>
           <td @click="toPath('/topBgImg')">TopBgImg<span>顶部容器背景</span></td>
           <td @click="toPath('/marquee')">Marquee<span>走马灯</span></td>
           <td @click="toPath('/msgCode')">MsgCode<span>获取验证码</span></td>
         </tr>

         <tr>
           <td @click="toPath('/verificationCode')">VerificationCode<span>验证码</span></td>
           <td @click="toPath('/selectCommodity')">SelectCommodity<span>商品sku选择框</span></td>
           <td @click="toPath('/select')">Select<span>中部弹出框选择器</span></td>
         </tr>

         <tr>
           <td @click="toPath('/expandMenu')">ExpandMenu<span>展开式菜单</span></td>
           <td @click="toPath('/popupInput')">PopupInput<span>下部弹出式选择框</span></td>
           <td @click="toPath('/bankItem')">BankItem<span>银行卡展示</span></td>
         </tr>

         <tr>
           <td @click="toPath('/canvasCycle')">CanvasCycle<span>比例环形图</span></td>
           <td @click="toPath('/calendar')">Calendar<span>日历插件</span></td>
         </tr>
       </tbody>
     </table>


     <!-- 万家账本顶部背景图 
        height  区块的高度，接受任意像素单位，默认4.5rem
        bgImg 背景图片
        bgColorStart 背景渐变起始色  默认 #629CFA
        bgColorEnd 背景渐变终止色  默认 #3D6DE7
        direction 渐变色的方向  默认 top
     -->
     <TopBgImg
       height="5rem"
       :bgImg="'./static/img/bg_home1@2x.png'"
     >
        这里是内容区
     </TopBgImg>


     <Banner :bannerList="bannerList" type="detail"/>

     <!-- marqueeList 是数据列表   height 单位为rem -->
     <Marquee :marqueeList="marqueeList" :fields="marqueeProps" height="0.5"/>
     <!-- <Footer :footerList="footerList"/> -->

     <Scroll :scrollList="scrollList"/>

     <MailItem :data="mailData"/>

     <RecommendItem :data="recommendData"/>


     

     


    <!-- 公用导航菜单 -->
    <NavMenu 
    :navData="navData"
    bgColor="white"
    MinWidth="90%"
    Top="0"
    MinHeight="1.2rem"
    LineHeight="1.2rem"
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

     <VerificationCode 
       span-size="0.2rem" 
       type="number" 
       :number="6" 
       height="0.5rem" 
       span-color="#f35252" 
       input-color="#3498db" 
       input-size="0.24rem" 
       :code="code" 
       @complete="codeComplete"
     ></VerificationCode>

     <button @click="selectShopModel = true">弹出商品</button>


     <SelectCommodity 
     :selectShopModel="selectShopModel" 
     @submitSelected="receiveSelected"
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


     <p>
       <span @click="isSelectShow = true;">{{sex}}</span>
     </p>
    
     <!-- 
      dataList 数据列表
      isSelectShow 显示/隐藏选择框
      label 每条数据渲染给用户看的字段名，如果数组元素是基本类型，则传空字符串
      @changeVisible 关闭选择框
      @onSelect 用户选择的数据回调
      -->
     <Select 
      :dataList="dataList" 
      :isSelectShow="isSelectShow" 
      :label="selectLabel"
      @changeVisible="isSelectShow = false"
      @onSelect="onSelect"
      />

     <!-- 
       SwipeOut  左滑删除组件
       height 高度，注意要带单位，接受任意css单位
       @handleDelete  点击删除按钮的操作
      -->
     <SwipeOut 
      height="1rem"
      @handleDelete=""
     >
       <section @click="">
          左滑删除
       </section>
     </SwipeOut> 



     <!-- 
       ExpandMenu  折叠菜单，多处使用

       expandData - 展开式菜单数据数组
       data - 绑定这个菜单的数据
       @expand - 切换展开与隐藏
       @onExpandItemClick 当item被点击时触发的回调
      -->
     <ExpandMenu 
     v-for="(item,index) in expandData" 
     :key="'expand-'+index"  
     :data="item"
     @expand='expand($event,item,index)'
     @onExpandItemClick="onExpandItemClick"
     />


     <!-- 
      PopupInput - 弹出框选择录入方式
      :isPopupInputShow  - 显示/隐藏  默认false
      :popupInputList  - 该弹出框选择的数据
      @close  - 关闭菜单
      -->
     <PopupInput
      :isPopupInputShow="isPopupInputShow"
      :popupInputList="popupInputList"
      @inputType="inputType"
      @close="isPopupInputShow = false"
     />
     <button @click="isPopupInputShow = true">选择录入方式</button>

     
     <!-- 
      Button 按钮组件
      type - 内置的按钮类型 primary warning danger info success
      disabled - 是否禁用按钮
      plain - 是否空心
      @click 点击事件
      -->
     <p>
       <Button @click="btnClick" type="primary" style="width:2.3rem;height:0.8rem">primary</Button>
       <Button @click="btnClick" type="primary" :disabled="true" style="width:2.3rem;height:0.8rem">primary</Button>
       <Button type="primary" :plain="true" style="width:2.3rem;height:0.8rem">primary</Button>
     </p>

     <p>
       <Button type="warning" style="width:2.3rem;height:0.8rem">warning</Button>
       <Button type="warning" :disabled="true" style="width:2.3rem;height:0.8rem">warning</Button>
       <Button type="warning" :plain="true" style="width:2.3rem;height:0.8rem">warning</Button>
     </p>

     <p>
       <Button type="danger" style="width:2.3rem;height:0.8rem">danger</Button>
       <Button type="danger" :disabled="true" style="width:2.3rem;height:0.8rem">danger</Button>
       <Button type="danger" :plain="true" style="width:2.3rem;height:0.8rem">danger</Button>
     </p>


     <p>
       <Button type="info" style="width:2.3rem;height:0.8rem">info</Button>
       <Button type="info" :disabled="true" style="width:2.3rem;height:0.8rem">info</Button>
       <Button type="info" :plain="true" style="width:2.3rem;height:0.8rem">info</Button>
     </p>

     <p>
       <Button type="success" style="width:2.3rem;height:0.8rem">success</Button>
       <Button type="success" :disabled="true" style="width:2.3rem;height:0.8rem">success</Button>
       <Button type="success" :plain="true" style="width:2.3rem;height:0.8rem">success</Button>
     </p>



     <!-- 
       BankItem   - 返回银行卡UI模块
       bankData - 每一条银行卡的数据对象，至少要包含 {
          bankName:'中国农业银行',
          bankType:'储蓄卡',
          bankNumber:'**** **** ***0 618'
       }
       bankClick - 点击事件
      -->
     <BankItem 
     v-for="(item,index) in bankList" 
     :key="'bankItem'+index" 
     :bankData="item"
     @bankClick=""
     />

     
     <!-- 
      InvestRecmd - 投资推荐
      :InvestData 每一条推荐的数据对象，a - e 是模板字段，到时候用真实字段名
      @click="" 点击事件 
      -->
     <InvestRecmd
      v-for="(item,index) in 2"
      :key="'invest'+index" 
      :InvestData="{a:'新手专享推荐',
        b:'9.20%',
        c:'200元',
        d:'年化收益率+奖励',
        e:'复购率最高的产品',
        f:'100元起投 | 低风险'}"
     />


     <!-- 
       canvas绘制的环形图
       canvasData - 绘制环形图的数据
      -->
     <CanvasCycle :canvasData="canvasData"/>
       
     <!-- 
      // v-on:isToday="clickToday"
      // :markDate=arr // arr=['2018/4/1','2018/4/3'] 标记4月1日和4月3日 简单标记
      //:markDateMore=arr // 多种不同的标记
      //第一个标记和第二个标记不能同时使用
      // isHideOtherday=false  //超过今天也不允许点击
      // :agoDayHide='1514937600' //某个日期以前的不允许点击  时间戳10位
      // :futureDayHide='1525104000' //某个日期以后的不允许点击  时间戳10位
      -->
     <Calendar
      v-on:choseDay="clickDay"
      v-on:changeMonth="changeDate"
      :markDateMore='calendarList'
     ></Calendar>


     <div style="height:1.1rem"></div>
  </div>
</template>
<script>
import Banner from './banner.vue';
import Marquee from './Marquee.vue'

//日历插件
import Calendar from 'vue-calendar-component';
export default {
  components:{
    Banner,
    Marquee,
    Calendar
  },
  data() {
    return {
      // 列表头部数据
        navData:[{
          title:'全部',
          orderStatus:-1,
          isActive:true
        },{
          title:'待付款',
          orderStatus:0,
          isActive:false
        },{
          title:'待发货',
          orderStatus:2,
          isActive:false
        },{
          title:'待收货',
          orderStatus:3,
          isActive:false
        },{
          title:'已完成',
          orderStatus:4,
          isActive:false
        }],
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

      marqueeList: [
        { redirectUrl: 'javascript:', 
           img: './static/img/ic_mine_bg@2x.png',
           lanternContent: '送你一朵fua' 
         },
          { redirectUrl: 'javascript:', 
           img: './static/img/ic_mine_bg@2x.png',
           lanternContent: '送你一朵草' 
         },
      ],//走马灯数据

      marqueeProps:{
        redirectUrl:'redirectUrl',
        text:'lanternContent'
      },

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


      //Select 数据
      dataList:['男','女'],
      isSelectShow:false,
      selectLabel:'',
      sex:'Select选择性别',

      //折叠展开窗的数据
      expandData:[ 
        {
          title:'万家金服',
          number:2,
          numberColor:['#ffd662','#ffb034'],
          logo:'./static/img/img_互联网金融1.png',
          isExpand:false,
          centerList:[
            {key:'待收本金',value:'30,000.00元'},
            {key:'待收利息',value:'188.32元'},
            {key:'预期年化',value:'8.9%',color:'#ff5d60'},
          ],

          children:[
            {
              title:'U享计划A',
              right:'10/12期',
              borderLeftColor:'#ffb719',
              itemList:[
                {key:'待收本金(元)',value:'8400.00'},
                {key:'待收利息(元)',value:'5400.06'},
                {key:'昨日收益(元)',value:'9.5%'},
                {key:'预期年化',value:'7.8%',color:'#ff5d60'},
              ]
            },

            {
              title:'腾讯科技(00700-HK)',
              right:'',
              borderLeftColor:'#ff593c',
              itemList:[
                {key:'最新市值(元)',value:'100100.00'},
                {key:'持仓收益(元)',value:'9.50'},
                {key:'今日收益',value:'-2.43%(100.00)',color:'#7ed321'},
              ]
            },
          ]
        },


      ],

      isPopupInputShow:false,

      popupInputList:[
        {
          action:'自动录入',
        },
        {
          action:'手动录入',
        }
      ],


      bankList:[
        {
          bankName:'中国农业银行',
          bankType:'储蓄卡',
          bankNumber:'**** **** ***0 618'
        },
        {
          bankName:'中国工商银行',
          bankType:'储蓄卡',
          bankNumber:'**** **** ***0 920'
        },{
          bankName:'平安银行',
          bankType:'储蓄卡',
          bankNumber:'**** **** ***0 618'
        }
      ],

      canvasData:[
        {
          num:3,
          start:'#ADC7FF',
          end:'#75A1FE'
        },

        {
          num:2,
          start:'#C3AAFF',
          end:'#9071FF'
        },

        {
          num:1,
          start:'#25EADD',
          end:'#10D0B8'
        },

        {
          num:2,
          start:'#FFDC36',
          end:'#FFC033'
        },

        {
          num:1,
          start:'#FF9699',
          end:'#FF5D60'
        },
      ],

      calendarList:[
        {date:'2018/6/3',className:"mark1"},
        {date:'2018/6/13',className:"mark2"}
      ]
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
    },


    /**
     * [select 选择组件的回调]
     * @Author   罗文
     * @DateTime 2018-05-08
     * @param    {[Object]}   e [选择后返回的数据]
     * @return   {[type]}     [description]
     */
    onSelect(data) {
      this.sex = data;
    },

    
    /**
     * [expand 折叠菜单]
     * @Author   罗文
     * @DateTime 2018-06-06
     * @param    {[type]}   e     [description]
     * @param    {[type]}   item  [description]
     * @param    {[type]}   index [description]
     * @return   {[type]}         [description]
     */
    expand(e,item,index) {
      item.isExpand = !item.isExpand;   
      this.$set(this.expandData,index,item);
    },
    

    onExpandItemClick({item,index}) {
        console.log(item);
        console.log(index);
    },


    /**
     * [inputType 录入方式选择]
     * @Author   罗文
     * @DateTime 2018-06-06
     * @param    {[Number]}   type [选择的那一项]
     * @return   {[type]}        [description]
     */
    inputType(type) {
      console.log(type);

      this.isPopupInputShow = false;
    },


    btnClick(e) {
      console.log(e);
    },


    clickDay(data) {
      console.log(data); //选中某天
    },
    changeDate(data) {
      console.log(data); //左右点击切换月份
    },
    clickToday(data) {
      console.log(data); //跳到了本月
    }

  },
  created() {
  },
  mounted() {
    setTimeout(()=>{
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },100)
  }
}

</script>
<style lang='less'>
   .demo {
     height: 100%;
   }

   .demo-list {
     border-collapse: collapse;
     margin: 0 auto;
     width: 90%;
   }


   .demo-list td {
    position: relative;
    width: 33.3%;
    word-wrap:break-word;
    word-break:break-all;
    height: calc(0.33 * 100vw * 0.9);
    text-align: center;
    border: 1px solid #dedede;
    box-sizing: border-box;
    font-size: 0.4rem;
    color:#10d0b8;

    span {
       position: absolute;
       bottom: 0.3rem;
       left: 0;
       width: 100%;
       font-size: 0.24rem;
       text-align: center;
       color:#75a1fe;
    }
   }

  //覆盖日历组件样式
  .wh_content_all {
    background: white !important;
  }

  .wh_content_item {
    color:#222 !important;
  }

  .wh_top_changge li {
    color:#222 !important;
  }

  .wh_isToday {
    background: #75a1fe!important;  
    color:white !important; 
  }

  .wh_nextDayShow {
    color:#dee0e3 !important; 
  } 

  .mark1 {
    background: #eff3fd !important; ;
  }

  .mark2 {
    background: #75a1fe !important; ;
    color:white; 
  }

  .wh_chose_day {
    color:white;
    background:#75a1fe !important;
  }
  

</style>
