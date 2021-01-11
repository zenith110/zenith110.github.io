function getHobbies(){
    var jsonFile;
    fetch("https://zenith110.github.io/js/hobbies.json")
        .then(res => res.json())
        .then(data => jsonFile = JSON.parse(data))
    console.log(jsonFile);
}