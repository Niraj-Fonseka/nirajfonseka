import React from 'react';
import 'antd/dist/antd.css';
import './../index.css';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import Content from './content';


export default function SeeMore(props){
    const [current, setCurrent] = React.useState("projects");

    
    const handleClick = e => {
        setCurrent(e.key);
      };
    
  
      return (
        <div>

        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="back" style={{backgroundColor: "#f4f4f4", borderRadius: "5px" }} onClick={props.callback} >
            Back
          </Menu.Item>
          <Menu.Item key="projects" style={{width: '100px' , textAlign : 'center'}} icon={<AppstoreOutlined />}>
            Projects
          </Menu.Item>
          <Menu.Item key="writing" style={{width: '100px' , textAlign : 'center'}} icon={<AppstoreOutlined />}>
            Writing
          </Menu.Item>
          <Menu.Item key="photography" disabled style={{width: '100px' , textAlign : 'center'}} icon={<AppstoreOutlined />}>
            Photography
          </Menu.Item>
        </Menu>
        <Content selected={current}/>
        </div>

      );
}
