import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let basicInfo = this.props.basicInfo;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 basicInfo.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{basicInfo.name}</span>
                     <br></br>
       						   <span>
                     {basicInfo.address}
                    </span>
                    <br></br>
                    <span>shaun.tehranchi@gmail.com</span>
                     <br></br>
                     <span>949-844-9242</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}