const Movie = ({ data, removeFav }) => {
  if (data.length === 0) {
    return null;
  } else {
    return (
      <>
        <div className={"movie section--movie"}>
          {data.map((val, ind) => (
            <div
              onClick={() => removeFav(val)}
              key={ind}
              className={"movie__wrapper"}
            >
              <span className={"movie__title"}>Watched</span>
              <img
                className={"movie__image"}
                src={val.Poster}
                alt={val.Title}
              />
            </div>
          ))}
        </div>
      </>
    );
  }
};
export default Movie;
