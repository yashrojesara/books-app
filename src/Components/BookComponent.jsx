import { Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import Card from "./Card";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2em",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    padding: "1em",
    border: "1px solid",
    minWidth: "15em",
    margin: "1em",
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

function BookComponent() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>
        Please select any genre from below to get recommendation of book
      </Typography>

      <Tabs style={{ marginTop: "2em" }} value={value} onChange={handleChange}>
        <Tab label="Finance" />
        <Tab label="Programming" />
        <Tab label="History" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <div style={{ marginTop: "1em" }}>
          <Card
            book={"1. Rich Dad Poor Dad"}
            author={"By Robert Kiyosaki"}
            style={classes.card}
          />
          <Card
            book={"2. The Barefoot Investor"}
            author={"by Scott Pape"}
            style={classes.card}
          />
          <Card
            book={"3. The Intelligent Investor"}
            author={"by Benjamin Graham"}
            style={classes.card}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div style={{ marginTop: "1em" }}>
          <Card
            book={"1. Introduction to Algorithms"}
            author={"By Thomas H. Cormen"}
            style={classes.card}
          />
          <Card
            book={"2. The Pragmatic Programmer"}
            author={"by Andrew Hunt & David Thomas"}
            style={classes.card}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div style={{ marginTop: "1em" }}>
          <Card
            book={"1. What Is History"}
            author={"By Edward Hallett Carr"}
            style={classes.card}
          />
          <Card
            book={"2. The Guns of August"}
            author={"by Barbara Tuchman"}
            style={classes.card}
          />
          <Card
            book={"3. Parallel Lives"}
            author={"by Plutarch"}
            style={classes.card}
          />
        </div>
      </TabPanel>
    </div>
  );
}

export default BookComponent;
