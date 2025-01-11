import { useState } from "react";
function ObjUseState() {

    const [cars, setCars] = useState({
        year: 2024,
        make: "Ford",
        product: "Nissan"
    });

    function changeCarMake(event) {
        setCars(c => ({...cars,make: event.target.value}))
    }
    function changeCarProduct(event) {
        setCars(c => ({...c, product: event.target.value}))
    }
    function changeCarYear(event) {
        setCars(c =>({...c, year: event.target.value}))
    }

    return (
        <>
            Your Favorite car is {cars.make} product from {cars.product} Produce in Year {cars.year}
            <div>
                <input type="text" onChange={changeCarMake} value={cars.make} /> <br /><br />
                <input type="text" onChange={changeCarProduct} value={cars.product} /> <br /> <br />
                <input type="number" onChange={changeCarYear} value={cars.year} /> <br /><br />

            </div>
        </>

    );
}




export default ObjUseState;