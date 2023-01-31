 import "./Normal"
const Under = () => {
    // mongoose.connect(process.env.MONGO_URI, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true
    // })
    //     .then(() => {
    //         console.log("connected to db");
    //     })
    const url = window.location.href;
    const bmi = url.split('=')[1];
    // const { articleId } = useParams();
    // console.log(articleId); // 123
    return (<div className="overweight">
        <h1 className="bmiheader"  style={{color:"black"}}>BMI: {bmi}</h1>
        <h2>UNDERWEIGHT</h2>
        <img src="https://img.freepik.com/premium-vector/skinny-sad-kid-boy-use-weight-scale-vector_753212-7.jpg?w=2000"></img>
        <p> Since you are underweight, you may be at greater risk of certain health conditions, including malnutrition, osteoporosis, decreased muscle strength, hypothermia and lowered immunity. </p>
        <h3>How can I gain weight safely?</h3>
        <p>If you are underweight, it is important to eat a variety of foods that give you the nutrition you need. You should make sure you eat enough energy to gain weight, protein to repair your body and build your muscles, and vitamins and minerals to make you healthy.

            The aim is to gain weight gradually by eating healthy foods. Even if you are underweight, try to avoid foods with a lot of added sugar, fat and salt, like cakes, takeaway foods and sugary drinks.

            You can put on weight by eating small meals frequently throughout the day. Try to snack on healthy, high energy foods like cheese, nuts, milk-based smoothies and dried fruit.

            Further tips for gaining weight safely include:

            using full cream milk
            using healthy fats like olive oil or avocado
            sprinkling some grated cheese on cooked food
            adding skim milk powder to soups, stews and drinks
            adding protein powder to milkshakes
            replacing tea or coffee with milky drinks
            doing some exercise to increase your appetite
            having meals delivered if you have difficulty preparing them yourself
            If you are having trouble gaining weight, it is best to speak to a doctor to rule out an underlying cause for your underweight.</p>
        <h3>Helpful Videos</h3>
        <div className="frames">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/1Q6ij1qSrrw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/WFKik6EXSOM " frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/2LNxTZzu2rY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>);
    // https://www.youtube.com/watch?v=2LNxTZzu2rY
}

export default Under;