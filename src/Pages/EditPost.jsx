import React, { useState, useEffect } from "react";
import { Container, PostForm } from "../Components/index";
import service from "../Appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!slug) {
            navigate('/');
            return;
        }

        service.getPost(slug).then((fetchedPost) => {
            if (fetchedPost) {
                setPost(fetchedPost);
            } else {
                navigate('/'); // Redirect if the post isn't found
            }
        }).catch(() => {
            navigate('/'); // Handle potential errors
        });
    }, [slug, navigate]);

    return post ? (
        <div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null;
}

export default EditPost;
