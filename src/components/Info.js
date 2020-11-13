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
        <h2>Intermittent Fasting</h2>
        <span>Key Points</span>
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
            <li><a href='#breakfast'>Breaking The Fast</a></li>
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
                What is Intermittent Fasting? Intermittent is an adjective defined as a sporadic cylce of on-again-off-again.<br/>
                <br/>
                Fasting is a verb, defined as abstaining from food and liquids with a total content in excess of 50 calories.<br/>
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
                With a daily fasting regement you will only begin to experience the first two stages. The later three require a prolonged fast of up to 72 hours, to reach all benefits. Since a few of these terms are not self explanitory, we will go over them in more detail below.
            </p>
            <p>
                Before getting much further into the details of Intermittent Fasting, there are a couple user settings within the app you must know about to capitilize on the use of iFastr. First, once you have read the below section about methods and have decided on your choice, you will want to go into your toolkit, and navigate to the methods page. You can make your selection and press the save button so it will store your selection. This will allow the timer to know how long to set itself for when you manually press the start button.
            </p>
            <p>
                If you would liek to automate the timer, to start at a specific time each day you may do so, by going in to the tool kit, and navigating to your profile page. You may enter the desired fasting start time here and save the changes. Now your are set to fully take advanteage of the features iFastr has to offer. Happy Fasting!
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
                All that being said, intermittent fasting has an outstanding safety profile. There is nothing dangerous about not eating for a while if you’re healthy and well-nourished overall.
            </p>
            <h4 id='sideeff'>Side Effects</h4>
            <p>
                Hunger is the main side effect of intermittent fasting. You may also feel weak and your brain may not perform as well as you’re used to. This may only be temporary, as it can take some time for your body to adapt to the new meal schedule. Always consult with your primary care physician before making decisions about your diet or health.
            </p>
            <h4 id='methods'>Methods</h4>
            <p>
                There are multiple methods you may use to implement a fast. Things to keep in mind, everyone is different. A method that works for one person my not be the most effective for another. There are many moving pieces and factors to consider. Most importantly, you must listen to your body. This means that you may have to experiment a little to find the method that fits your lifestyle and body's needs.<br/>
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
                - Increaased Eneergy<br/>
                - Reduced Inflamation<br/>
                - Cell Recycling<br/>
                - Increased Growth Hormone (HGH)<br/>
                - Reduced Insulin Sensitivity<br/>
                - Immuno Regenertion: Autophagy<br/>
            </p>
            <p>
                In the following sections we will go into more detail about what these mean. 
            </p>
            <h4 id='weight'>Weight Management</h4>
            <p>
                Weight loss is the most common reason people find intermittent fasting appealing. Studies have found that intermittent fasting can cause 3–8% weight loss within a minimum 3 week up to 24 week period. Study participants also lost 4–7% from their waistline, that is a significant management of belly fat. Typical calorie restriction methods often result in substantial muscle loss. Participants noticed intermittent fasting allowed better retention of lean muscle during wieght loss. The primary reason for intermittent fasting's success, is its ability to reduce the overall calorie intake. Therefore, binge eating will not prodice your desired weigh loss results.<br/>
            </p>
            <p>
                By eating fewer calories within a smaller window of time, the body begins lowering insulin, increasing growth hormone levels and norepinephrine, and incresing the metabolic rate. It begins to change it's hormone levels, so that it can efficiently increase weighloss by changing both sides of the calorie counitng equation. 
            </p>
            <h4 id='benefits'>Health Benefits</h4>
            <p>
                In addition to weight control, studies have shown the power benefits intermittent fasting can have on the body and brain. While the reasearch is still in its early stages, the movement is gaining in popularity world-wide. 
            </p>
            <h4 id='ketosis'>Ketosis</h4>
            <p>
                What is Ketosis? In this state, your body starts to break down and burn fat. Your liver contributes to this proccess by producing ketones when you don't have enough insulin in your body to turn glucose into energy. Keytones serve as an alternative energy source for the cells of your heart, skeletal muscle, and brain, when glucose isn’t readily available, so your body uses fat instead.
            </p>
            <h4 id='recycling'>Cell Recycling</h4>
            <p>
                Also called Autophagy, this is the process in which the body cleans out or 'self-eats' damaged, harmful or unhealthy cells in order to regenerate new, healthier cells with functional proteins. When cells are well fed they are not concerned with efficently recycling their components. Instead they are focused on growth, cell-division and reproduction. When the cells proteins begin to build up this can lead to misfolding and casue cancer forming cells. So Autophagy can play an important role in cancer prevention. 
            </p>
            <h4 id='hgh'>Human Growth Hormone</h4>
            <p>
                HGH helps to maintain, build, and repair healthy tissue in the brain and other organs. This hormone can help to speed up healing after an injury and repair muscle tissue after exercise. This helps to build muscle mass, boost metabolism, and burn fat. HGH is also said to benefit the quality and appearance of the skin.
            </p>
            <h4 id='insulin'>Insulin Sensitivity</h4>
            <p>
                Increased Insulin sensitivity is when the body is able to effectively and efficently respond to an increased level of glucose in the blood. Lower levels of insulin in the blood stream also allow for body fat to be more readily accessible. Furtheremore, promoting Autophagy. 
            </p>
            <h4 id='regen'>Immuno Regeneration</h4>
            <p>

            </p>
            <h4 id='breakfast'>Breaking a Fast</h4>
            <p>

            </p>
            <h4 id='quality'>Food Quality</h4>
            <p>

            </p>
            <h4 id='bloodType'>Blood Type</h4>
            <p>

            </p>
            <h4 id='macroMicro'>Nutrients</h4>
            <p>

            </p>
            <h4 id='exertion'>Exercise</h4>
            <p>

            </p>
        </div>
    </div>
</div>
        );
    }
}