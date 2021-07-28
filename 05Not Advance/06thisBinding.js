const parth = {
    firstName: 'John',
    lastName: 'khan',
    role: 'admin',
    courseCount: 3,
    getInfo: function(){
        console.log(`
        First name is ${this.firstName}
        last name is ${this.lastName}
        His role is ${this.role}
        and he is study ${this.courseCount} this Course
        `);
    },
};

const dj = {
    firstName:"Rock",
    lastName:"DJ",
    role: "Sub-admin",
    courseCount: 3,
};

// parth.getInfo();
// dj.getInfo();


// parth.getInfo.bind(dj)();
// var valve = parth.getInfo.bind(dj);
// valve();

parth.getInfo.call(dj);