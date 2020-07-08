class Survey{
    constructor(){
        this.userCountRef = database.ref("userCount");
        
    }

    updateUserCount(){
        
    }

    startSurvey(){
        form = new Form();
        form.display();
    }
}