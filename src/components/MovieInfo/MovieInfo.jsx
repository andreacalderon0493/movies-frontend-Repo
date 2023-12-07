const MovieInfo = ({ title, runningTime, genre }) => {
  return (
    <div>
      <h4>{title}</h4>
      <div>
        <div>
          <span>{genre} </span>
          <span>{runningTime}</span>
        </div>
        <div>
          <span>{genre}</span>
          <span>{runningTime}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
