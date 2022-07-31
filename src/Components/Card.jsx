function Card(props) {
  const { author, book, style } = props;

  return (
    <>
      <div className={style}>
        <span style={{ fontWeight: "bold" }}> {book} </span>
        <span> {author} </span>
      </div>
    </>
  );
}

export default Card;
