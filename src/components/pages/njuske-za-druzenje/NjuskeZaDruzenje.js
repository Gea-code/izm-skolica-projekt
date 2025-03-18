import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import MediaImg from '../media/MediaImg';
import '../blog/Blog.css';
import PostAuthor from '../../meta/PostAuthor';

const NjuskeZaDruzenje = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/posts?author=13&categories=8')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);
    console.log(posts)

    return (
        <div className="container blog">
            <div>
                {posts.map(post => (
                    <div className="row mb-5 top-post">
                        <div className="col-md-5">
                        <MediaImg id={post.featured_media} size="medium" />
                        </div>
                        <div className="col-md-6 offset-md-1">
                            <Link to={'/njuskezadruzenje/' + post.slug}>
                            <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                            </Link>
                            <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                            
                        </div>
                     </div>
                ))}
            </div>
        </div>
    );
};

export default NjuskeZaDruzenje;