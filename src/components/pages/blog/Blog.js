import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import MediaImg from '../media/MediaImg';
import './Blog.css';
import PostDate from '../../meta/PostDate';
import PostAuthor from '../../meta/PostAuthor';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/posts?author=13&categories=1')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div className="container blog prva-boja">
            <h1>Blog</h1>
            <div>
                {posts.map(post => (
                    <div className="row mb-5">
                        <div className="col-md-5">
                        <MediaImg id={post.featured_media} size="medium" />
                        </div>
                        <div className="col-md-6 offset-md-1">
                            <Link to={'/blog/' + post.slug}>
                            <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                            </Link>
                            <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                            <p>
                                Autor članka: <PostAuthor authorID={post.author} />
                            </p>
                            <p>
                                Objavljeno: <PostDate date={post.date} />
                            </p>
                            
                        </div>
                     </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;