import style from "./Blogs.module.scss";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export type Blogsinfo = {
    id: string;
    title: string;
    content: string;
    image: string;
}

export const Blogs = () => {
    const queryClient = useQueryClient();
    const {data, isError, isLoading} = useQuery<Blogsinfo[]>({
        queryKey: ["blogs"],
        queryFn: () =>
            axios.get("http://localhost:3004/blogs")
                .then((res) => res.data)
    });

    if(isLoading) {
        return <h1>Loading...</h1>;
    }
    if(isError || !data) {
        throw Error("Something went bad");
    }

    const getHalfContent = (text: string) => {
        const halfIndex = Math.ceil(text.length / 2);
        return text.slice(0, halfIndex);
    };

    return (
        <div className="container">
            <Link to={"/blog/addblog"} style={{ textDecoration: "none" }}>
                <div className={style.add_box}>
                    <button className={style.btn_add}>Add Blog</button>
                </div>
            </Link>
            <div className={style.blogs}>
                {data.map(({id, title, content, image}) => (
                    <Link to={`/blog/${id}`} key={id} style={{ textDecoration: "none" }}>
                        <div className={style.blog}>
                            <img src={image} alt={title} className={style.blog__image} />
                            <h2>{title}</h2>
                            <p>{getHalfContent(content)}...</p>
                            <div className={style.btn__more}>
                                <p>Read more</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
