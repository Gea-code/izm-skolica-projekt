import React, { useEffect, useState } from "react";

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

    return(
            <div dangerouslySetInnerHTML={{__html:data.content.rendered}} />
    );
};

export default About;