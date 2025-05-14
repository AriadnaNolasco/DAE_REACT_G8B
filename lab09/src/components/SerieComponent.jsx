function SerieComponent(props) {
  return (
    <div className="card">
      <img
        className="card-img-top img-fluid"
        src={`/img/${props.imagen}`}
        alt={props.nombre} 
        style={{ height: '250px', objectFit: 'cover' }}/>
      <div className="card-body">
        <h5 className="card-title">{props.nombre}</h5>
        <p className="card-text" > {props.categoria}</p >
        <button className="btn btn-primary" > Description</button >
      </div>
    </div>
  )

}

export default SerieComponent
