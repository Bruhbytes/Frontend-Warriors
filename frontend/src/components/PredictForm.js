import { useState } from "react";
const PredictForm = () => {
    const [sub, setSub] = useState('');
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


    const handleChange = (event) => {
        console.log("Label 👉️", event.target.selectedOptions[0].label);
        console.log(event.target.value);

    };
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
                console.log(result)
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

    return (
        <>

            <div>
                {/* component */}
                {/* Container */}

                <div className="container mx-auto">

                    <div className="flex justify-center px-6 my-12">
                        {/* Row */}
                        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                            {/* Col */}
                            <div
                                className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                                //className="contact"
                                style={{
                                    width: '600px',
                                    backgroundImage:
                                        'url("https://th.bing.com/th/id/R.eefc3dc7449e0ac76017190c5f919002?rik=bu3INQpIn75F6Q&riu=http%3a%2f%2fclipart-library.com%2fimg%2f2006972.jpg&ehk=nXMsq92WVadKaTlesOpNCzBraSkiGbc2g%2fEPptDbT%2f0%3d&risl=&pid=ImgRaw&r=0")'

                                }}
                            />
                            {/* Col */}
                            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none"
                            >
                                <h3 className="pt-4 text-2xl text-center"><h3
                                    style={{ color: "black" }}>Heart Disease Predictor</h3></h3>
                                <form onSubmit={handleSubmit}>

                                    <div className="mb-4 md:flex md:justify-between">
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label
                                                className="block mb-2 text-sm font-bold text-gray-700"
                                                htmlFor="firstName"
                                            >
                                                Age:
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="floating_first_name"

                                                type="number"
                                                required
                                                name="Age" aria-describedby="emailHelp"
                                                placeholder="Enter age" value={Age}
                                                onChange={(e) => setAge(e.target.value)}

                                            />
                                        </div>



                                        <div className="md:ml-2">
                                            <label
                                                className="block mb-2 text-sm font-bold text-gray-700"
                                                htmlFor="lastName"
                                            >
                                                Systolic BP
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="SysBP" name="SysBP" aria-describedby="emailHelp"
                                                placeholder="Enter Systolic BP" value={SysBP} type="number"
                                                onChange={(e) => setSysBP(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label
                                                className="block mb-2 text-sm font-bold text-gray-700"
                                                htmlFor="password"
                                            >
                                                Diastolic BP
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"


                                                id="DiaBP" name="DiaBP" aria-describedby="emailHelp"
                                                placeholder="Enter Diastolic BP" value={DiaBP}
                                                onChange={(e) => setDiaBP(e.target.value)}
                                            />

                                        </div>
                                    </div>
                                    <div className="mb-4 md:flex md:justify-between">
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label
                                                className="block mb-2 text-sm font-bold text-gray-700"
                                                htmlFor="firstName"
                                            >
                                                Heart rate
                                            </label>
                                            <input

                                                type="number" id="HR" name="HR" aria-describedby="emailHelp"
                                                placeholder="Enter heart rate " value={HR}
                                                onChange={(e) => setHR(e.target.value)}
                                            />

                                        </div>
                                    </div>
                                    <div className="mb-4 md:flex md:justify-between">
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label
                                                className="block mb-2 text-sm font-bold text-gray-700"
                                                htmlFor="firstName"
                                            >
                                                Total Cholestrol
                                            </label>
                                            <input

                                                type="number" id="totChol" name="totChol" aria-describedby="emailHelp"
                                                placeholder="Enter total cholestrol level" value={TotChol}
                                                onChange={(e) => setTotChol(e.target.value)}
                                            />

                                        </div>
                                    </div>

                                    <div className="mb-4 md:flex md:justify-between">

                                        <div className="mb-4 md:flex md:justify-between">
                                            <div className="md:ml-2">
                                                <label
                                                    className="block mb-2 text-sm font-bold text-gray-700"
                                                    htmlFor="c_password"
                                                >
                                                    Glucose
                                                </label>
                                                <input
                                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="Glucose" name="Glucose" aria-describedby="emailHelp"
                                                    placeholder="Enter Glucose level" value={Glucose} type="number"
                                                    onChange={(e) => setGlucose(e.target.value)}

                                                />
                                            </div>
                                        </div>
                                        <div className="mb-4 md:flex md:justify-between">
                                            <div className="md:ml-2">
                                                <label
                                                    className="block mb-2 text-sm font-bold text-gray-700"
                                                    htmlFor="c_password"
                                                >
                                                    Ciggarates per Day
                                                </label>
                                                <input
                                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="CiggsperDay" name="CiggsperDay" aria-describedby="emailHelp"
                                                    placeholder="Enter Ciggarates per Day" value={CiggsperDay} type="number"
                                                    onChange={(e) => setCiggsperDay(e.target.value)}

                                                />
                                            </div>
                                        </div>

                                        <div className="mb-6 text-center">
                                            <select

                                                value={CurrSmok}
                                                onChange={(e) => setCurrSmok(e.target.value)}

                                                id="branches"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            >
                                                <option selected="">are u a current smoker</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>



                                            </select>
                                            <div className="mb-6 text-center">
                                                <select

                                                    value={BPMeds}
                                                    onChange={(e) => setBPMeds(e.target.value)}
                                                    id="branches"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                >
                                                    <option selected="">Bp meds?</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>



                                                </select>

                                            </div>
                                            <div className="mb-6 text-center">
                                                <select

                                                    value={Diab}
                                                    onChange={(e) => setDiab(e.target.value)}
                                                    id="branches"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                >
                                                    <option selected="">Diabetes?</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>



                                                </select>
                                            </div>


                                            <button
                                                type="submit"
                                                className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            >
                                                Submit
                                            </button>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ padding: "50px" }}>  {sub && <div
                style={{ color: "black" }}>{result} </div>
            }</div>
        </>
    );
}

export default PredictForm;