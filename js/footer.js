class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
         <footer class="footer-48201" id="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4 pr-md-5">
            <a href="#" class="footer-site-logo d-block mb-4"
              >Publisher Information</a
            >
            <hr />
            <h3 style="color: white">Publishing Body</h3>
            <p>
              PG & Research Department of English,<br />
              St. Joseph’s College
            </p>

            <h3 style="color: white">Address</h3>
            <p>
              St. Joseph’s College (Autonomous),<br />
              tiruchirappalli - 620002. <br />
              tamil nadu, india.
            </p>

            <h3 style="color: white">Editor in chief</h3>
            <p>Prasanth Arokia Samy. D</p>
            <h3 style="color: white">Contact Us</h3>
            <p style="text-transform: lowercase; margin: 0">+91 9994494858</p>
            <a
              href="mailto:sjcengzine@mail.sjctni.edu"
              style="text-transform: none; margin: 0"
              >sjcengzine@mail.sjctni.edu</a
            >
            <hr />
          </div>
          <div class="col-md">
            <ul class="list-unstyled nav-links">
              <a href="#" class="footer-site-logo d-block mb-4">Quick Links</a>
              <hr />
              <li><a href="/index.html">Home</a></li>
              <li><a href="/components/about/engzine.html">About Us</a></li>
              <li><a href="/components/contact.html">Contact</a></li>
              <li><a href="/components/feedback.html">feedback</a></li>
              <li><a href="/components/submissions.html">Submissions</a></li>
            </ul>
            <hr />
            
            </ul>
          </div>
          <div class="col-md">
            <ul class="list-unstyled nav-links">
              <a href="#" class="footer-site-logo d-block mb-4"
                >Podcasts & Magazines</a
              >
              <hr />
              <li><a href="/components/podcast.html">podcast</a></li>
              <li><a href="/components/issues.html">current issue</a></li>
              <li><a href="#">archieve</a></li>
              <li><a href="/components/about/team.html">team</a></li>
            </ul>
            <hr />
          </div>
          <div class="col-md">
            <ul class="list-unstyled nav-links">
              <a href="#" class="footer-site-logo d-block mb-4"
                >Click / Scan QR to Subscribe</a
              >
              <hr />
              <li>
                <a href="https://forms.gle/oRKYj7E2SX3T8iCZ6" target="_blank"
                  ><img
                    src="/img/qr_submission.png"
                    alt=""
                    style="width: 120px; height: auto"
                /></a>
              </li>
            </ul>

            <hr />
            <ul class="list-unstyled nav-links">
              <a href="#" class="footer-site-logo d-block mb-4"
                >Website designed and developed by</a
              >
              <li>
                <a href="#">Ashore Nikshan J </a
                >
                <!-- <a href="" target="_blank"
                  ><i class="fa-brands fa-linkedin" style="font-size: 15px"></i
                ></a> -->
                <a
                  href="mailto:ashorenikshan429@gmail.com"
                  target="_blank"
                  ><i class="fa-regular fa-envelope" style="font-size: 15px; margin: 5px"></i
                ></a>
              </li>
              <li>
                <a
                  href="https://joerakesh-portfolio.netlify.app/"
                  target="_blank"
                  >Joe Rakesh A </a
                ><a
                  href="https://www.linkedin.com/in/joe-rakesh-27b082286/"
                  target="_blank"
                  ><i class="fa-brands fa-linkedin" style="font-size: 15px; "></i
                ></a>
                <a
                  href="mailto:rakeshjoe52@gmail.com"
                  target="_blank"
                  ><i class="fa-regular fa-envelope" style="font-size: 15px; margin: 5px"></i
                ></a>
              </li>
              <hr />
          </div>
        </div>

        <div class="row">
          <div class="col-12 text-center">
            <div class="copyright mt-5 pt-5">
              <p>
                <a href="https://sjctni.edu/">
                  <small style="text-transform: lowercase; color: white"
                    >&copy; www.sjctni.edu, All Rights Reserved.</small
                  >
                </a>
              </p>
              <!--  <p><a href="">Developed by Joe Rakesh</a></p>-->
            </div>
          </div>
        </div>
      </div>
    </footer>`;
  }
}

customElements.define("special-footer", SpecialFooter);
