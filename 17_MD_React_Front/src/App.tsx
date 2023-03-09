import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Blogs from "./pages/Blogs/Blogs";
import NavBar from "./components/navbar/NavBar";
import Blog from "./pages/Blog/Blog";
import FormAddBlog from "./pages/FormAddBlog/FormAddBlog";

function App() {

    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/blog" element={<Blogs />} />
                <Route path="/blog/:id" element={<Blog />} />
                <Route path="/blog/addblog" element={<FormAddBlog />} />
            </Routes>
        </>
    );
}

export default App;
