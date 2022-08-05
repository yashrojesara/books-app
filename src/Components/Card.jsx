import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    padding: "1em",
    border: "1px solid",
    minWidth: "15em",
    margin: "1em",
    height: "175px",
    width: "30%",
    overflow: "auto",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
    flexDirection: "column",
  },
});

function Card(props) {
  const classes = useStyles();
  const { author, book, rating, description } = props;

  return (
    <div className={classes.card}>
      <div className={classes.title}>
        <div className={classes.author}>
          <span style={{ fontWeight: "bold" }}> {book} </span>
          <span> by {author} </span>
        </div>
        <div>{rating}</div>
      </div>
      <br />
      <span>{description}</span>
    </div>
  );
}

export default Card;
