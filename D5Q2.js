let user={
    name: "Krishna",
    age:22,
    email:"krish@gmail.com",
    login(){
        console.log('Krishna has logged in');
    },
    logout(){
        console.log('Krishna has logged out');
    }
}
let moderator={
    name: "Moderator",
    age:22,
    email:"moderator@gmail.com",
    login(){
        console.log('Moderator has logged in');
    },
    logout(){
        console.log('Moderator has logged out');
    },
    addCoins(){
        console.log('Moderator added coins');
    },
    removeCoins(){
        console.log('Moderator removed coins');
    }
}
let admin={
    name: "Admin1",
    age:22,
    email:"admin1@gmail.com",
    login(){
        console.log('Admin1 has logged in');
    },
    logout(){
        console.log('Admin1 has logged out');
    },
    addCoins(){
        console.log('Admin1 added coins');
    },
    removeCoins(){
        console.log('Admin1 removed coins');
    },
    addCourse(){
        console.log('Admin1 added a course');
    },
    deleteCourse(){
        console.log('Admin1 deleted a course');
    }
}

user.login();
user.logout();
moderator.login();
moderator.logout();
moderator.addCoins();
moderator.removeCoins();
admin.login();
admin.logout();
admin.addCoins();
admin.removeCoins();
admin.addCourse();
admin.deleteCourse();
