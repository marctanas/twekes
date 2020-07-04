import React from 'react';

const Footer = () => {
    return (
        <footer>
            <ul>
                <p>Follow Us On</p>
            </ul>
            <ul class="socialmedia">
                <li><a href="https://twitter.com/jointwekes" target="/blank"><i class="fab fa-twitter-square"></i></a></li>
                <li><a href="https://www.facebook.com/twekes" target="/blank"><i class="fab fa-facebook-square"></i></a></li>
                <li><a href="https://www.instagram.com/jointwekes/" target="/blank"><i class="fab fa-instagram-square"></i></a></li>
            </ul>
            <ul class="links">
                <li><a href="https://www.twekes.com/about">About</a></li>
                <li><a href="https://www.twekes.com/about#faq">FAQ</a></li>
                <li><a href="https://www.twekes.com/legal/terms">Terms</a></li>
                <li><a href="https://www.twekes.com/legal/privacy">Privacy</a></li>
                <li><a href="https://www.twekes.com/blog">Blog</a></li>
            </ul>
            <ul className="copyright">
                <script>document.write(new Date().getFullYear());</script> &copy; Twekes Technology Inc. All Rights Reserved
            </ul>
        </footer>


    );
}

export default Footer;