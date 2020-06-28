import React from "react";
import Comment from "Clase 70/components/Comment";
import CommentUser from "Clase 70/components/CommentUser";
import CommentContent from "Clase 70/components/CommentContent";

// Comments
// Crear un componente Comments que tome como prop comments un array de objetos, y renderice
// un componente section
// un componente h2, dentro de section que tenga como texto 'Comentarios'
// por cada ítem de comments, generar un componente Comment con CommentUser y CommentContent dentro suyo

const Comments = ({ comments }) => {
  return (
    <section>
      <h2>Comentarios</h2>
      {comments.map((comment) => (
        <Comment>
          <CommentUser>{comment.user}</CommentUser>
          <CommentContent>{comment.content}</CommentContent>
        </Comment>
      ))}
    </section>
  );
};

export default Comments;
