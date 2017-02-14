import React from 'react';

export default
class _Page extends React.Component {
  componentDidMount() {
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });
  }
  render() {
    return (
                  <div className="col-sm-8 apply-form">
                    <h1 className="text-left">开发板</h1>
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
    );
  }
}
