import { useParams } from "react-router-dom";
import axios from "axios";
import { useQueries, useQueryClient, useMutation } from "@tanstack/react-query";
import style from "./Blog.module.scss";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Modal from "../../components/modal/modal";
import { createComment, handleUpdate } from "../../APIcalls/APIcalls";
import { useNavigate } from "react-router-dom";


type Blog = {
    title: string;
    content: string;
    image: string;
}

type Comments = {
    id: string;
    comment: string;
    postId: string;
}


const Blog = () => {
    const { id } = useParams();
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [commentText, setCommentText] = useState("");
    const [updateData, setUpdateData] = useState({
        title:"",
        content:"",
        image:"",
    });
    
    const [blogsQuery, commentsQuery] = useQueries({
        queries: [
            {
                queryKey: ["blog"],
                queryFn: () =>
                    axios
                        .get<Blog>(`http://localhost:3004/blogs/${id}`)
                        .then((res) => res.data),
            },
    
            {
                queryKey: ["comments", id],
                queryFn: () =>
                    axios
                        .get<Comments[]>("http://localhost:3004/comments")
                        .then((res) => res.data),
            },
        ],
    });

    const createCommentMutation = useMutation(
        {
            mutationFn: createComment,
            onSuccess: () => {
                queryClient.invalidateQueries(["comments", id]);
                setCommentText("");
            }
        }
    );

    const handleCommentSubmit =  () => {
        createCommentMutation.mutate({
            comment: commentText,
            postId: id
        });
        setCommentText("");
    };

    const updateBlogMutation = useMutation(
        {
            mutationFn: handleUpdate,
            onSuccess: (data) => navigate("/blog"),

        }
    );

    const handleEditSubmit = () => {
        updateBlogMutation.mutate({
            id: id,
            title: updateData.title,
            content: updateData.content,
            image: updateData.image
        });
    };

    const deleteBlog = (id: any) => {
        return axios.delete(`http://localhost:3004/blogs/${id}`);
    };

    const deleteBlogDB = () => {
        const queryClient = useQueryClient();
        return useMutation(deleteBlog, {
            onSuccess: () => {
                queryClient.invalidateQueries(["blog"]);
                navigate("/blog");
            }
        });
    };

    const { mutate: deleteMutate} = deleteBlogDB();

    if (blogsQuery.isLoading) return "Loading Posts...";
    if (commentsQuery.isLoading) return "Loading Posts...";

    if (!blogsQuery.data)
        return "An error has occurred";

    if (!commentsQuery.data)
        return "An error has occurred";
        
    const {title, content, image} = blogsQuery.data;
    
    return (
        <>
            <div className="container">
                <div className={style.add_box}>
                    <Link to={"/blog"} style={{ textDecoration: "none" }}>
                        <button className={style.btn_add}>Back</button>
                    </Link>
                    <button 
                        className={style.btn_add}
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={()=>
                            setUpdateData({
                                title: title,
                                content: content,
                                image:image,
                            })}
                    >
                            Edit
                    </button>
                </div>
                <div className={style.wrapper}>
                    <div className={style.blog}>
                        <img src={image} alt={title} className={style.blog__image} />
                        <h1>{title}</h1>
                        <p>{content}</p>
                        <button className={style.btn_add} onClick={(e) => {
                            deleteMutate(id);
                        }}>Delete</button>
                        <div className={style.comment_wrapper}>
                            {commentsQuery.data
                                .filter(({postId}) => postId === id)
                                .map(({id, comment}) => (
                                    <div className={style.comments} key={id}>
                                        <img src="https://www.pngkit.com/png/detail/115-1150171_default-avatar-comments-blank-person.png" className={style.avatar__image} alt="" />
                                        <div className={style.comment}>
                                            <h4>Jānis</h4>
                                            <span>{comment}</span>
                                        </div>
                                    </div>
                                ))}
                            <hr></hr>
                            <div className={style.comments}>
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    handleCommentSubmit();
                                }}>
                                    <label className={style.label}>
                                        <textarea
                                            required
                                            ref={textareaRef}
                                            rows={2}
                                            cols={80} 
                                            placeholder="Write your comment"
                                            value={commentText}
                                            onChange={(e) => {
                                                setCommentText(e.target.value);
                                            }}
                                        />
                                    </label>
                                    <div className={style.wrapperSend}>
                                        <button className={style.btn_add} type="submit">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <Modal updateData={updateData} setUpdateData={setUpdateData} handleEditSubmit={handleEditSubmit} />
        </>
    );
};

export default Blog;