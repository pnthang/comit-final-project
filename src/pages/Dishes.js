import React,{Component} from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Dish from '../components/Dish';
class Dishes  extends Component{

    state = {
        dishes: null
    }
    componentDidMount(){
        axios.get('/dishes')
        .then(res =>{
            console.log(res.data);
            this.setState({
                dishes: res.data
            })
        })
        .catch(err => console.log(err));
    }
    render(){
        let recentDishesMarkup = this.state.dishes ?(
        this.state.dishes.map(dish => <Dish key={dish.dishId} dish={dish}/>)
        ): (
        <p>Loadding...</p>
        );
        return (
        <Grid container>
            <Grid item sm={8} xs={12}
                >
                {recentDishesMarkup}
            </Grid>
            <Grid item sm={4} xs={12}>
                <p>Profile</p>
            </Grid>
        </Grid>

        )
    }
}

export default Dishes;