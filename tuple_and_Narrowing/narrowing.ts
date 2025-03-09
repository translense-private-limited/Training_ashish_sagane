function processValue(value: string | number) {
    if (typeof value === "string") {
      console.log(value.toUpperCase());
    } else {
      console.log(value.toFixed(2));
    }
  }
  
  
  
  function getUserDetails(userId: string | number): void {
    if (typeof userId === "string") {
      // Treat as username
      console.log(`Fetching details for username: ${userId}`);
      //  call API using the username
    } else {
      // Treat as user ID
      console.log(`Fetching details for user ID: ${userId}`);
      //  call API using the numerical ID
    }
  }
  
  getUserDetails("johndoe"); // Uses string
  getUserDetails(101);       // Uses number 
  