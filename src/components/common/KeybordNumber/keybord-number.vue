<!-- 
	数字键盘
	引用demo: 
	<ui-keybord-number :isShowDot="true" :showKeybord="showKeybord" @input="onInput" @close="showKeybord = false"/>

	onInput(num) {
		switch (num) {
			case -1:
			  console.log('删除')					
			  break;

			default:
			  console.log(num);
			  break;
		}

	}
 -->
<template>
	<div class="ui-keybord-number-modal" :class="{ 'ui-keybord-number-modal-full': isShowModal }" v-if="showKeybord" @click="close">
		<div @click.stop="" class="flex flex-muti-row ui-keybord-number" :class="{ 'ui-keybord-number-show': isShow}">
			<div class="flex flex-center ui-keybord-number-cell" :class="{ 'ui-keybord-number-cell-active': activeIndex == item }" v-for="item in 9" @click="input(item)" @touchstart="toggleActive(true,item)" @touchend="toggleActive(false)">
				{{item}}
			</div>
			<div v-if="isShowDot" class="flex flex-center ui-keybord-number-cell ui-keybord-number-cell-noborder" :class="{ 'ui-keybord-number-cell-active': activeIndex === '.' }" @click="input('.')" @touchstart="toggleActive(true,'.')" @touchend="toggleActive(false)">.</div>
			<div v-else class="flex flex-center ui-keybord-number-cell ui-keybord-number-cell-noborder ui-keybord-number-cell-disabled" ></div>
			<div class="flex flex-center ui-keybord-number-cell ui-keybord-number-cell-noborder" :class="{ 'ui-keybord-number-cell-active': activeIndex === 0 }" @click="input(0)" @touchstart="toggleActive(true,0)" @touchend="toggleActive(false)">0</div>
			<div class="flex flex-center ui-keybord-number-cell ui-keybord-number-cell-noborder ui-keybord-number-cell-disabled" @click="input(-1)">删除</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			//外部控制组件的显示隐藏，注意不要用v-if控制，因为有动画和蒙层
			showKeybord: {
				type: Boolean,
				default: false
			},
			//是否显示小数点
			isShowDot: {
				type: Boolean,
				default: true
			},
			//是否显示全屏的蒙层，点击蒙层可关闭输入框
			isShowModal: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				//组件内部状态，点击时的活跃按钮索引
				activeIndex: -1,
				//是否开始显示键盘，主要是动画时需要先创建节点
				isShow: false,
				//动画持续时间
				duration: 300,

				closeTimer: null,
				startTimer: null
			}
		},
		methods: {
			input(index) {
				this.$emit('input',index);
			},
			toggleActive(isAddClass,index) {
				if(!isAddClass) {
					this.activeIndex = -1;
					return;
				}

				this.activeIndex = index;
			},
			close() {
				this.isShow = false;

				this.closeTimer = setTimeout(()=> {
					this.$emit('close')
				},this.duration)
			}
		},
		watch: {
			showKeybord(nv) {
				if(nv) {
					this.startTimer = setTimeout(()=> {
						this.isShow = true
					},100)
				}else {
					this.isShow = false
				}
			}
		},

		beforeDestroy() {
			clearTimeout(this.startTimer);
			clearTimeout(this.closeTimer);
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
	.flex-muti-row {
		flex-wrap: wrap;
	}

	.ui-keybord-number-modal {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 999;
		/*background: rgba(0,0,0,0.1);*/
	}

	.ui-keybord-number-modal-full {
		top: 0;
	}

	.ui-keybord-number {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		transition: all 0.3s linear;
		transform: translate3d(0,4.4rem,0);
		background: white;
		border-top: 1px solid #F7F6F9;
	}

	.ui-keybord-number-show {
		transform: translate3d(0,0,0);
	}

	.ui-keybord-number-cell {
		width: 33.33%;
		height: 1.10rem;
		font-size: .44rem;
		color: #2b2b2b;
		box-sizing: border-box;
	}
	.ui-keybord-number-cell:nth-of-type(3n + 1),.ui-keybord-number-cell:nth-of-type(3n + 3) {
		border-bottom: 1px solid #F7F6F9;
	}

	.ui-keybord-number-cell:nth-of-type(3n + 2) {
		border: 1px solid #F7F6F9;
		border-top: none;
	}

	.ui-keybord-number-cell-noborder {
		border-bottom: none !important;
	}

	.ui-keybord-number-cell-disabled {
		background: #d4d2d4;
	}

	.ui-keybord-number-cell-active {
	  background: #d4d2d4;
	  color: white;
	}
</style>
