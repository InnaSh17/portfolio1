const person = {
    firstName: "John" ,
    lastName: "Doe",
    phone: +123456,
    email: "jd@example.host" ,
    rating: 4.0,


    fullName: function() {
        return this. firstName + " " + this. lastName + this. phone + this. email + this. rating;
    }
}