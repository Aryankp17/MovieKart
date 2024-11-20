import { Component } from "react";
import Movielist from "./movieslist";
import Navbar from "./navbar";
import { movies } from "./moviedata";
class App extends Component {
  constructor(){
    super();
    this.state ={
        movies:movies,
        cartCount:0
    }
  }
  handleIncstar=(movie)=>{
    const{movies}=this.state;
    const mid = movies.indexOf(movie)
    if(movies[mid].stars>=5){
        return;
    }
    movies[mid].stars+=0.5;

    this.setState({
        movies:movies

    })
  }
  handledecstar=(movie)=>{
    const{movies}=this.state
    const mid = movies.indexOf(movie)
    if(movies[mid].stars<=0){
        return;
    }
    movies[mid].stars-=0.5
    this.setState({
        movies:movies
    })
  }
  handlefavbtn=(movie)=>{
    const{movies}=this.state
    const mid = this.state.movies.indexOf(movie)
    movies[mid].fav=!movies[mid].fav
    this.setState({
        movies:movies
    })


  }
  handleCart=(movie)=>{
    let{movies,cartCount}=this.state
    const mid = movies.indexOf(movie)
    movies[mid].cart=!movies[mid].cart
    if(movies[mid].cart){
      cartCount=cartCount+1
    }else{
      cartCount-=1
    }
    this.setState({
        movies:movies,
        cartCount:cartCount
        
    })


  }
  render(){
    const {movies,cartCount}=this.state
    return (
      <>
      <Navbar cartCount={cartCount} />
      <Movielist movies={movies}
      addStars={this.handleIncstar}
      removeStars={this.handledecstar} 
      favouritebtn={this.handlefavbtn} 
      Cartbtn={this.handleCart}
      />    
      </>
    
    );
  }
}

export default App;
