import Container from "@mui/material/Container";
import React from "react";

function Layout(props) {
  return (
    <Container
      maxWidth={false}
      style={{
        backgroundColor: "#00ff00",
        padding: 0,
        minHeight: "100vh",
        margin: 0,
      }}
    >
      <div
        style={{
          height: "100px",
          backgroundColor: "#ff00ff",
        }}
      >
        <img src="https://toppng.com/uploads/preview/pokeball-11530983114udekdh4r4x.png"
        style={{
            height:"100px",
        }}>
        </img></div> <div style={{
          flex: 1, display: "flex"
        }}>{props.children}</div>
      
       <div
        style={{
          position: "fixed",
          bottom:0,
          left:0,
          right:0,
          height: "100px",
          backgroundColor: "#ff00ff",
        }}
      ></div>
    </Container>
  );
}

export default Layout;
