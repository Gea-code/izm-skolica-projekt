import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleCountry = () => {

    const {name} = useParams();
    const [country, setCountry] = useState(null);

    useEffect(
        () => {
            fetch('https://restcountries.com/v3.1/alpha/' + name)
            .then(response => response.json())
            .then(data => setCountry(data[0]))
        }, [name]
    );

    if(!country) return <p>Učitavanje...</p>;
    return(
        <>
        <div className="container">
            <p>{country.region}</p>
            <p>{country.subregion}</p>
        </div>
        </>
    );
};

export default SingleCountry;