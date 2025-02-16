import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  var [blog, setblog] = useState([]);
  var navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((res) => {
        console.log(res);
        setblog(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const delValue = (id) => {
    console.log(id);
    axios
      .delete("http://localhost:3001/remove/" + id)
      .then((res) => {
        alert(res.data.message);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const updateValue = (val) => {
    console.log("up clicked");
    navigate("/add", { state: { val } });
  };
  return (
    <div style={{ margin: "2%" }}>
      <Grid container spacing={2}>
        {blog.map((val, i) => {
          return (
            <Grid item xs={12} md={4}>
              <Card sx={{ minWidth: 275 }} key={i}>
                  <CardMedia
                      component = "img"
                      height ="240"
                      image = {val.img_url}>
                  </CardMedia>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 15,textAlign:"left" }}
                    color="text.secondary"
                    gutterBottom
                  >
                  {val.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 , fontSize:30,textAlign:"left" }} color="text.secondary">
                    {val.content}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                
                    onClick={() => {
                      delValue(val._id);

                    }}
                  >
                    
                    DELETE
                  </Button>
                  <Button
              
                    size="small"
                    onClick={() => {
                      updateValue(val);
                    }}
                  >
                    UPDATE
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Home;