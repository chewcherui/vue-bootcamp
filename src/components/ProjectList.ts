import Image1 from "../assets/apple-clone-img.png"

export interface intProject {
    projectID: number,
    projectImg: string,
    projectTitle: string,
    projectDescription: string,
    completionDate: string,
    projectLabels: string[]
}

export const ProjectList: intProject[] = [ 
    {
        projectID: 3,
        projectImg: Image1,
        projectTitle: "Todo List Project",
        projectDescription: "placeholder 1",
        completionDate: "02/03/2024",
        projectLabels: ["React.js", "Javascript", "HTML", "CSS"]
    },
    {
        projectID: 2,
        projectImg: Image1,
        projectTitle: "Title Generator Project",
        projectDescription: "placeholder 2",
        completionDate: "02/01/2024",
        projectLabels: ["Javascript", "HTML", "CSS"]
    },
    {
        projectID: 1,
        projectImg: Image1,
        projectTitle: "Apple Homepage Clone Project",
        projectDescription: "placeholder 3",
        completionDate: "02/03/2024",
        projectLabels: ["Javascript", "HTML", "CSS"]
    }
    ]
