import Image from "next/image";
import Logo from "@/app/images/Logo.png";
import Market from "@/app/images/marketing-strategy 1.png";
import Google from "@/app/images/Google.png";
import Microsoft from "@/app/images/Microsoft.png";
import Spotify from "@/app/images/Spotify.png";
import Mailchimp from "@/app/images/Mailchimp.png";
import Airbnb from "@/app/images/Airbnb.png";
import Uber from "@/app/images/Uber.png";
import Vector from "@/app/images/Vector.png";
import Features from "@/app/images/features-1 1.png";
import image from "@/app/images/Image.png";
import arrow from "@/app/images/Vector (1).png";
import check from "@/app/images/Checkbox.png";
import person from "@/app/images/Person.png";
import cart from "@/app/images/Cart.png";
import map from "@/app/images/Map.png";
import Quote from "@/app/images/Quote.png";
import Avatar from "@/app/images/Avatar.png";
import Tick from "@/app/images/Tick.png";
import down from "@/app/images/keyboard_arrow_down_24dp_FILL0_wght400_GRAD0_opsz24.png";
import github from "@/app/images/github.png";
import twitter from "@/app/images/twitter.png";
import driible from "@/app/images/dribbble.png";
import facebook from "@/app/images/facebook.png";

const Home = () => {
  return (
    <body>
      <header>
        <div className={`flex gap-80 mt-3 ml-10`}>
          <div className={`flex ml-10 gap-9`}>
            <div>
              <Image src={Logo} className={`pt-1`}/>
            </div>
            <div className={`flex gap-6 mt-2.5 font-medium text-base`}>
              <a href="">Company</a>
              <a href="">Marketplace</a>
              <a href="">Features</a>
              <a href="">Team</a>
              <a href="">Contact</a>
            </div>
          </div>
          <div className={`flex gap-2 mt-2 ml-28`}>
            <div className={`cursor-pointer pt-1 font-medium text-sm`}>
              Log in
            </div>
            <button
              className={`bg-[#7E3AF2] rounded-md w-20 h-7 text-sm font-medium text-white cursor-pointer`}
            >
              Get started
            </button>
          </div>
        </div>
      </header>

      <div className={`flex mt-32 ml-20`}>
        <div className={`flex flex-col gap-7`}>
          <p className={`text-6xl font-black leading-none`}>
            Building digital <br /> products & brands.
          </p>
          <p className={`text-xl font-normal text-gray-400`}>
            Here at flowbite we focus on markets where technology, innovation,
            and <br /> capital can unlock long-term value and drive economic
            growth.
          </p>
          <div className={`flex gap-9 mt-3`}>
            <button
              className={`bg-[#7E3AF2] text-gray-100 text-base font-medium p-2 w-44 rounded-md cursor-pointer`}
            >
              Start 30 day free trial
            </button>
            <button
              className={`border-gray-300 border rounded-md p-1 text-black font-medium text-base w-32`}
            >
              Pricing & FAQ
            </button>
          </div>
        </div>
        {/* <div> */}
        <Image src={Market} className={`w-5/12 ml-6 -mt-16`}/>
        {/* </div> */}
      </div>

    <div className={`flex ml-20 gap-20 mt-8`}>
      <div>
      <Image src={Google}/>
      </div>

      <div>
      <Image src={Microsoft}/>
      </div>

      <div>
      <Image src={Spotify}/>
      </div>

      <div>
      <Image src={Mailchimp}/>
      </div>

      <div>
      <Image src={Airbnb}/>
      </div>

      <div>
      <Image src={Uber}/>
      </div>
      </div>

    <div className={`flex pl-20 pt-20 gap-20 mt-20 bg-gray-100`}>
    <div className={`flex flex-col gap-6`}>
    <p className={`text-4xl font-extrabold leading-tight`}>Work with tools you already use</p>
    <p className={`text-xl font-normal text-gray-400 border-b-2 pb-6`}>Deliver great service experiences fast - without the complexity <br /> of traditional ITSM solutions.Accelerate critical development <br /> work, eliminate toil, and deploy changes with ease.</p>

    <div className={`flex flex-col gap-4`}>
    <div className={`flex gap-4`}>
      <div>
    <Image src={Vector} className={`mt-1`}/>
    </div>
    <p className={`text-base font-medium`}>Continuous integration and deployment</p>
    </div>

    <div className={`flex gap-4`}>
    <div>
    <Image src={Vector} className={`mt-1`}/>
    </div>
    <p className={`text[16px] font-medium`}>Development workflow</p>
    </div>

    <div className={`flex gap-4`}>
    <div>
    <Image src={Vector} className={`mt-1`}/>
    </div>
    <p className={`text-base font-medium`}>Knowledge management</p>
    </div>
    </div>

    <p className={`text-xl font-normal text-gray-400`}>Deliver great service experiences fast - without the complexity <br /> of traditional ITSM solutions.</p>
    </div>

    <Image src={Features} className={`-mt-2 w-5/12`}/>
    </div>

    <div className={`flex pl-16 pt-14 pb-14 gap-10 bg-gray-100`}>
    <Image src={image} className={`-mt-2 w-5/12`}/>

    <div className={`flex flex-col gap-6 pt-8`}>
    <p className={`text-4xl font-extrabold leading-tight`}>We invest in the world’s potential</p>
    <p className={`text-xl font-normal text-gray-400 border-b-2 pb-6`}>Deliver great service experiences fast - without the complexity <br /> of traditional ITSM solutions.Accelerate critical development <br /> work, eliminate toil, and deploy changes with ease.</p>

    <div className={`flex flex-col gap-4`}>
    <div className={`flex gap-4`}>
      <div>
    <Image src={Vector} className={`mt-1`}/>
    </div>
    <p className={`text-base font-medium`}>Dynamic reports and dashboards</p>
    </div>

    <div className={`flex gap-4`}>
      <div>
    <Image src={Vector} className={`mt-1`}/>
    </div>
    <p className={`text-base font-medium`}>Templates for everyone</p>
    </div>

    <div className={`flex gap-4`}>
      <div>
    <Image src={Vector} className={`mt-1`}/>
    </div>
    <p className={`text-base font-medium`}>Development workflow</p>
    </div>

    <div className={`flex gap-4`}>
    <div>
    <Image src={Vector} className={`mt-1`}/>
    </div>
    <p className={`text-base font-medium`}>Limitless business automation</p>
    </div>

    <div className={`flex gap-4`}>
    <div>
    <Image src={Vector} className={`mt-1`}/>
    </div>
    <p className={`text-base font-medium`}>Knowledge management</p>
    </div>
    </div>
    </div>
    </div>
    
    <div className={`flex gap-24 pt-24 pb-20 ml-20`}>
    <div className={`flex flex-col gap-3`}>
    <p className={`text-lg font-medium text-[#7E3AF2] leading-none`}>Trusted Worldwide</p>
    <p className={`text-4xl font-extrabold leading-tight`}>Trusted by over 600 million users <br /> and 10,000 teams</p>
    <p className={`text-xl font-light text-gray-500 border-b-2 pb-3`}>Our rigorous security and compliance standards are at the heart of <br /> all we do. We work tirelessly to protect you and your customers.</p>

    <p className={`text-base font-medium leading-none text-[#7E3AF2]`}>Explore Legality Guide <Image src={arrow} className={`inline-block ml-1`}/> </p>
    <p className={`text-base font-medium leading-none text-[#7E3AF2]`}>Visit the Trust Center <Image src={arrow} className={`inline-block ml-1`}/> </p>
    </div>

    <div className={`flex flex-col gap-10`}>
    <div className={`flex gap-20`}>
    <div className={`flex flex-col gap-1`}>
    <Image src={check}/>
    <p className={`leading-tight text-2xl font-bold`}>99.99% uptime</p>
    <p className={`text-base font-light`}>for Flowbite, with zero <br /> maintenance downtime</p>
    </div>

    <div className={`flex flex-col gap-1`}>
    <Image src={person}/>
    <p className={`leading-tight text-2xl font-bold`}>600M+ Users</p>
    <p className={`text-base font-light`}>trusted by over 600 milion users <br /> around the world</p>
    </div>
    </div>

    <div className={`flex gap-24`}>
    <div className={`flex flex-col gap-1`}>
    <Image src={cart}/>
    <p className={`leading-tight text-2xl font-bold`}>Millions</p>
    <p className={`text-base font-light`}>of transactions per day</p>
    </div>

    <div className={`flex flex-col gap-1`}>
    <Image src={map}/>
    <p className={`leading-tight text-2xl font-bold`}>100+ countries</p>
    <p className={`text-base font-light`}>have used Flowbite to create <br /> functional websites</p>
    </div>
    </div>
    </div>
    </div>

    <div className={`flex flex-col gap-6 items-center bg-gray-100 pt-20 pb-20`}>
      <div>
    <Image src={Quote} />
    </div>
    <p className={`text-2xl font-semibold leading-relaxed`}>"Flowbite is just awesome. It contains tons of predesigned <br /> components and pages starting from login screen to complex <br /> dashboard. Perfect choice for your next SaaS application."</p>
    <div className={`flex gap-2`}>
      <div>
    <Image src={Avatar}/>
    </div>
    <p className={`text-base font-semibold leading-tight pt-px`}>Micheal Gough / <span className={`text-sm text-gray-500 font-normal leading-tight`}>CEO at Google</span></p>
    </div>
    </div>

    <div className={`flex flex-col gap-3 pt-20`}>
    <p className={`leading-tight text-4xl font-extrabold text-center`}>Pay as you grow</p>
    <p className={`text-xl font-normal text-gray-500 text-center`}>Here at flowbite we focus on markets where technology, innovation, and capital <br /> can unlock long-term value and drive economic growth.</p>
    </div>

    <div className={`flex ml-20 gap-12 mt-10`}>
    <div className={`flex flex-col gap-4 border-2 border-gray-100 justify-center items-center pl-6 pr-6 pt-5 pb-5 rounded-lg shadow-md`}>
    <p className={`text-2xl font-semibold`}>Starter</p>
    <p className={`text-lg font-normal text-gray-500 text-center leading-tight`}>Great for personal use and for your<br />side projects.</p>
     
    <p className={`leading-none text-5xl font-extrabold`}>$49 <span className={`text-lg font-medium text-gray-500`}>/month</span></p>

    <div className={`flex flex-col gap-[16px] mt-5 mb-2 -ml-9`}>
    <div className={`flex gap-2`}>
      <div>
    <Image src={Tick}/>
    </div>
    <p className={`text-base font-normal -mt-2`}>Individual configuration</p>
    </div>

    <div className={`flex gap-2`}>
    <div>
    <Image src={Tick}/>
    </div>
    <p className={`text-base font-normal -mt-2`}>No setup, monthly, or hidden fees</p>
    </div>

    <div className={`flex gap-2`}>
    <div>
    <Image src={Tick}/>
    </div>
    <p className={`text-base font-normal -mt-2`}>Team size: <span className={`text-base font-semibold`}>1 developer</span></p>
    </div>

    <div className={`flex gap-2`}>
    <div>
    <Image src={Tick}/>
    </div>
    <p className={`text-base font-normal -mt-2`}>Premium support: <span className={`text-base font-semibold`}>6 months</span></p>
    </div>

    <div className={`flex gap-2`}>
    <div>
    <Image src={Tick}/>
    </div>
    <p className={`text-base font-normal -mt-2`}>Free updates: <span className={`text-base font-semibold`}>6 months</span></p>
    </div>
    </div>
    <div>
    <button className={`text-sm font-medium text-white bg-[#7E3AF2] pt-[9px] pb-[9px] pl-[120px] pr-[120px] rounded-md`}>Get started</button>
    </div>
    </div>


    <div className={`flex flex-col gap-4 border-2 border-gray-100 justify-center items-center pl-6 pr-6 pt-5 pb-5 rounded-lg shadow-md`}>
    <p className={`text-2xl font-semibold`}>Company</p>
    <p className={`text-lg font-normal text-gray-500 text-center leading-tight`}>Best for large scale uses and extended <br />redistribution rights.</p>
     
    <p className={`leading-none text-5xl font-extrabold`}>$99 <span className={`text-lg font-medium text-gray-500`}>/month</span></p>

    <div className={`flex flex-col gap-[16px] mt-5 mb-2 -ml-9`}>
    <div className={`flex gap-2`}>
      <div>
    <Image src={Tick}/>
    </div>
    <p className={`text-base font-normal -mt-2`}>Individual configuration</p>
    </div>

    <div className={`flex gap-2`}>
    <div>
    <Image src={Tick}/>
    </div>
    <p className={`text-base font-normal -mt-2`}>No setup, monthly, or hidden fees</p>
    </div>

    <div className={`flex gap-2`}>
    <div>
    <Image src={Tick}/>
    </div>
    <p className={`text-base font-normal -mt-2`}>Team size: <span className={`text-base font-semibold`}>1 developer</span></p>
    </div>

    <div className={`flex gap-2`}>
    <div>
    <Image src={Tick}/>
    </div>
    <p className={`text-base font-normal -mt-2`}>Premium support: <span className={`text-base font-semibold`}>6 months</span></p>
    </div>

    <div className={`flex gap-2`}>
    <div>
    <Image src={Tick}/>
    </div>
    <p className={`text-base font-normal -mt-2`}>Free updates: <span className={`text-base font-semibold`}>6 months</span></p>
    </div>
    </div>
    <div>
    <button className={`text-sm font-medium text-white bg-[#7E3AF2] pt-[9px] pb-[9px] pl-[120px] pr-[120px] rounded-md`}>Get started</button>
    </div>
    </div>


    <div className={`flex flex-col gap-4 border-2 border-gray-100 justify-center items-center pl-6 pr-6 pt-5 pb-5 rounded-lg shadow-md`}>
    <p className={`text-2xl font-semibold`}>Enterprise</p>
    <p className={`text-lg font-normal text-gray-500 text-center leading-tight`}>Best for large scale uses and extended <br /> redistribution rights.</p>
     
    <p className={`leading-none text-5xl font-extrabold`}>$499 <span className={`text-lg font-medium text-gray-500`}>/month</span></p>

    <div className={`flex flex-col gap-[16px] mt-5 mb-2 -ml-9`}>
    <div className={`flex gap-2`}>
      <div>
    <Image src={Tick}/>
    </div>
    <p className={`text-base font-normal -mt-2`}>Individual configuration</p>
    </div>

    <div className={`flex gap-2`}>
    <div>
    <Image src={Tick}/>
    </div>
    <p className={`text-base font-normal -mt-2`}>No setup, monthly, or hidden fees</p>
    </div>

    <div className={`flex gap-2`}>
    <div>
    <Image src={Tick}/>
    </div>
    <p className={`text-base font-normal -mt-2`}>Team size: <span className={`text-base font-semibold`}>1 developer</span></p>
    </div>

    <div className={`flex gap-2`}>
    <div>
    <Image src={Tick}/>
    </div>
    <p className={`text-base font-normal -mt-2`}>Premium support: <span className={`text-base font-semibold`}>6 months</span></p>
    </div>

    <div className={`flex gap-2`}>
    <div>
    <Image src={Tick}/>
    </div>
    <p className={`text-base font-normal -mt-2`}>Free updates: <span className={`text-base font-semibold`}>6 months</span></p>
    </div>
    </div>
    <div>
    <button className={`text-sm font-medium text-white bg-[#7E3AF2] pt-[9px] pb-[9px] pl-[120px] pr-[120px] rounded-md`}>Get started</button>
    </div>
    </div>
    </div>

    <div className={`flex flex-col gap-10 items-center mt-20 mb-20`}>
    <p className={`leading-tight text-4xl font-extrabold`}>Frequently asked questions</p>

    <main>
    <div className={`flex flex-col gap-4`}>
    <details className={`flex flex-col`}>
    <summary className={`cursor-pointer flex leading-none text-lg font-medium border-b-2 pb-4`}>Can I use FlowBite in open-source projects? <span><div><Image src={down} className={`ml-60 w-[25px]`}/></div></span></summary>

    <p className={`pt-4 text-base font-normal text-gray-500`}>Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a <br /> UI library, a theme, a template, a page-builder that would be considered as an alternative <br /> to FlowBite itself.</p>
    <p className={`text-base font-normal text-gray-500 pt-1`}>With that being said, feel free to use this design kit for your open-source projects.</p>
    <p className={`text-base font-normal text-gray-500 border-b-2 pb-4 pt-1`}>Find out more information by <span className={`text-base font-medium text-[#7E3AF2]`}>reading the license.</span></p>
    </details>

    <details>
    <summary className={`cursor-pointer flex leading-none text-lg font-medium text-gray-500 border-b-2 pb-4`}>Where can I access my download files? <span><div><Image src={down} className={`ml-[17.5rem] w-[25px]`}/></div></span></summary>
    </details>

    <details>
    <summary className={`cursor-pointer flex leading-none text-lg font-medium text-gray-500 border-b-2 pb-4`}>Can I use FlowBite for commercial purposes? <span><div><Image src={down} className={`ml-[14.4rem] w-[25px]`}/></div></span></summary>
    </details>

    <details>
    <summary className={`cursor-pointer flex leading-none text-lg font-medium text-gray-500 pb-4`}>What about browser support? <span><div><Image src={down} className={`ml-[22rem] w-[25px]`}/></div></span></summary>
    </details>
    </div>
    </main>
    </div>

    <div className={`flex flex-col gap-6 items-center bg-gray-100 pt-20 pb-20`}>
    <p className={`leading-tight text-4xl font-extrabold`}>Start your free trial today</p>
    <p className={`text-xl font-normal`}>Try Flowbite Platform for 30 days. No credit card required.</p>
    <div>
    <button className={`text-base font-medium bg-[#7E3AF2] text-white w-44 h-[2.5rem] rounded-[8px]`}>Free trial for 30 days</button>
    </div>
    </div>

    <div className={`flex gap-40 pt-20 ml-20`}>
    <div className={`flex flex-col gap-2`}>
    <p className={`text-sm font-semibold uppercase`}>COMPANY</p>
    <p className={`text-base font-normal text-gray-500`}>About</p>
    <p className={`text-base font-normal text-gray-500`}>Premium</p>
    <p className={`text-base font-normal text-gray-500`}>Blog</p>
    <p className={`text-base font-normal text-gray-500`}>Affiliate Program</p> 
    <p className={`text-base font-normal text-gray-500`}>Get Coupon</p>
    </div>

    <div className={`flex flex-col gap-2 -ml-10`}>
    <p className={`text-sm font-semibold uppercase`}>Help and support</p>  
    <p className={`text-base font-normal text-gray-500`}>Contact Us</p>
    <p className={`text-base font-normal text-gray-500`}>Knowledge Center</p>
    <p className={`text-base font-normal text-gray-500`}>Premium Support</p>
    <p className={`text-base font-normal text-gray-500`}>Sponsorships</p>
    </div>

    <div className={`flex flex-col gap-2 -ml-10`}>
    <p className={`text-sm font-semibold uppercase`}>Learning</p>
    <p className={`text-base font-normal text-gray-500`}>Learn Hub</p>
    <p className={`text-base font-normal text-gray-500`}>Manuals</p>
    <p className={`text-base font-normal text-gray-500`}>Tutorials</p>
    <p className={`text-base font-normal text-gray-500`}>Communities</p> 
    </div>

    <div className={`flex flex-col gap-2`}>
    <p className={`text-sm font-semibold uppercase`}>RESOURCES</p>
    <p className={`text-base font-normal text-gray-500`}>Third-Party Tools</p>
    <p className={`text-base font-normal text-gray-500`}>Illustrations</p>
    <p className={`text-base font-normal text-gray-500`}>Themesberg</p>
    <p className={`text-base font-normal text-gray-500`}>Bluehost</p> 
    <p className={`text-base font-normal text-gray-500`}>Stock Photos</p>
    </div>

    <div className={`flex flex-col gap-2`}>
    <p className={`text-sm font-semibold uppercase`}>LEGAL</p>
    <p className={`text-base font-normal text-gray-500`}>Privacy Policy</p>
    <p className={`text-base font-normal text-gray-500`}>Terms & Conditions</p>
    <p className={`text-base font-normal text-gray-500`}>EULA</p>
    </div>
    </div>

    <div className={`flex flex-col gap-4 items-center pt-14 pb-12`}>
    <Image src={Logo} className={``}/>

    <p className={`text-base font-normal text-gray-500`}>© 2022 Flowbite, Inc. All rights reserved.</p>

    <div className={`flex gap-4`}>
    <Image src={github}/>
    <Image src={twitter}/>
    <Image src={driible}/>
    <Image src={facebook}/>
    </div>
    </div>

    </body>
  );
};

export default Home;
