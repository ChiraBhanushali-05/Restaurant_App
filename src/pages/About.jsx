import React from "react";
import { Box, Typography } from "@mui/material";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
          Welcome to My Restaurant, where culinary passion meets exceptional
          service. At My Restaurant, we believe that dining is not just about
          the food, but about the entire experience. Our journey began with a
          simple idea: to create a space where guests can enjoy delicious,
          thoughtfully prepared meals in a warm and inviting atmosphere. Our
          team of talented chefs uses only the freshest ingredients, sourced
          locally whenever possible, to craft a menu that celebrates the rich
          flavors of our region. From hearty classics to innovative new dishes,
          every item on our menu is designed to delight your taste buds and
          bring people together around the table.
        </p>
        <br />
        <p>
          Our commitment to excellence extends beyond the kitchen. We take pride
          in offering a welcoming environment where every guest feels valued and
          at home. Whether you're here for a casual lunch, a romantic dinner, or
          a special celebration, our attentive staff is dedicated to ensuring
          your visit is memorable. At My Restaurant, we strive to make every
          meal an occasion to remember, with exceptional service and a focus on
          creating lasting connections with our community. Thank you for
          choosing us, and we look forward to serving you soon.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
