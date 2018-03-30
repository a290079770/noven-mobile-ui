<template>
  <div class="index-main">
    <!-- 头部 -->
   <Header 
   :isBackShow="true"   
   :title="'修改密码'"
   :backImmediateExec="true"
   />

   <section class="header-placehold"></section>

    <!--注册-->
    <div class="updatePass-form">
    	<div class="form-group">
    		<label v-show="oldPass">原登录密码</label>

    		<div class="form-input" >

          <Input 
             :type="changeOldEye ? 'password' : 'text'"
             maxLength="16"
             placeholder="请输入旧密码"
             :forbid="['chinese','spechars']"
             @input="oldPass = $event"
             @focus.native="isShowEye(1)"
           />

          <a href="javscript:;" @click="changePassEyeType(1)" v-show="showOldEye">
            <img :src="changeOldEye ? './static/img/ic_eyes_no@2x.png' : './static/img/ic_eyes_yes@2x.png'" 
            />
          </a>
    		</div>
    	</div>


      <div class="form-group">
        <label v-show="newPass">原登录密码</label>

        <div class="form-input" >

          <Input 
             :type="changeNewEye ? 'password' : 'text'"
             maxLength="16"
             placeholder="请输入新密码"
             :forbid="['chinese','spechars']"
             @input="newPass = $event"
             @focus.native="isShowEye(2)"
           />

          <a href="javscript:;" @click="changePassEyeType(2)" v-show="showNewEye">
            <img :src="changeNewEye ? './static/img/ic_eyes_no@2x.png' : './static/img/ic_eyes_yes@2x.png'" 
            />
          </a>
        </div>
      </div>


      <div class="form-group">
        <label v-show="rePass">原登录密码</label>

        <div class="form-input" >

          <Input 
             :type="changeNewReEye ? 'password' : 'text'"
             maxLength="16"
             placeholder="请再次输入新密码"
             :forbid="['chinese','spechars']"
             @input="rePass = $event"
             @focus.native="isShowEye(3)"
           />

          <a href="javscript:;" @click="changePassEyeType(3)" v-show="showNewReEye">
            <img :src="changeNewReEye ? './static/img/ic_eyes_no@2x.png' : './static/img/ic_eyes_yes@2x.png'" 
            />
          </a>
        </div>
      </div>



    	<div class="form-group">
	    	<div class="updatePass-btn">
	    		<button v-bind:disabled="dis" @click="updatePass()">重设密码</button>
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
        showOldPass:true,
       	showNewPass:true,
       	showRePass:true,
       	oldPass:"",
       	newPass:"",
       	rePass:"",
       	dis:true,


        oldPassType:true,
        newPassType:true,
        newRePassType:true,

        showOldEye:false,
        showNewEye:false,
        showNewReEye:false,

        changeOldEye:true,
        changeNewEye:true,
        changeNewReEye:true,
    }
  },
  
  methods:{
    /**
     * [isShowEye 是否显示眼睛]
     * @Author   罗文
     * @DateTime 2018-03-21
     * @param    {[Number]}   type [1 - 旧密码眼睛 2 - 新密码 3 - 重复新密码]
     * @return   {Boolean}       [description]
     */
    isShowEye(type){
      if(type == 1) {
        this.showOldEye = true;
      }else if(type == 2) {
        this.showNewEye = true;
      }else if(type == 3) {
        this.showNewReEye = true;
      }
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
        this.changeOldEye = !this.changeOldEye;
      }else if(type == 2) {
        this.changeNewEye = !this.changeNewEye;
      }else if(type == 3) {
        this.changeNewReEye = !this.changeNewReEye;
      }
    },

    updatePass(){
    	if(this.newPass != this.rePass){
  				MessageBox.alert("重复密码与新密码密码不一致，请重新输入！");
  		}else{
	  			var params = {
							oldPassWord:this.oldPass,
							newPassWord:this.newPass,
							phone:this.getCookie("phone")
					};
					this.$http.post('/service/userAlterPassword', params).then((res) => {
						//结果
						var result = res.data;
						if(result.statusCode == "000000") {
							MessageBox.alert("密码重置成功！")
              this.toPath('/login')
						} else {
							MessageBox.alert(res.data.desc);
						}
					});
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
  watch:{
    oldPass:function(val){
      if(val != "" && this.newPass != "" && this.rePass !="" && val.length >7 && val.length<17){
        this.dis = false;
      }else{
        this.dis = true;
      }
    },
    newPass:function(val){
      if(val != "" && this.rePass != ""&& this.oldPass !="" && val.length >7 && val.length<17){
        this.dis = false;
      }else{
        this.dis = true;
      }
    },
    rePass:function(val){
      if(val != "" && this.oldPass != "" && this.newPass !="" && val.length >7 && val.length<17 ) {
        this.dis = false;
      }else{
        this.dis = true;
      }
    }
  },
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

