const navLinks = [
  {
    name: "Home",
    href: "/", 
  },
  {
    name: "Portfolio",
    href: "/portfolio", 
    dropdown: [
      {
        name: "Option 1",
        href: "/portfolio/option1", 
        dropdown: [
          { name: "Sub-option 1.1", href: "/portfolio/option1/sub1" }, 
          { name: "Sub-option 1.2", href: "/portfolio/option1/sub2" }, 
        ],
      },
      {
        name: "Option 2",
        href: "/portfolio/option2", 
        dropdown: [
          { name: "Sub-option 2.1", href: "/portfolio/option2/sub1" }, 
          { name: "Sub-option 2.2", href: "/portfolio/option2/sub2" }, 
        ],
      },
      { name: "Option 3", href: "/portfolio/option3" }, 
    ],
  },
  {
    name: "Services",
    href: "/services", 
    dropdown: [
      {
        name: "Option 1",
        href: "/services/option1", 
        dropdown: [
          { name: "Sub-option 1.1", href: "/services/option1/sub1" }, 
          { name: "Sub-option 1.2", href: "/services/option1/sub2" }, 
        ],
      },
      { name: "Option 2", href: "/services/option2" }, 
      { name: "Option 3", href: "/services/option3" }, 
    ],
  },
  { name: "Contact", href: "/contact" }, 
];

export { navLinks };

 const partnerLogos = [
    {
      name: "Google",
      src: "/assets/google.png",
      alt: "Google Logo",
    },
    {
      name: "Microsoft",
      src: "/assets/microsoft.png",
      alt: "Microsoft Logo",
    },
    {
      name: "Airbnb",
      src: "/assets/airnub.png",
      alt: "Airbnb Logo",
    },
    {
      name: "Facebook",
      src: "/assets/fb.png",
      alt: "Facebook Logo",
    },
    {
      name: "Spotify",
      src: "/assets/spotify.png",
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
      image: "/assets/MEMBER1.jpg",
    },
    {
      id: 2,
      name: "mohit",
      role: "CTO",
      bio: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/assets/MEMBER2.jpg",
    },
    {
      id: 3,
      name: "anuj",
      role: "Lead Designer",
      bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      image: "/assets/MEMBER3.jpg",
    },
    {
      id: 4,
      name: "divyanshi",
      role: "Marketing Head",
      bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      image: "/assets/MEMBER4.jpg",
    },
    {
      id: 5,
      name: "Aniket",
      role: "HR Manager",
      bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      image: "/assets/MEMBER5.jpg",
    },
  ];
  export {teamMembers};