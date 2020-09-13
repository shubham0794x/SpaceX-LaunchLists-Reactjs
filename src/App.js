import React from 'react';
import Main from "./container/main";
import Header from "./components/header";
import Footer from "./components/footer";
import "./index.css";
import "./responsive.css";

export default () => {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
};
