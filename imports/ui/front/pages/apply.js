import React from 'react';
import '/public/plugin/iCheck/icheck.min.js';
class _Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
    };
    this.handleTab = this.handleTab.bind(this);
  }
  componentDidMount() {
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });
  }
  handleTab(value) {
    this.setState({tab: value});
    console.log('act');
  }
  getClassName(value) {
    const active = value === this.state.tab ? ' active' : '';
    const className = 'apply-item' + active;
    return className;
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
                <div className="apply-step"  onClick={()=>this.handleTab(0)}>
                  <img src="/img/apply/apply1.jpg" alt="apply" />
                  <h3 className="font-dark">申请开发板</h3>
                </div>
                <div className="apply-arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></div>
                <a className="apply-step" href='apply2.html'>
                  <img src="/img/apply/apply2.jpg" alt="apply" />
                  <h3 className="font-dark">申请实验室</h3>
                </a>
                <div className="apply-arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></div>
                <a className="apply-step" href="#" onClick={()=>this.handleTab(1)}>
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
                  <a className={this.getClassName(0)}  onClick={()=>this.handleTab(0)}>
                      申请开发板
                  <span className="pull-right">></span></a>
                  <a className={this.getClassName(1)}  onClick={()=>this.handleTab(0)}>
                      申请实验室
                  <span className="pull-right">></span></a>


                  <a className="apply-item" href='apply3.html'>申请测试<span className="pull-right">></span></a>
                  <a className="apply-item" href='apply4.html'>申请产品化<span className="pull-right">></span></a>
                  <a className="apply-item" href='apply5.html'>完成产品<span className="pull-right">></span></a>
                </div>
                <div className="col-sm-8 apply-form">
                  <h1 className="text-left">申请开发板</h1>
                  <p className="no-p-space">只需要几步配置即可完成申请，可以在云服务中完成开发板的全生命周期管理</p>

                  <form className="form-horizontal ">
                    <div className="form-group">
                      <label htmlFor="" className="col-md-2 control-label">开发平台:</label>
                      <div className="col-md-10">
                        <label className="checkbox-inline i-checks"><input type="radio" checked value="" name="a"/> <i></i> MTK7688</label>
                        <label className="checkbox-inline i-checks"> <input type="radio" value="" name="a"/> <i></i> MTK7687</label>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="" className="col-md-2 control-label">申请数量:</label>
                      <div className="col-md-4">
                        <input type="text" className="form-control"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="" className="col-md-2 control-label">研发人员:</label>
                      <div className="col-md-10">
                        <label className="checkbox-inline i-checks"><input type="radio" checked value="" name="b"/> <i></i> 1人</label>
                        <label className="checkbox-inline i-checks"> <input type="radio" value="" name="b"/> <i></i> 2-3人</label>
                        <label className="checkbox-inline i-checks"> <input type="radio" value="" name="b"/> <i></i> 4-10人</label>
                        <label className="checkbox-inline i-checks"> <input type="radio" value="" name="b"/> <i></i> 10人以上</label>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="" className="col-md-2 control-label">产品类型:</label>
                      <div className="col-md-10">
                        <label className="checkbox-inline i-checks"> <input type="checkbox" checked="" value="option2"/> 智能手表 </label>
                        <label className="checkbox-inline i-checks"> <input type="checkbox" value="option3"/> 智能手环 </label>
                        <label className="checkbox-inline i-checks"> <input type="checkbox" value="option3"/> 智能玩具 </label>
                        <label className="checkbox-inline i-checks"> <input type="checkbox" value="option3"/> 其他 <input type="text" style={{width: '80px'}}/></label>
                      </div>
                    </div>
                    <div className="form-group">
                       <label className="col-sm-2 control-label">产品介绍：</label>
                       <div className="col-sm-8">
                          <textarea className="form-control" rows="4" placeholder=""></textarea>
                       </div>
                    </div>
                    <div className="form-group">
                       <label className="col-sm-2 control-label">联系方式：</label>
                       <div className="col-sm-4">
                         <input type="text" placeholder='姓名'/>
                       </div>
                       <div className="col-sm-4">
                         <input type="text" placeholder='手机'/>
                       </div>
                    </div>
                    <div className="form-group">
                       <label className="col-sm-2 control-label">邮寄地址：</label>
                       <div className="col-sm-4">
                         <input type="text" placeholder='地址'/>
                       </div>
                       <div className="col-sm-4">
                         <input type="text" placeholder='邮编（选填）'/>
                       </div>
                    </div>
                    <button type="submit" className='btn apply-btn'>提交申请</button>
                  </form>
                </div>
              </div>
           </div>
        </section>
      </div>
    );
  }
}
export default _Page;
