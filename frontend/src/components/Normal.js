 import "./Normal.css"
const Normal = () => {
    const url = window.location.href;
    const bmi = url.split('=')[1];
    return (
        <div className="overweight">
            <h1 className="bmiheader"
            style={{color:"black"}}>BMI: {bmi}</h1>
            <h2>NORMAL</h2>
            <img src="http://static.oprah.com/images/o2/201403/201403-orig-think-fit-1-949x534.jpg"></img>
            <p> maintaining a healthy weight includes healthy eating, physical activity, optimal sleep, and stress reduction. Several other factors may also affect weight gain. Healthy eating features a variety of healthy foods.

                Like many chronic conditions, obesity is preventable with a healthy lifestyle—staying active, following a healthy diet, getting adequate sleep, and so on. The strategies for prevention are also those for treatment if you are already overweight or obese.</p>
            <h3>How to stay fit?</h3>
            <p>Busy schedules, unconventional career options, and other factors create and increase health issues. Individuals can avoid such problems by maintaining a healthy lifestyle and a fit body. If you are willing to bring change in your lifestyle, you have to follow some ways.

Therefore, the following piece is going to be helpful for individuals wondering how to stay healthy. Here, we have discussed 10 ways to stay fit and healthy.</p>
            

            <h3>Helpful Videos</h3>
            <div className="frames">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Co2UD3sVb0A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/qLigjccYrSg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    );
}

export default Normal;