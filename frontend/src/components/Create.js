import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../hooks/useAuthContext'
// import "./BMI.css"
const Create = () => {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('Male');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(0);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { user } = useAuthContext()


    // const details2 = { username: "Om" };
    // const response2 = await fetch('/get-calculations', {
    //     method: 'POST',
    //     body: JSON.stringify(details2),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // })
    // console.log("--------->", response2)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userr= user.email;
        const temp = Math.pow((height / 100), 2);
        console.log(temp);
        const temp2 = weight / temp;
        console.log(`temp2: ${temp2}`)
        setBmi(temp2);

        const details = { age, gender, height, weight, username:userr , bmi: temp2 };
        console.log(details);
        const response = await fetch('/h/calculate', {
            method: 'POST',
            body: JSON.stringify(details),
            headers: {
                'Content-Type': 'application/json'
            }
        })



        console.log(height, weight);
        const json = await response.json();
        console.log(`json: ${json}`)
        console.log(`response.ok: ${response.ok}`)

        if (!response.ok) {
            setError(json.error);
        }
        else if (response.ok) {
            if (temp2 < 18.5) {
                navigate(`/underweight?=${temp2.toString()}`);
            }
            else if (temp2 >= 18.5 && temp2 < 25) {
                navigate(`/normal?=${temp2.toString()}`);
            }
            else if (temp2 >= 25) {
                navigate(`/overweight?=${temp2.toString()}`);
            }
            setAge('');
            setGender('');
            setHeight('');
            setWeight('');
            setError(null);
            setBmi(0);
            console.log(`New data: ${json}`);
        }
    }
    return (<div className="create">
        <h2>Calculate your BMI</h2>
        <form onSubmit={handleSubmit}>
            <label className="parameters">Age: </label>
            <input
                type="text"
                required
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <fieldset
                value={gender}
                onChange={(e) => setGender(e.target.value)}>
                <legend className="parameters">Gender:</legend>

                <div>
                    <input type="radio" id="Male" name="Gender" value="Male" className="parameters"
                        checked onClick={() => { setGender("Male") }} />
                    <label for="Male" className="parameters">Male</label>
                </div>

                <div>
                    <input type="radio" id="Female" name="Gender" className="parameters" value="Female" onClick={() => { setGender("Female") }} />
                    <label for="Female" className="parameters">Female</label>
                </div>
            </fieldset>
            <label className="parameters">Height: </label>
            <input
                type="text"
                required
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="in cm"
            />
            <label className="parameters">Weight: </label>
            <input
                type="text"
                required
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="in kg"
            />
            <button>Calculate</button>
        </form>
    </div>
    
    );
}

export default Create;