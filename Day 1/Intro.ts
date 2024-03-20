interface User {
    name: string;
    email: string;
    mobile: number
}


class UserAccount {
    name: string;
    email: string;
    mobile: number;

    constructor(name: string, email: string, mobile: number) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
    }
}

const user : User = new UserAccount('Manu', "mail", 5);