import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import "react-rangeslider/lib/index.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../public/icons/flaticon/flaticon.css";
import "../public/icons/font-awesome/font-awesome.min.css";
import "../public/icons/line-icons/lineicons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <SimpleReactLightbox>
      <Component {...pageProps} />
    </SimpleReactLightbox>
  );
}

export default MyApp;
