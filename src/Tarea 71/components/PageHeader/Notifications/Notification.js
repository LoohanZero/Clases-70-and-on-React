import React from 'react'
import Container from "../../Container"
import { IoMdNotificationsOutline } from "react-icons/io";
import style from "../Notifications/notification.module.scss";


const Notification = () => {
    return (
        <Container className={`${style.notificationsContainer}`}>
            <IoMdNotificationsOutline className={`${style.icon}`} />
            <Container className={`${style.notificationDot}`} ></Container>
        </Container>
    )
}

export default Notification
