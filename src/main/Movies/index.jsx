const Movies = ({items}) => {
  return (
    <div className="movies-items">
      <div
        className="movies-img"
        style={{ backgroundImage: `url(${items.image})` }}
      ></div>
      <div className="movies-title text-lg">{items.name}</div>
      <div className="movies-details text-sm">
        {items.time} min {items.year}
      </div>
    </div>
  );
};

export default Movies;
