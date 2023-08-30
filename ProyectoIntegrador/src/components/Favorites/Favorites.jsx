// import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import { filterCards, orderCards } from "../../redux/actions/actions";




const Favorites = () => {


    const dispatch = useDispatch();
    const favorites = useSelector(state=>state.favorites)

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    }
    

    return(
        <div>
            <select placeholder="Order" onChange={handleOrder}>
            {['Ascendente','Descendente'].map(order=> (
                    <option value={order}>{order}</option>
                ))}    
            </select>
            <select placeholder="Gender" onChange={handleFilter}>
                {/* <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Genderless'>Genderless</option>
                <option value='unknown'>unknown</option> */}
                {['All','Male','Female','Genderless','unknown'].map(gender=>(
                    <option value={gender}>{gender}</option>
            ))}
            </select>
            <Cards characters={favorites}/>
        </div>
    )
}

// const mapStateToProps = state => {
//     return{
//         favorites: state.favorites,
//     }
// };



// export default connect(mapStateToProps,null)(Favorites);
export default Favorites;