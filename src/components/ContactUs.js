import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let basicInfo = this.props.basicInfo;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Please don't hesitate to contact me with ideas, opportunities, or interests.
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>
                <button onClick={() => window.location = 'mailto:yourmail@gmail.com'}>Email: shaun.tehranchi@gmail.com</button>
                <br></br>
                <button>Cell: 949-844-9242</button>
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}