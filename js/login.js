/*$all=[
    {
        name:'admin',
        pass:1234,
    },
    {
        name:'user',
        pass:123456,
    }
]
var adminName=$all[0]['name'];
var adminPass=$all[0]['pass'];
var userName=$all[1]['name'];
var userpass=$all[1]['pass'];
document.getElementById('login').addEventListener('submit',function(e){
    e.preventDefault();
    //user name
    var inputName=document.querySelector('#name').Value;
    console.log(inputName);
    //user password
    var inputPassword=document.querySelector('#pass').Value;
    console.log(inputPassword);
    //cheak user name valid
    if(inputName===adminName && inputPassword==adminPass){
        location.assign("dash.html");
    }
    else if(inputName===userName && inputPassword==userpass){
        location.assign("home.html");
    }
    else{
        alert('user name or password wrong');
    }
})
*/
/*.........................*/
//set the data base
$all =[
    {
        name:'admin',
        pass:1234,
    },
    {
        name:'user',
        pass:123456,
    },
]

var adminName = $all[0]['name'];
var adminPass = $all[0]['pass'];
var userName = $all[1]['name'];
var userPass = $all[1]['pass'];

    document.getElementById('login').addEventListener('submit', function (e) {
        e.preventDefault();
        //get user name 
        var inputName = document.querySelector('#name').value;
        //get password
        var inputPass = document.querySelector('#pass').value;
        
        //check if user name is valid or wrong the check if admin or user
        if(inputName === adminName && inputPass == adminPass){
            //go to admin page in this case
            location.assign('dash.html');
        }else if(inputName === userName && inputPass == userPass){
            //go to user page in this case
            location.assign('home.html');
            //print error if this user not in the data base
        }else{
            alert("User name or password wrong");
        }
    });