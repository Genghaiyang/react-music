import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.less'
import { Icon } from 'antd'
class Skin extends React.Component {
	constructor(props) {
		super(props)
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
			this.props.show && (
				<div className="skinBox">
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
			)
		)
	}
}
export default Skin
