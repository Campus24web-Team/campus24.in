import React, { useEffect } from 'react'
import { Link } from 'gatsby'

import SEO from "../components/seo"
import Layout from '../components/layout'
import SectionTop from '../components/Layout/SectionTop'

import '../components/static/style/Pages/faq.css'

function Faq() {
    useEffect(() => {
        setTimeout(() => {
            const accordianList = window.document.getElementsByClassName("accordion")

            for (let i = 0; i < accordianList.length; i++) {
                accordianList[i].addEventListener("click", function () {
                    this.classList.toggle("active")
                    const panel = this.nextElementSibling
                    if (panel.style.display === "block") { panel.style.display = "none" }
                    else { panel.style.display = "block" }
                })
            }
        }, 100)
    }, [])

    return (
        <>
            <SEO title="FAQs" />
            <Layout>
                <SectionTop title="FAQs" />
                <section>
                    <div className="container text">
                        <div className="mb-2">
                            <button className="accordion">What is Campus24?</button>
                            <div className="panel">
                                <p>We are a single application to remain Updated, Organized and Connected to your Campus! And of course to have fun ;) Consider us as your Virtual Campus. For more details, please visit our <Link to="/about-us"> Who are we</Link> page.</p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <button className="accordion">What is C24?</button>
                            <div className="panel">
                                <p>C24 is the short form of Campus24.</p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <button className="accordion">How can I download the app?</button>
                            <div className="panel">
                                <p>The app can be downloaded via Google Playstore.</p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <button className="accordion">How to create an account on C24?</button>
                            <div className="panel">
                                <p>
                                </p><ol>
                                    <li> Download the app from Google Playstore</li>
                                    <li> Go through our onboarding process</li>
                                </ol>
                                <p></p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <button className="accordion">My app is crashing or has bugs. Where can I report that?</button>
                            <div className="panel">
                                <p>Sorry for the inconvenience. Please mail us at - <a href="mailto:tech.support@campus24.in"> tech.support@campus24.in</a></p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <button className="accordion">What is the function of each tab?</button>
                            <div className="panel">
                                <p>HOME- to have fun in a private social networking domain ONLY for the students of that campus (no outsiders!)
                                    <br /> NOTICE - to get important NOTICES with their respective deadlines.
                                    <br /> EVENTS - to remain updated with CLUB EVENTS / FESTS / WORKSHOPS etc. happening all over the campus.
                                    <br /> NOTES - to easily store NOTES / QUESTIONS BANKS / PLACEMENT REPORTS etc. for each and every department of the campus.
                                </p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <button className="accordion">Who is eligible to download Campus24?</button>
                            <div className="panel">
                                <p>Anyone above the age of thirteen (13) is eligible to download. For more details, please visit our <Link to="/terms">Terms &amp; Conditions</Link> page </p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <button className="accordion">Why should we download Campus24?</button>
                            <div className="panel">
                                <p>We are a single application to remain Updated, Organized and Connected to your Campus! And of course to have fun ;) Consider us as your Virtual Campus. For more details, please visit our <Link to="/about-us"> Who are we</Link> page</p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <button className="accordion">Does Campus24 provide internship opportunities? </button>
                            <div className="panel">
                                <p>Yes, we as a company provide internships from time to time. Check out our <Link to="/careers">Careers</Link> page.
                                    <br /> Also, any other company or individual (including your Alumni) can post an opening in their company, on our platform.
                                </p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <button className="accordion">What is the function of all the emojis in C24?</button>
                            <div className="panel">
                                <p>FLAMES - Indicates your approval / liking for the post
                                    <br /> SMILIE - Comment
                                    <br /> LEAF / LEAVES - Share
                                </p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <button className="accordion">What are Communities?</button>
                            <div className="panel">
                                <p>COMMUNITIES are groups of like-minded people in one's campus. Be it gaming, sports, exam prep, coding, entrepreneurship etc. Via COMMUNITIES you can find friends in your campus with similar interest as yours!</p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <button className="accordion">How to add anonymous post?</button>
                            <div className="panel">
                                <p>While posting on HOME, you will have the option to choose to be anonymous.
                                    <br /> A post once posted normally, cannot be made anonymous later.
                                </p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <button className="accordion">What type of notices will be in the notice tab?</button>
                            <div className="panel">
                                <p>Any relevant notice with respect to you and/or your department / college.</p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <button className="accordion">What if I am from a campus that’s not listed in the app?</button>
                            <div className="panel">
                                <p>Please verify your college name (with spelling). Still if it doesn't show up, please contact us via the <Link to="/contact-us"> Contact Us</Link> page.</p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <button className="accordion">What is meant by action time?</button>
                            <div className="panel">
                                <p>It is the key time associated with the notice.</p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <button className="accordion">Will I be able to access my notes when offline?</button>
                            <div className="panel">
                                <p>Only downloaded notes will be available.</p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <button className="accordion">I don’t have an android phone. How can I join my college community then?</button>
                            <div className="panel">
                                <p>We will launch the IOS version of our application soon. </p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <button className="accordion">How do I search on Campus24?</button>
                            <div className="panel">
                                <p>Click on the search bar located at the top of the screen. Then type in what you want to search.</p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <button className="accordion">Will I be able to sort my feed?</button>
                            <div className="panel">
                                <p>We will have the sorting feature in the upcoming versions.</p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <button className="accordion">How can I adjust the notifications I receive?</button>
                            <div className="panel">
                                <p>You can adjust that in the settings bar, in the upcoming versions.</p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <button className="accordion">How do I share an update or post?</button>
                            <div className="panel">
                                <p>Click the circular “+” button in the lower right corner of the screen on HOME. Then type in your post. Then click “Post” or “Post Anonymously” to post.</p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <button className="accordion">How do I access and edit my Campus24 Page?</button>
                            <div className="panel">
                                <p>The top left corner of the screen will have your current profile picture. Click that. The menu slide will open. Then again click on the profile picture or on your name. Your profile page will open. You can edit your details there.</p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <button className="accordion">What are “Global” and “Your Campus” in the Home section?</button>
                            <div className="panel">
                                <p>“Your Campus” is the wall where only and only you and your campus mates can post, see, comment and react to each other’s posts. NO ONE from outside your campus will have access to the posts posted in this section (unless deliberately
                                shared by someone). It is a private space for you and your fellow campus mates.
                                    <br /> “Global” on the other hand is the wall where anyone and everyone using Campus24 can post, see, comment and react to each other’s posts. It is a public space for the entire C24 community.
                                </p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <button className="accordion">How do I report a Post / Content on the Feed?</button>
                            <div className="panel">
                                <p>Click the report button attached with the post to notify us. You can also mail us at <a href="mailto:support@campus24.in">support@campus24.in</a></p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <button className="accordion">Why can’t I find my college or course or batch during registration?</button>
                            <div className="panel">
                                <p>We currently operate for the students of 2 campuses- Jadavpur University and IEM/UEM. So, if you cannot find your college or course or batch, please select “Others” at all stages of the registration process and we would contact you
                                and set up your domain within 48 hours.
                                </p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <button className="accordion">Is Campus24 free for me and will continue to be so?</button>
                            <div className="panel">
                                <p>Yes, for all students/alumni, our services are and will continue to be completely free.</p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <button className="accordion">Some of the features of the app are marked as “Coming soon”. When can we expect them?</button>
                            <div className="panel">
                                <p>The features marked as “Coming soon” are currently being worked upon by our development team. They would be available with the next update within 30-45 days.</p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <button className="accordion">For business-related enquiries how should I contact your team?</button>
                            <div className="panel">
                                <p>For all business-related enquiries, mail us at <a href="mailto:sagnik@campus24.in"> sagnik@campus24.in </a></p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <button className="accordion">I want to do an internship at Campus24. How should I proceed?</button>
                            <div className="panel">
                                <p>Go to our <Link to="/careers">Careers </Link> page and fill up the form. </p>
                            </div>
                        </div>
                        <br />
                        <h6>Still have unanswered questions?</h6>
                        <h6>Reach us at <a href="mailto:contact@campus24.in">contact@campus24.in</a></h6>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Faq