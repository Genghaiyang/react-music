import React from 'react'
import Skin from '../skin'
import { CSSTransition } from 'react-transition-group'
import './index.less'

class SettingMenu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            skinShow:false
        }
        this.menuRef = React.createRef()
    }
    setSkinShow = () => {
        this.props.closeMenu
        this.setState({
            skinShow:true
        })
    }
    setSkinHide = () => {
        this.setState({
            skinShow:false
        })
    }
	render() {
		return (
            
        <div>
            <CSSTransition
            in={this.props.show} // 如果this.state.show从false变为true，则动画入场，反之out出场
            timeout={300} //动画执行1秒
            classNames='mefade' //自定义的class名
            unmountOnExit //可选，当动画出场后在页面上移除包裹的dom节点
            onEntered={(el) => {
             
            }}
            onExited={() => {
              
            }}
            
      >
			<div className="setting-menu" onClick={this.props.closeMenu} ref={this.menuRef}>
                <div className='menu-bottom'>
				<p className='wrapper' onClick={this.setSkinShow}>皮肤中心</p>
                <p onClick={this.props.closeMenu}>关闭</p>
                </div>
			</div>
            </CSSTransition>
            <Skin show={this.state.skinShow} close={this.setSkinHide} />
        </div>
        
		)
	}
}
export default SettingMenu
