import React, {useState} from 'react'
import { Route, Redirect, Link } from "react-router-dom"
import { useDispatch } from "react-redux";

//Components
import Login from '../view/Login/Login';
import Home from '../view/Home/Home';
import Register from '../view/Register/Register';
import Images from "../view/Images/Images";
import VideosRandom from '../view/VideosRandom/VideosRandom';
import VideosSearch from '../view/VideosSearch/VideosSearch';
import ProfileInfo from '../view/ProfileInfo/ProfileInfo';

//Firebase
import { firebase } from "../firebase/firebase.config"

//Ant
import { Layout, Menu } from 'antd';
import {
  FileImageOutlined,
  VideoCameraOutlined,
  UserOutlined,
  HeartOutlined,
  LogoutOutlined,
  LoginOutlined
} from '@ant-design/icons';

import 'antd/dist/antd.css';

//Actions
import { handleFillUserInfoAction } from "../Redux/actions/login.action"
import { handleLogoutAction } from "../Redux/actions/login.action"


const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Mainlayout = ({children}) => {

    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = () => {
        setCollapsed(!collapsed);
    }

    const [isInSession, setIsInSession] = useState(false);

    //Redux Hooks
    const dispatch = useDispatch();

    firebase.auth().onAuthStateChanged(user => {
        if (user?.uid) {
        dispatch(
            handleFillUserInfoAction({
            displayName: user.displayName,
            email: user.email,
            uid: user.uid
            })
        );
        setIsInSession(true);
        } else {
        setIsInSession(false);
        }
    });

    return (
        <>
            <Layout  style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
              
                {isInSession ? (
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                
                    <SubMenu key="sub1" icon={<FileImageOutlined />} title="Images">
                        <Menu.Item key="1"><Link to="/">Random</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/Images">Search</Link></Menu.Item>
                    </SubMenu>

                    <SubMenu key="sub2" icon={<VideoCameraOutlined />} title="Videos">
                        <Menu.Item key="3"><Link to="/VideosRandom">Random</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/VideosSearch">Search</Link></Menu.Item>
                    </SubMenu>

                    <SubMenu key="sub3" icon={<UserOutlined />} title="Account">
                        <Menu.Item key="5"><Link to="/ProfileInfo">Profile Information</Link></Menu.Item>
                        <SubMenu key="sub4" icon={<HeartOutlined />} title="Favorites">
                            <Menu.Item key="6">Images</Menu.Item>
                            <Menu.Item key="7">Videos</Menu.Item>
                        </SubMenu>
                    </SubMenu>

                    <Menu.Item key="8" className="mt-20" icon={<LogoutOutlined />}>
                    <button onClick={()=> dispatch(handleLogoutAction())}>Logout</button>
                    </Menu.Item>

                </Menu>) 
                : (
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
             
                    <Menu.Item key="1" icon={<LoginOutlined />}>    
                        <Link to="/Login">Login</ Link>
                    </Menu.Item>

                </Menu>
                )}
                </Sider>
                <Layout className="">  
                    <Content className="m-4" >

                    <Route 
                        path="/Login" 
                        exact
                        render={() =>
                        !isInSession ? (
                            <>
                            <Login />
                            </>
                        ) : (
                            <Redirect to="/" />
                        )}
                    />
                    
                    <Route
                        exact
                        path="/signup"
                        render={() =>
                            !isInSession ? (
                            <>
                                <Register />
                            </>
                            ) : (
                            <Redirect to="/" />
                            )
                        }
                    />
        
                    <Route
                        exact
                        path="/"
                        render={() =>
                            isInSession ? (
                            <>
                                <Home />
                            </>
                            ) : (
                            <Redirect to="/login" />
                            )
                        }
                    />

                    <Route
                        exact
                        path="/Images"
                        render={() =>
                            isInSession ? (
                            <>
                                <Images />
                            </>
                            ) : (
                            <Redirect to="/login" />
                            )
                        }
                    />

                    <Route
                        exact
                        path="/VideosRandom"
                        render={() =>
                            isInSession ? (
                            <>
                                <VideosRandom />
                            </>
                            ) : (
                            <Redirect to="/login" />
                            )
                        }
                    />

                    <Route
                        exact
                        path="/VideosSearch"
                        render={() =>
                            isInSession ? (
                            <>
                                <VideosSearch />
                            </>
                            ) : (
                            <Redirect to="/login" />
                            )
                        }
                    />

                    <Route
                        exact
                        path="/ProfileInfo"
                        render={() =>
                            isInSession ? (
                            <>
                                <ProfileInfo />
                            </>
                            ) : (
                            <Redirect to="/login" />
                            )
                        }
                    />
                

                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Design by Sebastian Zuluaga Becerra</Footer>
                </Layout>
            </Layout>
            {children}
                    
        </>
    )
}

export default Mainlayout
