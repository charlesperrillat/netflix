const Section = (props) => {
  console.log(props.images);
  return (
    <section>
      <h2 key={props.category}>{props.category}</h2>
      <div className="movie-section">
        {props.images &&
          props.images.map((e) => {
            return <img src={e} />;
          })}
      </div>
    </section>
  );
};

export default Section;
