import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.less'
import { Icon } from 'antd'
import { CSSTransition } from 'react-transition-group'
class Skin extends React.Component {
	constructor(props) {
        super(props)
        this.skinRef = React.createRef()
		this.state = {
			skins: [
				{ key: 'mangoYellow', name: '芒果黄', color: '#FFD700' },
				{ key: 'coolBlack', name: '炫酷黑', color: '#212121' },
				{ key: 'kuGouBlue', name: '酷狗蓝', color: '#2CA2F9' },
				{ key: 'netBaseRed', name: '网易红', color: '#D43C33' },
				{ key: 'qqGreen', name: 'QQ绿', color: '#31C27C' }
            ]           
		}
	}
	render() {
		return (
            /* this.props.show && ( */
                <CSSTransition
                      in={this.props.show} // 如果this.state.show从false变为true，则动画入场，反之out出场
                      timeout={300} //动画执行1秒
                      classNames='fade' //自定义的class名
                      unmountOnExit //可选，当动画出场后在页面上移除包裹的dom节点
                      onEntered={(el) => {
                        this.skinRef.current.style.display = "block";   //可选，动画入场之后的回调，el指被包裹的dom，让div内的字体颜色等于蓝色
                      }}
                      onExited={() => {
                        //this.skinRef.current.style.display = "none";   //同理，动画出场之后的回调，也可以在这里来个setState啥的操作
                      }}
                      
                >
				<div className="skinBox" ref={this.skinRef}>
					<p className="title">
						皮肤中心<span onClick={this.props.close}>取消</span>
					</p>
					<p className="text">推荐皮肤</p>
					<ul>
						{this.state.skins.map((item, index) => {
							return (
								<li key={item.key}>
									<p
										className='top'
										style={{ background: item.color }}
									>
										<b className='check'><Icon type="check-circle" theme="filled" /></b>
									</p>
									<p className='bottom'>{item.name}</p>
								</li>
							)
						})}
					</ul>
				</div>
                </CSSTransition>
		)
	}
}
export default Skin
