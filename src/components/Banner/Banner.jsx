import './Banner.css'
import { FaCircleCheck, FaTriangleExclamation, FaCircleXmark, FaCircleInfo } from "react-icons/fa6";

export default function Banner({children, variant="neutral"}){
    const lookUp = {
        success: {
            title: "Congratulations!",
            icon: <FaCircleCheck style={{color: "limegreen"}}/>
        },
        warning: {
            title: "Attention",
            icon: <FaTriangleExclamation style={{color: "darkorange"}}/>
        },
        error: {
            title: "There is a problem with your application",
            icon: <FaCircleXmark style={{color: "crimson"}}/>
        },
        neutral: {
            title: "Update available",
            icon: <FaCircleInfo style={{color: "cornflowerblue"}}/>
        }
    }

    return (
        <div className={`banner ${variant}`}>
            <div className="banner-icon">
                {lookUp[variant].icon} 
            </div>
            <div className="banner-text">
                <h4>{lookUp[variant].title}</h4>
                {children && <p>{children}</p>}
            </div>
        </div>
    )
}
