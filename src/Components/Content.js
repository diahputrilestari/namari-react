import React,{Component} from 'react';

export default class Content extends Component {
	render(){
		return(
			<div>
				<main id="content">
			        {/*<!--Introduction-->*/}
			        <section id="about" className="introduction scrollto">
			            <div className="row clearfix">
			                <div className="col-3">
			                    <div className="section-heading">
			                        <h3>SUCCESS</h3>
			                        <h2 className="section-title">How We Help You To Sell Your Product</h2>
			                        <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</p>
			                    </div>
			                </div>
			                <div className="col-2-3">

			                    {/*<!--Icon Block-->*/}
			                    <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.1s">

			                        {/*<!--Icon-->*/}
			                        <div className="icon">
			                            <i className="fa fa-html5 fa-2x"></i>
			                        </div>
			                        {/*<!--Icon Block Description-->*/}

			                        <div className="icon-block-description">
			                            <h4>HTML5 &amp; CSS3</h4>
			                            <p>Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro
			                                neglegentur iudico</p>
			                        </div>
			                    </div>
			                    {/*<!--End of Icon Block-->*/}

			                    {/*<!--Icon Block-->*/}
			                    <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.3s">

			                        {/*<!--Icon-->*/}
			                        <div className="icon">
			                            <i className="fa fa-bolt fa-2x"></i>
			                        </div>

			                        {/*<!--Icon Block Description-->*/}
			                        <div className="icon-block-description">
			                            <h4>Easy to Use</h4>
			                            <p>Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit
			                                detracto mediocrem disputationi</p>
			                        </div>
			                    </div>
			                    {/*<!--End of Icon Block-->*/}

			                    {/*<!--Icon Block-->*/}
			                    <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.5s">

			                        {/*<!--Icon-->*/}
			                        <div className="icon">
			                            <i className="fa fa-tablet fa-2x"></i>
			                        </div>
			                        {/*<!--Icon Block Description-->*/}

			                        <div className="icon-block-description">
			                            <h4>Fully Responsive</h4>
			                            <p>Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro
			                                nemore vivendum</p>
			                        </div>
			                    </div>
			                    {/*<!--End of Icon Block-->*/}

			                    {/*<!--Icon Block-->*/}
			                    <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.5s">

			                        {/*<!--Icon-->*/}
			                        <div className="icon">
			                            <i className="fa fa-rocket fa-2x"></i>
			                        </div>
			                        {/*<!--Icon Block Description-->*/}

			                        <div className="icon-block-description">
			                            <h4>Parallax Effect</h4>
			                            <p>Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro
			                                nemore vivendum</p>
			                        </div>
			                    </div>
			                    {/*<!--End of Icon Block-->*/}

			                </div>

			            </div>


			        </section>
			        {/*<!--End of Introduction-->*/}

        {/*<!--Gallery-->*/}
        <aside id="gallery" className="row text-center scrollto clearfix" data-featherlight-gallery
                 data-featherlight-filter="a">

                <a href="images/gallery-images/gallery-image-1.jpg" data-featherlight="image" className="col-3 wow fadeIn"
                   data-wow-delay="0.1s"><img src="images/gallery-images/gallery-image-1.jpg" alt="Landing Page"/></a>
                <a href="images/gallery-images/gallery-image-2.jpg" data-featherlight="image" className="col-3 wow fadeIn"
                   data-wow-delay="0.3s"><img src="images/gallery-images/gallery-image-2.jpg" alt="Landing Page"/></a>
                <a href="images/gallery-images/gallery-image-3.jpg" data-featherlight="image" className="col-3 wow fadeIn"
                   data-wow-delay="0.5s"><img src="images/gallery-images/gallery-image-3.jpg" alt="Landing Page"/></a>
                <a href="images/gallery-images/gallery-image-4.jpg" data-featherlight="image" className="col-3 wow fadeIn"
                   data-wow-delay="1.1s"><img src="images/gallery-images/gallery-image-4.jpg" alt="Landing Page"/></a>
                <a href="images/gallery-images/gallery-image-5.jpg" data-featherlight="image" className="col-3 wow fadeIn"
                   data-wow-delay="0.9s"><img src="images/gallery-images/gallery-image-5.jpg" alt="Landing Page"/></a>
                <a href="images/gallery-images/gallery-image-6.jpg" data-featherlight="image" className="col-3 wow fadeIn"
                   data-wow-delay="0.7s"><img src="images/gallery-images/gallery-image-6.jpg" alt="Landing Page"/></a>

        </aside>
        {/*<!--End of Gallery-->*/}


        {/*<!--Content Section-->*/}
        <div id="services" className="scrollto clearfix">

            <div className="row no-padding-bottom clearfix">


                {/*<!--Content Left Side-->*/}
                <div className="col-3">
                    {/*<!--User Testimonial-->*/}
                    <blockquote className="testimonial text-right bigtest">
                        <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et dolore magna aliqua</q>
                        <footer>— John Doe, Happy Customer</footer>
                    </blockquote>
                    {/*<!-- End of Testimonial-->*/}

                </div>
                {/*<!--End Content Left Side-->*/}

                {/*<!--Content of the Right Side-->*/}
                <div className="col-3">
                    <div className="section-heading">
                        <h3>BELIEVING</h3>
                        <h2 className="section-title">Focusing On What Matters Most</h2>
                        <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</p>
                    </div>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.
                    </p>
                    <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet!
                    </p>
                    {/*<!-- Just replace the Video ID "UYJ5IjBRlW8" with the ID of your video on YouTube (Found within the URL) -->*/}
                    <a href="https://github.com/diahputrilestari/" data-videoid="UYJ5IjBRlW8" data-videosite="youtube" className="button video link-lightbox">
                        WATCH VIDEO <i className="fa fa-play" aria-hidden="true"></i>
                    </a>
                </div>
                {/*<!--End Content Right Side-->*/}

                <div className="col-3">
                    <img src="images/dancer.jpg" alt="Dancer"/>
                </div>

            </div>


        </div>
        {/*<!--End of Content Section-->*/}

        {/*<!--Testimonials-->*/}
        <aside id="testimonials" className="scrollto text-center" data-enllax-ratio=".2">

            <div className="row clearfix">

                <div className="section-heading">
                    <h3>FEEDBACK</h3>
                    <h2 className="section-title">What our customers are saying</h2>
                </div>

                {/*<!--User Testimonial-->*/}
                <blockquote className="col-3 testimonial classic">
                    <img src="images/user-images/user-1.jpg" alt="User"/>
                    <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua</q>
                    <footer>John Doe - Happy Customer</footer>
                </blockquote>
                {/*<!-- End of Testimonial-->*/}

                {/*<!--User Testimonial-->*/}
                <blockquote className="col-3 testimonial classic">
                    <img src="images/user-images/user-2.jpg" alt="User"/>
                    <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua</q>
                    <footer>Roslyn Doe - Happy Customer</footer>
                </blockquote>
                {/*<!-- End of Testimonial-->*/}

                {/*<!--User Testimonial-->*/}
                <blockquote className="col-3 testimonial classic">
                    <img src="images/user-images/user-3.jpg" alt="User"/>
                    <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua</q>
                    <footer>Thomas Doe - Happy Customer</footer>
                </blockquote>
                {/*<!-- End of Testimonial-->*/}

            </div>

        </aside>
        {/*<!--End of Testimonials-->*/}

        {/*<!--Clients-->*/}
        <section id="clients" className="scrollto clearfix">
            <div className="row clearfix">

                <div className="col-3">

                    <div className="section-heading">
                        <h3>TRUST</h3>
                        <h2 className="section-title">Companies who use our services</h2>
                        <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</p>
                    </div>

                </div>

                <div className="col-2-3">

                    <a href="https://github.com/diahputrilestari/" className="col-3">
                        <img src="images/company-images/company-logo1.png" alt="Company"/>
                        <div className="client-overlay"><span>Tree</span></div>
                    </a>
                    <a href="https://github.com/diahputrilestari/" className="col-3">
                        <img src="images/company-images/company-logo2.png" alt="Company"/>
                        <div className="client-overlay"><span>Fingerprint</span></div>
                    </a>
                    <a href="https://github.com/diahputrilestari/" className="col-3">
                        <img src="images/company-images/company-logo3.png" alt="Company"/>
                        <div className="client-overlay"><span>The Man</span></div>
                    </a>
                    <a href="https://github.com/diahputrilestari/" className="col-3">
                        <img src="images/company-images/company-logo4.png" alt="Company"/>
                        <div className="client-overlay"><span>Mustache</span></div>
                    </a>
                    <a href="https://github.com/diahputrilestari/" className="col-3">
                        <img src="images/company-images/company-logo5.png" alt="Company"/>
                        <div className="client-overlay"><span>Goat</span></div>
                    </a>
                    <a href="https://github.com/diahputrilestari/" className="col-3">
                        <img src="images/company-images/company-logo6.png" alt="Company"/>
                        <div className="client-overlay"><span>Justice</span></div>
                    </a>
                    <a href="https://github.com/diahputrilestari/" className="col-3">
                        <img src="images/company-images/company-logo7.png" alt="Company"/>
                        <div className="client-overlay"><span>Ball</span></div>
                    </a>
                    <a href="https://github.com/diahputrilestari/" className="col-3">
                        <img src="images/company-images/company-logo8.png" alt="Company"/>
                        <div className="client-overlay"><span>Cold</span></div>
                    </a>

                    <a href="https://github.com/diahputrilestari/" className="col-3">
                        <img src="images/company-images/company-logo9.png" alt="Company"/>
                        <div className="client-overlay"><span>Cold</span></div>
                    </a>

                </div>

            </div>
        </section>
        {/*<!--End of Clients-->*/}

        {/*<!--Pricing Tables-->*/}
        <section id="pricing" className="secondary-color text-center scrollto clearfix ">
            <div className="row clearfix">

                <div className="section-heading">
                    <h3>YOUR CHOICE</h3>
                    <h2 className="section-title">We have the right package for you</h2>
                </div>

                {/*<!--Pricing Block-->*/}
                <div className="pricing-block col-3 wow fadeInUp" data-wow-delay="0.4s">
                    <div className="pricing-block-content">
                        <h3>Personal</h3>
                        <p className="pricing-sub">The standard version</p>
                        <div className="pricing">
                            <div className="price"><span>$</span>19</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <ul>
                            <li>5 Downloads</li>
                            <li>2 Extensions</li>
                            <li>Tutorials</li>
                            <li>Forum Support</li>
                            <li>1 year free updates</li>
                        </ul>
                        <a href="https://github.com/diahputrilestari/" className="button">BUY TODAY</a>
                    </div>
                </div>
                {/*<!--End Pricing Block-->*/}

                {/*<!--Pricing Block-->*/}
                <div className="pricing-block featured col-3 wow fadeInUp" data-wow-delay="0.6s">
                    <div className="pricing-block-content">
                        <h3>Student</h3>
                        <p className="pricing-sub">Most popular choice</p>
                        <div className="pricing">
                            <div className="price"><span>$</span>29</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <ul>
                            <li>15 Downloads</li>
                            <li>5 Extensions</li>
                            <li>Tutorials with Files</li>
                            <li>Forum Support</li>
                            <li>2 years free updates</li>
                        </ul>
                        <a href="https://github.com/diahputrilestari/" className="button">BUY TODAY</a>
                    </div>
                </div>
                {/*<!--End Pricing Block-->*/}

                {/*<!--Pricing Block-->*/}
                <div className="pricing-block col-3 wow fadeInUp" data-wow-delay="0.8s">
                    <div className="pricing-block-content">
                        <h3>Business</h3>
                        <p className="pricing-sub">For the whole team</p>
                        <div className="pricing">
                            <div className="price"><span>$</span>49</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <ul>
                            <li>Unlimited Downloads</li>
                            <li>Unlimited Extensions</li>
                            <li>HD Video Tutorials</li>
                            <li>Chat Support</li>
                            <li>Lifetime free updates</li>
                        </ul>
                        <a href="https://github.com/diahputrilestari/" className="button">BUY TODAY</a>
                    </div>
                </div>
                {/*<!--End Pricing Block-->*/}

            </div>
        </section>
        {/*<!--End of Pricing Tables-->*/}

    </main>
			</div>
			)
	}
}