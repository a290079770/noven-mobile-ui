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
          title:'资产',
          defaultIcon:'/static/img/资产02.png',
          activeIcon:'/static/img/资产01.png',
          path:'/assetsIndex',
          query:{}
        },
        {
          id:1,
          title:'投资',
          defaultIcon:'/static/img/投资02.png',
          activeIcon:'/static/img/投资01.png',
          path:'/investIndex',
          query:{}
        },
        {
          id:2,
          title:'发现',
          defaultIcon:'/static/img/发现02.png',
          activeIcon:'/static/img/发现01.png',
          path:'/discoverIndex',
          query:{}
        },
        {
          id:3,
          title:'我的',
          defaultIcon:'/static/img/我的02.png',
          activeIcon:'/static/img/我的01.png',
          path:'/userCenterIndex',
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
       let ShowFooterPathList = ['/assetsIndex','/investIndex','/discoverIndex','/userCenterIndex'];
       // console.log(this.$route)
       if(ShowFooterPathList.indexOf(this.$route.matched[0].path) == -1) {
         this.showFooter = false;
       }else {
         //显示并处理当前选中
         this.showFooter = true;
         this.selected = ShowFooterPathList.indexOf(this.$route.matched[0].path)
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
