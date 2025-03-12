


// type abcd= number;
// type abcd =string;    same name not allow 

interface abcd {
    name: string;
  }
  interface abcd {         //same name allow
    email: string;
  }
  
  function logger(obj: abcd) {
    obj.name;
    obj.email;
  }
  
  //Intersection 
  
  type User = {
    name: string;
    email: string;
  }
  
  type Admin = User & {
    getDetails: (user: User) => void
  }
  
  function Details(obj: Admin) {
    obj.name
    obj.email
    obj.getDetails
  }
  
  const newUser2: Admin = {
    name: 'ashish',
    email: 'a@a.com',
    getDetails: (newUser2) => {
      console.log(newUser2.name, newUser2.email)
    }
  }
  
  type Person = {
    name: string;
    email: string;
  
  }
  
  type Employee = {
    employeeId: number;
    department: string;
  }
  
  
  const newUser: Person & Employee = {
    name: 'ashish',
    email: 'a@a.com',
    employeeId: 20,
    department: 'IT'
  }
  
  
  
  
  