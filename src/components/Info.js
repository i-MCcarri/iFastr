import React from 'react';
import Nav from './Nav';
import '../App.css';

export default class Info extends React.Component {
    static defaultProps = {
        history: {
          goBack: () => { }
        }
    }

    render() {
        return (
    <div id='IFInfoWrapper'>
        <Nav />
    <div id='IFInfoPg'>
        <h3>Intermittent Fasting</h3>
        <p id='subText'>key links</p>
        <ul className='table-of-contents'>
            <li><a href='#intro'>Introduction</a></li>
            <li><a href='#safe'>Safety</a> & <a href='#sideeff'>Side Effect</a></li>
            <li><a href='#methods'>Methods</a></li>
            <li><a href='#affects'>How it Affect the Body</a></li>
            <li><a href='#weight'>Weight Management</a></li>
            <li><a href='#benefits'>Health Benefits</a></li>
            <li><a href='#ketosis'>Ketosis</a></li>
            <li><a href='#recycling'>Cell Recycling</a></li>
            <li><a href='#hgh'>Human Growth Hormone</a></li>
            <li><a href='#insulin'>Insuline Sensitivity</a></li>
            <li><a href='#regen'>Immuno Regeneration</a></li>
            <li><a href='#refeed'>Refeeding</a></li>
            <li><a href='#quality'>Food Quality</a></li>
            <li><a href='#bloodType'>Eating for your Blood Type</a></li>
            <li><a href='#macroMicro'>Macro & Micro Nutrients</a></li>
            <li><a href='#exertion'>Regular Exercise</a></li>
        </ul>
        <div id='info'>
            <h4 id='intro'>Introduction</h4>
            <p >
                Welcome to iFastr! Our goal is to introduce you to Intermittent Fasting. iFastr is a tool for beginners and experienced fasters alike. First lets address your questions.<br/> 
                <br/>
                What is Intermittent Fasting? Intermittent is an adjective defined as a sporadic cycle of on-again-off-again.<br/>
                <br/>
                Fasting is a verb, defined as abstaining from food and liquids with a total content above 50 calories.<br/>
                <br/>
                Stages of Intermittent Fasting:<br/>
                <br/>
                - Ketosis<br/>
                - Fat Burning<br/>
                - Autophagy<br/>
                - Growth Hormone Response<br/>
                - Insulin Sensitivity<br/>
            </p>
            <p>
                With a daily fasting regimen, you will only begin to experience the first two stages. The latter three require a prolonged fast of up to 72 hours, to reach all benefits. Since a few of these terms are not self-explanatory, we will go over them in more detail below.
            </p>
            <p>
                Before getting much further into the details of Intermittent Fasting, there are a couple of user settings within the app you must know about to capitalize on the use of iFastr. First, once you have read the below section about methods and have decided on your choice, you will want to go into your toolkit, and navigate to the methods page. You can make your selection and press the save button so it will store your selection. This will allow the timer to know how long to set itself for when you manually press the start button.
            </p>
            <p>
                If you would like to automate the timer, to start at a specific time each day you may do so, by going into the tool kit, and navigating to your profile page. You may enter the desired fasting start time here and save the changes. Now you are setup to take advantage of the features iFastr has to offer. Happy Fasting!
            </p>
            <h4 id='safe'>Safety</h4>
            <p>
                If you have a medical condition, you should consult with your doctor before trying intermittent fasting.<br/>
                <br/>
                This is particularly important if you:<br/>
                <br/>
                - Have diabetes.<br/>
                - Have problems with blood sugar regulation.<br/>
                - Have low blood pressure.<br/>
                - Take medications.<br/>
                - Are underweight.<br/>
                - Have a history of eating disorders.<br/>
                - Are a woman who is trying to conceive.<br/>
                - Are a woman with a history of amenorrhea.<br/>
                - Are pregnant or breastfeeding.<br/>
            </p>
            <p>
                Intermittent fasting has an outstanding safety profile. There is nothing dangerous about not eating for a while if you are healthy and overall well-nourished.
            </p>
            <h4 id='sideeff'>Side Effects</h4>
            <p>
                Hunger is the main side effect of intermittent fasting. You may also feel weak and your brain may not perform as well as you’re used to. This may only be temporary, as it can take some time for your body to adapt to the new meal schedule. Always consult with your primary care physician before making decisions about your diet or health.
            </p>
            <h4 id='methods'>Methods</h4>
            <p>
                There are multiple methods you may use to implement a fast. Things to keep in mind, everyone is different. A method that works for one person may not be the most effective for another. There are many moving pieces and factors to consider. Most importantly, you must listen to your body. This means that you may have to experiment a little to find the method that fits your lifestyle and body's needs.<br/>
            </p>
            <p>
                We have chosen to focus on methods that break up your day into fasting and feasting periods. When we say, 'Method 16:8,' this method can be broken down as a 16 hour fast and an 8 hour feast period, for example.<br/>
                <br/>
                Below are more options represented by ratios:<br/>
                <br/>
                - 20:4<br/>
                - 19:5<br/>
                - 18:6<br/>
                - 17:7<br/>
                - 16:8<br/>
                - 15:9<br/>
                - 14:10<br/>
            </p>
            <p>
                The most popular method is the 16:8 ratio. People find its simplicity to be the most sustainable. Inside your toolkit, on the tools page you will be able to go to methods and select the option you want to use and save your selection.
            </p>
            <h4 id='affects'>Body Affects</h4>
            <p>
                Of course when doing our research we want to know, how will a fasting affect my body? First, here is a list of affected items in the body.<br/> 
                <br/>
                - Weight Loss<br/>
                - Improved Blood Pressure<br/>
                - Imporved Cholesterol<br/>
                - Reduced Medication Dependancy<br/>
                - Mental Clarity and Concentration<br/>
                - Increased Eneergy<br/>
                - Reduced Inflamation<br/>
                - Cell Recycling<br/>
                - Increased Growth Hormone (HGH)<br/>
                - Reduced Insulin Sensitivity<br/>
                - Immuno Regeneration: Autophagy<br/>
            </p>
            <p>
                In the following sections, we will go into more detail about what these mean. 
            </p>
            <h4 id='weight'>Weight Management</h4>
            <p>
                Weight loss is the most common reason people find intermittent fasting appealing. Studies have found that intermittent fasting can cause 3–8% weight loss within a minimum of 3 weeks up to 24 weeks. Study participants also lost 4–7% of their waistline, which is significant management of belly fat. Typical calorie restriction methods often result in substantial muscle loss. Participants noticed intermittent fasting allowed better retention of lean muscle during weight loss. The primary reason for intermittent fasting's success is its ability to reduce the overall calorie intake. Therefore, binge eating will not produce your desired weight loss results.<br/>
            </p>
            <p>
                By eating fewer calories within a smaller window of time, the body begins lowering insulin, increasing growth hormone levels and norepinephrine, and increasing the metabolic rate. It begins to change it's hormone levels so that it can efficiently increase weight loss by changing both sides of the calorie counting equation. 
            </p>
            <h4 id='benefits'>Health Benefits</h4>
            <p>
                In addition to weight control, studies have shown the powerful benefits intermittent fasting can have on the body and brain. While the research is still in its early stages, the movement is gaining in popularity worldwide. 
            </p>
            <h4 id='ketosis'>Ketosis</h4>
            <p>
                What is Ketosis? In this state, your body starts to break down and burn fat. Your liver contributes to this process by producing ketones when you don't have enough insulin in your body to turn glucose into energy. Ketones serve as an alternative energy source for the cells of your heart, skeletal muscle, and brain when glucose isn’t readily available, so your body uses fat instead.
            </p>
            <h4 id='recycling'>Cell Recycling</h4>
            <p>
                Also called Autophagy, this is the process in which the body cleans out or 'self-eats' damaged, harmful or unhealthy cells to regenerate new, healthier cells with functional proteins. When cells are well fed they are not concerned with efficiently recycling their components. Instead, they are focused on growth, cell-division, and reproduction. When the cell's proteins begin to build up this can lead to misfolding and cause cancer forming cells. So Autophagy can play an important role in cancer prevention. 
            </p>
            <h4 id='hgh'>Human Growth Hormone</h4>
            <p>
                HGH helps to maintain, build, and repair healthy tissue in the brain and other organs. This hormone can help to speed up healing after an injury and repair muscle tissue after exercise. This helps to build muscle mass, boost metabolism, and burn fat. HGH is also said to benefit the quality and appearance of the skin. 
            </p>
            <h4 id='insulin'>Insulin Sensitivity</h4>
            <p>
                Increased Insulin sensitivity is when the body can effectively and efficiently respond to an increased level of glucose in the blood. Lower levels of insulin in the bloodstream also allow for body fat to be more readily accessible. Furthermore, promoting Autophagy. 
            </p>
            <h4 id='regen'>Immuno Regeneration</h4>
            <p>
		        In conclusion reduction of insulin, reduces the HGH, and promotes Autophagy. Continuing nutrient restriction from 48 hours to 72 hours does yield benefits. Studies have shown an increase in stress resistance, regeneration of blood cell stem cells, and retention of the white blood cells.
            </p>
            <h4 id='refeed'>Refeeding</h4>
            <p>
                The most paramount part of breaking a fast, is what you have for breakfast -- the first meal after, no matter what time of day, to break your fast. To continue improvement of the function of cells and tissues after clean up, a balanced and nutritious meal is recomended. A few carbs go a long way. Include sufficient vegetable fiber and fats, proteins, whole grains, and antioxidants. Yes, antioxidants can help prevent cell damage and fight disease and aging. Consider legumes and low starch fruits.
            </p>
            <h4 id='quality'>Food Quality</h4>
            <p>
                For arguments sake, food quality can mean different things to different people. Eat the foods you feel best after eating. I personally recomend avoiding or minimalizing the usual offenders:<br/>
                <br/>
                - Genetically Modified (GMO)<br/>
                - Pesticides In Produce<br/>
                - Simple Sugars<br/>
                - Simple Starches<br/>
                - Processed Foods<br/>
                - Packaged Foods<br/>
                - Carbo Loading<br/>
                - Binge Snacks<br/>
            </p>
            <p>
                It's challenging, but you made it this far! I think you can do it. <br/>
            </p>
            <p>
                Furthering the discussion about quality. Most nutritionists encourage consumers to add additional food quality checks. For example eat more:<br/>
                <br/>
                - Organic Fruits and Vegetables<br/>
                - Grass Fed Bovine and Venison<br/>
                - Vegetarian Fed Poultry<br/>
                - Complex Starches
            </p>
            <p>
                Some great resources to follow:<br/>
                <br/>
                - Include the <a href='https://www.ewg.org/foodnews/clean-fifteen.php'>Clean Fifteen</a><br/>
                - Avoid the <a href='https://www.ewg.org/foodnews/dirty-dozen.php'>Dirty Dozen</a><br/>
                - Check the <a href='https://www.glycemicindex.com/'>Glycemic Index</a>
            </p>
            <h4 id='bloodType'>Blood Type</h4>
            <p>
                There have been several studies that have made some ground breaking discoveries regarding "Eating for your Blood Type." It's definately something to consider. Everyone's body is different, and reactions to different foods range from acute to extreme. So why not consider that blood type may play a dicernable role in weight management? 
            </p>
            <p>
                <strong>Do You Know Your Blood-type?</strong><br/>
                <br/>
                <strong>If Not:</strong> ask your primary care physician at your next blood draw.<br/>
                <br/>
                <strong>If So:</strong> check out <a href='https://www.webmd.com/diet/a-z/blood-type-diet'>the Blood-type Diet</a> 
            </p>
            <h4 id='macroMicro'>Nutrients</h4>
            <p>
                When it comes to monitoring nutrition, there is a large margin for error. Nutrient Timing, is definately a consideration. However, the more commonly overlooked items, Macro and Micronutrients, are just as important.<br/>
                <br/><strong>Nutrient Timing</strong>
            </p>
            <p>
                When do you take your daily Multi-vitamin? this can be a controversial topic. When is the <strong>best</strong> time to eat a meal or take your vitamins? Well, the short answer is that there is no <strong>one</strong> answer. Most of the answers are dependant on your exercise intensity and regularity. 
            </p>
            <p>
                However, there are some simple guidelines to consider. First, your largest meal of the day should be your first and get smaller throughout the day. Eat after a workout. Finally, take your Multi-vitamin when it has plenty of time to be absorbed, and not on an empty stomach. Consider after dinner.<br/>
                <br/>
                <strong>Macros</strong>
            </p>
            <p>
                Macronutrients are the nutrients you taken in the largest amounts of to provide the body with energy:<br/>
                <br/>
                - Carbohydrates<br/>
                - Dietary Fiber<br/>
                - Fats<br/>
                - Minerals<br/>
                - Proteins<br/>
                - Vitamins<br/>
                - Water<br/>
                <br/>
                <strong>Micros</strong>
            </p>
            <p>
                Micronutrients are vital to healthy development, disease prevention and overall wellbeing. These are <strong>not</strong> produced naturally in the body. The body instead takes these in via your diet. Micronutrient deficiencies can have devastating consequences.<br/>
                <br/>
                Micronutrients include:<br/>
                - Boron (B)<br/>
                - Chlorine (Cl)<br/>
                - Copper (Cu)<br/>
                - Iron (Fe)<br/>
                - Manganese (Mn)<br/> 
                - Molybdenum (Mo)<br/>
                - Zinc (Zn)<br/>
                <br/>
                Which can be divided up by:<br/>
                - Water-soluable vitamins<br/>
                - Fat-soluable vitamins<br/>
                - Microminerals<br/>
                - Trace minerals
            </p>
            <h4 id='exertion'>Exercise</h4>
            <p>
                Lastly, exercise can play a role in every aspect of weight management. Setting goals and working toward them takes time and effort. Tracking can be difficult, especially if you are unsure of how are what to track. Try divinding up the body. Full body workouts everyday, will run the risk of exhaustion, increased stress, ongoing inflamaiton, and weight gain.<br/>
                <br/>
                How would you divide up your muscle groups? Here is an example.<br/>
                <br/>
                <strong>Muscle Grouping</strong><br/>
                <ul>Core:<ul>
                    <li>Abdominals</li>
                    <li>Back</li>
                </ul></ul>
                <ul>Lower-body:<ul> 
                    <li>Calves and Shins</li>
                    <li>Glutes</li>
                    <li>Hamstrings</li>
                    <li>Quadraceps</li>
                </ul></ul>
                <ul>Upper-body:<ul> 
                    <li>Arms</li>
                    <li>Chest</li>
                    <li>Shoulders</li>
                </ul></ul>
                <br/>
                Working out with a muscle group in mind per day makes it easier track and maintain growth. <br/>
                <br/>
                <strong>Coming Soon:</strong> iFastr Exercise Tracker
            </p>
        </div>
    </div>
</div>
        );
    }
}