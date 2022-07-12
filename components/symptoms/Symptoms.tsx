import Image from "next/image";
import { FC } from "react";
import img from "../../public/doctor.png"
import { IPatientSymptom } from "../../types/types";
import Description from "./description/Description";

//данные блока карусели
const symptoms: IPatientSymptom[] = [
    {
        name: "scoliosis",
        img1: "/plus.svg",
        img2: "/scoliosis.png",
        description: ["Сколиоз"]

    },
    {
        name: "handup",
        img1: "/plus.svg",
        img2: "/handup.png",
        description: ["Ограниченная способность поднимать руки и переносить предметы"]
    },
    {
        name: "chewing",
        img1: "/plus.svg",
        img2: "/chewing.png",
        description: ["Нарушения жевания и глотания"]
    },
    {
        name: "breathe",
        img1: "/plus.svg",
        img2: "/breathe.png",
        description: ["Дыхательная недостаточность/ респираторная дисфункция"]
    },
    {
        name: "run",
        img1: "/plus.svg",
        img2: "/run.png",
        description: ["Неспособность бегать, изменение походки"]
    },
    {
        name: "joint",
        img1: "/plus.svg",
        img2: "/joint.png",
        description: ["Контрактура суставов"]
    },
    {
        name: "hip",
        img1: "/plus.svg",
        img2: "/hip.png",
        description: ["Вывих бедра"]
    },
    {
        name: "fatigue",
        img1: "/plus.svg",
        img2: "/fatigue.png",
        description: ["Утомляемость"]
    }
]

const Symptoms: FC = () => {
    const angle = Math.floor(360 / symptoms.length)
    return (
        <div className="symptoms">
            <p className="symptoms__heading">
                Сообщает ли один из ваших пациентов о следующих симптомах?
                <span className="symptoms__heading-addings">
                    (нажмите на любую иконку и узнайте больше)
                </span>
            </p>
            <div className="symptoms__carousel">
                <div className="symptoms__carousel-wrapper">
                    <div className="symptoms__img">
                        <div className="symptoms__filter"></div>
                        <Image
                            src={img}
                            alt="Patient image"
                            width={316}
                            height={316}
                            placeholder="blur" />
                        <p className="symptoms__type">
                            Взрослый
                        </p>
                    </div>
                    {symptoms.map((item, index) => <Description
                        key={item.name}
                        {...item}
                        angle={index * angle}
                    />)}
                </div>
            </div>
        </div>
    )
}

export default Symptoms;