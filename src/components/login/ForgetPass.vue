<template>
  <div class="index-main">
    <!-- 头部 -->
     <Header 
       :isBackShow="true"   
       :title="'找回密码'"
       :backImmediateExec="true"
       />

    <section class="header-placehold"></section>
    <!--注册-->
    <div class="forgetPass-form">
    	<div class="forgetPass-txt" v-show="!showSendTxt">注册短信验证码已发送至手机号<label v-text="phone"></label>，请查收</div>
    	<div class="form-group">
    		<label v-show="phone">手机号</label>
    		<div class="form-input">
    			
          <Input 
             type="number"
             :value="phone"
             maxLength="11"
             placeholder="请输入您的手机号码"
             :forbid="['chinese','spechars']"
             @input="phone = $event"
           />

    			<a href="javscript:;" v-show="phone" @click="clearPhone()"><img src="/static/img/ic_Shut@2x.png" /></a>
    		</div>
    	</div>
    	<div class="form-group" >
    		<label v-show="code">验证码</label>
    		<div class="form-input">
          <Input 
             :value="code"
             type="number"
             maxLength="6"
             placeholder="短信验证码"
             :forbid="['chinese','spechars']"
             @input="code = $event"
           />

    			<MsgCode
           class="getCode"
           :disabled="disCode"
           text="获取短信验证码" 
           reloadText="重新获取验证码"
           @handleClick="getCode"
           />
    		</div>
    	</div>
    	<div class="form-group">
    		<div class="forgetPass-btn">
    			<button v-bind:disabled="dis"  @click="forgetNext()">下一步</button>
    		</div>
    		<div class="hasAccount">
    			已有账户？
    			<a href="javascript:;" @click="toPath('/login')">请登录</a>
    		</div>
    	</div>
    </div>
    
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
export default {
  data () {
    return {
        showCode:true,
        showSendTxt:true,
        
        phone:this.$route.query.phone || "",
        code: this.$route.query.code || "",
        
        dis:this.$route.query.phone ? false : true,
        //短信验证码
        disCode:this.$route.query.phone ? false : true,
        showCodeBtn:true,
        count:"",
        timer: null,
        hasGetCode:false
    }
  },
  watch:{
  	phone:function(val){
  		if(val != "" && val.length == 11){
  			if(this.code.length == 6) {
           this.dis = false;
        }
        this.disCode = false;
  		}else{
        this.disCode = true;
  			this.dis = true;
  		}
  	},
  	code:function(val){
  		if((val != "" && val.length == 6)&&(this.phone != "" && this.phone.length == 11)){
  			this.disCode = false;
  			this.dis = false;
  		}else{
  			this.disCode = true;
  			this.dis = true;
  		}
  	}
  },
  methods:{
    showPassEye(){
    	this.showPass = !this.showPass;
    },
    showRegisterCode(){
    	this.showCode = !this.showCode;
    },
    clearPhone(){
    	this.phone = "";
    },
    getCode() { //获取短信验证码
    	let phoneReg = /^1\d{10}$/g;
       //如果不是手机号，返回原值
        if(this.phone == '') {
           MessageBox.alert('请输入手机号')
           return;
        }else if(!phoneReg.test(this.phone)) {
           MessageBox.alert('请输入正确的手机号')
           return;
        }


		const TIME_COUNT = 60;
		this.hasGetCode = true;
			if(!this.timer) {
				this.count = TIME_COUNT;
				this.showCodeBtn = false;
				this.timer = setInterval(() => {
					if(this.count > 0 && this.count <= TIME_COUNT) {
						this.count--;
					} else {
						this.showCodeBtn = true;
						clearInterval(this.timer);
						this.timer = null;
					}
				}, 1000);
			}
			var params = {
				phone:this.phone
			};
			this.$http.post('/user/randomVcode', {
				params: params
			}).then((res) => {
				//结果
				var result = res.data.result;
				if(result == "000000") {
					MessageBox.alert(res.data.object);
				} else {
					MessageBox.alert(res.data.resultdesc);
				}
			});
		},
    forgetNext(){//下一步
        if(this.validatePhone(this.phone) && this.code) {
           this.$router.push({
        		path:'/resetPass',
        		query:{
        			phone:this.phone,
        			code:this.code
         		}
    	   })
        }
    },

    /**
       * [backClick 点击返回的操作]
       * @Author   罗文
       * @DateTime 2018-03-21
       * @return   {[type]}   [description]
       */
    backClick() {
        this.$router.go(-1);
    },
    
  },


  mounted() {
  	if(this.$route.query.phone) {
  		this.phone = this.$route.query.phone;
  		this.code = this.$route.query.code;
  	}
  }
}
</script>

<style lang="less" scoped>
.index-main{
  height: 100%;
  background: white;
	.forgetPass-form{
		padding:0.60rem;
		.forgetPass-txt{
			font-size:0.26rem;
			color:#999999;
		}
		.form-group{
			padding-top:0.60rem;
			.form-input{
				position:relative;
				border-bottom:0.5px solid #d7d7d7;
				padding:0.16rem 0;
				input{
					width:100%;
					height:0.46rem;
					line-height:0.46rem;
					color:#333333;
					font-size:0.38rem;
				}
				a{
					display: inline-block;
					text-align: center;
					width:0.44rem;
					height:0.44rem;
					position: absolute;
					right:0;
					bottom:0.20rem;
				}
				.code{
					width:3.84rem;
				}
				.getCode{
					position: absolute;
					right:0;
					bottom:0.16rem;
					height:0.46rem;
          text-align: center;
					line-height:0.46rem;
					font-size: 0.30rem;
					color: #FF5349;
					border-left:.01rem solid #d7d7d7;
					padding-left:0.32rem;
					min-width: 2.20rem;
				}
			}
			label{
				font-size: 0.28rem;
				color: #AEAEAD;
			}
			.showUp{
				img{
					display: inline-block;
					text-align: center;
					width:0.32rem;
					height:0.32rem;
					vertical-align: middle;
				}
				.up{
					transform: rotate(180deg);
				}
				.down{
					transform: rotate(0deg);
				}
			}
			.forgetPass-btn{
				margin-top:0.30rem;
				button{
					background: url(../../../static/img/ic_button@2x.png) left center no-repeat;
          background-size:6.80rem 1.52rem;
					border-radius: 1rem;
					width: 100%;
					height:0.88rem;
					text-align: center;
					font-size: 0.34rem;
					color: #FFFFFF;
				}
				button[disabled="disabled"]{
				  opacity: 0.3;
				}
			}
			.hasAccount{
				font-size:0.26rem;
				color:#999999;
				text-align: center;
				padding:0.30rem;
				a{
					color:#FF5349;
				}
			}
		}
	}
}
</style>

