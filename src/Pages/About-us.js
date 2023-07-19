import { useLocation } from "react-router-dom";
import "./Pages.css"
import { useEffect } from "react";


export const AboutUs = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return(
    <>
       <div className="about_educated">
       <div className="about_less">
            <p className="about_les_one">What our educators say</p>
            <p className="about_les_two">"Film is totally part of the curriculum throughout all subjects, at both Key Stages 3 and 4. We couldn't teach here without film!"</p>
            <p className="about_les_three">- Zahra Bei, Teacher, Burnside PRU, London</p>
       </div>
    </div>
    <p className="main_films">About The Best Films</p>
    <div className="about_container">
        <div className="about_box">
              <div className="about_card">
                  <img className="about_img" src = "https://www.intofilm.org/img/f/page/about/team.png" />
                  <p className="about_title">THE TEAM</p>
                  <p className="about_text">Our passionate, multi-skilled team hail from across education and film sectors, and each are driven by a firm belief in the transformative educational power of film, Thank You.</p>
              </div>
              <div className="about_card">
                  <img className="about_img" src = "https://www.intofilm.org/img/f/page/about/annualreview.png" />
                  <p className="about_title">ANNUAL REVIEW</p>
                  <p className="about_text">Our Annual Review offers testimony and statistics that emphasise the power of film in education, including passionate reports from young people and club leaders/educators.</p>
              </div>
              <div className="about_card">
                  <img className="about_img" src = "https://www.intofilm.org/img/f/page/about/researchandimpact.png" />
                  <p className="about_title">RESEARCH & IMPACT</p>
                  <p className="about_text">Read reports of Into Film’s past projects, which demonstrate our success in transforming teaching practices and engaging young people with film to increase attainment.</p>
              </div>
        </div>
    </div>
    <div className="about_section" >
      <div className="about_side">
          <div className="about_half">
              <p className="ab_desc">WE ARE COMMITTED TO</p>
              <p className="ab_text">All at Into Film are committed to providing an inclusive and diverse environment, both in our internal practices, and with the films we promote and the resources we create.<br/>
                 We strive to make Into Film as accessible as possible, and are dedicated to delivering a green and sustainable programme. Protecting the environment is a crucial issue among our young audience, and we make every effort to lead by example.</p>
                 <p className="ab_green">Green statement</p>
          </div>
          <div className="about_half2">
               <img className="ab_img" src="https://www.indiewire.com/wp-content/uploads/2017/11/frances-ha-di.jpg?w=780" />
          </div>
      </div>
    </div>
    <div className="about_section" >
      <div className="about_side">
      <div className="about_half2">
               <img className="ab_img" src="https://faroutmagazine.co.uk/static/uploads/1/2022/01/Susan-Sontag-on-the-set-of-her-film-Duett-foer-kannibaler.jpg" />
          </div>
          <div className="about_half3">
              <p className="ab_desc">WHO SUPPORTS US</p>
              <p className="ab_text2">We’re grateful for the support of the film industry, which helps us provide unparalleled opportunities for young people, and are proud to have champions from across the world of education and the film industry.
Our ambassadors include high-profile educators, as well as filmmaking talent like Sir Kenneth Branagh, Eddie Redmayne, and Naomie Harris, Set up a free account and join thousands of educators in using Into Film to benefit millions of young people</p>
                 <p className="ab_green">Education ambassadors</p>
          </div>
      </div>
    </div>
    </>
  )
}