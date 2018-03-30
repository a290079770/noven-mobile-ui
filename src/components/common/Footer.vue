<template>
  <div class="wj-footer" v-show="showFooter">
     <mt-tabbar v-model="selected" :fixed="true">
      <mt-tab-item :key="item.id" :id="item.id" v-for="(item,index) in tabList">
        <img slot="icon" :src="selected == item.id ? item.activeIcon : item.defaultIcon">
        {{item.title}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  props:['footerList'],
  data() {
    return {
      selected:'0',
      showFooter:true,
      tabList:[
        { 
          id:0,
          title:'首页',
          defaultIcon:'/static/img/商城icon@2x.png',
          activeIcon:'/static/img/商城icon-on@2x.png',
          path:'/index',
          query:{}
        },
        {
          id:1,
          title:'分期商城',
          defaultIcon:'/static/img/首页icon@2x.png',
          activeIcon:'/static/img/首页icon-on@2x.png',
          path:'/mallIndex',
          query:{}
        },
        {
          id:2,
          title:'信用生活',
          defaultIcon:'/static/img/信用icon@2x.png',
          activeIcon:'/static/img/信用icon-on@2x.png',
          path:'/creditLifeIndex',
          query:{}
        },
        {
          id:3,
          title:'我的',
          defaultIcon:'/static/img/我的icon@2x.png',
          activeIcon:'/static/img/我的icon-on@2x.png',
          path:'/mine',
          query:{}
        },
      ]
    }
  },
  created() {
    this.tabList =  this.footerList ||  this.tabList;


  },
  mounted() {

  },
  watch:{
    'selected':function(val) {
      this.$router.push({
        path:this.tabList[val].path,
        query:this.tabList[val].query
      })
    },

    '$route': function(to, from) {
       let ShowFooterPathList = ['/index','/mallIndex','/creditLifeIndex','/mine'];

       if(ShowFooterPathList.indexOf(this.$route.path) == -1) {
         this.showFooter = false;
       }else {
         //显示并处理当前选中
         this.showFooter = true;
         this.selected = ShowFooterPathList.indexOf(this.$route.path)
       }
    }
  }
}

</script>
<style lang='less'>
   .wj-footer .is-selected {
      background: transparent !important;
   }
</style>
