import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component{

    state={
        counter: [
            {id: 1, value:0},
            {id: 2, value:0},
            {id: 3, value:5},
            {id: 4, value:0},
      
        ]
    
    };

    handleDelete = (counterId) =>{

         const counters = this.state.counter.filter(c => c.id !== counterId);

         this.setState({counter : counters});
    }

    Reset = () => {

      const counters = this.state.counter.map(c => {
          c.value = 0; 
          return c;
        })

      this.setState({counter: counters});
    }

    Increment = (counter) =>{

        const counters = [...this.state.counter];
        const index = counters.indexOf(counter);
        counters[index] = {...counter}; 
        counters[index].value++;
        this.setState({counter: counters});
        
        }
    

    render(){

        return (
            <React.Fragment>
            <button onClick={this.Reset} className="btn btn-primary btn-sm m-2">Reset</button>
            {this.state.counter.map( c => <Counter Delete={this.handleDelete} Increment={this.Increment} key={c.id} object={c}><h5>Box no {c.id} </h5></Counter>)}
            </React.Fragment>
        );
    }



}

export default Counters;