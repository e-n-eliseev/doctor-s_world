
export interface IImg {
    name: string;
    img1: string;
    img2: string;
}

export interface IPatient extends IImg {
    description: string[]
}

export interface ISymptom extends IPatient {
    angle: number
}

