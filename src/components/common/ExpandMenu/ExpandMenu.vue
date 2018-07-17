<template>
  <section style="background: white;border-bottom:1px solid #f6f6f6">
    <!-- 外层菜单 -->
    <section class="expand-menu">
       <div>
        {{data.title}}
        <span :style="{background:'linear-gradient(to right,'+data.numberColor[0]+','+ data.numberColor[1] +')'}">
          {{data.number}}笔
        </span>
       </div>
       <section class="expand-menu-content">
          <figure>
            <img :src="data.logo">
          </figure>
          <section class="expand-menu-content-center">
            <p v-for="(item,index) in data.centerList">
              <span>{{item.key}}</span>
              <i>{{item.value}}</i>
            </p>
          </section>
          <section class="expand-menu-content-right" @click="expand">
            <img :src="'/static/img/ic_arrow_m@2x.png'"  :style="{transform:`rotate(${data.isExpand ? '-90deg':'90deg'})`,width:'0.15rem'}">
          </section>
       </section>
    </section>
    <!-- 折叠菜单 -->
    <ul class="expand-children" v-show="isChildrenListShow">
       <li v-for="(item,index) in data.children" @click="$emit('onExpandItemClick',{item,index})">
         <h3 >
           <span :style="{borderLeft:'0.04rem solid '+ item.borderLeftColor}">{{item.title}}</span>
           <i>{{item.right}}</i>
         </h3>
         <ul>
           <li v-for="(citem,cindex) in item.itemList">
             <p>{{citem.value}}</p>
             <p>{{citem.key}}</p>
           </li>
         </ul>
       </li>
    </ul>
  </section>
</template>
<script>
export default {
  props:{
    data:{},
  },
  data() {
    return {
      isChildrenListShow:false,
    }
  },
  methods:{
    expand() {
      this.$emit('expand');

      setTimeout(()=>{
        this.isChildrenListShow = !this.isChildrenListShow;
      },500)
    }
  },
  mounted() {
    console.log(this.data);
  },
  watch:{

  }
}

</script>

<style  lang="less" scoped>  
  .expand-menu {
    margin: 0 auto;
    width: 6.9rem;
    height: auto;
    min-height: 2.8rem;
    div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 1.15rem;
      width: 100%;
      font-size: 0.32rem;
      color:#202e3f;
      span {
        display: inline-block;
        margin-left: 0.2rem;
        height: 0.32rem;
        min-width: 0.55rem;
        font-size: 0.22rem;
        line-height: 0.32rem;
        color: white;
        text-align: center;
      }
    }

    .expand-menu-content {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      min-height: 1.3rem;
      figure {
        display: flex;
        margin: 0;
        margin-right: 0.56rem;
        padding: 0;
        width: 1.3rem;
        height: 100%;
        box-sizing: border-box;
        border: 1px solid #eee;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .expand-menu-content-center {
        width: 4.9rem;
        min-height: 1.3rem;
        p:nth-of-type(2) {
          line-height: 0.6rem;
        }
        p:nth-of-type(3) {
          i{
            color:#ff5d60;
          }
        }
        span  {
          padding-right: 0.15rem;
          color: #abb0b6;
          font-size: 0.24rem;          
        }
        i {
          color:#202e3f;
          font-size: 0.28rem;
          font-style: normal;
        }
      }

      .expand-menu-content-right {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 0.3rem;
        min-height: 1.3rem;
        img {
          transition: all 0.5s;
          height: 0.3rem;
        }
      }
    }
  }


  .expand-children {
    padding-left: 0.3rem;
    width: 7.2rem;
    min-height: 0.1rem;
    background-color:#fbfbfb;
    & > li {
      width: 6.7rem;
      height: 2.04rem;
      border-bottom: 1px solid #f5f5f5;

      h3 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 1rem;
        box-sizing: border-box;
        font-weight: normal;

        span {
          padding-left: 0.1rem;
          font-size: 0.28rem;       
          color: #666;   
        }

        i {
          font-size: 0.2rem;
          font-style: normal;
          color:#a8adb3;
        }
      }


      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        width: 6.5rem;
        height: 1.04rem;

        li {
          height: 100%;
          min-width: 1rem;
          text-align: center;

          p:nth-of-type(1) {
            margin-bottom: 0.1rem;
            font-size: 0.28rem;
            color:#4c5764;
          }

          p:nth-of-type(2) {
            font-size: 0.2rem;
            color:#999;
          }
        }
        li:nth-of-type(4){
          p:nth-of-type(1){
            color:#ff5d60;
          }
        }
      }
    }
  }

</style>
