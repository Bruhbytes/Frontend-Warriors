 import "./Normal.css"
const Overweight = () => {
    const url = window.location.href;
    const bmi = url.split('=')[1];
    return (
        <div className="overweight">
            <h1 className="bmiheader"  style={{color:"black"}}>BMI: {bmi}</h1>
            <h2>OVERWEIGHT</h2>
            <img src="https://previews.123rf.com/images/nlshop1/nlshop11602/nlshop1160200165/52578532-cartoon-overweight-man.jpg"></img>
            <p> Preventing obesity helps you reduce your risk of a host of associated health issues, from heart disease to diabetes to some cancers and much more.

                Like many chronic conditions, obesity is preventable with a healthy lifestyle—staying active, following a healthy diet, getting adequate sleep, and so on. The strategies for prevention are also those for treatment if you are already overweight or obese.</p>
            <h3>How is obesity treated?</h3>
            <p>Your complete health profile will determine your individual treatment plan. Your healthcare provider will target your most urgent health concerns first, then follow up with a longer-term weight loss plan. Sometimes there may be quick changes they can recommend for an immediate impact, like switching your medications. The overall treatment plan will be more gradual and probably involve many factors. Since everyone is different, it may take some trial and error to figure out which therapies work best for you. Studies have repeatedly shown that intense, team-based programs with frequent, personal communication between your provider and you are the most successful in helping people lose weight and keep it off.

                Your treatment plan may include:</p>
            <h3>Dietary changes</h3>
            <p>The dietary changes you personally need to make to lose weight will be individual to you. Some people may benefit from cutting portion sizes or snacks between meals. For others, it may be more about changing what they eat than how much. Almost everyone can benefit from eating more plants. Fruits, vegetables, whole grains and legumes tend to be lower in fat and higher in fiber and micronutrients. They are more nutritious and can make you feel fuller and more satisfied after eating fewer calories.</p>
            <h3>Increased activity</h3>
            <p>Everyone has heard that diet and exercise are both important to weight loss and weight maintenance. But exercise doesn’t have to mean a gym membership. Just walking at a moderate pace is one of the most efficient types of exercise for weight loss. Just 30 minutes, five days a week is what healthcare providers suggest. A daily walk at lunchtime or before or after work can make a real difference.</p>
            <h3>Behavioral therapies</h3>
            <p>Counseling, support groups and methods such as cognitive behavioral therapy may have a role to play in supporting your weight loss journey. These methods can help rewire your brain to support positive changes. They can also help you manage stress and address emotional and psychological factors that may be working against you. Weight and weight loss efforts affect us on many levels, so it can be helpful to have support on the human side as well as on the practical side.</p>

            <h3>Helpful Videos</h3>
            <div className="frames">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Co2UD3sVb0A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/qLigjccYrSg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    );
}

export default Overweight;