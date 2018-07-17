<template>
  <div class="container">
    <ul>
      <li class="list-item " :style="{height:height}" data-type="0">
        <div class="list-box" @touchstart.capture="touchStart" @touchend.capture="touchEnd" @click="skip">
          <div class="swipe-item">
            <slot/>
          </div>
          <!-- <img class="list-img" :src="data.imgUrl" alt="">
          <div class="list-content">
            <p class="title">{{data.title}}</p>
            <p class="tips">{{data.tips}}</p>
            <p class="time">{{data.time}}</p>
          </div> -->
        </div>
        <div class="delete" :style="{height:height}" @click="deleteItem" >删除</div>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  export default{
   name: 'index',
   props:{
      height:{
        type:String,
        default:'1.6rem'
      },

   },
   data () {
     return {
      // data:{
      //  title : 'Chrome更新了' ,
      //  imgUrl : './static/images/Chrome.png' ,
      //  tips : '不再支持Flash视频播放' ,
      //  time : '上午 8:30'
      // },
      startX : 0 ,
      endX : 0 ,
     }
   },
   methods : {
     //跳转
     skip(){
      if( this.checkSlide() ){
        this.restSlide();
      }else{
        
      }
     },
     //滑动开始
     touchStart(e){
       // 记录初始位置
      this.startX = e.touches[0].clientX;
     },
     //滑动结束
     touchEnd(e){
                // 当前滑动的父级元素
      let parentElement = e.currentTarget.parentElement;
      // 记录结束位置
      this.endX = e.changedTouches[0].clientX;
                // 左滑
      if( parentElement.dataset.type == 0 && this.startX - this.endX > 30 ){
      this.restSlide();
      parentElement.dataset.type = 1;
      }
                // 右滑
      if( parentElement.dataset.type == 1 && this.startX - this.endX < -30 ){
      this.restSlide();
      parentElement.dataset.type = 0;
      }
      this.startX = 0;
      this.endX = 0;
     },
     //判断当前是否有滑块处于滑动状态
     checkSlide(){
      let listItems = document.querySelectorAll('.list-item');
      for( let i = 0 ; i < listItems.length ; i++){
      if( listItems[i].dataset.type == 1 ) {
       return true;
            }
      }
      return false;
        },
     //复位滑动状态
     restSlide(){
      let listItems = document.querySelectorAll('.list-item');
                 // 复位
      for( let i = 0 ; i < listItems.length ; i++){
      listItems[i].dataset.type = 0;
      }
     },
     //删除
     deleteItem(e){
       this.$emit('handleDelete');
     }
   },

   mounted() {
    console.log(this.height);
   }
}
</script>

<style scoped>

ul {
  overflow: hidden;
}

.list-item{
  position: relative;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
.list-item[data-type="0"]{
  transform: translate3d(0,0,0);
}
.list-item[data-type="1"]{
  transform: translate3d(-2rem,0,0);
}
.list-item:after{
  content: " ";
  position: absolute;
  left: 0.2rem;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #ccc;
  color: #ccc;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  z-index: 2;
}
.list-box{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.swipe-item {
   width: 100%;
   height: 100%;
   background: white;
 }
.list-item .delete{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  background: #ff4949;
  font-size: 17px;
  color: #fff;
  text-align: center;
  position: absolute;
  top:0;
  right: -2rem;
}
</style>