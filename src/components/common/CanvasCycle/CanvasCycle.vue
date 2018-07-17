<template>
   <canvas ref="rateCanvas"></canvas>
</template>
<script>
export default {
  props:{
    canvasData:{
      type:Array,
      default() {
        return [
          {
            num:3,
            start:'#ADC7FF',
            end:'#75A1FE'
          },
        ]
      }
    }
  },
  data() {
    return {
      cxt:null,
      data:[

      ]
    }
  },
  methods:{
    draw() {

      let canvas = this.$refs.rateCanvas;
      let width = 87;
      let height = 87;
      let offset = 7;
      let x = width/2;
      let y = height/2;
      let r = 35;

      canvas.width = width;
      canvas.height = height;

      this.cxt = canvas.getContext('2d');
      
      let gr = null;  //渐变色
      let sum = 0;    //统计所有的数据和
      let count = 0;  //每次循环，前i项及当前项累计和
      let maxIndex = 0 //找出数据最大的一项 
      let clone = [];

      this.canvasData.forEach((item,index)=>{
        sum += item.num;
        clone.push(item.num);
      })
      
      //冒泡排序找出最大值
      for(let i=0;i<clone.length-1;i++){
          for(let j=0;j<clone.length-1-i;j++){
              if(clone[j]>clone[j+1]){
                  var temp=clone[j];
                  clone[j]=clone[j+1];
                  clone[j+1]=temp;
              }
          }
      }

      let cell = Math.PI*2 / sum;   //算出每一份数据所占弧度值


      let lastPoint = [width,y];
      let lastCount = 0;
      
      //循环绘制每个环
      for(let i = 1 ; i <= this.canvasData.length ; i ++) {
        let item = this.canvasData[i - 1];

        lastCount = count;
        count += item.num;

        //困难点，计算渐变开始和结束位置，注意是顺时针绘制，c 的值为之前几条数据角度加上当前角度之和,c = count / sum *360
        //在第一象限(0,90)， 弧上点的坐标是：  (x + r*cosn°,y - r*sinn°)  n的值为 360° - c;
        //在第二象限(90,180)， 弧上点的坐标是：  (x - r*cosn°,y - r*sinn°)  n = c - 180°
        //在第三象限(180,270)， 弧上点的坐标是：  (x - r*cosn°,y + r*sinn°)  n = 180 - c
        //在第四象限(270,360)， 弧上点的坐标是：  (x + r*cosn°,y + r*sinn°)  n = c


        if(count / sum <= 0.25) {
          let angle = count / sum * Math.PI*2;

          gr = this.cxt.createLinearGradient(lastPoint[0], lastPoint[1], x + Math.cos(angle) * r, y + Math.sin(angle) * r); //第四象限 
          lastPoint = [x + Math.cos(angle) * r,y + Math.sin(angle) * r];

        }else if(count / sum > 0.25 && count / sum <= 0.5) {
          let angle = (0.5 - count / sum) * Math.PI*2;

          gr = this.cxt.createLinearGradient(lastPoint[0], lastPoint[1], x - Math.cos(angle) * r, y + Math.sin(angle) * r ); //第三象限
          lastPoint = [x - Math.cos(angle) * r,y + Math.sin(angle) * r];

        }else if(count / sum > 0.5 && count / sum <= 0.75) {
          let angle = (count / sum - 0.5) * Math.PI*2;

          gr = this.cxt.createLinearGradient(lastPoint[0], lastPoint[1], x - Math.cos(angle) * r, y - Math.sin(angle) * r ); //第二象限 
          lastPoint = [x - Math.cos(angle) * r,y - Math.sin(angle) * r];

        }else if(count / sum > 0.75) {
          let angle = (1 - count / sum) * Math.PI*2;

          gr = this.cxt.createLinearGradient(lastPoint[0], lastPoint[1], x + Math.cos(angle) * r, y - Math.sin(angle) * r ); //第一象限 
          lastPoint = [x + Math.cos(angle) * r,y - Math.sin(angle) * r];

        }


        //添加颜色端点
        gr.addColorStop(0,item.start);
        gr.addColorStop(1,item.end);        
        //应用fillStyle生成渐变
        this.cxt.beginPath();

       

        let cr = r;
        if(item.num == clone[clone.length - 1]) {
          // context.arc(圆心x，圆心y，半径，起点，终点，顺时针/逆时针)
          cr += 2;
          this.cxt.lineWidth = 10;
        }else {

          this.cxt.lineWidth = 5;
        }

        this.cxt.arc(x,y,cr, lastCount / sum * Math.PI*2 , (count / sum - 0.01) * Math.PI*2,false); 

        this.cxt.strokeStyle = gr;
        this.cxt.stroke();   
      }

    }
  },

  created() {

  },

  mounted() {
    this.draw();
  }
}

</script>

<style lang="less" scoped>
  canvas {
    display: inline-block;
    transform: rotate(-90deg);
    background: white;
  }
</style>
