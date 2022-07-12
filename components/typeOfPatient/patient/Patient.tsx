import Image from "next/image";
import { FC } from "react";
import { IPatient } from "../../../types/types";
import uniqid from "uniqid";

const Patient: FC<IPatient> = ({ name, img1, description }) => {
    return (
        <article className="patient">
            <h3 className="patient__heading">{name}</h3>
            <div className="patient__img">
                <Image src={img1} width={300} height={300} alt={name} />
            </div>

            <div className="patient__text">
                {description.map(item => <p key={uniqid()} className="patient__description"> {item} </p>)}
            </div>
        </article>
    )
}

export default Patient;

