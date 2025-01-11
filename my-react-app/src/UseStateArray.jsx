import { useState } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'


export const UseStateArray = () => {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);


    function addFood(event) {
        const newfood = document.getElementById("newfood").value;
        document.getElementById("newfood").value = "";
        setFoods(f => [...f, newfood])
    }

    function removeFood(index) {
        setFoods(f => f.filter((_, i) => i !== index))
    }

    return (

        <div>
            <h2>List Of Foods</h2>


            <ul style={{ listStyle: "disc" }}>
                {foods.map((food, index) => <li style={{ width: "fit-content" }} key={index}
                >{food}
                    &nbsp;
                    <Button variant="danger" style={{
                        borderRadius: "10px",
                        margin: "10px", padding: "5px"
                    }} onClick={() => removeFood(index)}>Remove Food</Button></li>)}
            </ul>
            <input type="text" id="newfood" placeholder="Add new food" /> <br />
            <Button style={{margin: "5px"}} onClick={addFood}>Add Food</Button>
        </div>
    );
}

export const UseStateArrayList = () => {

    const [car, setCar] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");


    function AddCar() {

        const newCar = {
            carYear: year,
            carMake: make,
            carModel: model
        }
        setCar(c => [...c, newCar])
        setMake("")
        setModel("")
        setYear(new Date().getFullYear())

    }

    function handleYearchange(event) {
        setYear(event.target.value)
    }
    function handleMakechange(event) {
        setMake(event.target.value)
    }
    function handleModelchange(event) {
        setModel(event.target.value)
    }
    function removeCar(index) {
        setCar(c => c.filter((_, i) => i !== index))
    }



    return (


        <div>

            <h3>List Of Cars</h3>

            <ul>
                {car.map((carelement, index) =>
                    <li style={{listStyle: "disc", margin: "5px", width: "fit-content"}} 
                    key={index}>{carelement.carYear} {carelement.carMake} {carelement.carModel}
                    &nbsp;  <Button variant="primary" onClick={() => removeCar(index)}> Remove Car</Button>
                    </li>
                )}
            </ul>
            <input type="number" value={year} onChange={handleYearchange} /> <br /> <br />
            <input type="text" value={make} onChange={handleMakechange} /><br /> <br />
            <input type="text" value={model} onChange={handleModelchange} /><br /> <br />
            <Button variant="success" onClick={AddCar}>Add Car Detail</Button>

        </div>
    );
}
