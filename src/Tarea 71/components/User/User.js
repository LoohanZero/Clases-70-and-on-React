import React from "react";
import Image from "Tarea 71/components/Image";

const User = ({ src, alt, className }) => {
  return <Image className={className} src={src} alt={alt} />;
};

export default User;
