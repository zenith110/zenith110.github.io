
async function getHobbies(){
    var local = window.location.pathname;
    var dir = local.substring(0, local.lastIndexOf("/"))
    console.log(dir)
}