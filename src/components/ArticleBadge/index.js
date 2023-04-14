import MaterialDescription from "../MateriaLDescription";
import { BsBook } from "react-icons/bs";

export default function ArticleBagde({ data, ...props }) {
    return (
        <MaterialDescription {...props}>
            <BsBook />
            <h3>{data.title}</h3>
        </MaterialDescription>
    );
}
