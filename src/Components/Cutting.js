import React from 'react'

const Cutting = (props) => {
    console.log(props);




    const fatLoss = {
        calories: props.weight * 22,
        protein: Math.floor(props.weight * 22 * 0.3 / 4),
        carb: Math.floor(props.weight * 22 * 0.15 / 4),
        fat: Math.floor(props.weight * 22 * 0.5 / 9)
    };


    return(
        <div className="container"> 

        <h3>Fat loss</h3>
            <table>
                <tr>
                    <td>Calories: { fatLoss.calories }</td>
                    <td>Protein: { fatLoss.protein } g</td>
                    <td>Carb:  { fatLoss.carb } g</td>
                    <td>Fat:  { fatLoss.fat } g</td>
                    </tr>
            </table>
        </div>
)}

export default Cutting

