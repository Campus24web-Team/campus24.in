import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from "../components/seo"
import SectionTop from '../components/Layout/SectionTop'
import '../components/static/style/Pages/newsletter.css'
import Checkbox from '../components/Checkbox'


function Newsletter() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('')
   const [check1, setCheck1] = useState(false)
   const [check2, setCheck2] = useState(false)
   const [check3, setCheck3] = useState(false)
   const [check4, setCheck4] = useState(false)
   
   const handleSubmit = e => {
       e.preventDefault();
       console.log("submitted")
   }
    return (
       <>
       <Layout>
           <SectionTop title="Campus Bytes" />
        <div className="pt-3 pb-3">
          
        <form onSubmit={handleSubmit}>
          <input placeholder="First Name" className="info pb-3" value={name} onChange={(e) => setName(e.target.value)}></input>
          <input placeholder="Email" type="email" className="info pb-3" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <p className="interests pb-2">Select your interests</p>
          
          <div>
          <input type="checkbox" id="1" value={check1} onChange={e => setCheck1(e.target.checked)}></input>
          <Checkbox targetid="1" text="Student Relevant News" value={check1}/>
         
          </div>
          <div>
          <input type="checkbox" id="2" value={check2} onChange={e => setCheck2(e.target.checked)}></input>
          <Checkbox targetid="2" text="Internships / Scholarships" value={check2}/>
          
          </div>

          <div>
          <input type="checkbox" id="3" value={check3} onChange={e => setCheck3(e.target.checked)}></input>
          <Checkbox targetid="3" text="Events / Competitions" value={check3}/>
          
          </div>
          <div>
          <input type="checkbox" id="4" value={check4} onChange={e => setCheck4(e.target.checked)}></input>
          <Checkbox targetid="4" text="Webinar" value={check4}/>

          </div>
          
         
          <button type="submit">Join the squad</button>
        </form>
        </div>      
       </Layout>      
       </>
    )
}

export default Newsletter
