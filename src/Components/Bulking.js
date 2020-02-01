import React from 'react'

const Bulking = (props) => {
    console.log(props);

    const fatMass = props.weight * (props.bodyfat / 100);
    const muscleMass = props.weight - fatMass;
    const calories = Math.floor(muscleMass * 44);
    const protein = Math.floor(muscleMass * 2);
    const fat = Math.floor((calories * 0.3) / 9);
    const carb = Math.floor((calories - (protein * 4) - (fat * 9)) / 4);


    return(
        <div className="container">
        <h3>Bulk Up</h3>
            <table>
                <tr>
                    <td>Calories: { calories }</td>
                    <td>Protein: { protein } g</td>
                    <td>Carb:  { carb } g</td>
                    <td>Fat:  { fat } g</td>
                    </tr>
            </table>   
        </div>
)}

export default Bulking

