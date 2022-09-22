import React from "react";

function Footer (){

    const date = new Date();
    let year = date.getFullYear();

  return (
    <footer>
      <p>copywrite @ {year}</p>
    </footer>
  );
}

export default Footer;
