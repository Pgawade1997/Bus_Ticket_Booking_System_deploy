import customCard from "../screens/customCard.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeNavigation from "./../components/HomeNavigation";
import Phone from "../assets/Phone.jpg";
import Location from "../assets/Location.jpg";
import Email from "../assets/Email.png";

//import { faPhone } from '@fortawesome/fontawesome-free-solid';

const ContactScreen = (props) => {
  return (
    <div>
      <HomeNavigation />
      <div
        class="container-fluid "
        style={{
          backgroundColor: "#eec0c6",
          backgroundImage: "linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%)",
        }}
      >
        <section id="contact">
          <div>
            <h3 class="text-center mt-3 text-uppercase text-dark">
              contact us
            </h3>
            <p class="text-center w-75 m-auto">
              If you need any help contact us using the details below.
            </p>
            <div class="row d-flex justify-content-center bg-transparent">
              <div
                class="col-sm-12 col-md-6 col-lg-3 my-5 d-flex"
                style={{ borderShadow: "2px 2px 2px black" }}
              >
                <div class="card border-0">
                  <div class="card-body text-center">
                    <img src={Phone} />
                    <i class="fa fa-phone fa-5x mb-3" aria-hidden="true"></i>
                    <h4 class="text-uppercase mb-5">call us</h4>
                    <p>01123070637 , 01123070637</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-12 col-md-6 col-lg-3 my-5">
                <div class="card border-0">
                  <div class="card-body text-center">
                    <i
                      class="fa fa-map-marker fa-5x mb-3"
                      aria-hidden="true"
                    ></i>
                    <img src={Location} />
                    <h4 class="text-uppercase mb-5">office location</h4>

                    <address>
                      Eastern Express Highway, Opposite Cadburys,Thane,
                      Maharashtra, Mumbai, Maharashtra, 400601, India{" "}
                    </address>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-3 my-5">
                <div
                  class="card border-0"
                  style={{
                    marginTop: "100px",
                  }}
                >
                  <div class="card-body text-center">
                    <i class="fa fa-globe fa-5x mb-3" aria-hidden="true"></i>
                    <img src={Email} />
                    <h4 class="text-uppercase mb-5">email</h4>
                    <p>coaders@nic.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactScreen;
