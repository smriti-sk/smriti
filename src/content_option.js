import profilepic from "../src/assets/project-images/profile-pic.png"
import newsApp from "../src/assets/project-images/mobileView.png"
import portfolio from "../src/assets/project-images/portfolio.png";
import expenseTracker from "../src/assets/project-images/ExpenseTracker.png";
import videoConfrencing from "../src/assets/project-images/video-confrencing.png";
import tictactoe from "../src/assets/project-images/tictactoe.png";
import youtubeclone from "../src/assets/project-images/youtubeclone.png";
import inkFlow from "../src/assets/project-images/inkflow1.png";
import stackOverflow from "../src/assets/project-images/stack-overflow.png";

const logotext = "SMRITI";
const meta = {
  title: "Smriti Kumari",
  description:
    "I'm Smriti Kumari data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
  title: "I'm Smriti Kumari",
  animated: {
    first: "I'm a FullStack Developer",
    second: "I code cool websites",
    third: "I love Tech!",
  },
  description: (
    <>
      If you're on the lookout for a dedicated developer who approaches each
      challenge with enthusiasm and expertise, look no further! I'm always eager
      to explore new horizons and tackle exciting projects. <br />
      Reach out to me by clicking the "Contact" button below. Let's collaborate
      and create something extraordinary!
    </>
  ),
  your_img_url: profilepic,
};

const dataabout = {
  title: "abit about my self",
  aboutme: (
    <>
      I'm a Full Stack Developer, dedicated to mastering both front-end and
      back-end technologies. I thrive on crafting seamless user experiences
      paired with efficient, scalable server-side solutions.
      <br />
      Recently, I completed an enriching internship as a Software Engineer at
      uTrade Solutions, where I contributed to projects that refined my
      expertise in Full Stack Development.
      <br />
      I'm committed to continuous learning, staying current with industry
      trends, and adopting best practices to deliver top-notch solutions. My
      journey is driven by a constant desire to push boundaries and create
      impactful digital experiences.
    </>
  ),
};
const worktimeline = [
  {
    jobtitle: "Software Engineering Intern",
    where: "uTrade Solutions",
    date: "Jan '24- Jun '24",
  },
  {
    jobtitle: "Cyber Security Intern",
    where: "IBM ",
    date: "Jun '23 - Jul '23",
  },
  {
    jobtitle: "Open Source Contributor",
    where: "GirlScript Summer of Code (GSSoC)",
    date: "2023",
  },
];

const skills = [
  {
    name: "React",
    value: 95,
  },
  {
    name: "Angluar",
    value: 90,
  },
  {
    name: "Go",
    value: 95,
  },
  {
    name: "C++",
    value: 90,
  },
  {
    name: "Python",
    value: 60,
  },
];

const services = [
  {
    title: "Full-Stack Websites",
    description: (
      <>
        For the front-end I usually work with Javascript, either standalone or
        including popular frameworks like ReactJS and Angular. I also make the
        web pretty by using CSS and, whenever needed, any of their friends:
        Bootstrap, Tailwind, SCSS etc. <br />
        On the back-end, I leverage Node.js, Express, and SQL and NoSQL
        databases (MongoDB, PostgreSQL, MySQL) to create scalable and robust
        server-side logic. In addition to my core skills, I'm also proficient in
        Go programming for high-performance applications.
      </>
    ),
  },
  {
    title: "Content Writing",
    description: (
      <>
        As a technical content writer, I possess a knack for translating complex
        concepts into clear and engaging content. With a passion for simplifying
        technical jargon, I create informative articles that captivate readers.{" "}
        <br />
        My writing skills offer a seamless blend of simplicity and expertise,
        making intricate topics accessible to all. Let me weave words that
        empower your audience with valuable insights and knowledge.
      </>
    ),
  },
];

const dataprojects = [
    {
      title: "News Aggregator App",
      description: (
        <>
          This is a web-based application designed to provide you with real-time
          news updates from around the globe.
          <br />
          <b>Advanced Search Functionality:</b> Filter news by keywords, date,
          language, location, and publisher.
        </>
      ),
      img: newsApp,
      link: "https://github.com/smriti-sk/News-App",
    },
    {
      title: "InkFlow",
      description:
        " Created a real-time word processor for document creation and editing. Implemented document storage functionality.",
      img: inkFlow,
      link: "https://github.com/smriti-sk/Ink-Flow",
    },
    {
      title: "Portfolio Website",
      description:
        "Build my own portfolio website from scratch including all the relevant content using React.js, Bootstrap.",
      img: portfolio,
      link: "https://smriti-kumari.netlify.app/",
    },
    {
      title: "Video Conferencing App",
      description: "Video Chat App with React.js and WebRTC",
      img: videoConfrencing,
      link: "",
    },
    {
      title: "Stack Overflow Clone",
      description:
        "Developed a Real-Time Stack Overflow Clone using MERN Stack and hosted with Firebase. Implemented a chatbot feature for direct user interaction.",
      img: stackOverflow,
      link: "https://github.com/smriti-sk/stackoverflow-clone-fullstack",
    },
    {
      title: "Expense Tracker",
      description:
        "Monitor your spending, view transaction history, and maintain a healthy financial balance",
      img: expenseTracker,
      link: "https://smriti-sk.github.io/Expense-Tracker-App/",
    },
    {
      title: "Tic-Tac-Toe",
      description:
        "The classic Tic-Tac-Toe game for free offline with two players using Python and tkinter library.",
      img: tictactoe,
      link: "https://github.com/smriti-sk/TicTacToe-python",
    },
    {
      title: "Youtube Clone - Frontend",
      description: "YouTube clone website using HTML, CSS, JavaScript.",
      img: youtubeclone,
      link: "https://smriti-sk.github.io/Youtube-Clone-frontend/",
    },
];

const contactConfig = {
  YOUR_EMAIL: "smritikumari049@gmail.com",
  // YOUR_FONE: "(555)123-4567",
  description: (
    <>
      I'm always eager to connect with like-minded individuals. Whether you have a project in mind or simply want
      to chat about the latest tech trends, feel free to reach out. <br />
      Let's see what we can create together.
    </>
  ),
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  linkedin: "https://www.linkedin.com/in/smritikumari20/",
  github: "https://github.com/smriti-sk",
  twitter: "https://twitter.com/_smritikumari",
};
export {
  meta,
  dataabout,
  dataprojects,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
