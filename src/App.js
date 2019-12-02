import React from 'react';
import axios from 'axios';
import Loading from './components/Loading';
import Header from './components/Header'
import Categories from './components/Categories'
import Dishes from './components/Dishes'

import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data:[],
      categories:[],
      dishes: [],
      catSelected: [],
      selectedDishes:[],
      favoriesDishes:[]
    }
  }


  componentWillMount(){
    this.setState({loading: true});
    axios.get('./data/menu-cat.json')
          .then(res =>{
            let cats = res.data
            this.setState({
              categories: cats,
              catSelected: cats[0]
            });
          })
          .catch(function(error){
            console.log(error);
          })
    axios.get('./data/menu1.json')
          .then(res =>{
            let resData = res.data
            let selectedData = this.state.data.filter((dish)=>{ return dish.catid===this.state.catSelected.id});
            this.setState({
              loading: false,
              data: resData,
              dishes: selectedData,
            });
          })
          .catch(function(error){
            console.log(error);
          })

  }
  selectCat = (cat) => {
    const selectedData = this.state.data.filter((dish)=>{ return dish.catid===cat.id});
    this.setState(
      {
        catSelected:cat,
        dishes: selectedData,
      }
    )
  }
  selectDish = (addDish) => {
    const selectedDishesData = this.state.selectedDishes.push(addDish)
    this.setState(
      {
        selectedDishes:selectedDishesData,
      }
    )
  }
  removeDish = (rmDish) => {
    const selectedDishesData = this.state.selectedDishes.filter((dish)=>{ return dish.id!==rmDish.id})
    this.setState(
      {
        selectedDishes:selectedDishesData,
      }
    )
  }

  search = (e) => {
    const searchQ = e.target.value.toLocaleLowerCase();
    const dishesData= this.state.data.filter(function(dishes) {
      return dishes.name.toLocaleLowerCase().lastIndexOf(searchQ)>-1;
    });
    this.setState({
        dishes: dishesData
    })
  }

  render (){

    if(this.state.loading === false) {
        return(
            <div className="App">
              <div className="left-container">
                {/* <img className="left-logo" src="./images/logo.jpg"/> */}
                <h1>Nelli's Kitchen</h1>
                <Categories
                  categories={this.state.categories}
                  catSelectedId={this.state.catSelected.id}
                  selectCat={this.selectCat}
                />
              </div>
              <div className="main-container">
                <Header
                  search={this.search}/>
                <Dishes
                  dishes={this.state.dishes}
                  selectDish={this.selectDish}
                  removeDish={this.removeDish}
                  />
              </div>
              <div className="right-container">

              </div>

            </div>
        )
     }else{
        return (
          <Loading />
        )
     }

  }
}

export default App;
