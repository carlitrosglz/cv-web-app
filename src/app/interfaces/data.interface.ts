export interface ProjectsModel {
    id: string;
    position: number;
    title: string;
    description: string;
    company: string;
    stack: string[];
    mainImage: string;
    link: string;
    extraResources: {
        images: string[];
        videos: string[];
    };
}

export interface CareerDataModel {
    id: string;
    title: string;
    description?: string;
    center: string;
    initialDate: string;
    endDate?: string;
}

export interface SkillsModel {
    id: string;
    title: string;
    type: string;
    imageUrl: string;
}

export interface PersonalInfoModel {
    name: string;
    firstSurname: string;
    secondSurname: string;
    profession: string;
    city: string;
    province: string;
    phonePrefix: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
}
