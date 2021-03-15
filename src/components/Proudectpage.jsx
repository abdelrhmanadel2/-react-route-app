
export const Proudectpage = ({item}) => {
    return (
        <div className="row flex-column align-items-center">
        <div className="col-6">
        <img className="card-img-top img-fluid" style={{display: "block"}} src={item.image} alt="cap"/>
        </div>
        <div className="card-body py-5">
            <h3> {item.title}</h3>
            <p className="card-text">{item.description}</p>
            <small>{item.category}</small>
            <h3>Price:</h3>
            <p  style={{fontWeight: "font-weight"}}>{item.price} $</p>
            <div className="d-flex justify-content-between align-items-center ">
                <button type="button" className="btn btn-sm btn-outline-secondary w-25 ml-auto">Add to cart</button>
            </div>


        </div>
    </div>
  
    )
}
export default Proudectpage;