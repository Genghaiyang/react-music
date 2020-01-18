import React from 'react'
import Skin from '../skin'
import './index.less'

class SettingMenu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            skinShow:false
        }
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
		return (<div>
			{this.props.show&&<div className="setting-menu" onClick={this.props.closeMenu}>
                <div className='menu-bottom'>
				<p className='wrapper' onClick={this.setSkinShow}>皮肤中心</p>
                <p onClick={this.props.closeMenu}>关闭</p>
                </div>
			</div>}
            <Skin show={this.state.skinShow} close={this.setSkinHide} />
        </div>
		)
	}
}
export default SettingMenu
