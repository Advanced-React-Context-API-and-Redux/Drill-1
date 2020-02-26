import React from "react";
import styled from "styled-components"

const CardStyle = styled.div`
    width: 200px;

`;

const Title = styled.h1`
    font-size: 2rem;
`;


const Card = ({film}) => {
    // console.log(props);

    const { title, description, director, producer } = film;

    return (
        <CardStyle>
            <Title>{title}</Title>
            <h2>{description}</h2>
            <h2>{director}</h2>
            <h2>{producer}</h2>
        </CardStyle>
    )
}

export default Card;