const user = {

    username: "mehran",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`);  // this used for current context
        console.log(this);
        
    }
}

user.welcomeMessage()

user.username = "sam"

user.welcomeMessage()
console.log(this);
