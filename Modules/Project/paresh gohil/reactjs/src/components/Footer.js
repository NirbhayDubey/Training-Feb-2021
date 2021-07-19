import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Footer.scss"

const Footer = () => {
    return (
        <footer class="mb-footer">
          <div class="mb-footer__row">
            <div class="mb-footer__content-box mb-footer__main">
        		<div class="mb-footer__main--col">

        				<div class="mb-footer__main--title semi-bold">Real Estate in India </div>
        				<nav>
        				  <ul>
        					<li><Link to={`/Nashik/buy/propertytype/Flat`}>Flats in Nashik</Link> </li><li><Link to={`/Lucknow/buy/propertytype/Flat`}>Flats in Lucknow</Link> </li><li><Link to={`/Bhiwadi/buy/propertytype/Flat`}>Flats in Bhiwadi</Link> </li><li><Link to={`/Mohali/buy/propertytype/Flat`}>Flats in Mohali</Link> </li><li><Link to={`/Trivandrum/buy/propertytype/Flat`}>Flats in Trivandrum</Link> </li><li><Link to={`/Bangalore/buy/propertytype/Flat`}>Flats in Bangalore</Link> </li><li><Link to={`/Gurgaon/buy/propertytype/Flat`}>Flats in Gurgaon</Link> </li><li><Link to={`/Bhubaneswar/buy/propertytype/Flat`}>Flats in Bhubaneswar</Link> </li>
        				  </ul>
        				</nav>


                <div class="mb-footer__main--title semi-bold">New Projects in India </div>
                <nav>
                  <ul>
                    <li><a href="https://www.magicbricks.com/Real-estate-projects-search/ALL-RESIDENTIAL-new-project-Mumbai">New Projects in Mumbai</a></li>
                    <li><a href="https://www.magicbricks.com/Real-estate-projects-search/ALL-RESIDENTIAL-new-project-Chennai">New Projects in Chennai</a></li>
                    <li><a href="https://www.magicbricks.com/Real-estate-projects-search/ALL-RESIDENTIAL-new-project-Pune">New Projects in Pune</a></li>
                    <li><a href="https://www.magicbricks.com/Real-estate-projects-search/ALL-RESIDENTIAL-new-project-Noida">New Projects in Noida</a></li>
                    <li><a href="https://www.magicbricks.com/Real-estate-projects-search/ALL-RESIDENTIAL-new-project-Gurgaon">New Projects in Gurgaon</a></li>
                    <li><a href="https://www.magicbricks.com/Real-estate-projects-search/ALL-RESIDENTIAL-new-project-Bangalore">New Projects in Bangalore</a></li>
                    <li><a href="https://www.magicbricks.com/Real-estate-projects-search/ALL-RESIDENTIAL-new-project-Hyderabad">New Projects in Hyderabad</a></li>
                  </ul>
                </nav>
              </div>
              <div class="mb-footer__main--col">
                <div class="">
                  <span class="mb-footer__main--logo"></span>
                </div>
                <div>
                  Launched in 2006, Magicbricks is India's No.1 online Property marketplace to buy, sell, and rent residential and commercial properties. Adjudged as the most preferred real estate portal in India by various independent surveys, Magicbricks offers a one-stop destination for all Property needs.
                </div>
                <div class="mb-footer__main--app-box">
                  <a href="https://play.google.com/store/apps/details?id=com.timesgroup.magicbricks&amp;referrer=utm_source=MobileAppBanner" target="_blank" rel="noreferrer" class="mb-footer__main__app-link android-icon" title=""></a>
                  <a href="https://itunes.apple.com/us/app/magicbricks/id486328406?ls=1&amp;mt=8&amp;referrer=utm_source=MobileAppBanner" target="_blank" rel="noreferrer" class="mb-footer__main__app-link ios-icon" title=""></a>

                  <a href="https://www.facebook.com/magicbricks" target="_blank" title="Facebook" rel="noreferrer" class="mb-footer__main__social-link facebook-icon"></a>
                  <a href="https://twitter.com/magicbricks" target="_blank" title="Twitter" rel="noreferrer" class="mb-footer__main__social-link twittwe-icon"></a>
                  <a href="https://www.linkedin.com/groups?mostPopular=&amp;gid=2373727" target="_blank" title="Linkedin" rel="noreferrer" class="mb-footer__main__social-link linkedin-icon"></a>
                  <a href="https://www.youtube.com/user/magicbricksvideo" class="mb-footer__main__social-link youtube-icon" target="_blank" rel="noreferrer" title="youtube MBTV"></a>

                </div>
              </div>
            </div>
          </div>
          <div class="mb-footer__row mb-footer--main-links">
            <div class="mb-footer__content-box">
              <nav>
                <ul>
                  <li class="mb-footer__links">
                    <a href="https://www.magicbricks.com/sitemap.html" title="Sitemap" target="_blank" rel="noreferrer">Sitemap</a>
                  </li>
                  <li class="mb-footer__links">
                    <a href="http://property.magicbricks.com/terms/terms.html" target="_blank" rel="noreferrer" title="Terms &amp; Conditions">Terms &amp; Conditions</a>
                  </li>
                  <li class="mb-footer__links">
                    <a href="http://property.magicbricks.com/terms/privacy-policy.html" target="_blank" rel="noreferrer" title="Privacy Policy" >Privacy Policy</a>
                  </li>
                  <li class="mb-footer__links">
                    <a href="https://www.magicbricks.com/blog/" target="_blank" rel="noreferrer">Blog</a>
                  </li>
                  <li class="mb-footer__links">
                    <a href="https://www.magicbricks.com/careers" title="Careers" rel="noreferrer" target="_blank">Careers</a>
                  </li>
                  <li class="mb-footer__links">
                    <a href="http://property.magicbricks.com/testimonials/testimonials.htm" title="Testimonials" target="_blank" rel="noreferrer">Testimonials</a>
                  </li>
                  <li class="mb-footer__links">
                     <a href="#!" onclick="feedbackPopup('http://www.ceoconnect.in/feedback/onlineFeedbackForm.html?siteId=1000&amp;seType=magicbricks.com&amp;from='+escape(window.location.href));" rel="noreferrer">Feedback</a>
                  </li>
                  <li class="mb-footer__links">
                    <a href="https://www.magicbricks.com/mbutility/unSubEmail" rel="nofollow">Unsubscribe</a>
                  </li>
                  <li class="mb-footer__links">
                    <a href="https://www.magicbricks.com/help/" target="_blank" rel="noreferrer">Help Center</a>
                  </li>
                  <li class="mb-footer__links">
                    <a href="https://www.magicbricks.com/contactUs" target="_blank" rel="noreferrer">Sales Enquiry</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="mb-footer__row mb-footer--disclaimer">
            <div class="mb-footer__content-box">
              Disclaimer: Magicbricks Realty Services Limited is only an intermediary offering its platform to advertise properties of Seller for a Customer/Buyer/User coming on its Website and is not and cannot be a party to or privy to or control in any manner any transactions between the Seller and the Customer/Buyer/User. All the offers and discounts on this Website have been extended by various Builder(s)/Developer(s) who have advertised their products. Magicbricks is only communicating the offers and not selling or rendering any of those products or services. It neither warrants nor is it making any representations with respect to offer(s) made on the site. Magicbricks Realty Services Limited shall neither be responsible nor liable to mediate or resolve any disputes or disagreements between the Customer/Buyer/User and the Seller and both Seller and Customer/Buyer/User shall settle all such disputes without involving Magicbricks Realty Services Limited in any manner.
            </div>
          </div>
          <div class="mb-footer__row mb-footer--copyright">
            <div class="mb-footer__content-box">All trademarks, logos and names are properties of their respective owners. All Rights Reserved. © Copyright 2019 Magicbricks Realty Services Limited.</div>
          </div>
        </footer>    
    )
}

export default Footer