import axios from "axios";

export const createComment = ({ comment, postId }: any) => {
    return axios
        .post("http://localhost:3004/comments", {
            comment,
            postId
        });
};

export const handleUpdate = ({id, title, content, image}: any)=> {
    return axios
        .put(`http://localhost:3004/blogs/${id}`, {
            title,
            content,
            image
        });
};