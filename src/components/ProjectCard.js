import { useState } from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, tagLine, imgUrl, githubUrl }) => {
  const handleClick = () => {
    window.location.href = githubUrl;
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleClick}>
        <img src={imgUrl} alt="..." />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{tagLine}</span>
        </div>
      </div>
    </Col>
  );
};
