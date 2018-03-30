<template>
  <div class="index-main">
    <!-- 头部 -->
	 <Header 
	 :isBackShow="true"   
	 :title="'注册'"
	 @backClick="backToLoginOrReg" 
	 />

	 <section class="header-placehold"></section>
    <!--注册-->
    <div class="register-form" v-show="showCode">
    	<div class="form-group">
    		<label v-show="phone">手机号</label>
    		<div class="form-input">
    			 <Input 
    			   :value="phone" 
			       type="number"
			       maxLength="11"
			       placeholder="请输入手机号码"
			       :forbid="['chinese','spechars']"
			       @input="phone = $event"
			     />
    			<a href="javscript:;" v-show="phone" @click.stop="clearPhone()"><img src="../../assets/images/ic_Shut@2x.png" /></a>
    		</div>
    	</div>
    	<div class="form-group">
    		<label v-show="pass">密码设置</label>
    		<div class="form-input" >
    			
    			<Input 
			       :type="showPass ? 'password' : 'text'"
			       maxLength="16"
			       placeholder="请输入登录密码"
			       :forbid="['chinese','spechars']"
			       @input="pass = $event"
			       @focus.native="isShowEye()"
			     />

    			<a href="javscript:;" @click.stop="showPassEye()" v-show="showEye">
    				<img :src="showPass ? './static/img/ic_eyes_no@2x.png' : './static/img/ic_eyes_yes@2x.png'" 
    				/>
    			</a>

    		</div>
 
    	</div>

    	<div class="form-group">
    		<div class="register-btn">
    			<button class="register" v-bind:disabled="dis" @click="showRegisterCode()">注册</button>
    		</div>
    	</div>
    </div>
    
    <!--注册-短信-->
    <div class="register-form" v-show="!showCode">
    	<div class="regist-txt" v-show="!showSendTxt">注册短信验证码已发送至手机号<label v-text="dealPhone(phone)"></label>，请查收</div>
    	<div class="form-group">
    		<label v-show="code">验证码</label>
    		<div class="form-input">
    			<input type="text" name="code" class="code" maxlength="6" v-model="code" placeholder="手机验证码" />

    			<MsgCode
				   class="getCode"
			       text="获取短信验证码" 
			       reloadText="重新获取验证码"
			       @handleClick="getCode(phone)"
			     />

    		</div>
    	</div>
    	<div class="form-group">
    		<div class="register-btn">
    			<button class="registerCode" v-bind:disabled="disCode" @click="register()">完成注册</button>
    		</div>
    		<div class="regist-agree">完成注册即代表同意《用户注册协议》</div>
    	</div>
    </div>
    
  </div>
</template>
<script>
import { MessageBox , Indicator } from 'mint-ui';
export default {
  data () {
    return {
        showPass:true,
        showCode:true,
        showSendTxt:true,
        showEye:false,
        phone:"",
        pass:"",
        code:"",
        dis:true,
        disCode: true,
		showCodeBtn: true,
		count: "",
		timer: null,
		hasGetCode:false,   //是否已经获取过验证码
    }
  },
  watch:{
  	phone:function(val){
  		if(val != "" && this.pass != ""&& val.length == 11){
  			this.dis = false;
  		}else{
  			this.dis = true;
  		}
  	},
  	pass:function(val){
  		if(val != "" && this.phone != "" && val.length >7 && val.length<17){
  			this.dis = false;
  		}else{
  			this.dis = true;
  		}
  	},
  	code:function(val){
  		if(val != "" && val.length == 6){
  			this.disCode = false;
  		}else{
  			this.disCode = true;
  		}
  	}
  },
  methods:{

  	//得到焦点显示眼睛
	isShowEye(){
		this.showEye = true;
	},
  	/**
  	 * [backToLoginOrReg 返回到上一页或者返回注册页，根据状态区分]
  	 * @Author   罗文
  	 * @DateTime 2018-03-15
  	 * @return   {[type]}   [description]
  	 */
  	backToLoginOrReg() {
       if(!this.showCode) {
          this.showCode = true;
       }else {
       	  this.$router.go(-1);
       }
  	},
    showPassEye(){
    	this.showPass = !this.showPass;
    },
    showRegisterCode(){
    	if(this.validatePhone(this.phone)){
			if(this.validatePass(this.pass)){
				this.code = '';
				//添加是否注册过的验证
	            this.$http.post('/service/verifyUserMobile', {
				   phone:this.phone
				}).then((res) => {
				   //接口调用成功！
                   if(res.data.statusCode === '000000') {
                    	//如果注册过了
                      if(res.data.data.isExist !== 'false') {
                         MessageBox.alert(res.data.data.isExist);
                      }else {
                        	//没有注册过，去注册
                      	 this.showCode = !this.showCode;
                      }
                   }else {
                    //如果没有注册过
                     // this.showCode = !this.showCode;
                      MessageBox.alert(res.data.desc);
                   }
				});
			}
		}
    },
    clearPhone(){
    	this.phone = "";
    },

    register(){//注册
    	if(this.validateCode(this.code)){
    		 Indicator.open({
			   text: '注册中...',
			   spinnerType: 'snake'
			 });
    		 var params = {
					phone: this.phone,
					passWord: md5(this.pass),
					code:this.code,
					appId:'com.huaxiawanjia.wjf'
				};
				this.$http.post('/service/userregister', params).then((res) => {
						if(res.data.statusCode == "000000"){
							MessageBox.alert('注册成功！').then(()=>{
								this.$router.push('/login')
							})

						// 	var loginData = res.data.object;
						// 	/*存储cookie*/
						// 	this.setCookie("godId",loginData.godId);
						// 	this.setCookie("token",loginData.token);
						// 	this.setCookie("fullName",loginData.fullName);
						// 	this.setCookie("phone",loginData.phone);
						// 	this.setCookie("isIdNumber",loginData.isIdNumber);
						// 	this.setCookie("idNumber",loginData.idNumber);
						// 	this.setCookie("fullIdNumber",loginData.fullIdNumber);
						// 	this.setCookie("status",loginData.status);//是否绑定银行卡
						// 	this.setCookie("bankcardNumber",loginData.bankcardNumber);
						// 	this.setCookie("fullBankcardNumber",loginData.fullBankcardNumber);
						// 	this.setCookie("bankName",loginData.bankName);
						// 	this.setCookie("isAddress",loginData.isAddress);
						// 	MessageBox.alert("注册成功！").then(this.toPath('/mine'));
						}else{
							MessageBox.alert(res.data.desc);
						}

						Indicator.close();
				});
    	}
    },
    
  }
}
</script>

<style lang="less" scoped>

.index-main{
	height: 100%;
	background: white;
	.register-form{
		padding:0.60rem;
		.regist-txt{
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
			.register-btn{
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
			.regist-agree{
				font-size:0.26rem;
				color:#999999;
				text-align: center;
				padding:0.30rem;
			}
		}
	}
}
</style>

