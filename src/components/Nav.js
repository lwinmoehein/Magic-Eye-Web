import React from 'react'
import { Menu, Button } from 'antd';
import {DownCircleOutlined,UpCircleOutlined} from '@ant-design/icons';

import 'antd/dist/antd.css';
const SubMenu = Menu.SubMenu;

function Nav() {
    const [collapsed,setCollapsed] = React.useState();

    const toggleCollapsed = () => {
        setCollapsed( !collapsed);
    }

    return (
        <div style={{ width: 240 }}>
      
        </div>
    )
}

export default Nav
