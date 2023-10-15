import "./Testimonial.css"
import { BsQuote } from "react-icons/bs";
import workLogo from "../../assets/Logo.svg"

export default function Testimonial({children="lorem dolor one two three", imageSource, company, job, name}){
    return imageSource ?
        <div className="testimonial-with-image flex">
            <img className="testimonial-image" src={imageSource} />
            <div className="testimonial-info">
                <BsQuote className="testimonial-icon"/>
                <p className="testimonial-quote bold">{children}</p>
                <p className="testimonial-name small bold" >{name}</p>
                <p className="testimonial-title small" >{`${company},${job}`}</p>
            </div>
        </div>
        :
        <div className="testimonial flex">
            <div className="bg-dot"></div>
            <img src={workLogo} className="testimonial-logo"/>
            <div className="testimonial-info">
                <p className="testimonial-quote bold"><q>{children}</q></p>
                <div className="testimonial-title-container">
                    <p className="testimonial-name small bold backslash" >{name}</p>
                    <p className="testimonial-title small" >{`${company},${job}`}</p>
                </div>
            </div>
        </div>
}