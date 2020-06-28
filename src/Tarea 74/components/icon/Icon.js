import React from "react";
import { FaHome, FaHeart, FaStar } from "react-icons/fa";

const ICONS = {
  home: FaHome,
  heart: FaHeart,
  start: FaStar,
};

const Icon = ({ name, size, color }) => {
  const SelectedIcon = ICONS[name];

  return <SelectedIcon  />;
};

export default Icon;
