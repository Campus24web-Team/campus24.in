import React, { useEffect } from "react"

import SEO from "../components/seo"
import Layout from '../components/layout'

import PlayIcon from '../components/static/img/play.png'
import ChatIcon from '../components/static/img/chat_icon.png'
import Ill1 from '../components/static/img/ill-1.png'
import Ill2 from '../components/static/img/ill-2.png'
import Ill3 from '../components/static/img/ill-3.png'
import Ill4 from '../components/static/img/ill-4.png'
import RediscoveringPerks from '../components/static/img/rediscoveringPerks.png'
import Phone from '../components/static/img/ph_blue.png'
import PhoneScreen from '../components/static/img/All_4.png'
import ButtonHome from '../components/static/img/Button_Home.png'
import ButtonEvents from '../components/static/img/Button_Events.png'
import ButtonNotes from '../components/static/img/Button_Notes.png'
import ButtonNotice from '../components/static/img/Button_Notice.png'
import ButtonCamps from '../components/static/img/Button_Camps.png'
import ButtonAwards from '../components/static/img/Button_Awards.png'
import ButtonExplore from '../components/static/img/Button_Explore.png'
import ABPB from '../components/static/img/ABPB.png'
import ABP from '../components/static/img/ABP.png'
import ABN from '../components/static/img/ABN.png'
import BT from '../components/static/img/BT.png'
import DH from '../components/static/img/DH.png'
import S from '../components/static/img/S.png'
import ToB from '../components/static/img/ToB.png'
import TELE from '../components/static/img/TELE.svg'
import '../components/static/style/Pages/home.css'

const IndexPage = () => {
  useEffect(() => {
    setTimeout(() => {
      let flag = true

      for (const btn of window.document.getElementsByName("ss_btn")) {
        btn.addEventListener('click', function () {
          let slideTo = this.value
          let ss_img = window.document.getElementById("ph-img")
          let offSetWidth = -1 * slideTo * ss_img.clientWidth
          ss_img.style.backgroundPosition = offSetWidth + "px 0px"
          this.checked = true
        })

        if (flag) {
          btn.click()
          flag = false
        }
      }
    }, 100)
  }, []);


  
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <section className="sec-chat">
          <div className="chat" style={{ backgroundImage: `url(${ChatIcon})` }}>
            <div className="chat-container" align="center" style={{ paddingTop: "10vh" }}>
              <h1>Your Virtual Campus !!</h1>
              <form className="form-email" method="POST" action="https://us-central1-campus24-e0a13.cloudfunctions.net/SendAppLink">
                <div className="row row-m">
                  <div className="left-email"></div>
                  <div className="col-3 email-top">
                    <input type="email" placeholder="EMAIL-ID" required="" name="email" />
                  </div>
                  <div className="col-2 email-top">
                    <input type="submit" value="GET DOWNLOAD LINK" />
                    <p style={{ fontFamily: 'lato', fontSize: "15px", fontWeight: "400", paddingLeft: "4px", width: "225px" }}>*Available only on Android</p>
                  </div>
                </div>
              </form>
              <a href="https://play.google.com/store/apps/details?id=com.bytera.campus24&amp;hl=en">
                <img src={PlayIcon} className="play" alt="Google Play" />
              </a>
            </div>
          </div>
        </section>

        <section className="sec-ill my-4" align="center">
          <h1 className="h1-small" style={{textAlign : "center"}}>As Featured On</h1>
          <br />
          <div className="disp-img-holder container mx-auto" align="center">
            <a target="_blank" rel="noreferrer"
              href="https://www.anandabazar.com/amp/state/6-ju-students-build-a-new-campus-app-to-give-students-information-1.1173840"
              className="disp-img my-auto ABPB" style={{ backgroundImage: `url(${ABPB})` }} />
            <a target="_blank" rel="noreferrer"
              href="https://epaper.telegraphindia.com/imageview_345665_43155995_4_undefined_10-11-2020_11_i_1_sf.html"
              className="disp-img my-auto DH" style={{ backgroundImage: `url(${TELE})` }} />
            <a target="_blank" rel="noreferrer"
              href="http://dhunt.in/a9TmO?s=a&uu=0xad7f94d12dcbccba&ss=wsp"
              className="disp-img my-auto DH" style={{ backgroundImage: `url(${DH})` }} />
            <a target="_blank" rel="noreferrer"
              href="https://www.abpeducation.com/news/meet-the-bright-minds-from-kolkata-who-designed-a-utility-application-for-college-goers-1.1174951?ref=home-atf-stry-1"
              className="disp-img my-auto ABP" style={{ backgroundImage: `url(${ABP})` }} />
            <a target="_blank" rel="noreferrer"
              href="http://epaper.sanmarg.in/Home/IndexMobile?Edition=197&Date=MDQvMDcvMjAyMA==&Page=Article_94205"
              className="disp-img my-auto S" style={{ backgroundImage: `url(${S})` }} />
            <a target="_blank" rel="noreferrer"
              href="https://drive.google.com/file/d/1qodKTTacel7eqeeY2b8TRWjoVw7OeeDr/view?usp=sharing"
              className="disp-img my-auto BT" style={{ backgroundImage: `url(${BT})` }} />
            <a target="_blank" rel="noreferrer"
              href="http://www.thetimesofbengal.com/1st-indian-app-by-the-students-for-the-students/"
              className="disp-img my-auto ToB" style={{ backgroundImage: `url(${ToB})` }} />
            <a target="_blank" rel="noreferrer"
              href="https://www.facebook.com/egiyebangla.news/videos/701418317311792"
              className="disp-img my-auto ABN" style={{ backgroundImage: `url(${ABN})` }} />
          </div>
        </section>

        <section className="sec-ill">
          <div align="center" style={{ position: "relative", top: "-16px" }}>
            <h1 className="h1-small">Our Secret Ingredients</h1>
          </div>
          <div className="container ill-container">
            <div className="row row-but">
              <div className="col-half-ill">
                <div className="illustrations ill" data-toggle="modal" data-target="#modal-1" style={{ backgroundImage: `url(${Ill1})` }}>
                  <div className="plus">
                    <div className="symbol1"></div>
                    <div className="symbol2"></div>
                  </div>
                  <div className="text-below-ill" align="center">Network and Explore</div>
                </div>
              </div>
              <div className="col-half-ill">
                <div className="illustrations ill" data-toggle="modal" data-target="#modal-2" style={{ backgroundImage: `url(${RediscoveringPerks})` }}>
                  <div className="plus">
                    <div className="symbol1"></div>
                    <div className="symbol2"></div>
                  </div>
                  <div className="text-below-ill" align="center">Rediscovering Quirks</div>
                </div>
              </div>
            </div>
            <div className="row row-but">
              <div className="col-half-ill">
                <div className="illustrations ill" data-toggle="modal" data-target="#modal-3" style={{ backgroundImage: `url(${Ill3})` }}>
                  <div className="plus">
                    <div className="symbol1"></div>
                    <div className="symbol2"></div>
                  </div>
                  <div className="text-below-ill" align="center">The Invisible Cloak</div>
                </div>
              </div>
              <div className="col-half-ill">
                <div className="illustrations ill" data-toggle="modal" data-target="#modal-4" style={{ backgroundImage: `url(${Ill4})` }}>
                  <div className="plus">
                    <div className="symbol1"></div>
                    <div className="symbol2"></div>
                  </div>
                  <div className="text-below-ill" align="center">Meet Like Minded</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ maxWidth: "100vw", overflow: "hidden", width: "100vw", minWidth: "100vw" }}>
          <div className="modal fade" id="modal-1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">Network and Explore</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="img" style={{ backgroundImage: `url(${Ill1})` }}></div>
                  <p style={{ paddingTop: "12px" }}>'College' though impossible but can be best described as - 'A Second Home' in a few words. People from different places, different cultures, tastes and talents all under a single roof become family. Campus24 keeping this philosophy
                  in mind has a special platform for your family with no outsiders. Socialize, connect and share in this closed community to enjoy college life in a whole new way! Discover more people of your campus to widen your horizons and
