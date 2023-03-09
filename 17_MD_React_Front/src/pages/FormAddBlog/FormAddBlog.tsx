import style from "./FormAddBlog.module.scss";
import { Link} from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddBlog = () => {
    const titleRef: any = useRef();
    const contentRef: any = useRef();
    const imageRef: any = useRef();
    const navigate = useNavigate();


    const handleSubmit = () => {
        const formData = new FormData();
        formData.append("title", titleRef.current.value);
        formData.append("content", contentRef.current.value);
        formData.append("image", imageRef.current.files[0]);
    
        axios.post("http://localhost:3004/send-blog", formData).then(() => {
            navigate("/blog");
        });
    };
    

    return (
        <>
            <div className="container">
                <Link to={"/blog"} style={{ textDecoration: "none" }}>
                    <div className={style.add_box}>
                        <button className={style.btn_add}>Back</button>
                    </div>
                </Link>
                <form 
                    className={style.form}
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                >
                    <label className={style.label}>
                        Blog title:
                        <input 
                            type="text" 
                            required
                            placeholder='The Rainforests of Madagascar: A Biodiverse Wonderland...'
                            ref={titleRef}
                        />
                    </label>
                    <label className={style.label}>
                        Blog content:
                        <textarea
                            rows={4}
                            className={style.text__area}
                            required
                            placeholder='The rainforests of Madagascar are home to many unique and exotic species, such as lemurs and fossas, which are found nowhere else on Earth. Despite its beauty, the rainforests of Madagascar are facing many challenges, including deforestation and habitat destruction, which threaten to destroy this diverse and vibrant ecosystem...'
                            ref={contentRef}
                        />
                    </label>
                    <label className={style.label}>
                        Blog image:
                        <input 
                            type="file" 
                            required
                            ref={imageRef}
                        />
                    </label>
                    <div className={style.submit}>
                        <button className={style.btn_add}>Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default FormAddBlog;
