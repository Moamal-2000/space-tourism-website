export const navLinksData = [
  {
    to: "/",
    id: 1,
    pageName: "Home",
  },
  {
    to: "/destination",
    id: 2,
    pageName: "Destination",
  },
  {
    to: "/crew",
    id: 3,
    pageName: "Crew",
  },
  {
    to: "/technology",
    id: 4,
    pageName: "Technology",
  },
];

export const planetsData = [
  {
    name: "Moon",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    avgDistance: "384,400 km",
    travelTime: "3 days",
    imagePath: require("../Components/assets/destination/image-moon.png"),
    id: 1,
  },
  {
    name: "Mars",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    avgDistance: "225 mil. km",
    travelTime: "9 months",
    imagePath: require("../Components/assets/destination/image-mars.png"),
    id: 2,
  },
  {
    name: "Europa",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    avgDistance: "628 mil. km",
    travelTime: "3 years",
    imagePath: require("../Components/assets/destination/image-europa.png"),
    id: 3,
  },
  {
    name: "Titan",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    avgDistance: "1.6 bil. km",
    travelTime: "7 years",
    imagePath: require("../Components/assets/destination/image-titan.png"),
    id: 4,
  },
];

export const crewData = [
  {
    name: "Douglas Hurley",
    img: require("../Components/assets/crew/image-douglas-hurley.webp"),
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    id: 1,
  },
  {
    name: "Mark Shuttleworth",
    img: require("../Components/assets/crew/image-mark-shuttleworth.webp"),
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    id: 2,
  },
  {
    name: "Victor Glover",
    img: require("../Components/assets/crew/image-victor-glover.webp"),
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    id: 3,
  },
  {
    name: "Anousheh Ansari",
    img: require("../Components/assets/crew/image-anousheh-ansari.webp"),
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    id: 4,
  },
];

export const techData = [
  {
    name: "Launch vehicle",
    routePath: "Launch vehicle",
    img: require("../Components/assets/technology/image-launch-vehicle-portrait.jpg"),
    bio: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    id: 1,
  },
  {
    name: "Spaceport",
    routePath: "Spaceport",
    img: require("../Components/assets/technology/image-spaceport-portrait.jpg"),
    bio: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    id: 2,
  },
  {
    name: "Space capsule",
    routePath: "capsule",
    img: require("../Components/assets/technology/image-space-capsule-portrait.jpg"),
    bio: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    id: 3,
  },
];
