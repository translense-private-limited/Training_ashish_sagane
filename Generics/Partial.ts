interface User5 {
    name: string;
    age: number;
    email:string;
}

const updateUser = (user: Partial<User5>) => {
    console.log(user);
}

updateUser({ name: "Alice" }); // Valid, age is optional


//Readonly<T> -->

const updateuser2 :Partial<User5>={age:23};

const update3:Partial<User5>={name:'alice',email:"a@a.com"}


// Pick<T> -->


const create=(item :Pick<User5,"name"|"email">)=>{
        // item.name="alice";
        // item.email="abc@gmail.com";
        // item.age=2;     error
        console.log(item);
}

create({name:'alice',email:'A@gmail.com'})


const newusercreate:Pick<User5,"age">={age:24};

// const newuser2:Pick<User5,"name">={email:'a@gmail.com'}

