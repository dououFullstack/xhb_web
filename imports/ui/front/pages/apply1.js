import React from 'react';
import { Field, reduxForm } from 'redux-form';

class _Form extends React.Component {
  componentDidMount() {
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });
  }
  render() {
    return (
                  <div className="col-sm-8 apply-form">
                    <h1 className="text-left">申请开发板</h1>
                    <p className="no-p-space">只需要几步配置即可完成申请，可以在云服务中完成开发板的全生命周期管理</p>
                    <form onSubmit={this.props.handleSubmit} className="form-horizontal ">
                      <div className="form-group">
                        <label htmlFor="" className="col-md-2 control-label">申请数量:</label>
                        <div className="col-md-4">
                          <Field name="request_counts" component="input" type="text"  className="form-control"/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="" className="col-md-2 control-label">申请数量:</label>
                        <div className="col-md-4">
                          <Field name="request_coxxx" component="input" type="text"  className="form-control"/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="" className="col-md-2 control-label">产品类型:</label>
                         <Field name="employed" component="input" type="checkbox"/>
                        <div className="col-md-10">
                          <label className="checkbox-inline i-checks">
                            <Field name="employed" component="input" type="checkbox"/>
                            智能手表
                          </label>
                          <label className="checkbox-inline i-checks"> <input type="checkbox" value="option3"/> 智能手环 </label>
                          <label className="checkbox-inline i-checks"> <input type="checkbox" value="option3"/> 智能玩具 </label>
                          <label className="checkbox-inline i-checks"> <input type="checkbox" value="option3"/> 其他 <input type="text" style={{width: '80px'}}/></label>
                        </div>
                      </div>
                      <button type="submit" className='btn apply-btn'>提交申请</button>
                    </form>
                  </div>
    );
  }
}

export default reduxForm({ form: 'apply' })(_Form);
