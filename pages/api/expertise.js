const expertise = [
  {
    id: 0,
    title: "Full Stack Development",
    desc: "I am a skilled full stack developer with extensive experience in building robust web applications using PHP, Laravel, React, Express, Java, Node, and Electron JS. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients.",
  },
  {
    id: 1,
    title: "Technical Leadership",
    desc: "I excel in technical leadership, encompassing strategic planning, architectural design, and team management. My experience ensures the delivery of innovative and robust technical solutions tailored to meet client requirements.",
  },
  {
    id: 2,
    title: "Technical Skills",
    desc: "I have expertise in technical skills such as technical planning, technical debt management, and technical roadmap development. I am proficient in using technical tools such as Jira, Asana, and Trello for project management and collaboration.",
  },
  {
    id: 3,
    title: "Leadership & Management",
    desc: "I have expertise in leadership and management skills such as team management, stakeholder management, and change management. I am proficient in using leadership tools such as Agile, Scrum, and Waterfall for project delivery.",
  },
];

export default function handler(req, res) {
  res.status(200).json(expertise);
}
