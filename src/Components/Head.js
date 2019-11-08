import React, {Component} from 'react';

export default class Head extends Component {
	render(){
		return(
				<div>
					{/*<!-- Preloader -->*/}
					<div id="preloader">
					    <div id="status" className="la-ball-triangle-path">
					        <div></div>
					        <div></div>
					        <div></div>
					    </div>
					</div>
					{/*<!--End of Preloader-->*/}
					<div className="page-border" data-wow-duration="0.7s" data-wow-delay="0.2s">
				    <div className="top-border wow fadeInDown animated top-border-custom"></div>
				    <div className="right-border wow fadeInRight animated right-border-custom"></div>
				    <div className="bottom-border wow fadeInUp animated bottom-border-custom"></div>
				    <div className="left-border wow fadeInLeft animated left-border-custom" ></div>
				</div>
				</div>
			)
	}
}