import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let basicInfo = this.props.basicInfo;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
            <h1>Recent Projects<p><code>(hover for details)</code></p></h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            basicInfo.portfolio && basicInfo.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        <button onClick={() => window.open(`${item.repolink}`, "_blank")}>Repo</button>
                        <button onClick={() => window.open(`${item.deployed}`, "_blank")}>Deployed</button>
                        </div>
                      </div>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}