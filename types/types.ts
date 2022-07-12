
export interface IBase {
    name: string;
    img1: string;
}
export interface IImg extends IBase {
    img2: string;
}

export interface IPatient extends IBase {
    description: string[]
}

export interface ISymptom extends IPatient {
    img2: string;
    angle: number
}

