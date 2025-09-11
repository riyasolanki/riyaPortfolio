import profileImg from "./assets/images/profile2.jpeg";
import itdcImg from './assets/images/itdc.webp';
import pivitConnexImg from './assets/images/pivitconnex.webp';
import pivitConnexRiderImg from './assets/images/pivitconnexrider.webp';
import shopfareast from './assets/images/shopfareast.webp';
import suntecImg from './assets/images/suntec.webp';
import orionhausImg from './assets/images/orionhaus.webp';
import defaultImg from './assets/images/default.png';
import childcarecrmImg from './assets/images/childcarecrm.png';
import niidoImg from './assets/images/niido.jpg';
import flashMarketImg from './assets/images/flashmarket.png';
import logoImg from './assets/images/logo.png';

const logotext = "RIYA";
const logo = logoImg;
const meta = {
    title: "Riya Solanki",
    description: "I’m Riya Solanki Mobile Application Developer,currently working in Ahmedabad",
};

const introdata = {
    title: "I’m Riya Solanki",
    animated: {
        first: "Building high-performance mobile apps with React Native & Android",
        second: "I craft seamless cross-platform mobile experiences",
        third: "React Native Developer | Android Specialist",
    },
    description: "I specialize in designing and developing cross-platform mobile apps that are fast, reliable, and user-friendly. With over 6 years of experience in React Native and Android, I bring expertise in performance optimization, API integration, and smooth UI/UX design. My focus is on delivering secure, scalable, and high-quality apps that meet client needs and provide excellent user experiences.",
    your_img_url: profileImg,
};

const dataabout = {
    title: "Who I Am",
    aboutme: "I’m a Mobile App Developer with 6+ years of experience in building high-performance, scalable mobile applications using React Native and Android (Java/Kotlin). I specialize in creating cross-platform solutions, optimizing app performance, and delivering pixel-perfect UI/UX designs. I have proven expertise in integrating third-party SDKs, managing state with Redux and MobX, and enhancing app functionality with Firebase, Stripe, and MapBox. Passionate about technology and collaboration, I strive to deliver secure, user-friendly, and high-quality applications on time.",
};
const worktimeline = [{
    jobtitle: "Freelance React Native Developer",
    where: "Jarvis Technologies",
    date: "April 2025 – June 2025",
},
{
    jobtitle: "React Native Developer",
    where: "GCX Technologies Pvt Ltd",
    date: "March 2023 – October 2024",
},
{
    jobtitle: "Android & React Native Developer",
    where: "E2logy Software Solutions Pvt Ltd",
    date: "June 2018 – January 2023",
},
];

const skills = [{
    name: "Android Java",
    value: 80,
},
{
    name: "Kotlin",
    value: 85,
},
{
    name: "Javascript",
    value: 80,
},
{
    name: "Typescript",
    value: 70,
},
{
    name: "Multi-language Support",
    value: 80,
},
];

const services = [
    {
        title: "React Native Development",
        description: "Building cross-platform Android & iOS apps using React Native and TypeScript with scalable architectures."
    },
    {
        title: "Native Android Development",
        description: "Developing high-performance Android apps using Java and Kotlin with MVVM/MVC architecture."
    },
    {
        title: "API & SDK Integration",
        description: "Integrating Firebase, Stripe, MapBox, and third-party APIs for authentication, payments, maps, and real-time features."
    },
    {
        title: "State Management",
        description: "Implementing Redux and MobX to ensure efficient state handling and improved app stability."
    },
    {
        title: "Performance Optimization",
        description: "Optimizing code, reducing app size, and improving load times with modularization and asset compression."
    },
    {
        title: "Custom Features",
        description: "Implementing push notifications, real-time tracking, deep linking, multi-language support, and IoT integrations."
    }
];

