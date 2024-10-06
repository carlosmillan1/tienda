import '../assets/css/CardPizza.css'
const CardPizza = ({ name, price, ingredients, img }) => {
    return (
      <div className="card" id='carta' style={{ width: '18rem' }}>
        <img className="card-img-top" src={img} alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p id='ingrediente' className="card-text">Ingredientes: <br /> 🍕 {ingredients.join(', ')}</p>
          <p className="card-text">Precio: ${price.toLocaleString()}</p>
          <a href="#" className="btn btn-primary">Ver Más</a>
          <a href="#" className="btn btn-success">🛒Añadir</a>
        </div>
      </div>
    );
  };
  
  export default CardPizza;
  