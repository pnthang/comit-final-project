import React, {Component} from 'react'
// import {Link} from 'react-router-dom'


import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FolderIcon from '@material-ui/icons/Folder';


class NavbarBottom extends Component{
    state = {
        value:'recents'
    }
    handleChange=(event)=>{
        this.setState({
            value:event.target.value
        })
    }
    render(){
        const {classes} = this.props;
        return(
        <BottomNavigation value={this.value} onChange={this.handleChange} className="nav-bottom-root">
            <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
            <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
        </BottomNavigation>
        )
    }
}
export default NavbarBottom;