import React from "react";
import Header from "Clase 70/components/Header";
import NavMenu from "Clase 70/components/NavMenu";
import NavItem from "Clase 70/components/NavItem";
import UserControl from "Clase 70/components/UserControl";
import BlogArticle from "Clase 70/components/BlogArticle";
import BlogImage from "Clase 70/components/BlogImage";
import BlogTitle from "Clase 70/components/BlogTitle";
import BlogContent from "Clase 70/components/BlogContent";
import Comments from "Clase 70/components/Comments";
import Footer from "Clase 70/components/Footer";

const comments = [
  { user: "Loohan", content: "Muy copado eso!" },
  { user: "JodelRey", content: "Lo voy a tener en cuenta" },
  { user: "Dani", content: "Paaah, haberme enterado antes" },
  { user: "Lola", content: "Que manera de trabajar" },
];

function App() {
  return (
    <div className="App">
      <Header>
        <UserControl user="Ada" />
        <NavMenu>
          <NavItem path="">Home</NavItem>
          <NavItem path="">Sobre Mí</NavItem>
          <NavItem path="">Artículos</NavItem>
        </NavMenu>
      </Header>
      <BlogArticle>
        <BlogImage img="https://www.cimaglobal.com/Global/CIMA%20Insights%20Blog/rsz_shutterstock_386845444.jpg" />
        <BlogTitle>Cómo perder tiempo laburando, an essay by me</BlogTitle>
        <BlogContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at
          ligula scelerisque mauris fermentum molestie. Praesent finibus
          dignissim urna eu rutrum. Sed bibendum sagittis ornare. Cras sit amet
          odio risus. Vestibulum aliquam ex odio, a interdum lectus ornare non.
          Quisque at nisl urna. Ut quis leo eget quam tristique lobortis. In
          pulvinar justo ut pretium vulputate. Nulla facilisi. Ut interdum, enim
          quis venenatis pulvinar, leo leo egestas justo, a pharetra leo orci
          non dui. Duis varius ultrices ante eget maximus. Maecenas maximus
          lectus nec tortor pulvinar, non tincidunt metus iaculis. Donec sed
          lacinia orci. Nullam eget nibh ullamcorper, venenatis metus ac,
          eleifend lectus.
        </BlogContent>
        <BlogContent>
          Curabitur sit amet velit enim. Etiam sed tellus nibh. Cras ultricies
          dui eget vulputate consequat. Morbi imperdiet, massa interdum faucibus
          tincidunt, risus odio fermentum mauris, eget convallis libero arcu
          porta tellus. Nam vehicula ultricies purus, quis sagittis dolor. Sed
          facilisis felis non volutpat ullamcorper. Duis consectetur eget quam
          nec tristique. Donec sagittis metus eu ultrices laoreet. Nam consequat
          purus quis euismod pellentesque. Curabitur sagittis, ex at cursus
          semper, enim urna sollicitudin velit, ac congue ex ipsum a mauris. Sed
          porta quam risus, et tristique ex vulputate ac. Aliquam sed elit eget
          urna posuere scelerisque. Nunc magna nulla, scelerisque sed dolor
          viverra, facilisis sodales lectus. In lacinia arcu quam, a viverra
          nisi posuere bibendum.
        </BlogContent>
        <BlogContent>
          Etiam aliquet malesuada nunc luctus convallis. Phasellus justo metus,
          elementum ut felis at, placerat efficitur metus. Etiam sit amet
          ultrices felis, id placerat leo. In aliquam justo risus, in laoreet
          neque facilisis sit amet. Phasellus congue sem sagittis, tempus dui
          consectetur, aliquam ipsum. Curabitur faucibus ipsum eu pretium
          auctor. Pellentesque eleifend nisi sed ultrices accumsan. Nunc
          lobortis ut dui id gravida. Nam ultricies varius posuere. Sed
          volutpat, nisl eget faucibus dapibus, arcu tellus rutrum neque, vel
          sodales nisl sapien aliquam mauris.
        </BlogContent>
      </BlogArticle>
      <Comments comments={comments}> </Comments>
      <Footer>®Loohan 2020 - All rights reserved</Footer>
    </div>
  );
}

export default App;
