import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import MediaImg from '../media/MediaImg';
import './Blog.css';
import PostDate from '../../meta/PostDate';
import PostAuthor from '../../meta/PostAuthor';

const BlogSingle = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/posts?slug=${id}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    setPost(data[0]);
                } else {
                    setPost(null);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching post:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Učitavanje...</p>;
    if (!post) return <p>Post not found.</p>;

    return (
        <div className="single-post container">
            <div className="row">
                <div className="col-md-10 m-auto">
                    <h1 dangerouslySetInnerHTML={{ __html: post.title?.rendered }} />
                    {post.featured_media && <MediaImg id={post.featured_media} size="full" />}
                    <div dangerouslySetInnerHTML={{ __html: post.content?.rendered }} />
                    <p>
                        Autor članka: <PostAuthor authorID={post.author} />
                    </p>
                    <p>
                        Objavljeno: <PostDate date={post.date} />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogSingle;