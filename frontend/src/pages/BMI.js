import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./BMI.css"
const Home = () => {
    const [healthParameters, setParameters] = useState(null)

    useEffect(() => {
        const fetchParameters = async () => {
            const response = await fetch('/h/calculate')
            const json = await response.json()
            console.log(`response.ok: ${response.ok}`);
            if (response.ok) {
                setParameters(json)
            }
        }

        fetchParameters();
    }, [])
    return (
        <div className="home-content">
            <p>The Body Mass Index (BMI) Calculator can be used to calculate BMI value and corresponding weight status while taking age into consideration. Use the "Metric Units" tab for the International System of Units or the "Other Units" tab to convert units into either US or metric units. Note that the calculator also computes the Ponderal Index in addition to BMI, both of which are discussed below in detail.</p>
            <h3>BMI Introduction</h3>
            <p>BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass. It is widely used as a general indicator of whether a person has a healthy body weight for their height. Specifically, the value obtained from the calculation of BMI is used to categorize whether a person is underweight, normal weight, overweight, or obese depending on what range the value falls between. These ranges of BMI vary based on factors such as region and age, and are sometimes further divided into subcategories such as severely underweight or very severely obese. Being overweight or underweight can have significant health effects, so while BMI is an imperfect measure of healthy body weight, it is a useful indicator of whether any additional testing or action is required. Refer to the table below to see the different categories based on BMI that are used by the calculator.</p>
            <h3>BMI Table for Adults</h3>
            <p>This is the World Health Organization's (WHO) recommended body weight based on BMI values for adults. It is used for both men and women, age 20 or older.</p>
            <table border="1">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>BMI range - kg/m<sup>2</sup></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Severe Thinness</td>
                        <td>&lt; 16</td>
                    </tr>

                    <tr>
                        <td>Moderate Thinness</td>
                        <td>16 - 17</td>
                    </tr>
                    <tr>
                        <td>Mild Thinness</td>
                        <td>17 - 18.5</td>
                    </tr>
                    <tr>
                        <td>Normal</td>
                        <td>18.5 - 25</td>
                    </tr>
                    <tr>
                        <td>Overweight</td>
                        <td>25 - 30</td>
                    </tr>
                    <tr>
                        <td>Obese Class I</td>
                        <td>30 - 35</td>
                    </tr>
                    <tr>
                        <td>Obese Class II</td>
                        <td>35 - 40</td>
                    </tr>
                    <tr>
                        <td>Obese Class III</td>
                        <td>&gt; 40</td>
                    </tr>
                </tbody>
            </table>
            <Link to="/calculate">
                <button className="bmi" role={"button"}>Calculate BMI</button>
            </Link>
        </div>
    );
}

export default Home;