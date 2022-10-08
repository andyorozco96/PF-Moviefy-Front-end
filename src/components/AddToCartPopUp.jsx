import React,{ useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PopUpTemplate from './PopUpTemplate'
import style from '../scss/components/_addToCartPopUp.module.scss'
import { getShowtimeByMovieId, addToCartDisplay, addToCart} from '../redux/actions/cart'

export default function AddToCartPopUp() {

    const dispatch = useDispatch()

    const display = useSelector( state => state.cartReducer.display)
    const movie = useSelector( state => state.cartReducer.takenTickets)
    const showtimes = useSelector ( state => state.cartReducer.showtime)


    //==================ESTADO DEL CONTADOR / FUNCION SELECCIONADA ==================
    
    const [value, setValue] = useState(1)

    const [selectedShowtime, setSelectedShowtime] = useState({})



    //======================= SE DEBE DEFINIR DONDE PASAR EL PRECIO ========================//
    //======================= SE DEBE DEFINIR DONDE PASAR EL PRECIO ========================//
    //======================= SE DEBE DEFINIR DONDE PASAR EL PRECIO ========================//
    //======================= SE DEBE DEFINIR DONDE PASAR EL PRECIO ========================//
    //======================= SE DEBE DEFINIR DONDE PASAR EL PRECIO ========================//


    useEffect(() => {
        dispatch(getShowtimeByMovieId(movie.id))
    }, [movie])

    function handleDisplay(){
        dispatch(addToCartDisplay('none'))
    }

    function handleSelectChange(index){

        setSelectedShowtime({
            showtimeId: showtimes[index]._id,
            movieTitle: showtimes[index].movieTitle,
            image: showtimes[index].image,
            dateTime: showtimes[index].dateTime,
            format: showtimes[index].format,
            roomId: showtimes[index].roomId,      
        })

    }

    function handleSubmit(){
        setValue(value)
        dispatch(addToCart({...selectedShowtime, movieId: movie.id, tickets: value}))
    }

    
    function selectPlaylistDiv(){

        return (

            <div className={style.container_addToCartPU}>
                <h2>Add<span>'{movie.title}'</span>tickets to cart</h2>
                <hr></hr>
                <h3>Choose showtime</h3>

                <select onChange={(e)=> handleSelectChange(e.target.value)}>
                    <option defaultValue="prueba"></option>
                    {
                    showtimes.length ? showtimes.map((p, index) =>{
                        return <option key={p._id} value={index}>

                            {new Date(p.dateTime).toLocaleString().replace(",", " -").substring(0, 17)}Hs • {p.format}
                            </option>
                    })
                    : <option disabled>You don't have any showtime</option>}
                </select>
                    
                 <h3>How many tickets?</h3>   
                <div className={style.counter}>
                    <span className={style.minus} onClick={() => value <= 1 ? setValue(value) : setValue(value - 1)}><p>-</p></span>
                    <input type="number" className={style.count} value={value}/>
                    <span className={style.plus} onClick={() => setValue(value + 1)}><p>+</p></span>
                </div>
                <button type='submit' onClick={() => handleSubmit()}>Go to cart</button>

            </div>
        )
    }

    return (
        
        <PopUpTemplate displayState={display} handleOnClose={handleDisplay} content={selectPlaylistDiv()}/>
    )
}
