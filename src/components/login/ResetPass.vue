<template>
  <div class="index-main">
    <!-- 头部 -->
	 <Header 
	 :isBackShow="true"   
	 :title="'找回密码'"
	 @backClick="backWithQuery" 
	 />

	 <section class="header-placehold"></section>

    <!--重置密码-->
    <div class="updatePass-form">
    	<div class="form-group">
    		<label v-show="newPass">8位及以上新密码</label>
    		<div class="form-input">

    			<Input 
			       :type="changeNewEye ? 'password' : 'text'"
			       maxLength="16"
			       placeholder="请输入登录密码"
			       :forbid="['chinese','spechars']"
			       @input="newPass = $event"
			       @focus.native="isShowEye(1)"
			     />

				<a href="javscript:;" @click="changePassEyeType(1)" v-show="showNewEye">
					<img :src="changeNewEye ? './static/img/ic_eyes_no@2x.png' : './static/img/ic_eyes_yes@2x.png'" 
					/>
				</a>
    		</div>


    	</div>
    	<div class="form-group">
    		<label v-show="rePass">重复新密码</label>
    		<div class="form-input">

    			<Input 
			       :type="changeReEye ? 'password' : 'text'"
			       maxLength="16"
			       placeholder="请输入登录密码"
			       :forbid="['chinese','spechars']"
			       @input="rePass = $event"
			       @focus.native="isShowEye(2)"
			     />

				<a href="javscript:;" @click="changePassEyeType(2)" v-show="showReEye">
					<img :src="changeReEye ? './static/img/ic_eyes_no@2x.png' : './static/img/ic_eyes_yes@2x.png'" 
					/>
				</a>

    		</div>
    	</div>
    	<div class="form-group">
	    	<div class="updatePass-btn">
	    		<button v-bind:disabled="dis" @click="resetPass()">重设密码</button>
	    	</div>
    	</div>
    </div>
    
  </div>
</template>
<script>
import { MessageBox,Indicator } from 'mint-ui';
export default {
  data () {
    return {
       	showNewPass:true,
       	showRePass:true,
       	
       	newPass:"",
       	rePass:"",

       	phone: this.$route.query.phone,
       	code: this.$route.query.code,
       	dis: true,
       	showNewEye:false,
       	showReEye:false,

       	changeNewEye:true,
       	changeReEye:true
    }
  },
  watch:{
  		newPass:function(val){
  		if(val != "" && this.rePass != "" && val.length >7 && val.length<17){
  			this.dis = false;
  		}else{
  			this.dis = true;
  		}
  	},
  	rePass:function(val){
  		if(val != "" && this.newPass != "" && val.length >7 && val.length<17){
  			this.dis = false;
  		}else{
  			this.dis = true;
  		}
  	},
  },
  methods:{
  	//得到焦点显示眼睛
	isShowEye(type){
		if(type == 1) {
          this.showNewEye = true;
		}else if(type == 2) {
		  this.showReEye = true;
		}
	},
    showNewPassEye(){
    	this.showNewPass = !this.showNewPass;
    },
    showRePassEye(){
    	this.showRePass = !this.showRePass;
    },
    /**
     * [changePassEyeType 更改显示的状态]
     * @Author   罗文
     * @DateTime 2018-03-21
     * @param    {[Number]}   type [1 - 新密码  2 - 再次输入]
     * @return   {[type]}        [description]
     */
    changePassEyeType(type) {
		if(type == 1) {
          this.changeNewEye = !this.changeNewEye;
		}else if(type == 2) {
		  this.changeReEye = !this.changeReEye;
		}
	},
    resetPass(){
    	if(this.newPass != this.rePass){
  			MessageBox.alert("密码不一致，请重新输入！");
  		}else{
  			Indicator.open({
			  text: '登录中...',
			  spinnerType: 'snake'
			});
  			var params = {
					newPassWord:md5(this.newPass),
	        		phone:this.phone,
	        		vcode:this.code
				};
				this.$http.post('/user/resetPassWord', {
					params: params
				}).then((res) => {
					//结果
					var result = res.data.result;
					if(result == "000000") {
						MessageBox.alert("密码重置成功！");
						this.toPath('/login');
					} else {
						MessageBox.alert(res.data.resultdesc);
					}

					Indicator.close();
			});
  		}
    },
    
    /**
     * [backWithQuery 重置密码的返回，需要保持之前的输入信息]
     * @Author   罗文
     * @DateTime 2018-03-15
     * @return   {[type]}   [description]
     */
    backWithQuery() {
       this.$router.push({
       	  path:'/forgetPass',
       	  query:{
       	  	 phone:this.$route.query.phone,
    		 code:this.$route.query.code
       	  }
       })
    },

  },
  created() {
    
  },
  mounted(){

  }
}
</script>

<style lang="less" scoped>

.index-main{
	height: 100%;
	background: white;
	.updatePass-form{
		padding:0 0.60rem 0.60rem;
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
			}
			label{
				font-size: 0.28rem;
				color: #AEAEAD;
			}
			.updatePass-btn{
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
					opacity: 0.3
				}
			}
		}
	}
}
</style>

