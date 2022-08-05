import { Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import Card from "./Card";
import { financeBooks, historyBooks, programmingBooks } from "./books";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "auto",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "1em",
    width: "100%",
    justifyContent: "center",
    flexFlow: "wrap",
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

      <Tabs
        style={{ marginTop: "0.5em" }}
        value={value}
        onChange={handleChange}
      >
        <Tab label="Finance" />
        <Tab label="Programming" />
        <Tab label="History" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <div className={classes.wrapper}>
          {financeBooks.map((book) => {
            return (
              <Card
                key={book.id}
                author={book.author}
                book={book.title}
                rating={book.rating}
                description={book.description}
              />
            );
          })}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={classes.wrapper}>
          {programmingBooks.map((book) => {
            return (
              <Card
                key={book.id}
                author={book.author}
                book={book.title}
                rating={book.rating}
                description={book.description}
              />
            );
          })}
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={classes.wrapper}>
          {historyBooks.map((book) => {
            return (
              <Card
                key={book.id}
                author={book.author}
                book={book.title}
                rating={book.rating}
                description={book.description}
              />
            );
          })}
        </div>
      </TabPanel>
    </div>
  );
}

export default BookComponent;
