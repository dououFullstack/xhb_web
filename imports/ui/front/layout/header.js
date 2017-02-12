import React from 'react';
import NavLink from './nav_link';


class _Component extends React.Component {
  render() {
    return (
      <header id="mainHeader" className="navbar-fixed-top" role="banner">
         <div className="container">
            <nav className="navbar navbar-default" role="navigation">
               <div className="navbar-header">
                 <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"/> <span className="icon-bar"/> <span className="icon-bar"/> </button>
                 <a className="navbar-brand" href="/"><img src="/images/main-logo.png" alt="Ashley website template"/></a>
               </div>
               <div className="collapse navbar-collapse navbar-ex1-collapse" id="scrollTarget">
                  <ul className="nav navbar-nav pull-right">
                    <NavLink to="/" index={true}>
                      大赛首页
                    </NavLink>
                    <NavLink to="/about">
                      大赛简介
                    </NavLink>
                    <NavLink to="/schedule">
                      赛程安排
                    </NavLink>
                     <li><a href="#">项目申请</a> </li>
                    <NavLink to="/news">
                      最新新闻
                    </NavLink>
                     <li><a href="#">MTK网站</a> </li>
                     <li><a href="#contactSlice">登录</a> </li>
                  </ul>
               </div>
            </nav>
         </div>
      </header>
    );
  }
}
export default _Component;
