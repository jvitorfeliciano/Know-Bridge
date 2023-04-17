import MaterialDescription from "../MateriaLDescription";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { HiOutlinePencilAlt } from "react-icons/hi";
import Badge from "@mui/material/Badge";

export function QuestionBadge({ data, ...props }) {
    return (
        <MaterialDescription {...props} data={data}>
            {data.isDone ? (
                <Badge badgeContent={<CheckCircleIcon style={{ fontSize: "18px" }} color="primary" />}>
                    <HiOutlinePencilAlt />
                </Badge>
            ) : (
                <HiOutlinePencilAlt />
            )}
            <h3>{data.title}</h3>
        </MaterialDescription>
    );
}
