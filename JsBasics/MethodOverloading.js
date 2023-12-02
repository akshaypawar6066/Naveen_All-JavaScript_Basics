function print()
{
  console.log("Hi")
}

function print(name)
{
  console.log("Hi:"+name)
}

function print(name, age)
{
  console.log("Hi:"+name+"and "+"Age is:"+age);
 
}

//calling
print();   //--->Third function will overwrite then first two functios.

//Method Overloading is not possible in JS.
//but we can achieve this with multiple if-else statements.(Like Method Overloading, we can call same function with multiple times and we can provide multiple if-else statement in that.)

//Scenario--->Run your test cases on the remote browser.
//Pass BrowserName, Browser Version, remoteMachine

function displayBrowserInfo(browserName, browserVersion, remoteMachine)
{
 if(typeof browserVersion==='number'&& typeof remoteMachine==='boolean')
  {
    console.log(`Browser: ${browserName}, 'version':${browserVersion},'RemoteExe:'${remoteMachine}`);
  }
  else if(typeof browserVersion==="number")
  {
    console.log(`Browser:${browserName}, 'Version:'${browserVersion}`)
  }
  else{
    console.log(`Browser:${browserName}`)
  }

}

displayBrowserInfo("Chrome", 115, true)
displayBrowserInfo("Chrome", 115)
displayBrowserInfo("Chrome")

