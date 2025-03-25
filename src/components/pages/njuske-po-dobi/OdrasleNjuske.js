import React, { useEffect, useState } from 'react';
import MediaImg from '../media/MediaImg';
import Slider from "react-slick";
import '../blog/Blog.css';
import '../home/Home.css';

const OdrasleNjuske = () => {
    const [posts, setPosts] = useState([]);

    var heroCategories = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
    };

      useEffect(() => {
            fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/posts?dob=257')
                .then(response => response.json())
                .then(data => setPosts(data))
                .catch(error => console.error('Error fetching posts:', error));
        }, []);
        console.log(posts)
        return (
            <div className="container blog">
                <div className="druga-boja">
                <h1>Odrasle Njuške</h1>
                <h4>Tko su odrasle njuške? Njuške koje su izašle iz ludog doba zvanog pubertet, njuške koje znaju što im odgovara, a što ne, poslušne njuške koje traže isto takvo društvo.</h4>
                </div>
                <div>
                <Slider {...heroCategories}>
                    {posts.map(post => (
                        <div className="row mb-5 top-post druga-boja">
                            <div className="col-md-5 klasa-poravnanja">
                            <MediaImg id={post.featured_media} size="medium" />
                            </div>
                            <div className="col-md-6 offset-md-1 klasa-poravnanja">
                                <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                            </div>
                         </div>
                    ))}
                </Slider>
                </div>
            </div>
        );
    };
    
    export default OdrasleNjuske;