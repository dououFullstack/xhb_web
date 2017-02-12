import React from 'react';
class _Page extends React.Component {
  render() {
    return (
    <div>
      <div className="page-info">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <h1 className="h1-page-title">最新新闻</h1>
               </div>
            </div>
         </div>
      </div>
      <div className="col-sm-12 page-info-line"/>

      <section className="slice">
         <div className="container">

            <div className="row">
                  <div className="col-md-7">
                     <h2 className="news-detail-title">中国互联网企业迎来“大航海时代”</h2>
                     <div className="news-dotted"></div>
                     <div className="news-detail-date">发布时间: <span>2017年02月09日</span></div>


                     <p>
                        面对全球新一轮科技和产业革命浪潮，我国正在实现从“中国制造”向“中国智造”的跨越，基于互联网高新技术的软件研发和应用服务近年来取得长足发展，不仅优化着我国对外贸易结构，也在驱动全球数字经济创新发展。扬帆出海的中国互联网应用服务，已然成为“中国智造”的新名片.
                     </p>
                     <div>
                       <img src="/img/news/news2.jpg" alt="" className="img-responsive full-width"/>
                     </div>
                     中国互联网企业迎来良机

                     <h3 className="news-detail-subtitle">借势出海—中国互联网企业迎来良机</h3>
                     <p>
                     美国是互联网的发源地，凭借先发优势和创新能力，微软、苹果、亚马逊、谷歌、脸谱等互联网公司占据了全球主要市场份额。我国互联网起步虽晚一些，但20多年来的发展令人瞩目。根据中国互联网络信息中心第三十九次中国互联网络发展状况统计报告显示，截至2016年12月，我国网民规模达7.31亿，互联网普及率达到53.2%，超过全球平均水平3.1个百分点，其中手机网民规模更是达到6.95亿。根据麦肯锡全球研究院报告，2015年中国网络零售市场规模达到近6300亿美元，比美国市场高出近八成。凭借庞大且强劲的内需市场，阿里巴巴、腾讯、百度等一批中国互联网企业快速崛起，在用户规模、收入等方面位居世界前列。随着我国网络用户趋向饱和，全面开拓海外市场已经成为互联网企业必然选择，这也是我国从网络大国迈向网络强国的必经之路。
                     </p>
                     <p>
                     事实上，早在2000年前后，中国互联网企业就已开始海外试水。1999年，阿里巴巴推出面向全球的企业到企业的（B2B）英文网站；2002年，阿里巴巴在国际站基础上推出了日文版B2B平台进军日本市场，腾讯也在当年推出英文版QQ进军海外；2008年，百度上线了日文版，随后百度搜索、百度输入法等产品也相继在日本落地。但总体来看，这一阶段互联网企业的出海征程并不顺利，许多互联网应用服务折戟海外。
                     </p>


                  </div>
                  <aside className="col-md-4 col-md-offset-1">
                     <div className="sidebar">

                        <div className="clearfix">
                           <h3 className="news-aside-title">更多新闻</h3>
                           <div className="separator-left"></div>
                           <div className="news-aside-box">
                              <div>
                                <img src="/img/news/news2.jpg" alt="" className="img-responsive full-width"/>
                              </div>
                              <div className="news-aside-body">
                                 <h3 className="title"><a href="#">物联网+大数据高峰论坛暨</a></h3>
                                 <p>近日，物联网+大数据高峰论坛暨2016年度物联网解决方案发布会在无锡举行，本论坛由江苏省经济和信息化委员会、无锡市人民政府...</p>
                                 <a href=""><span>详细信息 >> </span></a>
                              </div>
                           </div>
                        </div>


                              <ul className="news-aside-list">
                                 <li><a href="#">中国互联网企业迎来“大航海时代”</a></li>
                                 <li><a href="#">传统制造业+互联网开始逆袭创投圈</a></li>
                                 <li><a href="#">工业和信息化部与国家海洋局召开促进海洋经济发展战略合作座谈会并签署合作协议</a></li>
                                 <li><a href="#">众筹平台怎样做到“曲终人不散”</a></li>
                              </ul>
                        </div>


                  </aside>
            </div>

         </div>
      </section>
    </div>

    );
  }
}
export default _Page;
