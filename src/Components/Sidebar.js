import { ExpandMoreOutlined } from '@material-ui/icons'
import React from 'react'
import './Css/Sidebar.css'
import SidebarRow from './SidebarRow'
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{user}, dispatch] =useStateValue();
    return (
        <div className="Sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 Information Center"/>
            <SidebarRow Icon={EmojiEmotionsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Message"/>
            <SidebarRow Icon={StorefrontIcon } title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreIcon} title="More"/>

        </div>
    )
}

export default Sidebar
