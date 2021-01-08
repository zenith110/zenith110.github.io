class Project {
  constructor() {
    this.language = "";
    this.createdAt = "";
    this.description = "";
    this.forks = 0;
    this.url = "";
    this.homepage = "";
    this.content = "";
    this.readme_picture = "";
    this.cloudTech = "";
    this.responsibilities = "";
  }
}
function listAppend(parent, element){
  return parent.appendChild(element);
}
function nodeCreator(element){
  return document.createElement(element);
}
/*
Given a keyword, search for it within the array and returns the string
*/
function keywordFinder(keyword) {

}

/*
Given a project name, fetch the data from the github api
*/
function projectStats(projectName) {
  document.getElementById("projects");
  projectData = new Project();
  fetch("https://api.github.com/repos/zenith110/" + projectName)
    .then(function (response) {
      // Get a JSON object from the response
      // This is a weird quirk of Fetch
      return response.json();
    }).then(function (data) {
      projectData.createdAt = data.created_at;
      projectData.description = data.description;
      projectData.language = data.language;
      projectData.forks = data.forks;
      projectData.url = data.html_url;
      projectData.homepage = data.homepage;
      projectData.readme_picture = "https://raw.githubusercontent.com/zenith110/Xatu_Bot/master/readme_picture.png"
      let li = nodeCreator("li");
      let img = nodeCreator("img");
      let span = nodeCreator("span")
      img.src = projectData.readme_picture;
      listAppend(li, img);
    }).catch(function (error) {
      // if there's an error, log it
      console.log(error);
    });
    let li = nodeCreator("li");
    let img = nodeCreator("img");
    img.src = projectData.readme_picture;
    listAppend(li, img);
    return projectData;
}
