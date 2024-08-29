import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import saveher from "../assets/Music/SAVOUR.png";
import holihigh from "../assets/Music/IMG_0550.png";
import curtains from "../assets/Music/IMG_2056.jpg";

export const HERO_CONTENT = `I am a passionate frontend developer with a knack for crafting robust and scalable web applications. With an year of hands-on experience, I have honed my skills in front-end technologies like React.js and Next.js, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly web applications. With an year of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to projects.`;

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
    title: "CNAPP Dynamic Dashboard",
    image: project1,
    description:
      "This project is a dynamic, interactive dashboard built with React, providing a customizable and user-friendly interface for data visualization and management. The application allows users to add, search, and manage widgets within different categories.",
    technologies: ["Javascript", "TailwindCSS", "React", "Zustand"],
  },
  {
    title: "SmartTask Oraganizer",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, updation, deletion as per category, carousel display of task cards of different dates, task and in progress marking.",
    technologies: [
      "Javascript",
      "TailwindCSS",
      "Reactjs",
      "Node.js",
      "MongoDB",
    ],
  },
  {
    title: "Data Visualization using Websockets",
    image: project3,
    description:
      "Developed a real-time data visualization dashboard using React.js for the frontend, websockets for bi-direcitonal communication between the frontend and the backend",
    technologies: [
      "React.js",
      "Websockets",
      "ReactThreeFiber",
      "Javascript",
      "Node.js",
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
  address: "1/418 Vastukhand Gomtinagar Lucknow ",
  phoneNo: "+8318717147 ",
  email: "kartikeyasaxena99@gmail.com",
};
