import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkEls = links.map(link => {
    return <a key={link} href={`#${link}`}>{link}</a>
  })

  return <nav>{linkEls}</nav>;
}

export default NavBar;
