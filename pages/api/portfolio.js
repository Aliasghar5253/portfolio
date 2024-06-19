const portfolio = [
    {
        id: 0,
        projectName: "Optiwyse ERP",
        url: "https://erpsystem.tutelator.com/",
        image: "projects/erp.png",
        projectDetail: "This project involves creating a complete ERP system with modules for HR management, a job portal, CRM, and accounts, along with a desktop application.",
        technologiesUsed: [
            {
                tech: "Laravel"
            },
            {
                tech: "Ajax"
            },
            {
                tech: "JS"
            },
            {
                tech: "Electron js"
            },
           
        ]
    },
    {
        id: 0,
        projectName: "Optiwyse pos inventory accounts ERP",
        url: "https://optiwysepro.tutelator.com/",
        image: "projects/pos.jpg",
        projectDetail: "A comprehensive POS inventory accounts ERP system, streamlining business operations and enhancing efficiency. Includes a robust CRM module for effective customer relationship management.",
        technologiesUsed: [
            {
                tech: "laravel"
            },
            {
                tech: "Ajax"
            },
            {
                tech: "JS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Optiwyse Erp Desktop Application",
        url: "##",
        image: "projects/desktop.png",
        projectDetail: "A desktop application integrated with Optiwyse ERP system, designed to monitor employee productivity and task management. Installed on employee desktops, it takes random screenshots in the background and records overall task time, providing insights into employee activity and performance. Additionally, it features clock-in and clock-out functionality, allowing employees to log their work hours and enabling administrators to track attendance and work schedules.",
        technologiesUsed: [
            {
                tech: "Laravel"
            },
            {
                tech: "REST API's"
            },
        ]
    },
    {
        id: 0,
        projectName: "Kadtech",
        url: "https://kadtechs.com/",
        image: "projects/kadtech.png",
        projectDetail: "A comprehensive portfolio website designed and developed for Kadtech, a leading IT company. The website showcases their services, pricing, and gallery, highlighting their expertise in innovative technologies and commitment to delivering cutting-edge solutions.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Laravel"
            },
            {
                tech: "REST API's"
            },
        ]
    },
    {
        id: 1,
        projectName: "Hr Accounts ERP",
        url: "https://#/",
        image: "projects/hr.png",
        projectDetail: "A comprehensive HR Accounts ERP system, integrating project management features similar to Asana, time tracking capabilities like Time Doctor, and accounting modules inspired by QuickBooks. This desktop application streamlines HR, project management, and accounting processes, enhancing productivity and efficiency.",
        technologiesUsed: [
            {
                tech: "React"
            },
            {
                tech: "Laravel"
            },
            {
                tech: "REST API's"
            },
          
        ]
    },

    {
        id: 2,
        projectName: "Nasksoft",
        url: "https://nasksoft.com/",
        image: "projects/nasksofts.png",
        projectDetail: "A professional portfolio website designed and developed for Nasksoft, a leading IT company. This website showcases their expertise, services, and projects, highlighting their commitment to innovation and excellence in the IT industry.",
        technologiesUsed: [
            {
                tech: "React"
            },
            {
                tech: "Laravel"
            },
            {
                tech: "REST API's"
            },
          
        ]
    },
    {
        id: 2,
        projectName: "Crazy Nerds",
        url: "https://crazynerds.co.uk/",
        image: "projects/crazynerds.png",
        projectDetail: "A professional portfolio website designed and developed for Crazy Nerds, a leading Uk Based IT company. This website showcases their expertise, services, and projects, highlighting their commitment to innovation and excellence in the IT industry.",
        technologiesUsed: [
            {
                tech: "Laravel"
            },
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
            {
                tech: "Js"
            },
        ]
    },
    {
        id: 2,
        projectName: "Massago",
        url: "https://massago.vip/",
        image: "projects/massage.png",
        projectDetail: "A professional portfolio website designed and developed for Massago, a Korean Massage parlour. This website showcases their expertise, services, and projects, highlighting their commitment to innovation and excellence in the IT industry.",
        technologiesUsed: [
            {
                tech: "Laravel"
            },
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
            {
                tech: "Js"
            },
        ]
    },

   
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
