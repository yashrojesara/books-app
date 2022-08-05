import BookComponent from "./Components/BookComponent";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <BookComponent />
      <Footer />
    </div>
  );
}

export default App;
