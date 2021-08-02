import exploding_head from "../images/exploding_head.gif";
const Movie = ({ data, addingWatched }) => {
  if (data.length === 0) {
    return (
      <div className={"notfound notfound--wrapper"}>
        <img
          className={"notfound__image"}
          src={exploding_head}
          alt={"notfound"}
        />
        <span className={"notfound__title"}>Oooops, where is movie ?!</span>
      </div>
    );
  } else {
    return (
      <>
        <section className={"movie section--movie"}>
          {data.map((val, ind) => (
            <div
              onClick={() => {
                addingWatched(val);
              }}
              key={ind}
              className={"movie__wrapper"}
            >
              <span className={"movie__title"}>{val.Title}</span>
              <img
                className={"movie__image"}
                src={val.Poster}
                alt={val.Title}
              />
            </div>
          ))}
        </section>
      </>
    );
  }
};
export default Movie;
