import React from "react";

function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
      </ul>
    </>
  );
}

const documentProps = {
  title: "About SpaceX !!!",
  description: "Our mission is to explore the galaxy.",
};

export { Page };
