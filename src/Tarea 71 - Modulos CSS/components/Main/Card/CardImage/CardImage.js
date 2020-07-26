import React from 'react';
import Image from "Tarea 71/components/Image";
import Container from "Tarea 71/components/Container";
import style from "Tarea 71/components/Main/Card/CardImage/cardimage.module.scss";

const CardImage = ({src, alt}) => {
    return (
        <Container className={`${style.cardImage}`} >
            <Image src={src} alt={alt} />
        </Container>
    )
}

export default CardImage
