import React from "react";

export default class MovieCart extends React.Component{
    render(){
        const{movies,addStars,removeStars,favouritebtn,Cartbtn}=this.props;
        const {title,plot,price,rating,stars,fav,cart,poster} = this.props.movies;
            return(
            <div className="main">
                <div className="movie-card">

                    <div className="left">
                        <img alt="poster" src={poster}/>
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs {price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img alt="decrease" src="https://cdn-icons-png.flaticon.com/128/43/43625.png" className="str-btn"  onClick={()=>{removeStars(movies)}}/>
                                <img alt="stars" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars" />
                                <img alt="increase" src="https://cdn-icons-png.flaticon.com/128/32/32563.png" className="str-btn" onClick={() =>{addStars(movies)}} />
                                <span> {stars}</span>
                            </div>
                            <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={()=>favouritebtn(movies)}>{fav?"Unfavourite":"favourite"}</button>
                            <button className={cart?"uncart-btn":"cart-btn"} onClick={()=>Cartbtn(movies)}>{cart?"Remove":"Add to Cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
