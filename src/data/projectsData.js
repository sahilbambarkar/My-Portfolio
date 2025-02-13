import Spark from './../assets/portfolioImages/Spark.jpg';
import GenContent from './../assets/portfolioImages/AI.png';
import Resume from './../assets/portfolioImages/Resume.jpeg';
import Car from './../assets/portfolioImages/Car.jpg';
import Lister from './../assets/portfolioImages/business.png';
import Jokes from './../assets/portfolioImages/Jokes.png';
import image from './../assets/portfolioImages/image.png';
import Coffee from './../assets/portfolioImages/Coffee.jpg';
import Logo from './../assets/portfolioImages/Logo.png';
import tripwise from './../assets/portfolioImages/Landing.png';
import social from './../assets/portfolioImages/Social.jpeg';
import Interview from './../assets/portfolioImages/Interview.png';




const ProjectsData = [
  {
    id: "Spark",
    img: Spark,
    name: "EV Charging station & slot booking ",
    stack: ["< Google places  API />", "< Firebase />", "< React native/>", "<Clerk Auth>"],
    live: "https://drive.google.com/file/d/1PwQRK7GSDt_PKs5tTbKER4aTh0T7or-W/view?t=1",
    source: "https://drive.google.com/file/d/11qoq-4BYjfa_H8u8tT3PYXafQdyO9rL-/view",
    description:
      " Complete EV charging station finder and booking app using React Native, Expo, Google Maps API, Places API, and Firebase! In this comprehensive tutorial, you'll go from zero to hero, building a powerful and user-friendly app that helps EV drivers locate charging stations near them. and also book a slot .Inaddition we have provide different types of EV accessories.Hosting will be done soon",
  },
  {
    id: "AI Trip Planner",
    img: tripwise,
    name: "AI Trip Planner",
    stack: ["< Gemini API />", "< FireBase />", "< React.js />", "<vite>"],
    live: "https://tripwise-ai-trip-planner.vercel.app/",
    source: "https://github.com/sahilbambarkar/Tripwise-AI-Trip-Planner-",
    description:
      "Tripwise is a cutting-edge trip planning application that leverages the power of AI to create personalized travel itineraries. Built with React, Gemini AI, Firebase, and TailwindCSS, this full-stack app offers a seamless and intelligent way to plan your next adventure. 🚀 ",
  },
  {
    id: "AI Mock Interviewer",
    img: Interview,
    name: "AI Mock Interviewer",
    stack: ["< Gemini API />", "< Postgre SQL />", "< React.js />", "<Next.js>"],
    live: "https://interview-edge-ai.vercel.app/",
    source: "https://github.com/sahilbambarkar/Interview-Edge-AI-Mock-Interview-Prep",
    description:
      "Ace your job interview with our AI-powered platform designed to provide realistic simulations, AI-generated questions, and instant feedback. Powered by Next.js, Node.js, Clerk, Drizzle ORM, and Gemini, this platform offers an effective way to practice, improve, and confidently land your dream job. It provides personalized insights and simulates real-world scenarios, ensuring you're fully prepared to impress potential employers.🚀"
  },
  {
    id: "AI Content Generator",
    img: GenContent ,
    name: "AI Content Generator",
    stack: ["< Gemini API />", "< Postgre SQL />", "< React.js />","<Next.js>"],
    live: "https://ai-content-generator-omega-orcin.vercel.app/",
    source: "https://github.com/sahilbambarkar/AI-Content-Generator",
    description:
      "Developed an AI-powered content creation software! Learn how to use NextJs, React, TailwindCss, Drizzle, Typescript ,Gemini, and Clerk to achieve a smooth build and deployment experience.We may produce many forms of material such as Instagram hashtag generator, emoticons, Youtube tags, writing code, etc. ",
  },
  {
    id: "Resume Builder",
    img: Resume,
    name: "Resume Builder",
    stack: ["< Chakra UI />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://resume-maker-ivory.vercel.app/",
    source: "https://github.com/sahilbambarkar/Resume-maker",
    description:
      "Resume maker is made using React, ChakraUI, React Router, and Bootstrap. With our website's dark mode function, customers can simply build professional and personalized resumes. ",
  },
  {
    id: "Social Media site ",
    img: social,
    name: "Social Media site",
    stack: [ "< FireBase />", "< React.js />", "<vite>"],
    live: "https://prodigy-fs-05.vercel.app/",
    source: "https://github.com/sahilbambarkar/PRODIGY_FS_05",
    description:
      "MediaMojo is a fully responsive social media platform where users can connect, share, and interact through posts. With modern features like likes, shares, comments, notifications, privacy settings, and much more, MediaMojo brings together an engaging community experience. Built with Firebase and React using Vite for the frontend, along with TailwindCSS for sleek styling.",
  },

  {
    id: "Karwaan",
    img: Car,
    name: "Car Rental Website",
    stack: ["< React.js />", "< CSS3 />","<Leaflet/>"],
    live: "https://drive.google.com/file/d/1nvxDnl8MrBehfvqI6rZDQ_9BrL6tgndn/view",
    source: "https://github.com/sahilbambarkar/karwaan-Car-rental-",
    description:
      "Multi-page Car rental website provides relevant information for users. It has a responsive design and navigation. A large and complex project that required me to plan ahead and break down the work into smaller chunks. I used React.js to build the website and CSS3 for styling.Payment gateway is still to be implemented",

  },
  
  {
    id: "Bizscape",
    img: Lister,
    name: "Business lister website",
    stack: ["< Google places api />", "< Next js/>", "< React.js />","<tailwind css>"],
    live: "https://bizscape-business-listing-sahilb.vercel.app/",
    source: "https://github.com/sahilbambarkar/BIZSCAPE-business-listing-app-",
    description:
      "BIZSCAPE is a comprehensive business listing platform that allows users to search for and discover businesses across the world, including bars, cafes, restaurants, and more. Built using TypeScript, Tailwind CSS, and Next.js, it leverages the Google Maps API to provide a seamless and intuitive user experience.",
  },

 
  {
    id: "Jokes Generator",
    img: Jokes,
    name: "Random Jokes generator",
    stack: ["< React JS />  ", "< Jokes api />"],
    live: "https://random-jokes--three.vercel.app/",
    source: "https://github.com/sahilbambarkar/Random_Jokes_website",
    description:
      "This Lame joke generator is a ReactJS project which uses API integration and generates a random joke.",
  },

  {
    id: "Image finder ",
    img: image,
    name: "Image finder website",
    stack: ["< React.js />   ", "< Pixabay API />"],
    live: "https://image-finder-mauve.vercel.app/",
    source: "https://github.com/sahilbambarkar/Image_finder",
    description:
      "A single page web application that uses the PixaBay API to display the images according to user search. ",
  },
  {
    id: "Logo whiz",
    img: Logo,
    name: "Logo maker",
    stack: ["< React JS />  ", "< Vite />", "</Tailwind css>"],
    live: "https://drive.google.com/file/d/1y-fYJSYGTjAWuJHLdBPAIr4pM1dIdMsU/view",
    source: "https://github.com/sahilbambarkar/Logo-Whizz",
    description:
      "The Logo Maker is a simple online application developed using React, Tailwind CSS, JavaScript, and Vite that allows users to modify and download different sorts of logo's. ",
  },

];

const InprogressProjectsData = [

  {
    id: "Coffee connect",
    img: Coffee,
    name: "Coffee Shop ",
    stack: ["< JavaScript />", "<Android />"],
    live: "",
    source: "",
    description:
      "",
  },

];

export default { ProjectsData, InprogressProjectsData }
