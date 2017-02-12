import React from 'react';
class _Page extends React.Component {
  render() {
    return (
      <div>
      <div className="page-info">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <h1 className="h1-page-title">赛程安排</h1>
               </div>
            </div>
         </div>
      </div>
      <div className="col-sm-12 page-info-line">
      </div>
      <section className="slice">
         <div className="container">
            <div className="row">
               <div className="col-xs-12">
                  <h1>赛程安排</h1>
                  <h2 className="subTitle">Schedule</h2>
                  <div className="separator"></div>
               </div>
               <div className="col-xs-12">
                 <img src="/images/schedule.gif" alt="schedule" className="img-schedule"/>
               </div>
            </div>
         </div>
      </section>
      <section className="slice color1">
         <div className="container">
         <div className="row">
            <div className="col-xs-12">
               <h1>评审方式</h1>
               <h2 className="subTitle">Guidelines</h2>
               <div className="separator"></div>
            </div>
         </div>
         <div className="row guidelines">
            <div className="col-sm-4">
               <div className="row boxFeature">
                  <div className="col-xs-3 text-right">
                     <span className="order-list-icon">1</span>
                  </div>
                  <div className="col-xs-9">
                     <h3>初赛评审</h3>
                     由参赛队在大赛网站提交作品设计方案，采用线上评审方式对竞赛作品设计方案进行打分，并按分数高低决定入围分赛区决赛参赛名额。入围分赛区决赛的参赛队比例不超过该分赛区线上报名参赛队的20%。企业组与团队者单独评审，分别确定入围区域决赛名单。
                  </div>
               </div>
            </div>
            <div className="col-sm-4">
               <div className="row boxFeature">
                  <div className="col-xs-3 text-right">
                     <span className="order-list-icon">2</span>
                  </div>
                  <div className="col-xs-9">
                     <h3>区域决赛</h3>
                     由各分赛区大赛承办单位组织的现场集中式的竞赛，采用作品讲解和作品现场演示两个环节，评审专家现场打分，并按分数高低决定分赛区奖项归属及入围全国总决赛的名额。
                     大赛组委会办公室根据报名数量和地区赛事开展情况，向各赛区分配入围总决赛的企业和团队名额，入围全国总决赛参赛队的总数不超过100支。
                     企业组与团队者单独评审，分别确定入围总决赛名单。
                  </div>
               </div>
            </div>
            <div className="col-sm-4">
               <div className="row boxFeature">
                  <div className="col-xs-3 text-right">
                     <span className="order-list-icon">3</span>
                  </div>
                  <div className="col-xs-9">
                     <h3>全国总决赛</h3>
                     由大赛组委会组织的现场集中式的竞赛，采用作品讲解和作品现场演示两个环节，评审专家现场打分，并按分数高低决定奖项归属。企业组与团队者单独评审，确定最终奖项归属.
                  </div>
               </div>
            </div>
         </div>
       </div>
      </section>
      </div>
    );
  }
}
export default _Page;