form lifelong bonds.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="modal-2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">Rediscovering Quirks</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="img" style={{ backgroundImage: `url(${Ill2})` }}></div>
                  <p style={{ paddingTop: "12px" }}>Aah! College days are the best, aren't they? Unforgettable memories, lifelong friends and campus pathways etched on your soul. It is the best time to discover yourself, receive and live through all kinds of experiences plus finding your passion! Campus24 with its unique Camps provides you the perfect platform to gauge into the talent and passions of India’s Youth. Share those weird quirks, combine them with others, start something new and you will see yourself completely changed and ready to take on life!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="modal-4" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">Meet Like Minded</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="img" style={{ backgroundImage: `url(${Ill4})` }}></div>
                  <p style={{ paddingTop: "12px" }}>College life is the time when you discover yourself. From community of painters, singers, dancers to CAT aspirants, designers, even PUBG and FIFA players, find out where your interests lie by joining these communities at Campus24!
Find out those like-minded people in your campus with whom you can amplify your capabilities and talents to create the next big thing!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="modal-3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">The Invisible Cloak</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="img" style={{ backgroundImage: `url(${Ill3})` }}></div>
                  <p style={{ paddingTop: "12px" }}>Always wanted to confess to your college crush but too shy? <span role="img" aria-label="wink">😉</span> Don't worry, write a confession without revealing your name! Not only confessions, but express your opinions freely without being worried of being judged using this
                    Anonymity feature provided by Campus24! Raise those questions which no one dared to ask. Suggest changes to your college framework, club activities and much more anonymously in the app.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ maxWidth: "100vw", overflow: "hidden", width: "100vw", minWidth: "100vw" }}>
          <div align="center" style={{ marginBottom: "48px" }}>
            <h1 className="h1-small">Now You See Me</h1>
          </div>
          <div className="row">
            <div className="col-half-ph  col-sm-6 col-xs-5">
              <div className="phone" style={{ backgroundImage: `url(${Phone})` }}>
                <div id="ph-img" style={{ backgroundImage: `url(${PhoneScreen})` }} />
              </div>
            </div>
            <div className="col-half-ph  col-sm-6 col-xs-7">
              <div className="btn-holder row">
                <label className="col-sm-6 btn-container">
                  <input type="radio" name="ss_btn" value="0" defaultChecked="checked" />
                  <img className="btn-ph" src={ButtonHome} alt="Button Home" />
                </label>
                <label className="col-sm-6 btn-container">
                  <input type="radio" name="ss_btn" value="1" />
                  <img className="btn-ph" src={ButtonExplore} alt="Button Explore" />
                </label>
                <label className="col-sm-6 btn-container">
                  <input type="radio" name="ss_btn" value="2" />
                  <img className="btn-ph" src={ButtonCamps} alt="Button Camps" />
                </label>
                <label className="col-sm-6 btn-container">
                  <input type="radio" name="ss_btn" value="3" />
                  <img className="btn-ph" src={ButtonAwards} alt="Button Awards" />
                </label>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>)
}

export default IndexPage
