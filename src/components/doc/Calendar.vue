<template>
  <div>
     <Header 
     :isBackShow="true" 
     :title="'日历插件'"
     :border="true"
     @backClick="$router.push('/demo')"
     />

     

     <section class="section">
       <h2>Calendar</h2>
       <p>日历插件，引用第三方组件 vue-calendar-component </p>
       <p>详细见文档： <a style="color:#2ab337" href="https://github.com/zwhGithub/vue-calendar/">https://github.com/zwhGithub/vue-calendar/</a>  </p>
     </section>

   <h4>展示</h4>

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


   <h4>调用实例</h4>
 <pre>
  <span class="tag-value">import</span> <span class="tag-name">Calendar</span> <span class="tag-value">from</span> <span class="tag-methods">'vue-calendar-component'</span>

   &lt;<span class="tag-name">Calendar</span>
    <span class="tag-methods">v-on:choseDay</span>=<span class="tag-value">"clickDay"</span>
    <span class="tag-methods">v-on:changeMonth</span>=<span class="tag-value">"changeDate"</span>
    <span class="tag-attr">:markDateMore</span>=<span class="tag-value">'calendarList'</span>
   &gt;&lt;/<span class="tag-name">Calendar</span>&gt;

   <span class="tag-methods">
   <span class="tag-name">components</span> {
     Calendar
   }

   <span class="tag-name">data()</span> {
     return {
       calendarList:[
        {date:'2018/6/3',className:"mark1"},
        {date:'2018/6/13',className:"mark2"}
       ]
     }
   }

   <span class="tag-name">methods</span> {
     clickDay(data) {
      console.log(data); //选中某天
     },
     changeDate(data) {
      console.log(data); //左右点击切换月份
     },
     clickToday(data) {
      console.log(data); //跳到了本月
     }
   } 


   <span class="tag-name">CSS</span> 
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
   </span> 

 </pre>

  <img :src="'./static/img/1.png'" style="width:7.5rem">     
     
  </div>
</template>
<script>
//日历插件
import Calendar from 'vue-calendar-component';
export default {
  components:{
    Calendar
  },
  data () {
    return {
      calendarList:[
        {date:'2018/6/3',className:"mark1"},
        {date:'2018/6/13',className:"mark2"}
      ]
    }
  },

  methods:{
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
  mounted(){

  }
}
</script>

<style lang="less">
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

