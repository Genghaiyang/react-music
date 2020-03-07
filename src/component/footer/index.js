import React from 'react'
import { NavLink } from 'react-router-dom'
import MiniPlayer from '../miniplayer'
import FullPlayer from '../fullplayer'
import PlayerList from '../playerlist'
import './index.less'
import { Icon } from 'antd'
class MusicPlayer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            fpShow:false,
            mpShow:true,
            listShow:false
        }
    }
	render() {
		return (<div className="footer">
            <MiniPlayer show={this.state.mpShow}/>
            <FullPlayer show={this.state.fpShow}/>
            <PlayerList show={this.state.listShow}/>
        </div>)
	}
}
export default MusicPlayer