const dataportfolio = [{
    img: itdcImg,
    title: "ITDC",
    description: "India Tourism Development Corporation Ltd(ITDC) came into existence in October 1966 and has been the prime mover in the progressive development, promotion and expansion of tourism in the country. Broadly, the main objectives of the Corporation are: To construct, take over and manage existing hotels and market hotels, Beach Resorts, Traveller’s Lodges/Restaurants. To provide transport, entertainment, shopping and conventional services. To produce, distribute, tourist publicity material. To render consultancy-cum-managerial services in India and abroad. To carry on the business as Full-Fledged Money Changers (FFMC), restricted money changers etc. To provide innovating, dependable and value for money solutions to the needs of tourism development and engineering industry including providing consultancy and project implementation.",
    storeLink: "https://play.google.com/store/apps/details?id=com.itdc",
    appLink: "https://apps.apple.com/in/app/itdc/id1494656762",
},
{
    img: pivitConnexImg,
    title: "Pivit Connex Driver App",
    description: "PivitConnex is a mobile application (also known as DriverApp) used by drivers of the PivitConnex system. After successful activation & login, the application shows list of trips to be performed by the Driver, also shows basic information of the trip and driver can proceed with each trip in given order, driver can navigate through the full life cycle of the trip from going to the pick up location, confirming rider picked up and then proceed to drop off location and finally confirming passenger drop off.",
    storeLink: "https://play.google.com/store/apps/details?id=com.pivitconnexv2&hl=en_IN",
    appLink: "https://apps.apple.com/us/app/pivitconnex/id6446584345",
},
{
    img: pivitConnexRiderImg,
    title: "Pivit Connex Rider App",
    description: `
    A feature-rich ride-booking app designed for seamless travel. 
    Users can easily book trips, track ride status, get accurate ETAs, 
    view driver details, and manage trips with ease. 
    Key features include:
    • Booked Trips: Quick and easy ride booking.
    • Trip Status: Real-time updates from pickup to drop-off.
    • Estimated Time of Arrival (ETAs): Accurate arrival estimates.
    • Driver Details: Name, photo, vehicle, and ratings for safety.
    • Cancel Trips: Flexible cancellation option.
    • Will-Call Trips: On-demand ride activation.
  `,
    storeLink: "https://play.google.com/store/apps/details?id=com.pivitConnex.riderApp&hl=en",
    appLink: "",
},
{
    img: suntecImg,
    title: "Suntec+",
    description: `
   EXTRAORDINARY EVERYDAY
Discover a world of rewards with the Suntec+ App
Get onboard the Suntec+ lifestyle programme and be
rewarded for shopping and dining at Suntec City. Earn up
to 10x points for every dollar spend, redeem rewards and
enjoy a wealth of exclusive privileges as a Suntec+
member.
    • Welcome Perks for new sign-ups
    • Bonus Suntec+ Points all year round
    • Birthday Perks and Exclusive Member Events
    • Flash Sales and Attractive Reward
   It’s a seamless experience as you shop, dine and play at
over 350 stores in Suntec City.
Download the app to experience the extraordinary,
everyday!
  `,
    storeLink: "https://play.google.com/store/apps/details?id=com.ara.suntec",
    appLink: "https://apps.apple.com/us/app/suntec/id6477148620",
},
{
    img: orionhausImg,
    title: "Orion Haus",
    description: `
   OHAI provides the ultimate in flexible living. Stay for a night or live in one of our apartments and homeshare with ease.
   Use the OHAI app to:
    • Self check-in
    • Book stays, or lease apartments
    • Get check-in and check-out information
    • Explore neighborhood guides
    • Check out our influencers!
  `,
    storeLink: "https://play.google.com/store/apps/details?id=com.orionhaus.haus",
    appLink: "https://apps.apple.com/us/app/ohai/id1627695152",
},
{
    img: shopfareast,
    title: "shopFarEast App",
    description: `
    shopFarEast offers the latest deals and rewards from participating Far East Malls. 
    Users can earn SFE$ (shopFarEast dollars) while shopping and redeem them for e-Vouchers, 
    staycations, and more. Key features include:
    • 1% cashback in SFE$ on spending
    • Instant SFE$ earnings by uploading receipts
    • One wallet for SFE$, deals, and e-Vouchers
    • Exclusive member-only deals and promotions
    • Attractive staycation rewards
    • In-app purchase of Far East Malls e-Vouchers
    
    For more information, visit: www.fareastmalls.com.sg
  `,
    storeLink: "https://play.google.com/store/apps/details?id=com.feo.shopfareast.prd&hl=en_IN",
    appLink: "",
},
{
    img: childcarecrmImg,
    title: "childCareCRM",
    description: `
    childCareCRM is Daycare Childcare Management Marketing Systems Software Programs Strategies. Our online software is designed for todays childcare professional and makes enrollment, billing, and scheduling easy.
    Key Deliverables:
    • Design and developed the app in MVC architecture
    • Design app to suppoert both mobile and tablet
    • implement search functionality for searching leads
    • Handling uto logout functionality
    • Customize list design for various features like schedule, pending lead, email, tours etc
    • Use custom drop own popup
  `,
    storeLink: "",
    appLink: "",
},
{
    img: niidoImg,
    title: "Niido",
    description: `
    Niido is a residential community and lifestyle brand, which in partnership with Airbnb, is creating a new category of multifamily housing for flexible living. Here we can provide resident and office on lease.
    Key Deliverables:
    • Design and developed the app in MVC architecture
    • Implement unique design pattern which can help to create multiple application from single project
    • Implement material design and customize design tools
    • Design app to suppoert both mobile and tablet
    • Implement Firebase push notification, Crashlytics and Analytics
    • Use custom calendar, customize date picker, time picker, OTP pin view, counyry code picker
    • Design timeline view for reservation system
  `,
    storeLink: "",
    appLink: "",
},
{
    img: flashMarketImg,
    title: "Flash Market Consumer App",
    description: `
    Australian mobile phone app company ‘ Flash Market’ have today announced David Reynolds as their ambassador for 2018.
New to the market, Flash Market will deliver to small business a digital marketing solution to compete with the likes of Amazon, by offering a platform to market last minute offers and special deals in their local communities.
Founder Matt Gollan described the partnership with Reynolds’ as the ideal way to launch the new App.
“Flash Market is all about helping small business prosper in local communities. So we were looking for a personality that could represent our brand in the market place. We all know Dave is a country boy – so he gets it – and after that epic Bathurst victory we needed someone that represents the under-dog!”
For Reynolds, the opportunity came out of nowhere.
“We basically all met up at my Manager’s house during summer. It was 40 degrees and we all just sat around having a cold drink! Matt was really passionate about the purpose of the app and I related to it. Coming from Albury I know how critical small business and local business is to the community.”
The Flash Market app will be available on Google Play and the App Store from the start of March 2018.

www.flashmarket.com.au
  `,
    storeLink: "",
    appLink: "",
},
{
    img: flashMarketImg,
    title: "Flash Market Driver App",
    description: `
    Australian mobile phone app company ‘ Flash Market’ have today announced David Reynolds as their ambassador for 2018.
New to the market, Flash Market will deliver to small business a digital marketing solution to compete with the likes of Amazon, by offering a platform to market last minute offers and special deals in their local communities.
Founder Matt Gollan described the partnership with Reynolds’ as the ideal way to launch the new App.
“Flash Market is all about helping small business prosper in local communities. So we were looking for a personality that could represent our brand in the market place. We all know Dave is a country boy – so he gets it – and after that epic Bathurst victory we needed someone that represents the under-dog!”
For Reynolds, the opportunity came out of nowhere.
“We basically all met up at my Manager’s house during summer. It was 40 degrees and we all just sat around having a cold drink! Matt was really passionate about the purpose of the app and I related to it. Coming from Albury I know how critical small business and local business is to the community.”
The Flash Market app will be available on Google Play and the App Store from the start of March 2018.

www.flashmarket.com.au
  `,
    storeLink: "",
    appLink: "",
},
];

const contactConfig = {
    YOUR_EMAIL: "riyasolanki917@gmail.com",
    YOUR_FONE: "(+91)8460983515",
    description: "I’m always open to discussing new projects, collaborations, or opportunities in mobile application development. Feel free to reach out!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/riyasolanki/",
    // facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/riya-solanki-7a555b154/",
    whatsapp: "https://wa.me/918460983515",
    instagram: "https://instagram.com/mrs_riya_dd",
    // twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    logo
};