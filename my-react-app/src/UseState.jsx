import { useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';






function LoginForm() {

    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [payment, setPayment] = useState();
    const [password, setPassword] = useState();
    const [gender, setGender] = useState();
    const [color, setColor] = useState("#d90808");



    function nameChange(e) {
        setName(e.target.value)
    }

    function lastnameChange(e) {
        setLastname(e.target.value)
    }

    function emailChange(e) {
        setEmail(e.target.value)
    }

    function genderChange(ev) {
        setGender(ev.target.value)
    }

    function paymentChange(e) {
        setPayment(e.target.value)
    }

    function passwordChange(e) {
        setPassword(e.target.value)
    }

    const colorChange = (event) => {
        setColor(event.target.value)
    }

    return (

        <>
            <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3">

                <Form.Control type="text" onChange={nameChange} name={name} placeholder="First Name" />

            </FloatingLabel>

            <p>name: {name}</p>

            <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3">

                <Form.Control type="text" name={lastname} onChange={lastnameChange} placeholder="Last Name" />
                <p>Last Name:  <span>{lastname}</span></p>

            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">

                <Form.Control type="email" onChange={emailChange} name={email} placeholder="Email Address" />
                <p>Email: <span> {email}</span></p>
            </FloatingLabel>

            <div className="mb-3">
                <p>Select Gender</p>
                <label >
                    <input type="checkbox" value="Female"
                        checked={gender === "Female"}
                        onChange={genderChange} name="{gender}" />

                    Female
                </label>


                <label >
                    <input type="checkbox" value="Male"
                        checked={gender === "Male"}
                        onChange={genderChange} name="{gender}" />
                    Male
                </label>
                <p>Gender set to : <span>  {gender}</span></p>
            </div>

            <Form.Select name={payment} onChange={paymentChange} value={payment}>
                <option disabled selected>Select Payment Option</option>
                <option value="Visa">Visa</option>
                <option value="Master Card">Master Card</option>
                <option value="Paypal">Paypal</option>
                <option value="Gift Card">Gift Card</option>
            </Form.Select>
            <p>Selcted Payment: <span> {payment}</span></p>





            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" name={password} onChange={passwordChange} placeholder="Password" />
                <p>Password Entered: <span>{password}</span></p>
            </FloatingLabel>

            <div className="colorContainer">

                <h3 className="pickColorHeading">Pick Color</h3>

                <div className="colordisplay" style={{ backgroundColor: color, width: "300px", height: "300px" }}
                    value={color}>
                </div>

                <p className="colorCode"> <span> color code: {color}</span>
                    </p>
                <input className="colorselector" type="color" value={color} onChange={colorChange} />
            </div>


            <input type="submit" onSubmit={password} value="Submit" />
        </>
    );

}

export default LoginForm