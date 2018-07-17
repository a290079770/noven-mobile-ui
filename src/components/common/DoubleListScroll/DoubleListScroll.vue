<template>
  <div class="double-list-scroll" :style="{height:MinHeight,marginLeft:marginLeft}">
    <ul class="double-list-scroll-ul">
      <li class="double-list-scroll-li">
        <ul :style="{width:MinWidth}">
          <li :style="{backgroundColor:bgColor}" v-for="(item,index) in doubleListData">
            <div class="stock-content">
              <div class="stock-content-left">
                <p>{{item.title}}</p>
                <span>{{item.code}}</span>
              </div>
              <p>{{item.floatNum}}</p>
              <p class="add-percent">{{item.percent}}</p>
            </div>
          </li>
        </ul>
      </li>
      <li class="double-list-scroll-li">
        <ul :style="{width:MinWidth}">
          <li :style="{backgroundColor:bgColor}" v-for="(item,index) in doubleListData">
            <div class="stock-content">
              <div class="stock-content-left">
                <p>{{item.title}}</p>
                <span>{{item.code}}</span>
              </div>
              <p>{{item.floatNum}}</p>
              <p class="add-percent">{{item.percent}}</p>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props:[
  'bgColor',
  'MinWidth',
  'MinHeight',
  'marginLeft',
  'doubleListData'
  ],
  data() {
    return {
      buttonClass:'',
    }
  },
  methods:{
    
  },
  created() {
    
  },

  watch:{

  }
}

</script>

<style lang="less" scoped>
.double-list-scroll{
  overflow:auto;
  .double-list-scroll-ul{
    .double-list-scroll-li{
      ul{
        li{
          display: inline-block;
          height: 1.52rem;
          width: 4.8rem;
          .stock-content{
            margin: .4rem .24rem;
            display: flex;
            justify-content: space-between;
            .stock-content-left{
              p{
                font-size: .28rem;
                line-height: .5rem;
              }
              span{
                font-size: .24rem;
                color: #999;
              }
            }
            p{
              line-height: .8rem;
              font-size: .32rem;
            }
            .add-percent{
              color: #ff5d60;
            }
          }
        }
        li+li{
          margin-left:.16rem;
        }
      }
    }
    .double-list-scroll-li+.double-list-scroll-li{
      margin-top:.16rem;
    }
  }
}
.double-list-scroll::-webkit-scrollbar{ 
  width: 0; 
  height: 0;   
  background-color: #fff;  
}
</style>
