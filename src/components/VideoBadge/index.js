import MaterialDescription from "../MateriaLDescription";
import { BsPlayBtn } from "react-icons/bs";

export default function VideoBagde({ data, ...props }) {
    return (
        <MaterialDescription {...props} data={data}>
            <BsPlayBtn />
            <h3>{data.title}</h3>
        </MaterialDescription>
    );
}
