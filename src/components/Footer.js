import React from 'react'
import './Footer.css'
import { Button } from './Button'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div class="footer-container">
            <section class="footer-subscription">
                <p class="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p class="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div class="input-areas">
                    <form action="">
                        <input type='email' 
                        name="email"
                        placeholder="Your Email" 
                        class="footer-input"/>
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>

            <div class="footer-links">
                <div class="footer-link-wrapper">
                    <div class="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Services</Link>
                    </div>  
                      <div class="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Services</Link>
                    </div>
                </div>

                <div class="footer-link-wrapper">
                    <div class="footer-link-items">
                        <h2>Videos</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Services</Link>
                    </div>  
                      <div class="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Services</Link>
                    </div>
                </div>
            </div>

            <section class="social-media">
                <div class="social-media-wrap">
                    <div class="footer-logo">
                        <Link class="social-logo">
                            TRVL <i class="fab fa-typo3"/>
                        </Link>
                    </div>
                    <small class="website-rights">TRVL @ 2021</small>
                    <div class="social-icons">
                        <Link class="social-icon-link facebook"
                        to="/"
                        target="_blank"
                        area-label='Facebook'>
                            <i class="fab fa-facebook-f"></i>
                        </Link>
                        <Link class="social-icon-link instagram"
                        to="/"
                        target="_blank"
                        area-label='Instagram'>
                            <i class="fab fa-instagram"></i>
                        </Link>
                        <Link class="social-icon-link twitter"
                        to="/"
                        target="_blank"
                        area-label='Twitter'>
                            <i class="fab fa-twitter"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
