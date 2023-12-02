const fetchUserInfo = async () => {
    const response = await fetch('https://reqres.in/api/users?page=2');   //Async step
    if (!response.ok) {
        throw new Error('User Data is not');
    }

    //parse the json response
    else {
        const userData = await response.json();    //Asyns
        console.log("user data is:", userData);
    }
}

fetchUserInfo();

