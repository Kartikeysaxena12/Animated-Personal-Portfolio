import project1 from "../assets/projects/austo_motor.png";
import project2 from "../assets/projects/cnapp.png";
import project3 from "../assets/projects/smartask.png";
import saveher from "../assets/Music/SAVOUR.png";
import holihigh from "../assets/Music/IMG_0550.png";
import curtains from "../assets/Music/IMG_2056.jpg";
import { FaFilePdf } from "react-icons/fa";

export const HERO_CONTENT = [
  "I am a dedicated ",
  <strong>Data Scientist</strong>,
  " with a strong foundation in ",
  <strong>frontend development</strong>,
  ", bringing a unique blend of analytical expertise and user-focused design skills.",
  <br />,
  "My experience spans crafting responsive UIs with ",
  <strong>React.js</strong>,
  " and ",
  <strong>Tailwind CSS</strong>,
  ", as well as conducting in-depth statistical analysis and predictive modeling using ",
  <strong>Python</strong>,
  ", ",
  <strong>Pandas</strong>,
  ", and ",
  <strong>Scikit-learn</strong>,
  ".",
];

export const ABOUT_TEXT = [
  "I am a versatile professional with expertise in ",
  <strong>Data Science</strong>,
  " and ",
  <strong>Frontend Development</strong>,
  ", leveraging analytical and technical skills to deliver impactful solutions.",
  <br />,
  "My journey began with creating seamless user experiences using technologies like ",
  <strong>React.js</strong>,
  ", ",
  <strong>MongoDB</strong>,
  ", and ",
  <strong>Tailwind CSS</strong>,
  ", where I honed my ability to design intuitive and efficient applications.",
  <br />,
  "Expanding into data science, I have applied advanced techniques such as ",
  <strong>statistical modeling</strong>,
  ", ",
  <strong>ANOVA</strong>,
  ", and ",
  <strong>data visualization</strong>,
  " to solve complex problems and optimize processes.",
  <br />,
  "My dual expertise enables me to build scalable, data-driven web applications that provide actionable insights and superior user experiences.",
  <br />,
  "I thrive on bridging the gap between ",
  <strong>data analytics</strong>,
  " and ",
  <strong>frontend functionality</strong>,
  ", ensuring both technical precision and practical usability.",
];

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Frontend Developer",
    company: "Starx91.",
    description: `Designing and developing user interfaces for web applications using React vite framework and TailwindCSS. Worked closely with UI/UX designers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Javascript", "React.js", "TailwindCSS", "mongoDB"],
  },
  {
    year: "2023 - 2024 ",
    role: "Full Stack Developer",
    company: "Mithliesh Agriculture",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines..`,
    technologies: ["Reactjs", "Nodejs", "Express.js", "MongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "Austo Motor Automobile Company",
    image: project1,
    description:
      "A comprehensive analysis of Austo Motor Company's customer data to enhance their marketing campaign and improve customer experience across their SUV, Sedan, and Hatchback models.",
    technologies: [
      "Python",
      "Numpy & Pandas",
      "EDA",
      "Statistical Analysis",
      "Business Analytics",
    ],
    Links: [
      {
        name: "Github",
        url: "https://github.com/Kartikeysaxena12/Austo_Automobile_Python_DataScience_Project",
      },
    ],
  },
  {
    title: "CNAPP Dynamic Dashboard",
    image: project2,
    description:
      "This project is a dynamic, interactive dashboard built with React, providing a customizable and user-friendly interface for data visualization and management. The application allows users to add, search, and manage widgets within different categories.",
    technologies: ["Javascript", "TailwindCSS", "React", "Zustand"],
    Links: [
      {
        name: "Github",
        url: "https://open.spotify.com/album/6md0Tj2MEOnaljkBRCcXGz?si=7t3sCNohTa-eGKwsURRekA",
      },
    ],
  },
  {
    title: "SmartTask Oraganizer",
    image: project3,
    description:
      "An application for managing tasks and projects, with features such as task creation, updation, deletion as per category, carousel display of task cards of different dates, task and in progress marking.",
    technologies: [
      "Javascript",
      "TailwindCSS",
      "Reactjs",
      "Node.js",
      "MongoDB",
    ],
    Links: [
      {
        name: "Github",
        url: "https://github.com/Kartikeysaxena12/Task-Manager-CRUD-Based",
      },
    ],
  },
];

export const MUSIC = [
  {
    title: "SAVE HER",
    image: saveher,
    description:
      "Wrote, Recorded, Mix & Mastered my first debut EP - Save Her which is a consists of 5 melodious R&B/Trap tracks, that are available on all streaming platforms ",
    setup: [
      "DAW- FlStudio",
      "U-Phoria UM2 behringer Audio Interface",
      "AKGP120 Mic",
      "Zebronics Speakers",
    ],
    Links: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/album/6md0Tj2MEOnaljkBRCcXGz?si=7t3sCNohTa-eGKwsURRekA",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/in/album/save-her-ep/1715505034",
      },
      {
        name: "YouTube",
        url: "https://youtube.com/playlist?list=OLAK5uy_kIj-t7F7DObReS5NY8QyzyGpjSlq7Kf_c&si=gRzzn8KiOWVqy3ER",
      },
    ],
  },
  {
    title: "Holi High",
    image: holihigh,
    description:
      "Produced, Wrote, Mix & Mastered a groovy experimental rap on the occasion our Indian Festival 'Holi' in my DIY Studio, which is available in all streaming platforms.",
    setup: [
      "DAW- FlStudio",
      "U-Phoria UM2 behringer Audio Interface",
      "AKGP120 Mic",
      "Zebronics Speakers",
    ],
    Links: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/3IGCJeoqSH8Rqr0hvldgNF?si=b8d5193b76a4450d",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/in/album/holi-high-single/1736520459",
      },
      {
        name: "YouTube",
        url: "https://youtu.be/SRkLYQvT0kw?si=392EflVcCG7EbHDE",
      },
    ],
  },
  {
    title: "Curtains",
    image: curtains,
    description:
      "Written, Recorded, Mix & Mastered in my own home studio, Curtains is a legitimate Jazz Rap vibe based on experimented vocals. Watch out for it in all the streaming platforms!",
    setup: [
      "DAW- FlStudio",
      "U-Phoria UM2 behringer Audio Interface",
      "AKGP120 Mic",
      "Zebronics Speakers",
    ],
    Links: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/track/2kAwBcG0ZwTsVLCHePFBnw?si=035d9f5255ab48ae",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/in/album/curtains-single/1761386534",
      },
      {
        name: "YouTube",
        url: "https://youtu.be/c9bGmfRsJYI?si=sG2q9lQJU_JqGRRI",
      },
    ],
  },
];

export const CONTACT = {
  Resume: [
    {
      name: "Resume",
      url: "https://drive.google.com/file/d/1S1AgKXQ47-OLyjBRIjEDBsTl_OkS1XPr/view?usp=sharing",
    },
  ],
  phoneNo: "+8318717147 ",
  email: "kartikeyasaxena99@gmail.com",
};
