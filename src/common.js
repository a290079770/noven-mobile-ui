import { MessageBox } from 'mint-ui';

export default {
	install(Vue, options) {
		Vue.prototype.shoppingCarCount = 0;
		// 不带参数的页面跳转
		Vue.prototype.toPath = function(path) {
			if(path.indexOf('shoppingCar') != -1 || path.indexOf('systemSetting') != -1){
				if(this.volidUserId()){
					this.$router.push(path);
				}else{
					this.$router.push('/login');
				}
			}else{
				this.$router.push(path);
			}
		};
		// 带参数的页面跳转
		Vue.prototype.detailsPath = function(path, id) {
			if(path.indexOf('orderIndex') != -1){
				if(this.volidUserId()){
					this.$router.push({
						path: path,
						query: {
							id: id
						}
					});
				}else{
					this.$router.push('/login');
				}
			}else{
				this.$router.push({
					path: path,
					query: {
						id: id
					}
				});
			}
		};
		//格式化价格
		Vue.prototype.formatPrice = function(s, n) {
			/*
			 * 参数说明：
			 * s：要格式化的数字
			 * n：保留几位小数
			 * */
			n = n > 0 && n <= 20 ? n : 2;
			s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
			var l = s.split(".")[0].split("").reverse(),
				r = s.split(".")[1];
			var t = "";
			for(var i = 0; i < l.length; i++) {
				t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
			}
			return t.split("").reverse().join("") + "." + r;
		};

		//左滑删除
		Vue.prototype.delLeft = function(path, id) {
			var container = document.getElementsByClassName("container");
			for(var i = 0; i < container.length; i++) {
				var x, y, X, Y, swipeX, swipeY;
				container[i].addEventListener('touchstart', function(event) {
					x = event.changedTouches[0].pageX;
					y = event.changedTouches[0].pageY;
					swipeX = true;
					swipeY = true;
				});
				container[i].addEventListener('touchmove', function(event) {
					X = event.changedTouches[0].pageX;
					Y = event.changedTouches[0].pageY;
					// 左右滑动
					if(swipeX && Math.abs(X - x) - Math.abs(Y - y) > 0) {
						// 阻止事件冒泡
						event.stopPropagation();
						if(X - x > 10) {
							event.preventDefault();
							this.style.left = 0;
						}
						if(x - X > 10) {
							event.preventDefault();
							this.style.left = 0;
							this.style.left = '-1.48rem';
						}
						swipeY = false;
					}
					// 上下滑动
					if(swipeY && Math.abs(X - x) - Math.abs(Y - y) < 0) {
						swipeX = false;
					}
				});
			}
		};

		/*电话号码正则*/
		Vue.prototype.validatePhone = function(phone) {
			var regPhone = /^((13[0-9])|(14[0-9])|(15[0-3,5-9])|(166)|(17[2-9])|(18[0-9])|(19[8,9]))\d{8}$/;
			var isPhone = regPhone.test(phone);
			if(phone != "") {
				if(phone.length == 11) {
					if(!isPhone) {
						MessageBox.alert("暂不支持该号段手机号！");
						return false;
					} else {
						return isPhone;
					}
				} else {
					MessageBox.alert("请输入正确的手机号码！");
					return false;
				}
			} else {
				MessageBox.alert("手机号码不可为空！");
				return false;
			}
		};

		/*密码正则*/
		Vue.prototype.validatePass = function(pass) {
			var regPass = /^[a-z0-9A-Z]{8,16}$/;
			var isPass = regPass.test(pass);
			if(pass != "") {
				if(!isPass) {
					MessageBox.alert("密码格式不正确！");
					return false;
				} else {
					return isPass;
				}
			} else {
				MessageBox.alert("密码不可为空！");
				return false;
			}
		}

		/*验证码*/
		Vue.prototype.validateCode = function(code) {
			if(code != "") {
				if(code.length != 6) {
					MessageBox.alert("验证码格式不正确！");
					return false;
				} else {
					return true;
				}
			} else {
				MessageBox.alert("验证码不可为空！");
				return false;
			}
		}
		
		/*cookie操作*/
		Vue.prototype.setCookie = function(key, value, time) {
			var r = key + "=" + escape(value);
			if(time > 0) {
				var i = new Date();
				i.setTime(i.getTime() + time * 24 * 3600 * 1000);
				r = r + "; expires=" + i.toGMTString() + "; path=/";
			} else {
				r = r + "; path=/";
			}
			document.cookie = r;
		};

		Vue.prototype.getCookie = function(key) {
			var t = document.cookie;
			var n = t.split("; ");
			try {
				for(var r = 0; r < n.length; r++) {
					var i = n[r].split("=");
					if(i[0] == key) return unescape(i[1]);
				}
			} catch(e) {
				return "";
			}
			return "";
		};

		Vue.prototype.delCookie = function(key) {
			var t = new Date();
			t.setTime(t.getTime() - 10000);
			document.cookie = key + "=; expires=" + t.toGMTString() + "; path=/";
		};

		//数组去重
		Vue.prototype.distinct = function(newarr) {
			var arr = newarr,
				i,
				j,
				len = arr.length;
			for(i = 0; i < len; i++) {
				for(j = i + 1; j < len; j++) {
					if(arr[i] == arr[j]) {
						arr.splice(j, 1);
						len--;
						j--;
					}
				}
			}
			return arr;
		};

		
		//隐藏名字
		Vue.prototype.hideName = function(fullName){
			fullName = "*"+ fullName.substr(1);
			return fullName;
		};
		//隐藏电话号码
		Vue.prototype.hidePhone = function(phone){
			return phone.substr(0, 3) + '****' + phone.substr(7);
		};
		//隐藏身份证号
		Vue.prototype.hideIdCard = function(idCard){
			if(idCard.length == 15){
				return idCard.replace(/\d{11}(\d{4})/, '**** **** ***$1');
			}else if(idCard.length == 18){
				return idCard.replace(/\d{14}(\d{4})/, '**** **** **** **$1');
			}
		};
		//隐藏银行卡号
		Vue.prototype.hideBankNumber = function(bankNumber){
			if(bankNumber.length == 16){
				return bankNumber.replace(/\d{12}(\d{4})/, '**** **** **** $1');
			}else if(bankNumber.length == 19){
				return bankNumber.replace(/\d{15}(\d{4})/, '**** **** **** ***$1');
			}
		};

		//验证用户是否已经登录
		Vue.prototype.volidUserId = function(){
			if(!this.getCookie('godId') || this.getCookie('godId') == ''){
				this.toPath('/login');
				return false;
			}else{
				return true;
			}
		};
		//验证用户是否已经实名验证
		Vue.prototype.volidRealName = function(){
			if(!this.getCookie('isIdNumber') || this.getCookie('isIdNumber') == 0){
				this.toPath('/realName');
				return false;
			}else{
				return true;
			}
		};
		//验证用户是否已经绑定银行卡
		Vue.prototype.volidBackStatus = function(){
			if(!this.getCookie('status') || this.getCookie('status') == 0){
				this.toPath('/bankCardBinding');
				return false;
			}else{
				return true;
			}
		};
		//验证身份证号码
		Vue.prototype.valiteIdCard = function(idCard){
			idCard = this.trim(idCard.replace(/ /g, "")); //去掉字符串头尾空格                     
			if(idCard.length == 15) {
				return this.isValidityBrithBy15IdCard(idCard); //进行15位身份证的验证    
			} else if(idCard.length == 18) {
				var a_idCard = idCard.split(""); // 得到身份证数组   
				if(this.isValidityBrithBy18IdCard(idCard) && this.isTrueValidateCodeBy18IdCard(a_idCard)) { 
					//进行18位身份证的基本验证和第18位的验证
					return true;
				} else {
					MessageBox.alert("请输入正确的身份证号码！");
					return false;
				}
			} else {
				MessageBox.alert("请输入正确的身份证号码！");
				return false;
			}
		};
		
		//判断身份证号码为18位时最后的验证位是否正确  
		Vue.prototype.isTrueValidateCodeBy18IdCard = function(a_idCard){
			var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]; // 加权因子   
			var ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]; // 身份证验证位值.10代表X 
			var sum = 0; // 声明加权求和变量   
			if(a_idCard[17].toLowerCase() == 'x') {
				a_idCard[17] = 10; // 将最后位为x的验证码替换为10方便后续操作   
			}
			for(var i = 0; i < 17; i++) {
				sum += Wi[i] * a_idCard[i]; // 加权求和   
			}
			var valCodePosition = sum % 11; // 得到验证码所位置   
			if(a_idCard[17] == ValideCode[valCodePosition]) {
				return true;
			} else {
				MessageBox.alert("请输入正确的身份证号码！");
				return false;
			}
		};
		
		//验证18位数身份证号码中的生日是否是有效生日 
		Vue.prototype.isValidityBrithBy18IdCard = function (idCard18) {
			var year = idCard18.substring(6, 10);
			var month = idCard18.substring(10, 12);
			var day = idCard18.substring(12, 14);
			var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
			// 这里用getFullYear()获取年份，避免千年虫问题   
			if(temp_date.getFullYear() != parseFloat(year) ||
				temp_date.getMonth() != parseFloat(month) - 1 ||
				temp_date.getDate() != parseFloat(day)) {
				MessageBox.alert("请输入正确的身份证号码！");
				return false;
			} else {
				return true;
			}
		};
		
		//验证15位数身份证号码中的生日是否是有效生日 
		Vue.prototype.isValidityBrithBy15IdCard = function (idCard15) {
			var year = idCard15.substring(6, 8);
			var month = idCard15.substring(8, 10);
			var day = idCard15.substring(10, 12);
			var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
			// 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法   
			if(temp_date.getYear() != parseFloat(year) ||
				temp_date.getMonth() != parseFloat(month) - 1 ||
				temp_date.getDate() != parseFloat(day)) {
				return false;
			} else {
				return true;
			}
		};
		
		//判断身份证是否大于18岁
		Vue.prototype.isAge = function (sn) {
			//sn = 123456199001011234;
			//1.通过
			//2.您未满18周岁，无法进行实名认证！
			//3.您已超过80周岁，无法进行实名认证！
			if(!sn) {
				return false;
			}
			var _snYear = parseInt(sn.substr(6, 4)),
				_snMonth = parseInt(sn.substr(10, 2)),
				_snDate = parseInt(sn.substr(12, 2));
			var _now = new Date();
			var _nowYear = _now.getFullYear(),
				_nowMonth = _now.getMonth() + 1,
				_nowDate = _now.getDate();
			if(_nowYear - _snYear < 18) {
				MessageBox.alert("您未满18周岁，无法进行实名认证！");
				return false;
			}else if(_nowYear - _snYear >80){
				MessageBox.alert("您已超过80周岁，无法进行实名认证！");
				return false;
			}else if(_nowYear - _snYear == 18) {
				if(_nowMonth - _snMonth < 0) {
					MessageBox.alert("您未满18周岁，无法进行实名认证！");
					return false;
				} else if(_nowMonth - _snMonth == 0) {
					if(_nowDate - _snDate < 0) {
						MessageBox.alert("您未满18周岁，无法进行实名认证！");
						return false;
					}
				} 
			}else if(_nowYear - _snYear == 80) {
				if(_nowMonth - _snMonth > 0) {
					MessageBox.alert("您已超过80周岁，无法进行实名认证！");
					return false;
				} else if(_nowMonth - _snMonth == 0) {
					if(_nowDate - _snDate >= 0) {
						MessageBox.alert("您已超过80周岁，无法进行实名认证！");
						return false;
					}
				} 
			}
			return true;
		};
		
		//去掉字符串头尾空格   
		Vue.prototype.trim = function (str) {
			return str.replace(/(^\s*)|(\s*$)/g, "");
		};
		
		//检测银行卡号
		Vue.prototype.isValidityCard = function (card) {
			var partten = /^[1-9]{1}[0-9]{7,20}$/;
			if(partten.test(card)) {
				return true;
			} else {
				return false;
			}
		};
		//回退上一页
		Vue.prototype.toBack = function(){
			this.$router.go(-1);
		}

		//回退上一页,带参数
		// Vue.prototype.toBackWithParams = function(query){
		// 	this.$router.go(-1);
		// }



		/**
	     * [dealPhone 处理手机号，处理成123****xxxx]
	     * @Author   罗文
	     * @DateTime 2018-03-15
	     * @param    {[type]}   phone [要处理的手机号]
	     * @return   {[type]}         [处理好的手机号]
	     */
	    Vue.prototype.dealPhone = function(phone) {
	       let phoneReg = /^1\d{10}$/g;
	       //如果不是手机号，返回原值
	       if(!phoneReg.test(phone)) {
               return phone;
	       }else {
               return phone.substr(0,3) + '****' + phone.slice(7)
	       }
	    };

	    //带tokenid的发送请求方法
	    Vue.prototype.getData = function(methods,url,data,callback){
	    	this.$http({
	          method: methods,
	          url: url,
	          data: data,
	          headers:{
	            'tokenid':this.getCookie('token'),
	            'godid':this.getCookie('godId')
	          },
	        }).then((res) => {
	          callback(res);
	        })
	    }


	    Vue.prototype.getCode = function (phone){//获取短信验证码
			var params = {
				mobile:phone
			};
			this.$http.post('/service/sendSms', params).then((res) => {
				//结果
				//接口调用成功！
	            if(res.data.statusCode === '000000') {
	              //验证码发送成功！
	              MessageBox.alert('验证码发送成功！');
	            }else {
	              MessageBox.alert(res.data.desc);
	            }
			});
	    }


	}
}