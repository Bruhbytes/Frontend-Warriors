import { useState } from "react";
const PredictForm = () => {
    const [sub, setSub] = useState(0);
    const [Age, setAge] = useState('');
    const [SysBP, setSysBP] = useState('');
    const [DiaBP, setDiaBP] = useState('');
    const [HR, setHR] = useState('');
    const [Glucose, setGlucose] = useState('');
    const [TotChol, setTotChol] = useState('');
    const [CiggsperDay, setCiggsperDay] = useState('');
    const [CurrSmok, setCurrSmok] = useState('');
    const [BPMeds, setBPMeds] = useState('');
    const [Diab, setDiab] = useState('');
    const [result, setResult] = useState('');

    const insertData = () => {
        fetch(`http://localhost:5000/prediction`, {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Age, SysBP, DiaBP, HR, Glucose, TotChol, CiggsperDay, CurrSmok, BPMeds, Diab })
        })
            .then(response => response.json())
            .then(body => {
                setResult(body)
                setSub(1)
            })
            .catch(error => console.log(error))
    }



    const handleSubmit = (event) => {
        event.preventDefault()
        insertData()
        setAge('')
        setSysBP('')
        setDiaBP('')
        setHR('')
        setGlucose('')
        setTotChol('')
        setCurrSmok('')
        setDiab('')
        setBPMeds('')
        setCiggsperDay('')
    }

    return (<div> <>{!sub && <form onSubmit={handleSubmit}>
        <div className="create">
            <label for="Age">Age</label>
            <input type="number" className="form-control" id="Age" name="Age" aria-describedby="emailHelp"
                placeholder="Enter age" value={Age}
                onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="create">
            <label for="SysBP">Systolic BP</label>
            <input type="number" className="form-control" id="SysBP" name="SysBP" aria-describedby="emailHelp"
                placeholder="Enter Systolic BP" value={SysBP}
                onChange={(e) => setSysBP(e.target.value)} />
        </div>
        <div className="create">
            <label for="DiaBP">Diastolic BP</label>
            <input type="text" className="form-control" id="DiaBP" name="DiaBP" aria-describedby="emailHelp"
                placeholder="Enter Diastolic BP" value={DiaBP}
                onChange={(e) => setDiaBP(e.target.value)} />
        </div>
        <div className="create">
            <label for="HR">Heart Rate</label>
            <input type="number" className="form-control" id="HR" name="HR" aria-describedby="emailHelp"
                placeholder="Enter heart rate" value={HR}
                onChange={(e) => setHR(e.target.value)} />
        </div>
        <div className="create">
            <label for="Glucose">Glucose</label>
            <input type="number" className="form-control" id="Glucose" name="Glucose" aria-describedby="emailHelp"
                placeholder="Enter Glucose level" value={Glucose}
                onChange={(e) => setGlucose(e.target.value)} />
        </div>
        <div className="create">
            <label for="totChol">Total Cholestrol</label>
            <input type="number" className="form-control" id="totChol" name="totChol" aria-describedby="emailHelp"
                placeholder="Enter total cholestrol level" value={TotChol}
                onChange={(e) => setTotChol(e.target.value)} />
        </div>
        <div className="create">
            <label for="CiggsperDay">Cigarattes per day</label>
            <input type="number" className="form-control" id="CiggsperDay" name="CiggsperDay" aria-describedby="emailHelp"
                placeholder="Enter Cigarattes per day" value={CiggsperDay}
                onChange={(e) => setCiggsperDay(e.target.value)} />
        </div>
        <div className="create">
            <div>
                <h3>Current Smoker?</h3>
                <input className="form-check-input" type="radio" name="CurrSmok" id="Yes" value="1"
                    onChange={(e) => setCurrSmok(1)} />
                <label className="form-check-label" for="exampleRadios1">
                    Yes
                </label>
            </div>
            <div className="formCheck">
                <input className="form-check-input" type="radio" name="CurrSmok" id="No" value="0"
                    onChange={(e) => setCurrSmok(0)} />
                <label className="form-check-label" for="exampleRadios2">
                    No
                </label>
            </div>
            <div>
                <h3>BP meds?</h3>
                <input className="form-check-input" type="radio" name="BPmeds" id="Yes" value="1"
                    onChange={(e) => setBPMeds(1)} />
                <label className="form-check-label" for="exampleRadios1">
                    Yes
                </label>
            </div>
            <div className="formCheck">
                <input className="form-check-input" type="radio" name="BPmeds" id="No" value="0"
                    onChange={(e) => setBPMeds(0)} />
                <label className="form-check-label" for="exampleRadios2">
                    No
                </label>
            </div>
            <div>
                <h3>Diabetes?</h3>
                <input className="form-check-input" type="radio" name="Diabetes" id="Yes" value="1"
                    onChange={(e) => setDiab(1)} />
                <label className="form-check-label" for="exampleRadios1">
                    Yes
                </label>
            </div>
            <div className="formCheck">
                <input className="form-check-input" type="radio" name="Diabetes" id="No" value="0"
                    onChange={(e) => setDiab(0)} />
                <label className="form-check-label" for="exampleRadios2">
                    No
                </label>
            </div>
        </div>

        <div className="create">

            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    </form>}
    </>

        <div>  {sub && <div>{result} </div>}</div>
    </div>
    );
}

export default PredictForm;