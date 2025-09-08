import react from "react";
import { Link } from "react-router-dom";
import CardMaterial from "../components/cardmaterial";
import Grid from "@mui/material/Grid";
import users from "../data/user.json";
import Button from "@mui/material/Button";
import Layout from "../components/layout"

function Index() {
  return (
    <Layout>
    <Grid container spacing={2}>
      <Grid size={12}>
        {" "}
        <h1>welcome to index page</h1>
      </Grid>
      {users.map((item) => {
        return (
          <Grid size={4}>
            <CardMaterial id={item.id} name={item.name} />
          </Grid>
        );
      })}
    </Grid>
    </Layout>
  );
}

export default Index;
