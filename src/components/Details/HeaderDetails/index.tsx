import React from "react";
import { Container, BannerMovie } from "./HeaderDetails.style";

const HeaderDetails: React.FC = () => {
  return (
    <Container>
      <BannerMovie source={require("./image.png")} />
    </Container>
  );
};

export default HeaderDetails;
