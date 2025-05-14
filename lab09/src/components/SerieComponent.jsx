function SerieComponent(props) {
  return (
    <div className="col-md-4">
      <div className="card">
        <img className="card-img-top" src={props.image} alt="img" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.genre}</p>
          <button className="btn btn-primary">Description</button>
        </div>
      </div>
    </div>
  );
}

export default SerieComponent;
