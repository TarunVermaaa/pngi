import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

import logo from "../images/logo_fromPPT.png"
import headerImg from "../images/background1.jpg"
import Header_main_page from '../components/header_main_page';
import Navbar from '../components/Navbar';
export default function WelcomePage() {

  return (
    <div>
      <Navbar></Navbar>
      <Header_main_page></Header_main_page>
    </div>
  )
};
{/* 
        
  // const { scrollY } = useScroll()
  // const backgroundImage = useTransform(scrollY, [0, 200, 300, 500], [1, 0.5, 0.5, 0])
  // const logo_scaling = useTransform(scrollY, [0, 500], [1, .5])

        
        <header id="welcome-header">
        <motion.div id="welcome-header-content"
          style={{ scale: logo_scaling, }}//y:yText
        >
          <h1>Professional Network Group of India</h1>
          <img src={logo} alt="PNGI Logo" id="logo_updated" />

          <h1>Alone we can do so little, together we can do so much</h1>
        </motion.div>

        <motion.img
          style={{ opacity: backgroundImage }}//,y:yCity
          src={headerImg}
          alt="A city skyline touched by sunlight"
          id="city-image"
        />
      </header> */}


{/* <div className="container">
        <div className="text">
          <p>Your text goes here. This text will take up half of the page.</p>
        </div>
        <div className="image">
          <img src="your-image-url.jpg" alt="Description of image" />
        </div>
      </div>


      <main id="welcome-content">

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <section id="about">
          <h2>About PNGI</h2>
          <p>Established in 2014 with selected dignitaries of industries, PNGI was registered as an independent
            Non-Profit Organization under section 8 company in 2020. It comprises 2500+ members including HR
            Professionals, Industry Stalwarts, Service Industry Professionals, and Academicians.</p>
        </section>
        <section id="message">
          <h2>Message from the Founders</h2>
          <h3>Late Mr. Ashfaq Ahmed</h3>
          <p>"The idea of establishing PNGI Forum came during my working days at Napino Auto and Electronics Ltd.
            There were small problems occurring frequently which is quite normal. Such things happen in every
            organization. However, the concern was when those problems couldn’t be resolved. Those circumstances
            made me think to make a platform which is accessible for both the employees and the employers. And they
            can discuss their problems for the flawless solution."</p>
          <h3>Mrs. Zoha Ashfaq Ahmad</h3>
          <p>"In the wake of the recent loss of our esteemed founder Mr. Ashfaq Ahmed, I find myself reflecting deeply
            on his vision, his values, and the profound impact he had on each of us and our organization as a whole.
            Mr. Ahmed's dedication, passion, and unwavering commitment to the mission of PNGI have left an indelible
            mark on all of us. It is now our collective responsibility to honor his legacy by carrying forward his
            mission with passion, purpose, and integrity."</p>
        </section>
        <section id="objectives">
          <h2>Mission & Objectives</h2>
          <ul>
            <li>Grow and flourish as a self-sustained forum.</li>
            <li>Sensitize industries on cost reductions, resource optimization, and higher productivity and quality
              through various events, industry visits, seminars, talks, and training programs.</li>
            <li>Provide vital information and data to industry and government.</li>
            <li>Thrive HR professionals through shared vision, effective networking, and personal connect with
              industry and HR leaders.</li>
            <li>Live knowledge sharing sessions with HR professionals and business experts.</li>
          </ul>
        </section>
        <section id="mentors">
          <h2>Mentors</h2>
          <ul>
            <li>Dr. Aquil Busrai - CEO, Aquil Busrai Consulting, Chief Mentor & Head (Board of Advisors)-PNGI</li>
            <li>Mr. S Y Siddiqui - Chief Advisor, Maruti Suzuki India Ltd., Mentor & Member (Board of Advisors)-PNGI
            </li>
            <li>Mr. Yogesh Munjal - CMD Munjal Group, Director Hero Group, Mentor & Member (Board of Advisors)-PNGI
            </li>
            <li>Mr. Dharam Rakshit - Sr. GM Head (HR), Hero Moto Corp. Daruhera, Mentor & Member (Board of
              Advisors)-PNGI</li>
            <li>Mr. Anadi Sinha - President (HR) & Group Head Corporate Affairs, UNO Minda Industries, Mentor &
              Member (Board of Advisors)-PNGI</li>
            <li>Dr. P Kumar - Sr. Director (Corporate Affairs & HR), EAST India Udyog Ltd., Mentor & Member (Board
              of Advisors)-PNGI</li>
            <li>Mr. Ram Narayana - President, Bhiwadi Chamber of Commerce & Industries, Mentor & Member (Board of
              Advisors)-PNGI</li>
          </ul>
        </section>
        <section id="committee">
          <h2>Core Committee Members</h2>
          <ul>
            <li>Mr. Ratan Agrawal - Chairman Sr.G.M(HR), Hero Moto Corp Ltd</li>
            <li>Mr. R. P. Khatana - Vice Chairman, Director, Hitec Enterprises</li>
            <li>Dr. Tabrez Ahmad - National President, Vice Chancellor, G.D Goenka University</li>
            <li>Mr. Manoj Batra - General Secretary, V.P-HR, Imperial Auto Industries Ltd.</li>
            <li>Mr. Vijay Sharma - Trustee, G.M-HR & I.R, Uniproducts (India) Limited</li>
            <li>Mr. Amit Kithania - Treasurer, CFO J.P.Minda</li>
            <li>Mr. Anshu Mehra - Member Governing Council, GM-HR, Talbross Automotive Components Ltd</li>
            <li>Mr. Vinod.K.Bapna - General Secretary, Executive Director & CEO, Caparo Maruti Ltd</li>
            <li>Dr. Sachin Sharma - Add. General Secretary, Managing Partner KSV Tax Consultant</li>
            <li>Mr. Prashant Bhardwaj - Member Governing Council- Director, ABIA Consultancy</li>
          </ul>
        </section>
        <section id="structure">
          <h2>Organization Structure</h2>
          <p>The PNGI forum consists of various state presidents, state secretaries, and joint state secretaries who
            manage the activities and growth of the organization across different regions in India.</p>
        </section>
        <section id="events">
          <h2>Events</h2>
          <p>PNGI conducts various events such as webinars, award ceremonies, training sessions, and panel discussions
            to promote knowledge sharing and professional growth among its members.</p>
        </section>
        <section id="membership">
          <h2>Membership Information</h2>
          <p>PNGI offers different membership categories with various benefits, including access to networking
            opportunities, industry best practices, and exclusive events.</p>
        </section> */}

{/* /////////////////////////////////////////////////////////////////////////////// */ }

{/* <section>
          <h2>There&apos;s never been a better time.</h2>
          <p>
            With our platform, you can set, track, and conquer challenges at
            your own pace. Whether it&apos;s personal growth, professional
            achievements, or just for fun, we&apos;ve got you covered.
          </p>
        </section>

        <section>
          <h2>Why Challenge Yourself?</h2>
          <p>
            Challenges provide a framework for growth. They push boundaries,
            test limits, and result in genuine progress. Here, we believe
            everyone has untapped potential, waiting to be unlocked.
          </p>
        </section>

        <section>
          <h2>Features</h2>
          <ul>
            <li>Custom challenge creation: Set the rules, define your pace.</li>
            <li>
              Track your progress: See your growth over time with our analytics
              tools.
            </li>
            <li>
              Community Support: Join our community and get motivated by peers.
            </li>
          </ul>
        </section>

        <section>
          <h2>Join Thousands Embracing The Challenge</h2>
          <p>
            “I never realized what I was capable of until I set my first
            challenge here. It&apos;s been a transformative experience!” - Alex
            P.
          </p>
          {/* You can add more testimonials or even a carousel for multiple testimonials */}
{/* </section>
      </main>
    </div> */}

