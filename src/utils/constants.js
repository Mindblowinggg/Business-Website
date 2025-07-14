const navLinks = [
  {
    name: "Home",
    href: "/", // Change from "#home" to "/" for the home page
  },
  {
    name: "Portfolio",
    href: "/portfolio", // Change from "#portfolio" to "/portfolio"
    dropdown: [
      {
        name: "Option 1",
        href: "/portfolio/option1", // Add a distinct path for dropdown item
        dropdown: [
          { name: "Sub-option 1.1", href: "/portfolio/option1/sub1" }, // Distinct path
          { name: "Sub-option 1.2", href: "/portfolio/option1/sub2" }, // Distinct path
        ],
      },
      {
        name: "Option 2",
        href: "/portfolio/option2", // Distinct path
        dropdown: [
          { name: "Sub-option 2.1", href: "/portfolio/option2/sub1" }, // Distinct path
          { name: "Sub-option 2.2", href: "/portfolio/option2/sub2" }, // Distinct path
        ],
      },
      { name: "Option 3", href: "/portfolio/option3" }, // Distinct path
    ],
  },
  {
    name: "Services",
    href: "/services", // Change from "#services" to "/services"
    dropdown: [
      {
        name: "Option 1",
        href: "/services/option1", // Distinct path
        dropdown: [
          { name: "Sub-option 1.1", href: "/services/option1/sub1" }, // Distinct path
          { name: "Sub-option 1.2", href: "/services/option1/sub2" }, // Distinct path
        ],
      },
      { name: "Option 2", href: "/services/option2" }, // Distinct path
      { name: "Option 3", href: "/services/option3" }, // Distinct path
    ],
  },
  { name: "Contact", href: "/contact" }, // Change from "#contact" to "/contact"
];

export { navLinks };

 const partnerLogos = [
    {
      name: "Google",
      src: "src/assets/google.png",
      alt: "Google Logo",
    },
    {
      name: "Microsoft",
      src: "src/assets/microsoft.png",
      alt: "Microsoft Logo",
    },
    {
      name: "Airbnb",
      src: "src/assets/airnub.png",
      alt: "Airbnb Logo",
    },
    {
      name: "Facebook",
      src: "src/assets/fb.png",
      alt: "Facebook Logo",
    },
    {
      name: "Spotify",
      src: "src/assets/spotify.png",
      alt: "Spotify Logo",
    },
  ];

  const marquee = [...partnerLogos, ...partnerLogos];

  export{partnerLogos,marquee};


  const teamMembers = [
    {
      id: 1,
      name: "vimita kahar",
      role: "CEO",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "src/assets/MEMBER1.jpg",
    },
    {
      id: 2,
      name: "mohit",
      role: "CTO",
      bio: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "src/assets/MEMBER2.jpg",
    },
    {
      id: 3,
      name: "anuj",
      role: "Lead Designer",
      bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      image: "src/assets/MEMBER3.jpg",
    },
    {
      id: 4,
      name: "divyanshi",
      role: "Marketing Head",
      bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      image: "src/assets/MEMBER4.jpg",
    },
    {
      id: 5,
      name: "Aniket",
      role: "HR Manager",
      bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      image: "src/assets/MEMBER5.jpg",
    },
  ];
  export {teamMembers};
