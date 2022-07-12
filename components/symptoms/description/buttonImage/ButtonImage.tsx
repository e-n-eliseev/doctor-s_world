import { FC } from "react";
import Image from "next/image";
import { IImg } from "../../../../types/types";

const ButtonImage: FC<IImg> = ({ img1, img2, name }) => {
    return (
        <div className="symptoms__wrapper">
            <Image
                src={img2}
                width={100}
                height={100}
                alt={name} />
            <div className="symptoms__plus">
                <Image
                    src={img1}
                    width={91}
                    height={94}
                    alt="plus" />
            </div>
        </div>
    )
}

export default ButtonImage;