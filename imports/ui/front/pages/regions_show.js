import React from 'react';
class _Page extends React.Component {
  componentDidMount() {
    const owl = $("#cityImgs");
    $("#cityImgs").owlCarousel({
      autoPlay: 3000,
      items: 3,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:3
        }
      }
    });
  }
  render() {
    return (
      <div>

        <div className="page-info">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="h1-page-title">赛场介绍</h1>
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
                <h1>广州赛场</h1>
                <div className="separator"></div>
              </div>
              <div className="col-xs-12 m-b-lg">
                <p className="m-t-lg">我国智能硬件产业发展已具备了一定的基础。目前智能硬件产业已正在蓬勃兴起，并初步形成智能穿戴设备、虚拟现实、智能服务机器人、智能车载设备等规模化产品领域。预计至2018年我国智能硬件产品和服务的总体市场规模约5000亿元，至2020年可达到万亿元水平。智能化应用带来模式创新和效率提升，也将对我国中长期经济增长和可持续发展产生重要支撑和拉动作用。
      </p>
      <p>我国智能硬件产业发展仍需破解瓶颈性问题。在规模快速增长、支持政策不断完善的同时，我国智能硬件产业也面临一系列发展制约。一方面产品创新不足。目前国内智能硬件主要集中在穿戴设备、健康、家居、交通出行等方面，虽然产品数量和种类较多，但同质化现象比较突出，产品功能相对简单。这种现象的原因一方面是底层关键元器件和软件技术的短板仍然存在，使产品创新存在较大的瓶颈和依赖性；另一方面是对产品数据、交互价值的开发力度不够，很多产品只支持数据展示和远程控制功能，智能化水平较低。另一方面应用能力不足。针对智能硬件开发的专用应用相对较少，部分应用只是简单复制智能手机的已有模式。虽然消费市场上智能硬件产品初步得到规模应用，但交通、医疗、教育、工业等潜力更加巨大的行业市场基本处于未开发状态。这种状况一方面是因为产业仍处于发展初期的局限，另一方面是智能硬件与行业应用尚未打通，产品的设计和生产缺少相关行业标准指导，行业数据的获取和使用上也有很大限制。即使已有较成熟的行业智能硬件产品，也因为缺少成功的应用示范案例难以在相对封闭的行业中得到推广 ...
      </p>
    </div>
    <div className="col-xs-12">
      <div id="cityImgs" className="owl-carousel owl-theme">
        <div className="item">
          <img src="/img/citys/beijing.jpg" alt="" className="img-responsive"/>
        </div>
        <div className="item">
          <img src="/img/citys/shanghai.jpg" alt="" className="img-responsive"/>
        </div>
        <div className="item">
          <img src="/img/citys/shenzhen.jpg" alt="" className="img-responsive"/>
        </div>
        <div className="item">
          <img src="/img/citys/dongbei.jpg" alt="" className="img-responsive"/>
        </div>
      </div>
    </div>
    <div className="col-xs-12 text-center m-t-50 m-b-50">
      <a className=" btn btn-lg"  href="/apply"><i className="fa fa-sign-in"></i> 报 名 SIGN UP</a>
    </div>
  </div>
</div>
      </section>
    </div>
    );
  }
}
export default _Page;
