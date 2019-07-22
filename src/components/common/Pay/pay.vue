<!-- 
	支付组件
	引用demo: 
	<ui-pay v-if="showPay" title="xxxx" :maxLength="6" @close="close" @success="" @input="" @delete="" @close="">
		中间这是自定义内容
	</ui-pay>
	
 -->
<template>
	<div class="flex flex-center ui-pay" :style="{ height: height + 'px'}" >
	  <div class="flex flex-center flex-column-wrap ui-pay-cont">
	  	<img :src="'./static/img/ic-close@2x.png'" class="ui-pay-close-icon" @click="close">	
  		<div class="flex flex-center ui-pay-head">
  		  {{ title }}
  	  </div>	
  	  <div class="flex flex-center ui-pay-body">
  	  	<slot />		
  	  </div>
  	  <div class="flex flex-center ui-pay-bottom">
  	  	<div class="flex ui-pay-numbers" @click.stop="showKeybord = true">
  	  		<div class="flex flex-center ui-pay-number" v-for="(item,index) in maxLength">
  	  			<div class="ui-pay-number-fill" v-if="values[index] || values[index] === 0"></div>
  	  		</div>
  	  	</div>
  	  </div>
	  </div>
		
		<KeybordNumber :isShowModal="false" :isShowDot="false" :showKeybord="showKeybord" @input="onInput" @close="showKeybord = false"/>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: '请输入支付密码'
			},
			maxLength: {
				type: Number,
				default: 6
			}
		},
		data() {
			return {
				values: [],
				height: window.innerHeight,
				showKeybord: false,
				closeTimer: null
			}
		},
		methods: {
			onInput(num) {
				switch (num) {
					case -1:
					  this.values.pop();
					  this.delete();
					  break;

					default:
					  if(this.values.length < this.maxLength) {
					  	this.values.push(num);
					  	this.input();
					  }
					  break;
				}

				//输入满length，触发success方法
				if(this.values.length === this.maxLength) this.success();
			},

			success() {
				this.$emit('success',this.values);
			},
			input() {
				this.$emit('input',this.values[this.values.length - 1]);
			},
			delete() {
				this.$emit('delete');
			},
			close() {
				this.$emit('close',this.values);
			}
		},
		mounted() {
			this.showKeybord = true;
		},
		watch: {
			showKeybord(nv) {
				let innerHeight = window.innerHeight;
				this.height = nv ? innerHeight - 220 : innerHeight;
			}
		},
		beforeDestroy() {
			clearTimeout(this.closeTimer)
		}
	}
</script>

<style scoped>
	.flex {
		display: flex;
	}
	.flex-center {
		justify-content: center;
		align-items: center;
	}
	.flex-column-wrap {
		flex-direction: column;
	}
	
	.ui-pay {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 999;
		transition: all 0.3s linear;
		background: rgba(0,0,0,0.7);
	}

	.ui-pay-cont {
		position: relative;
		justify-content: flex-start;
		width: 6.40rem;
		max-height: 6.90rem;
		background: rgb(255,255,255);
		border-radius: .20rem;
	}

	.ui-pay-head {
		height: 1.20rem;
		width: 4.04rem;
		font-size: .32rem;
		font-family: PingFangSC;
		color: #2b2b2b;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.ui-pay-close-icon {
		position: absolute;
		left: .25rem;
		top: .25rem;
		width: .4rem;
		height: .4rem;
	}

	.ui-pay-bottom {
		height: 2.20rem;
	}

	.ui-pay-numbers {
		width: 100%;
		height: .96rem;
		width: 5.52rem;
		border: .04rem solid #d2d2d4;
		border-right: none;
		box-sizing: content-box
	}
	
	.ui-pay-number {
		flex: 1;
		width: .96rem;
		height: 100%;
		border-right: .04rem solid #d2d2d4
	}

	.ui-pay-number-fill {
		width: .40rem;
		height: .40rem;
		border-radius: 50%;
		background: #000;
	}
</style>
