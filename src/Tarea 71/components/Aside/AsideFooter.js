import React from 'react'
import Container from "../Container";
import Icon from "../Icons";
import PText from "../PText";

const AsideFooter = ({ className, text }) => {
    return (
        <Container className={`${className}`}>
            <Icon className="far fa-moon" /> <PText>{text}</PText>
          </Container>
    )
}

export default AsideFooter
