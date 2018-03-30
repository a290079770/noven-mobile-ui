<template>
	<div class="index-main">

		<!-- 头部 -->
		 <Header 
	     :isBackShow="true"   
	     :isRightBtnShow="true"
	     :title="'登录'"
	     :rightBtnTitle="'注册'"
	     :rightTextIsBtn="true"
	     :backImmediateExec="true"
	     @rightBtnClick="rightBtnClick"
	     />

	     <section class="header-placehold"></section>

		<!--login-form for pass-->
		<div class="login-form">
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

					<a href="javscript:;" v-show="phone" @click="clearPhone()"><img src="../../assets/images/ic_Shut@2x.png" /></a>
				</div>
			</div>
			<div class="form-group" v-show="showType">
				<label v-show="pass">密码</label>
				<div class="form-input">

					<Input 
				       :type="showPass ? 'password' : 'text'"
				       maxLength="16"
				       placeholder="请输入登录密码"
				       :forbid="['chinese','spechars']"
				       @input="pass = $event"
				       @focus.native="isShowEye()"
				     />

					<a href="javscript:;" @click="showPassEye()" v-show="showEye">
						<img :src="showPass ? './static/img/ic_eyes_no@2x.png' : './static/img/ic_eyes_yes@2x.png'" 
						/>
					</a>

				</div>
			</div>
			<div class="form-group" v-show="!showType">
				<label v-show="code">验证码</label>
				<div class="form-input">

					<Input 
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
				       @handleClick="getCode(phone)"
				     />

				</div>
			</div>
			<div class="form-group">
				<div class="login-btn">
					<button class="login" v-bind:disabled="dis" @click="loginIn()">登录</button>
				</div>
				<div class="login-link">
					<a href="javascript:;" v-show="showType" @click="showLogin()">快速登录</a>
					<a href="javascript:;" v-show="!showType" @click="showLogin()">密码登录</a>
					<a href="javascript:;" @click="toPath('/forgetPass')">忘记密码？</a>
				</div>
			</div>
		</div>

	</div>
</template>
<script>
import { MessageBox , Indicator } from 'mint-ui';
export default {
	data() {
		return {
			showType: true,
			showPass: true,
			showEye:false,
			//form数据
			phone: "",
			pass: "",
			code: "",
			//禁用按钮
			dis: true,
			//获取短信验证码
			disCode: true,
			showCodeBtn: true,
			count: "",
			timer: null
		}
	},

	
	methods: {
		//得到焦点显示眼睛
		isShowEye(){
			console.log(1)
			this.showEye = true;
		},
		showLogin() {
			this.showType = !this.showType;
		},
		showPassEye() {
			this.showPass = !this.showPass;
		},
		clearPhone() {
			this.phone = "";
		},
		passwordInput(e) {
          if(/[^A-z0-9]/g.test(e.target.value)) {
          	e.preventDefault();
          }
		},

		loginIn() { //登录
			
			var params = '';
			if(this.showType) {
				if(this.validatePhone(this.phone)){
					if(this.validatePass(this.pass)){
                        Indicator.open({
						  text: '登录中...',
						  spinnerType: 'snake'
						});

						params = {
							phone: this.phone,
							passWord: md5(this.pass),
							
						};
						this.$http.post('/service/userLogin', params).then((res) => {
							this.loginOpareteComplete(res.data);
						});
					}
				}
			} else {
				if(this.validatePhone(this.phone)){
					if(this.validateCode(this.code)){
						Indicator.open({
						   text: '登录中...',
						   spinnerType: 'snake'
						 });
						params = {
							phone: this.phone,
							code: this.code,
						};
						this.$http.post('/service/userQuickLogin', params).then((res) => {
								this.loginOpareteComplete(res.data,true);
						});
					}
				}
			}
		},
        
        /**
         * [loginOpareteComplete 登录完成后的回调]
         * @Author   罗文
         * @DateTime 2018-03-21
         * @param    {[Object]}   loginData [登录成功时的数据，这个项目好像是只有operateid]
         * @return   {[type]}               [description]
         */
		loginOpareteComplete(loginData,isQuickLogin) {
			if(loginData.statusCode == "000000"){
				let saveArr = [];
				if(!isQuickLogin){
					 //需要存储的字段
					// saveArr = ['godId',"token","appid","phone","idNumber","isIdNumber","fullName"];
					saveArr = ['operateid'];
				}else{
					saveArr = ['operateid'];
				}
				
				/*存储cookie*/
		        saveArr.forEach((item,index)=>{
		           this.setCookie(item,loginData.data[item]);
		        })

		        this.setCookie('phone',this.phone);
				
	//			localStorage.setItem('tokenId',loginData.token);
	//			localStorage.setItem('godId',loginData.godId);
				this.toPath('/');
			}else{
				MessageBox.alert(loginData.desc);
			}

			Indicator.close();
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
	    
	    /**
	     * [rightBtnClick 点击注册按钮]
	     * @Author   罗文
	     * @DateTime 2018-03-21
	     * @return   {[type]}   [description]
	     */
		rightBtnClick() {
	      this.$router.push('/reg');
		}
	},

	mounted(){

 	},

 	watch: {
 		//主要是控制按钮的是否可点击
		phone: function(val) {
			this.dis = (val != "" && this.pass != "") || (val != "" && this.code != "") ? false : true;

			this.disCode = val != "" && val.length == 11 ? false : true;
		},
		pass: function(val) {
			this.dis = val != "" && this.phone != "" && val.length >7 && val.length<17 ? false : true;
		},
		code: function(val) {
			this.dis = val != "" && this.phone != "" ? false : true;
		}
	},
    
    
}
</script>

<style lang="less" scoped>

	.index-main {
		height: 100%;
		background: white;
		.login-form {
			padding: 0.60rem;
			.form-group {
				padding-top: 0.60rem;
				.form-input {
					position: relative;
					border-bottom: 0.5px solid #d7d7d7;
					padding: 0.16rem 0;
					input {
						width: 100%;
						height: 0.46rem;
						line-height: 0.46rem;
						color: #333333;
						font-size: 0.38rem;
					}
					a {
						display: inline-block;
						text-align: center;
						width: 0.44rem;
						height: 0.44rem;
						position: absolute;
						right: 0;
						bottom: 0.20rem;
					}
					.code {
						width: 3.84rem;
					}
					.getCode {
						position: absolute;
						right: 0;
						bottom: 0.16rem;
						height: 0.46rem;
						text-align: center;
						line-height: 0.46rem;
						font-size: 0.30rem;
						color: #FF5349;
						border-left: .01rem solid #d7d7d7;
						padding-left: 0.32rem;
						min-width: 2.20rem;
					}
				}
				label {
					font-size: 0.28rem;
					color: #AEAEAD;
				}
				.login-btn {
					margin-top: 0.30rem;
					button {
						background: url(../../../static/img/ic_button@2x.png) left center no-repeat;
	                    background-size:6.80rem 1.52rem;
						border-radius: 1rem;
						width: 100%;
						height: 0.88rem;
						text-align: center;
						font-size: 0.34rem;
						color: #FFFFFF;
					}
					button[disabled="disabled"] {
						// background: #ffdddb;
						opacity: 0.4
					}
				}
				.login-link {
					padding: 0.28rem;
					text-align: center;
					font-size: 0;
					a {
						display: inline-block;
						padding: 0 0.40rem;
						line-height: 0.36rem;
						font-size: 0.30rem;
						color: #666666;
						border-right: 0.01rem solid #d7d7d7;
					}
					a:last-child {
						border-right: none;
					}
				}
			}
		}
	}
</style>