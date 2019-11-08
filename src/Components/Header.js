import React, {Component} from 'react';

export default class Head extends Component {
	render(){
		return(
				<div>
					<header id="banner" className="scrollto clearfix" data-enllax-ratio=".5">
				        <div id="header" className="nav-collapse">
				            <div className="row clearfix">
				                <div className="col-1">

				                    {/*<!--Logo-->*/}
				                    <div id="logo">

				                        {/*<!--Logo that is shown on the banner-->*/}
				                        <img src="images/logo.png" id="banner-logo" alt="Landing Page"/>
				                        {/*<!--End of Banner Logo-->*/}

				                        {/*<!--The Logo that is shown on the sticky Navigation Bar-->*/}
				                        <img src="images/logo-2.png" id="navigation-logo" alt="Landing Page"/>
				                        {/*<!--End of Navigation Logo-->*/}

				                    </div>
				                    {/*<!--End of Logo-->*/}

				                    <aside>

				                        {/*<!--Social Icons in Header-->*/}
				                        <ul className="social-icons">
				                            <li>
				                                <a target="_blank" rel="noopener noreferrer" title="Facebook" href="https://www.facebook.com/username">
				                                    <i className="fa fa-facebook fa-1x"></i><span>Facebook</span>
				                                </a>
				                            </li>
				                            <li>
				                                <a target="_blank" rel="noopener noreferrer" title="Google+" href="http://google.com/+username">
				                                    <i className="fa fa-google-plus fa-1x"></i><span>Google+</span>
				                                </a>
				                            </li>
				                            <li>
				                                <a target="_blank" rel="noopener noreferrer" title="Twitter" href="http://www.twitter.com/username">
				                                    <i className="fa fa-twitter fa-1x"></i><span>Twitter</span>
				                                </a>
				                            </li>
				                            <li>
				                                <a target="_blank" rel="noopener noreferrer" title="Instagram" href="http://www.instagram.com/username">
				                                    <i className="fa fa-instagram fa-1x"></i><span>Instagram</span>
				                                </a>
				                            </li>
				                            <li>
				                                <a target="_blank" rel="noopener noreferrer" title="behance" href="http://www.behance.net">
				                                    <i className="fa fa-behance fa-1x"></i><span>Behance</span>
				                                </a>
				                            </li>
				                        </ul>
				                        {/*<!--End of Social Icons in Header-->*/}

				                    </aside>

				                    {/*<!--Main Navigation-->*/}
				                    <nav id="nav-main">
				                        <ul>
				                            <li>
				                                <a href="#banner">Home</a>
				                            </li>
				                            <li>
				                                <a href="#about">About</a>
				                            </li>
				                            <li>
				                                <a href="#gallery">Gallery</a>
				                            </li>
				                            <li>
				                                <a href="#services">Services</a>
				                            </li>
				                            <li>
				                                <a href="#testimonials">Testimonials</a>
				                            </li>
				                            <li>
				                                <a href="#clients">Clients</a>
				                            </li>
				                            <li>
				                                <a href="#pricing">Pricing</a>
				                            </li>
				                        </ul>
				                    </nav>
				                    {/*<!--End of Main Navigation-->*/}

				                    <div id="nav-trigger"><span></span></div>
				                    <nav id="nav-mobile"></nav>

				                </div>
				            </div>
				        </div>{/*<!--End of Header-->*/}

				        {/*<!--Banner Content-->*/}
				        <div id="banner-content" className="row clearfix">

				            <div className="col-38">

				                <div className="section-heading">
				                    <h1>A FREE AND SIMPLE LANDING PAGE</h1>
				                    <h2>Namari is a free landing page template you can use for your projects. It is free to use for your
				                        personal and commercial projects, enjoy!</h2>
				                </div>

				                {/*<!--Call to Action-->*/}
				                <a href="https://github.com/diahputrilestari/" className="button">START CREATING TODAY</a>
				                {/*<!--End Call to Action-->*/}

				            </div>

				        </div>{/*<!--End of Row-->*/}
    				</header>
				</div>
			)
	}
}