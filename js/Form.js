class Form{
    constructor(){
        this.surveyTitle = createElement("h1");
        this.emailInput = createInput("Enter Your E-mail ID");

        this.greeting = createElement("h3");
        this.message = createElement("h4");
        this.endMessage1 = createElement("h3");
        this.endMessage2 = createElement("h4");

        this.nextButton = createButton("Next");
        this.nextButton2 = createButton("Next");
        //this.nextButton3 = createButton("Next");

        this.q1 = createElement("h4");
        this.q2 = createElement("h4");
        this.q3 = createElement("h4");
        

        this.y1 = createButton("YES");
        this.n1 = createButton("NO");

        this.y2 = createButton("YES");
        this.n2 = createButton("NO");

        this.y3 = createButton("YES");
        this.n3 = createButton("NO");
    }

    display(){

        this.surveyTitle.position(250, 100);
        this.surveyTitle.html("Survey Time");
        this.emailInput.position(250, 200);
        this.nextButton.position(250, 300);



        this.nextButton.mousePressed(() => {
            this.emailInput.hide();
            this.nextButton.hide();

            this.greeting.position(250, 200);
            this.greeting.html("Welcome To The Survey");

            this.message.position(250, 300);
            this.message.html("We value your honest response. Please read the questions and answer the following:");
        
            this.nextButton2.position(250, 450);

            survey.updateUserCount();
        })



        this.nextButton2.mousePressed(() => {
            this.greeting.hide();
            this.message.hide();

            this.nextButton2.hide();

            this.q1.position(250, 200);
            this.q1.html("Do you think we have to provide free food in canteen for poor children ?");
            
            this.y1.position(250, 250);
            this.n1.position(250, 300);
        })


        
        this.y1.mousePressed(() => {
            this.q1.hide();

            this.y1.hide();
            this.n1.hide();

            this.q2.position(250, 200);
            this.q2.html("Do you think, we can further improve and expand our service ?");
            
            this.y2.position(250, 250);
            this.n2.position(250, 300);
        })

        this.n1.mousePressed(() => {
            this.q1.hide();

            this.y1.hide();
            this.n1.hide();

            this.q2.position(250, 200);
            this.q2.html("Do you think, we can further improve and expand our service ?");
            
            this.y2.position(250, 250);
            this.n2.position(250, 300);
        })



        this.y2.mousePressed(() => {
            this.q2.hide();

            this.y2.hide();
            this.n2.hide();

            this.q3.position(250, 200);
            this.q3.html("Are willing to donate to improve our service ?");
            
            this.y3.position(250, 250);
            this.n3.position(250, 300);
        })

        this.n2.mousePressed(() => {
            this.q2.hide();

            this.y2.hide();
            this.n2.hide();

            this.q3.position(250, 200);
            this.q3.html("Are you willing to donate to improve our service ?");
            
            this.y3.position(250, 250);
            this.n3.position(250, 300);
        })

        this.y3.mousePressed(() => {
            this.q3.hide();

            this.y3.hide();
            this.n3.hide();

            this.endMessage1.position(250, 200);
            this.endMessage1.html("Survey Ended !");

            this.endMessage2.position(250, 300);
            this.endMessage2.html("Thankyou For Your Response...");
            })

        this.n3.mousePressed(() => {
            this.q3.hide();

            this.y3.hide();
            this.n3.hide();

            this.endMessage1.position(250, 200);
            this.endMessage1.html("Survey Ended !");

            this.endMessage2.position(250, 300);
            this.endMessage2.html("Thankyou For Your Response...");
        })

    }
}
