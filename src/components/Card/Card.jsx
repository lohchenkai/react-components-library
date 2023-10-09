import { AiOutlineCloudUpload } from "react-icons/ai";
import "./Card.css"

export default function Card({children, title="Easy Deployment"}){
    return (
        <div className="card">
            <h2>{title}</h2>
            {children && <p>{children}</p>}
            <AiOutlineCloudUpload className="card-icon" />
        </div>
    )
}