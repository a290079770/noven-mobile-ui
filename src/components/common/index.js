//手机商城的Item
import MailItem from './Item/MailItem.vue'

//为您推荐的Item
import RecommendItem from './Item/RecommendItem.vue'

//滚动组件
import Scroll from './Scroll/Scroll.vue'

//头部组件
import Header from './Header/Header.vue'

//获取验证码
import MsgCode from './MsgCode/MsgCode.vue'

//获取验证码
import InputCode from './InputCode/InputCode.vue'

//引入封装的Input框
import Input from './Input/Input.vue'

//引入封装的Input框
import SelectCommodity from './SelectCommodity/SelectCommodity.vue'

//引入缺省模板
import Default from './Default/Default.vue'
// 这里是重点
// 导出组件
export default {
    install: function(Vue){
        Vue.component('MailItem',MailItem);
        Vue.component('RecommendItem',RecommendItem);
        Vue.component('Scroll',Scroll);
        Vue.component('Header',Header);
        Vue.component('MsgCode',MsgCode);
        Vue.component('InputCode',InputCode);
        Vue.component('Input',Input);
        Vue.component('Default',Default);
        Vue.component('SelectCommodity',SelectCommodity);
    }
}