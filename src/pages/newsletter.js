import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import Layout from '../components/layout'
import emailjs from "emailjs-com";
// import SEO from "../components/seo"
import SEO from "../components/seo"
import { Link } from 'gatsby'
import FacebookIcon from '@material-ui/icons/Facebook'
import YouTubeIcon from '@material-ui/icons/YouTube'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'

import SectionTop from '../components/Layout/SectionTop'
import '../components/static/style/Pages/newsletter.css'
import Checkbox from '../components/Checkbox'
import Social from '../components/static/img/social-circle.png'
import student from '../components/static/img/student-community.png'
import Newfriends from '../components/static/img/new-friends.png'
import line from '../components/static/img/line.png'

import back from "../components/static/img/Path_15436.jpg"

import group2 from "../components/static/img/Group_11187.png"

import googleplay2 from "../components/static/img/Image_10.png"



function Newsletter() {
 
  //  const [name, setName] = useState('');
  //  const [email, setEmail] = useState('')
    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)
  const [check3, setCheck3] = useState(false)
   const [check4, setCheck4] = useState(false)
   const { register, handleSubmit, errors } = useForm();
  
  const sendEmail = (data, r) => {
    alert(`Thank you ${data.name} , You had successfully subscribed for Campus24 Newsletter `);
    const templateId = 'template_vfjfd5r';
    const serviceID = 'service_44a3o3d';
    sendFeedback(serviceID, templateId, { from_name: data.name, user_email:data.email,user_check:data.check, reply_to: data.email })
    r.target.reset();
}

const sendFeedback = (serviceID, templateId, variables) => {
  window.emailjs.send(
      serviceID, templateId,
      variables
  ).then(res => {
      console.log('Email successfully sent!')
     
  })
      .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
}


   function validateMedium() {
    var mediumCheckboxes = document.getElementsByName("check");
    var okay = false;
    
    for (var i = 0, len = mediumCheckboxes.length; i < len; i++) {
        if (mediumCheckboxes[i].checked) {
            okay = true;
           
            break;
            
        }
       
    }

    if (okay) {
      document.getElementById("spnFirstName").innerHTML = "";
    } else {
      document.getElementById("spnFirstName").innerHTML = "Please select one of your Interest";
    }
}


   
    return (
       <>
       <Layout>
           <SectionTop title="Campus Bytes" />
        <div className="pb-3 newsletter__center">
          <div className="newsletter__info">
            <h5 className="newsletter__info__heading">
              Join the largest Student Community 
              and always remain updated! 
            </h5>
            <p className="newsletter__information pb-4">
              If you are a student looking to always remain updated 
              and enjoy your college life to the full potential this is 
              for you!! Events, Competitions, Scholarships, 
              Internships and News tailor-made for the largest 
              student community!
            </p>
            <div className="newsletter__icons pb-3">
               <Link to="https://www.facebook.com/campus24app"><FacebookIcon className="socialmedia"/></Link>
               <Link to="https://www.linkedin.com/company/campus24/"><YouTubeIcon className="socialmedia"/></Link>
               <Link to="https://www.linkedin.com/company/campus24"><LinkedInIcon className="socialmedia"/></Link>
               <Link to="https://twitter.com/C24_app"><TwitterIcon className="socialmedia"/></Link>
               <Link to="https://www.instagram.com/campus24app/"><InstagramIcon className="socialmedia"/></Link>
            </div>
          </div>
        <form onSubmit={handleSubmit(sendEmail)}>
          <input placeholder="First Name" className="info pb-3" name="name"

       
          ref={
            register({
                required: "Please enter your Name",
                maxLength: {
                    value: 40,
                    message: "Please enter a name with fewer than 40 characters"
                }
            })
        }
           />
                  <p className="error">{errors.name && errors.name.message}</p><br />
          <input placeholder="Email" type="email" className="info pb-3" 
          name="email"
          ref={
            register({

                required: "Please enter your email",
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address"
                }
            })
        }
          
          />
      
                 <p className="error">{errors.email && errors.email.message}</p><br />
              <p className="interests pb-2">Select your interests</p>
          
           <div>
           <input type="checkbox" id="1"
        value={check1}
        value="Student Relevant News"
        onChange={e => setCheck1(e.target.checked)} 
        name="check"
        ref={register({
          required: true,
          validate: validateMedium })}
            />
          
         <Checkbox targetid="1" text="Student Relevant News" 
            value={check1} 
            />
        
       </div>
         

           <div>
           <input type="checkbox" id="2" value={check2} value="Internships / Scholarships"
            onChange={e => setCheck2(e.target.checked)}
            name="check"
            ref={register({
              required: true,
              validate: validateMedium })}
            />
          <Checkbox targetid="2"  text="Internships / Scholarships"   value={check2}/>
          
           </div>

           <div>
           <input type="checkbox" id="3" value={check3} value="Events / Competitions"
            onChange={e => setCheck3(e.target.checked)}
            name="check"
            ref={register({
              required: true,
              validate: validateMedium })}
            />
          <Checkbox targetid="3" text="Events / Competitions" value={check3}/>
          
           </div>
           <div>
          <input type="checkbox" id="4" value={check4} value="Webinar" 
          onChange={e => setCheck4(e.target.checked)}
          name="check"
          ref={register({
            required: false,
            validate: validateMedium })}
          />
          <Checkbox targetid="4" text="Webinar" value={check4}
            
          />
          
         

          </div> 
          <span id="spnFirstName" className="error" ></span>
         <br></br>   



          
          <button type="submit">Join the squad</button>
          </form>
        </div>      
         
{/* how it works --code */}

<div className='container-data'>
      <h1 className="heading">HOW IT WORKS!?</h1>
      <br></br>

      {/* student-community card  */}

      <div className="Box-content">
        <div className="card">
          <img className="line" src={line} alt="line-img" />
          <p className="sub-title">
            Join Student<br></br> Communities
        </p>
          <img className="student" src={student} alt="student-img" />
        </div>
        <div className="card">
          <img className="line" src={line} alt="line-img" />
          <p className="sub-title">
            Meet and vibe with<br></br> new friends
        </p>
          <img className="student" src={Newfriends} alt="new-freinds" />
        </div>
        <div className="card">
          <img className="line" src={line} alt="line-img" />
          <p className="sub-title">
            Interact and increase <br></br>your Social Circle
        </p>
          <img className="student" src={Social} alt="social-circle" />
        </div>
      </div>


    </div>


{/* Footer  */}
    <section className="download-section" style={{ backgroundImage :`url(${back})` }}>
                    <div className="screenshot">
                        <img src={group2}></img>
                    </div>
                    <div className="download-now">
                        <div className="download-title">Download the Campus24 App</div><br></br>
                        <div className="download-text">Join the largest student community in India </div><br></br>
                        <img src={googleplay2}></img><br></br>
                        <div className="download-footer">Rated 4.75/5 ⭐️ by 600+ students </div>
                    </div>
                </section>
       </Layout>      
       </>
    )
}

export default Newsletter







 