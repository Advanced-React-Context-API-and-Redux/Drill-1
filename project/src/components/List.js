import React, { useState } from "react";

import axios from "axios";

import Card from "./Card.js";

import styled from "styled-components";



const List = () => {

    const [ films, setFilms ] = useState();

    const fetchData = () => {
        axios.get(`https://ghibliapi.herokuapp.com/films`)
        .then(res => {
            console.log(res)
            setFilms(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            {films === undefined ? (
                <div>
                    <p>Please click the button to fetch films data</p>
                    <h1>Hello from the List.js file</h1>
                    <button onClick={fetchData}>Get Films</button>
                </div>
            ) : (
                <div>
                    {films.map(film => (
                        <Card key={film.key} film={film}/>
                    ))}
                </div>
            )}

        </div>
    )
}

export default List;