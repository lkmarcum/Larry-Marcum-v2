import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer-container">
      <h3>Technologies</h3>
      <div className="skill-container">
        <div>
          React<i class="fab fa-react"></i>
        </div>
        <div>
          JavaScript<i class="fab fa-js-square"></i>
        </div>
        {/* <div>Redux</div> */}
        <div>
          Node<i class="fab fa-node"></i>
        </div>
        {/* <div>Express</div> */}
        <div>
          LESS<i class="fab fa-less"></i>
        </div>
        <div>
          SASS<i class="fab fa-sass"></i>
        </div>
        <div>
          HTML5<i class="fab fa-html5"></i>
        </div>
        <div>
          CSS3<i class="fab fa-css3-alt"></i>
        </div>
        <div>
          GitHub<i class="fab fa-github-square"></i>
        </div>
      </div>
      {/* <div className="icon-container">
        <i class="fab fa-react"></i>
        <i class="fab fa-js-square"></i>
        <i class="fab fa-node"></i>
        <i class="fab fa-less"></i>
        <i class="fab fa-sass"></i>
        <i class="fab fa-html5"></i>
        <i class="fab fa-css3-alt"></i>
        <i class="fab fa-github-square"></i>
      </div> */}
    </div>
  );
}

export default Footer;
