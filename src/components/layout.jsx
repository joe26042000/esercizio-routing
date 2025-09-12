import Container from "@mui/material/Container";
import React from "react";

function Layout(props) {
  return (
    <Container
      maxWidth={false}
      style={{
        backgroundColor: "rgb(210, 209, 217)",
        padding: 0,
        minHeight: "100vh",
        margin: 0,
      }}
    >
      <div
        style={{
          height: "100px",
          backgroundColor: "rgba(68, 20, 82, 0.84)",
        }}
      >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDMt4gAFjTCFjaMybI3vAlgw82rkHjtyOUA&s"
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
          backgroundColor: "", /*tolto il footer*/
        }}
      ></div>
    </Container>
  );
}

export default Layout;
