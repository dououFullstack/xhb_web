import React from 'react';

class _Component extends React.Component {
  render() {
    return (
      <div>
        <footer>
           <section id="mainFooter">
              <div className="container" id="footer">
                 <div className="row">
                    <div className="col-sm-7">
                       <div className="footerWidget">
                         <img src="/images/ns-logo.png" alt="latest Little Neko news" id="footerLogo"/>
                          <p>网络工坊是工业和信息化部软件与集成电路促进中心（简称CSIP）的智能硬件设计、测试、产品化平台的总称，包括智能硬件设计和云创平台，智能硬件测试，智能硬件产品化等服务内容。网络工坊与多家智能硬件设计平台合作，将产品模型设计模块化，为中小企业和创客提供智能硬件实验环境和技术支持，让企业和创客以低成本参与到智能硬件的研发和应用中，使设计者在最短的时间内验证自己的想法。 </p>
                       </div>
                    </div>
                    <div className="col-sm-5">
                       <div className="footerWidget">
                          <h3>更多链接</h3>
                          <ul>
                             <li><a href="#">工业和信息化部</a></li>
                             <li><a href="#">网络工坊电商平台</a></li>
                             <li><a href="#">网络工坊众筹平台</a></li>
                             <li><a href="#">联系我们</a></li>
                          </ul>
                       </div>
                    </div>
                 </div>
              </div>
           </section>
        </footer>
      <section className="footer-info">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <p>工业和信息化部 2017年版权所有 京ICP备 04000001号</p>
               </div>
            </div>
         </div>
      </section>
    </div>
    );
  }
}
export default _Component;
