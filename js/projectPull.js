class Project {
  constructor() {
    this.language = "";
    this.createdAt = "";
    this.description = "";
    this.forks = 0;
    this.url = "";
    this.homepage = "";
    this.readme_picture = "";
    this.cloudTech = "";
    this.responsibilities = "";
    this.technology = "";
    this.status = "";
    this.deployedLink = "";
    this.name = "";
  }
}
/*
Given the parent element, append the child to the parent
*/
function listAppend(parent, element){
  return parent.appendChild(element);
}
/*
Given an element and text, create a button and return that button to be appended
*/
function buttonCreator(link, text){
  var button = document.createElement("button");
  button.className = "mui-btn mui-btn--raised";
  if(link != "None"){
    var linkText = document.createElement("a");
    linkText.setAttribute("href", link);
    linkText.textContent = text;
    linkText.style.color = "black";
    button.appendChild(linkText);
  }else{
    var link = document.createElement("a");
    link.textContent = "Not deployed";
    link.style.color = "black";
    button.appendChild(link);
  }
  return button;
}
/*
Creates a p tag and decides if it's going to be visible or not
*/
function textCreator(attribute, text){
  var textTag = document.createElement("p");
  if(attribute != "None"){
  var textData = document.createTextNode(text);
  textTag.appendChild(textData);
  textTag.style.opacity = "1";
  textTag.style.textAlign = "center";
  }else{
    var textData = document.createTextNode(text);
    textTag.style.opacity = "0";
  }
  return textTag;
}
function nodeCreator(element){
  return document.createElement(element);
}

/*
Given a project name, fetch the data from the github api
*/
function projectStats(projectName, cloudTech, responsibilities, description, technology, status, websiteURL, name) {
  projects = document.getElementById("projects");
  projectData = new Project();
  fetch("https://api.github.com/repos/zenith110/" + projectName)
    .then(function (response) {
      // Get a JSON object from the response
      // This is a weird quirk of Fetch
      return response.json();
    }).then(function (data) {
      projectData.name = name;
      var date = new Date(data.created_at);
      projectData.deployedLink = websiteURL;
      projectData.createdAt = date;
      projectData.description = description;
      projectData.language = data.language;
      projectData.forks = data.forks;
      projectData.url = data.html_url;
      projectData.homepage = data.homepage;
      projectData.readme_picture = "https://raw.githubusercontent.com/zenith110/" + projectName + "/master/readme_picture.png"
      projectData.cloudTech = cloudTech;
      projectData.responsibilities = responsibilities;
      projectData.homepage = data.html_url;
      projectData.technology = technology;
      projectData.status = status;
      let li = nodeCreator("p");
      let img = nodeCreator("img");
      let nameData = textCreator(projectData.name, "Project name: " + projectData.name);
      let descriptionData = textCreator(projectData.description, "Description: " + projectData.description);
      let responsibilitiesData = textCreator(projectData.responsibilities, "Responsibilites on the project:\n" + projectData.responsibilities);
      let githubButton = buttonCreator(projectData.url, "Github repo");
      let cloudTechData = textCreator(projectData.cloudTech, "Used the following cloud tech:\n" + projectData.cloudTech);
      let createdAtData = textCreator(projectData.createdAt, "Created on: " + projectData.createdAt.getMonth() + "/" + projectData.createdAt.getDate() + "/" + projectData.createdAt.getFullYear());
      let technologyData = textCreator(projectData.technology, "Technologies used were:\n" + projectData.technology);
      let statusData = textCreator(projectData.status, "Current status of this project: " + projectData.status);
      let websiteData = buttonCreator(projectData.deployedLink, "Website link");
      img.src = projectData.readme_picture;
      listAppend(li, nameData);
      listAppend(li, img);
      listAppend(li, createdAtData);
      listAppend(li, technologyData);
      listAppend(li, statusData);
      listAppend(li, cloudTechData);
      listAppend(li, descriptionData);
      listAppend(li, responsibilitiesData);
      listAppend(li, githubButton);
      listAppend(li, websiteData);
      projects.appendChild(li)
  
    }).catch(function (error) {
      // if there's an error, log it
      console.log(error);
    });
}
