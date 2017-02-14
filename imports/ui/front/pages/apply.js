import React from 'react';
import Alert from 'react-s-alert';

import '/public/plugin/iCheck/icheck.min.js';

import Apply1 from './apply1';
import Apply2 from './apply2';

class _Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
    };
    this.handleTab = this.handleTab.bind(this);
  }
  handleTab(value) {
    this.setState({tab: value});
  }
  getClassName(value) {
    const active = value === this.state.tab ? ' active' : '';
    const className = 'apply-item' + active;
    return className;
  }

  getTab() {
    const tabs = [<Apply1 onSubmit={this.handleSubmit}/>,
                  <Apply2 onSubmit={this.handleSubmit}/>,
                 ];
    return tabs[this.state.tab - 1];
  }

  handleSubmit(values) {
    console.log(values);
    // Meteor.call('apply.create', values, function(error) {
    //   if (error) {
    //     Alert.error(error.reason, {
    //       position: 'bottom-left'
    //     });
    //   } else {
    //     Alert.info('成功提交申请', {
    //       position: 'bottom-left'
    //     });
    //   }
    // });
  }

  render() {
    return (
      <div>
        <div className="page-info">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="h1-page-title">项目申请</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 page-info-line">
        </div>
        <section className="slice">
          <div className="container">
            <div className="apply-row">
              <div className="apply-step"  onClick={()=>this.handleTab(1)}>
                <img src="/img/apply/apply1.jpg" alt="apply" />
                <h3 className="font-dark">申请开发板</h3>
              </div>
              <div className="apply-arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></div>
              <a className="apply-step"  onClick={()=>this.handleTab(2)}>
                <img src="/img/apply/apply2.jpg" alt="apply" />
                <h3 className="font-dark">申请实验室</h3>
              </a>
              <div className="apply-arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></div>
              <a className="apply-step"  onClick={()=>this.handleTab(2)}>
                <img src="/img/apply/apply3.jpg" alt="apply" />
                <h3 className="font-dark">申请测试</h3>
              </a>
              <div className="apply-arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></div>
              <a className="apply-step" href='apply4.html'>
                <img src="/img/apply/apply4.jpg" alt="apply" />
                <h3 className="font-dark">申请产品化</h3>
              </a>
              <div className="apply-arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></div>
              <a className="apply-step" href='apply5.html'>
                <img src="/img/apply/apply5.jpg" alt="apply" />
                <h3 className="font-dark">完成</h3>
              </a>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <a className={this.getClassName(1)}  onClick={()=>this.handleTab(1)}>
                  申请开发板
                  <span className="pull-right">></span></a>
                <a className={this.getClassName(2)}  onClick={()=>this.handleTab(2)}>
                  申请实验室
                  <span className="pull-right">></span></a>


                <a className="apply-item" href='apply3.html'>申请测试<span className="pull-right">></span></a>
                <a className="apply-item" href='apply4.html'>申请产品化<span className="pull-right">></span></a>
                <a className="apply-item" href='apply5.html'>完成产品<span className="pull-right">></span></a>
              </div>
              {this.getTab()}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default _Page;
