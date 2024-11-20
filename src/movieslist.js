import { Component } from "react";
import MovieCart from "./movie-card";
export default class Movielist extends Component{
    
    
    render(){
        const {movies,addStars,removeStars,favouritebtn,Cartbtn}=this.props;
        return(
            <>
            {movies.map((movie)=>(<MovieCart movies={movie} 
                                            addStars={addStars} 
                                            removeStars={removeStars} 
                                            favouritebtn={favouritebtn}
                                            Cartbtn={Cartbtn}
                                            key={movie.id}/>))}
            </>
        )
    }
}