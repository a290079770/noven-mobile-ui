//页脚
import Footer from './Footer.vue'


//手机商城的Item
import MailItem from './Item/MailItem.vue'

//为您推荐的Item
import RecommendItem from './Item/RecommendItem.vue'

//滚动组件
import Scroll from './Scroll/Scroll.vue'

//头部组件
import Header from './Header/Header.vue'

//走马灯组件
import Marquee from './Marquee.vue'

//获取验证码
import MsgCode from './MsgCode/MsgCode.vue'

//获取验证码
import VerificationCode from './VerificationCode/VerificationCode.vue'

//引入封装的Input框
import Input from './Input/Input.vue'

//引入封装的Input框
import SelectCommodity from './SelectCommodity/SelectCommodity.vue'

//引入缺省模板
import Default from './Default/Default.vue'

//引入Select选择框
import Select from './Select/Select.vue'

//引入SwipeOut
import SwipeOut from './SwipeOut/swipeOut.vue'

//引入NavMenu
import NavMenu from './NavMenu/NavMenu.vue'
//引入DoubleListScroll
import DoubleListScroll from './DoubleListScroll/DoubleListScroll.vue'

//引入keybord-number
import KeybordNumber from './KeybordNumber/keybord-number.vue'

//引入pay
import Pay from './Pay/pay.vue'




//万家账本
//引入TopBgImg顶部背景图
import TopBgImg from './TopBgImg/TopBgImg.vue'

//引入折叠菜单
import ExpandMenu from './ExpandMenu/ExpandMenu.vue'

//引入PopupInput 录入方式选择框
import PopupInput from './PopupInput/PopupInput.vue'

//引入Button组件 项目的按钮
import Button from './Button/Button.vue'

//引入BankItem组件 项目的按钮
import BankItem from './BankItem/BankItem.vue'

//引入InvestRecmd组件 项目的按钮
import InvestRecmd from './InvestRecmd/InvestRecmd.vue'

//引入CanvasCycle组件 项目的按钮
import CanvasCycle from './CanvasCycle/CanvasCycle.vue'


// 这里是重点
// 导出组件
export default {
    install: function(Vue){
        let componentList = [
           {Title:'Footer',Component:Footer},

           {Title:'MailItem',Component:MailItem},
           {Title:'RecommendItem',Component:RecommendItem},
           {Title:'Scroll',Component:Scroll},
           {Title:'Header',Component:Header},
           {Title:'MsgCode',Component:MsgCode},
           {Title:'VerificationCode',Component:VerificationCode},
           {Title:'Input',Component:Input},
           {Title:'Default',Component:Default},
           {Title:'SelectCommodity',Component:SelectCommodity},
           {Title:'Select',Component:Select},
           {Title:'SwipeOut',Component:SwipeOut},
           {Title:'Marquee',Component:Marquee},
           {Title:'NavMenu',Component:NavMenu},
           {Title:'DoubleListScroll',Component:DoubleListScroll},
           {Title:'KeybordNumber',Component:KeybordNumber},
           {Title:'Pay',Component:Pay},
           
           //万家账本
           {Title:'TopBgImg',Component:TopBgImg},
           {Title:'ExpandMenu',Component:ExpandMenu},
           {Title:'PopupInput',Component:PopupInput},
           {Title:'Button',Component:Button},
           {Title:'BankItem',Component:BankItem},
           {Title:'InvestRecmd',Component:InvestRecmd},
           {Title:'CanvasCycle',Component:CanvasCycle},
        ];
        
        componentList.forEach((item,index)=>{
           Vue.component(item.Title,item.Component);
        })
    }
}