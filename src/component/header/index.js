import React from 'react'
import { NavLink } from "react-router-dom"
import './index.less'
// import '../../assets/font/fonts/iconfont.js'
import { Icon } from 'antd'
class HeaderBar extends React.Component {
	render() {
		return (
			<div className="headerBox">
				<header className="headerBar">
                    <span className='moreBtn'>
					{/* <svg class="icon" aria-hidden="true">
						<use xlinkHref="#icon-more"></use>
					</svg> */}
                    <Icon type="unordered-list" />
                    </span>
                    <span className='title'>Mango Music</span>
				</header>
				<nav className="navBar">
                    <NavLink activeClassName='active' to='/recommend'>推荐</NavLink>
                    <NavLink activeClassName='active' to='/ranking'>排行榜</NavLink>
                    <NavLink activeClassName='active' to='/singer'>歌手</NavLink>
                    <NavLink activeClassName='active' to='/search'>搜索</NavLink>
                </nav>
			</div>
		)
	}
}
export default HeaderBar
