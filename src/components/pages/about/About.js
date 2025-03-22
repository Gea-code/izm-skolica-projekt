import React, { useEffect, useState } from "react";
import './About.css';
import '../home/Home.css';

const About = () => {
    const [ data, setData] = useState(null);

     useEffect(
            () => {
                fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/pages/335')
                .then(response => response.json())
                .then(data => setData(data))
            }, []
        );

    if(!data) return <p>Učitavanje...</p>;

    return (
        <div className="prva-boja" style={{ paddingTop: "100px" }} dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
    );
};

export default About;