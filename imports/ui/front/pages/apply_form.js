import React from 'react';
import '/public/plugin/iCheck/icheck.min.js';
class _Page extends React.Component {
  componentDidMount() {
    $(document).ready(function () {
        $('.i-checks').iCheck({
            checkboxClass: 'icheckbox_square-green',
            radioClass: 'iradio_square-green',
        });
    });
  }
  render() {
    return (
      <div>

      <div className="page-info">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <h1 className="h1-page-title">我要报名</h1>
               </div>
            </div>
         </div>
      </div>
      <div className="col-sm-12 page-info-line">
      </div>
      <section className="slice">
         <div className="container">
            <form  className="form-horizontal">
               <h2>公司基本信息</h2>
               <div className="hr-line-dashed"></div>
               <div className="row">
                  <div className="col-md-6">
                     <div className="form-group">
                        <label className="col-sm-4 control-label">名称</label>
                        <div className="col-sm-8">
                          <input type="text" className="form-control"/>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="form-group">
                       <label className="checkbox-inline i-checks"><input type="radio" checked="" value="" name="a"/> <i></i> 参赛企业</label>
                       <label className="checkbox-inline i-checks"> <input type="radio" value="" name="a"/> <i></i> 非参赛企业</label>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-6">
                     <div className="form-group">
                        <label className="col-sm-4 control-label">参赛时间</label>
                        <div className="col-sm-8">
                           <select className="form-control">
                              <option>请选择</option>
                              <option>Option 2</option>
                              <option>Option 3</option>
                              <option>Option 4</option>
                           </select>
                        </div>
                     </div>
                  </div>
               </div>
               <h2>联系人基本信息</h2>
               <div className="hr-line-dashed"></div>
               <div className="row">
                  <div className="col-md-6">
                     <div className="form-group">
                        <label className="col-sm-4 control-label">名称</label>
                        <div className="col-sm-8">
                          <input type="text" className="form-control"/>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="form-group">
                        <label className="col-sm-4 control-label">职位</label>
                        <div className="col-sm-8">
                          <input type="text" className="form-control"/>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="form-group">
                        <label className="col-sm-4 control-label">联系电话</label>
                        <div className="col-sm-8">
                          <input type="text" className="form-control"/>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="form-group">
                        <label className="col-sm-4 control-label">邮箱</label>
                        <div className="col-sm-8">
                          <input type="text" className="form-control"/>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="form-group">
                        <label className="col-sm-4 control-label">对接大企业</label>
                        <div className="col-sm-8">
                           <select className="form-control">
                              <option>请选择</option>
                              <option>Option 2</option>
                              <option>Option 3</option>
                              <option>Option 4</option>
                           </select>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="form-group">
                        <label className="col-sm-4 control-label">对接创新需求</label>
                        <div className="col-sm-8">
                           <select className="form-control">
                              <option>请选择</option>
                              <option>Option 2</option>
                              <option>Option 3</option>
                              <option>Option 4</option>
                           </select>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="form-group">
                        <label className="col-sm-4 control-label">微信号</label>
                        <div className="col-sm-8">
                          <input type="text" className="form-control"/>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-12"> </div>
                  <div className="col-md-6">
                     <div className="form-group">
                        <label className="col-sm-4 control-label">通知方式</label>
                        <div className="col-sm-8">
                          <label className="checkbox-inline i-checks"> <input type="checkbox" checked="" value="option2"/> 邮箱 </label>
                          <label className="checkbox-inline i-checks"> <input type="checkbox" value="option3"/> 电话  </label>
                        </div>
                     </div>
                  </div>
               </div>
               <h2>详细信息</h2>
               <div className="hr-line-dashed"></div>
               <div className="row">
                  <div className="col-md-6">
                     <div className="form-group">
                        <label className="col-sm-4 control-label">公司网站</label>
                        <div className="col-sm-8">
                          <input type="text" className="form-control"/>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="form-group">
                        <label className="col-sm-4 control-label">城市</label>
                        <div className="col-sm-8">
                          <input type="text" className="form-control"/>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="form-group">
                        <label className="col-sm-4 control-label">地址</label>
                        <div className="col-sm-8">
                          <input type="text" className="form-control"/>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="form-group">
                        <label className="col-sm-4 control-label">行业领域</label>
                        <div className="col-sm-8">
                           <select className="form-control">
                              <option>请选择</option>
                              <option>Option 2</option>
                              <option>Option 3</option>
                              <option>Option 4</option>
                           </select>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="form-group">
                        <label className="col-sm-4 control-label">成立时间</label>
                        <div className="col-sm-8">
                          <input type="text" className="form-control"/>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="form-group">
                        <label className="col-sm-4 control-label">研发人员</label>
                        <div className="col-sm-8">
                          <input type="text" className="form-control"/>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-12">
                     <div className="form-group">
                        <label className="col-sm-2 control-label">产品介绍 * </label>
                        <div className="col-sm-10">
                           <textarea className="form-control" rows="4" placeholder="介绍公司产品"></textarea>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-12">
                     <div className="form-group">
                        <label className="col-sm-2 control-label">服务案例 </label>
                        <div className="col-sm-10">
                           <textarea className="form-control" rows="4" placeholder="介绍公司产品"></textarea>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-12">
                     <div className="form-group">
                        <label className="col-sm-2 control-label">上传文件 </label>
                        <div className="col-sm-10">
                          <input type="file"/>
                           注：PDF文件，大小不超过5M。<br/>
                           文件名称格式：申报企业名称+项目名称<br/>
                           <a href="">解决方案参考模版下载</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="form-group">
                  <div className="col-sm-10 col-sm-offset-2">
                     <div className="alert alert-danger">没有提交成功，请查对必填选项。</div>
                     <a className=" btn btn-lg"  href="#"> 提 交 申 请 </a>
                  </div>
               </div>
            </form>
         </div>
      </section>
      </div>
    );
  }
}
export default _Page;
