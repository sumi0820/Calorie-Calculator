import React, { Component } from 'react'
import Cutting from './Cutting'
import Bulking from './Bulking'

class Weight extends Component {
    state ={
        Weight:'0',
        Bodyfat:'0'
    }

    handleWeight = (e) => {
        this.setState({
            Weight: e.target.value
        });
    }

    handleBodyFat = (e) => {
        this.setState({
            Bodyfat: e.target.value
        });
    }



    render() {
        
        const fatMass = Math.floor(this.state.Weight * (this.state.Bodyfat / 100));
        const muscleMass = this.state.Weight - fatMass;

        return (
            <div className="container">
                <div className="row">
                    <div className="input-field col s6">
                        <form>
                            <input type="text" onChange={this.handleWeight} placeholder="Enter your weight"/>Kg
                        </form>
                        <form>
                            <input type="text" onChange={this.handleBodyFat} placeholder="Enter your body fat"/>%
                            </form>
                    </div>

                </div>

                 <div className="row">
                 <div class="col s6">
                    <table>
                      <tr>
                        <p> Weight: {this.state.Weight} Kg</p>
                        <p> Body Fat: {this.state.Bodyfat} %</p>
                      </tr>
                    </table>   
                    </div>

                    <div class="col s6">
                    <table>
                      <tr>
                        <p>Current Muscle Mass: {muscleMass} Kg</p>     
                        <p>Current Fat Mass: {fatMass} Kg</p>
                     </tr>
                    </table>  
                    </div>
                </div>
                <div className="container">
                     <Cutting 
                        weight={this.state.Weight} 
                        bodyfat={this.state.Bodyfat} 
                    />
                    <Bulking 
                        weight={this.state.Weight} 
                        bodyfat={this.state.Bodyfat} 
                    />
                 </div>
            </div>
            )
    }
}

export default Weight;
