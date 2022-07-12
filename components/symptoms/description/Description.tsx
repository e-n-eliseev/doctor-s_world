import { FC, useState } from "react";
import { ISymptom } from "../../../types/types";
import ButtonImage from "./buttonImage/ButtonImage";

const Description: FC<ISymptom> = ({ name, img1, img2, description, angle }) => {
    //состояние видимости теста
    const [vision, setVision] = useState(false);

    //получаем класс в зависимости от положения элемента
    const textMove = (angle > 0 && angle < 165)
        ? "symptoms__text--right"
        : (angle > 195 && angle < 350)
            ? "symptoms__text--left"
            : (angle > 165 && angle < 195)
                ? "symptoms__text--bottom" : "symptoms__text--top"

    return (
        <div className="symptoms__description"
            style={{ transform: `rotate(${angle}deg)` }} >
            <div style={{ transform: `rotate(${-angle}deg)` }}>
                {vision
                    ? <p className={`symptoms__text  ${textMove}`} >{description}</p>
                    : null}
                <button
                    className="symptoms__button"
                    onMouseEnter={() => setVision(true)}
                    onMouseLeave={() => setVision(false)} >
                    <ButtonImage img1={img1} img2={img2} name={name} />
                </button >
            </div>
        </div >
    )
}

export default Description;