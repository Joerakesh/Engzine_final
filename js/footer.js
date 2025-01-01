class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
         <footer class="footer-48201" id="footer">
      <div class="container" >
        <div class="row">
          <div class="col-md-4 pr-md-5" >
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
            <p style="text-transform: lowercase">
              +91 9994494858 <br />
              sjcengzine@mail.sjctni.edu
            </p>

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
