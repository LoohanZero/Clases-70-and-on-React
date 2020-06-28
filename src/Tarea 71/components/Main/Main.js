import React from "react";
import Container from "Tarea 71/components/Container";
import Title from "Tarea 71/components/Title";
import style from "Tarea 71/components/Main/main.module.scss";
import Dropdown from "Tarea 71/components/Main/Dropdown/Dropdown";
import Card from "Tarea 71/components/Main/Card/Card";
import User from "Tarea 71/components/User/User";

const Main = () => {
  return (
    <Container as="main" className={`${style.main}`}>
      <Container className={`${style.mainContentContainer}`}>
        <Container as="header" className={`${style.mainHeader}`}>
          <Title level="2" text="My Courses" />
          <Dropdown />
        </Container>
        <Container className={`${style.cardContainer}`}>
          <Card
            title="Abstract Design"
            text="We are going to learn how to use Acrylic Paint to create abstract textures and modify them in Photoshop."
            img="https://cdn.stocksnap.io/img-thumbs/960w/abstract-paint_BO2LNK630N.jpg"
          >
            <User  className={`${style.userIcon}`} src="https://images.generated.photos/5xTJAxouAGPxD-ajHjj1pVg-lBgRFxb97f2PlqFXBIs/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA1ODcyNjIuanBn.jpg" />
            <User  className={`${style.userIcon}`} src="https://images.generated.photos/76QL2gf4STwxApeHYYIFSaugaMZPbOux7-1JcHPjgcY/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA1NjcxNjIuanBn.jpg" />
            <User  className={`${style.userIcon}`} src="https://images.generated.photos/T0-iCaPimuBTymGfOzCWkQ-kO8kaXdJmNfPRj2_fCvo/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA5NTA4MDYuanBn.jpg" />
            <User  className={`${style.userIcon}`} src="https://images.generated.photos/wFsGYybkP6dLBbu9dpwK0yrrB2CTKxG4VRC6AcRRh9Y/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA0MTI2OTcuanBn.jpg" />
           
          </Card>

          <Card
            title="Industrial Design"
            text="This class is an encouraging, empowering experience that will change the way you look at objects all around you."
            img="https://cdn.stocksnap.io/img-thumbs/960w/glass-roof_TME06XKYC0.jpg"
          >
            <User  className={`${style.userIcon}`} src="https://images.generated.photos/r1j56_lL9xZELJf0gvMwrUCIS_9v8lhhXB0XGavzwrM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50LzA2/ODYzNzgucG5n.png" />
            <User  className={`${style.userIcon}`} src="https://images.generated.photos/X2AxI0p-zHknXn7r3Vyd9VEvDO8j7-XNUmWA22oV9I0/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yy/L3YyXzAyNTUxNDAu/cG5n.png" />
            <User  className={`${style.userIcon}`} src="https://images.generated.photos/kS7QqRnL57AC8UATW6PpTyqwrvLZtHamwrOmg9_W0eE/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yy/L3YyXzAwNjkxMDgu/cG5n.png" />
            <User  className={`${style.userIcon}`} src="https://images.generated.photos/bYHXiP4GHlVHZfjkzKynu7JQwavdF454X21SALD85TM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yy/L3YyXzA0NDc3NTQu/cG5n.png" />
           
          </Card>

          <Card
            title="Photograpy"
            text="It includes working with lightning at different times of day and incorporating subjects into a landscape shot."
            img="https://cdn.stocksnap.io/img-thumbs/960w/holding-camera_E42J1R69IH.jpg"
          >
            <User  className={`${style.userIcon}`} src="https://images.generated.photos/ufRzjvBBKE5p9GoFU4IrsHj5x6VIyrwUlXtTZV9Lmjk/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yy/L3YyXzA0NjMyNjcu/cG5n.png" />
            <User  className={`${style.userIcon}`} src="https://images.generated.photos/jffad3o5jMRtP9BZ42u58nwlcLtsbrcoVDN33OyT5oA/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yy/L3YyXzA4OTY3MTYu/cG5n.png" />
            <User  className={`${style.userIcon}`} src="https://images.generated.photos/bOg43FGDD_lMNDotsGJSm8N-UPCL3a3bG7p3pV73nA8/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yy/L3YyXzA2NDYyMzgu/cG5n.png" />
            <User  className={`${style.userIcon}`} src="https://images.generated.photos/RQeWvppwtI_0M2HOl9QlezHQYyHjNf4JezVRk8NONsQ/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yy/L3YyXzA0NTQ0NDMu/cG5n.png" />
           
          </Card>
        </Container>
      </Container>
    </Container>
  );
};

export default Main;
