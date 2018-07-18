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
      selected: -1,
      showFooter:true,
      tabList:[]
    }
  },
  methods:{
    setActiveTab() {
      let activePath = this.$route.path;

      for(let i = 0 ; i < this.tabList.length ; i ++) {
         if(this.tabList[i].path.indexOf(activePath) !== -1) {
            this.selected = i;
            break;
         }
      }
    }
  },
  created() {
    this.tabList =  this.footerList ||  this.tabList;
  },
  mounted() {
    this.setActiveTab();
  },
  watch:{
    'selected':function(val) {
      this.$router.push({
        path:this.tabList[val].path,
        query:this.tabList[val].query
      })
    },

    // '$route': function(to, from) {
    //    let ShowFooterPathList = ['/assetsIndex','/investIndex','/discoverIndex','/userCenterIndex'];

    //    //显示并处理当前选中
    //    this.showFooter = true;
    //    this.selected = ShowFooterPathList.indexOf(this.$route.matched[0].path)
    // }
  }
}

</script>
<style lang='less'>
   .wj-footer .is-selected {
      background: transparent !important;
   }
</style>
