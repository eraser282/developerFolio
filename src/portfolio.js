/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Joel Colaco",
  title: "Hi there, I'm Joel",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with experience building Web and Mobile applications using C# / .NET / React / Xamarin and various other libraries and frameworks."
  ),
  resumeLink: "https://resume.io/r/UilEQoSh5",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/joelcolaco",
  linkedin: "https://www.linkedin.com/in/joel-colaco/",
  gmail: "joel.colaco@gmail.com",
  twitter: "https://twitter.com/hotshotz18",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Tech Stack",
  subTitle: "TECHNOLOGIES I'VE WORKED WITH",
  skills: [
    emoji("⚡ Basic Website creation using Wordpress, Wix, Webflow etc"),
    emoji(
      "⚡ Custom Website creation with payment and store front integrations"
    ),
    emoji("⚡ API design, architecture, implementation and integration"),
    emoji("⚡ Cross-platform application development with .Net Core"),
    emoji(
      "⚡ Front end / User Interfaces development for your web and mobile applications"
    ),
    emoji(
      "⚡ Cloud Native solution design and implementation with Azure / AWS"
    ),
    emoji(
      "⚡ CI/CD Pipeline creation using Gitlab, Azure DevOps, Jenkins or any other CI tool"
    ),
    emoji(
      "⚡ Bot development integrated with various platforms (Discord, Telegram, etc)"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-hashtag"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "HTML 5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS 3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Digital Ocean",
      fontAwesomeClassname: "fab fa-digital-ocean"
    },
    {
      skillName: "Wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "Wix",
      fontAwesomeClassname: "fab fa-wix"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "BITS Pilani",
      logo: require("./assets/images/BITS_Pilani-Logo.svg"),
      subHeader: "(BE) Computer Science",
      duration: "September 2006 - May 2010"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Leadership",
      progressPercentage: "100%"
    },
    {
      Stack: "Communication",
      progressPercentage: "100%"
    },
    {
      Stack: "Solution Design",
      progressPercentage: "100%"
    },
    {
      Stack: "Training & Mentoring",
      progressPercentage: "90%"
    },
    {
      Stack: "Agile Project Management",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Lead",
      company: "Brock Solutions",
      companylogo: require("./assets/images/Logo_BrockSolutions_Sharepoint.png"),
      date: "May 2014 – Present",
      desc: "Currently managing a team of developers to deliver high quality features",
      descBullets: [
        "Building cloud solutions leveraging Azure",
        "Supporting legacy Windows/Web forms applications"
      ]
    },
    {
      role: "Integration Developer",
      company: "Doxim",
      companylogo: require("./assets/images/doxim.png"),
      date: "Aug 2011 – May 2014",
      desc: "Worked with the core product team to support integrations with other products",
      descBullets: [
        "Worked with various SOAP/REST based web APIs to add integrations with the core product (DocuSign, Equifax, Broadridge, Fidelity)"
      ]
    },
    {
      role: "QA Developer",
      company: "Arius Software",
      companylogo: require("./assets/images/defaultWorkLogo.png"),
      date: "Oct 2010 – Aug 2011",
      desc: [
        "Worked with the QA team to ensure high quality code is being deployed to customers"
      ],
      descBullets: [
        "Developed and Maintained a testing framework written in python to leverage automated testing.",
        "Built and maintained CI/CD pipelines using Jenkins"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Awards and other Cool Stuff I have done !",

  achievementsCards: [
    {
      title: "ICAgile Certified Professional",
      subtitle: "Completed Certification from ICAgile",
      image: require("./assets/images/icagile.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss a new project or just say hi? My Inbox is open for all.",
  number: "",
  email_address: "joel.colaco@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "hotshotz18", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
