const Engineer = require("../lib/Engineer");

function details(data)
{
    return `<div class="card">
    <div class="card-header bg-primary">
        <span>${data.getName()}</span><br>
        `
    +
    getTheIcons(data.getRole())+`
        <span>${data.getRole()}</span>
    </div>
    <div class="card-body" style="background-color: #f2f3f5;">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data.getId()}</li>
            <li class="list-group-item">Email:<a href="mailto:${data.getEmail()}" target="_blank" rel="noopener noreferrer">${data.getEmail()}</a></li>`
            +
           checkManagerEngineerInter(data);
            
        
    
}
function getTheIcons(result)
{
    if(result=='Engineer')
    {
        return `<i class='fas fa-glasses'></i>`;
    }
    else if(result=="Intern")
    {
        return `<i class='fas fa-user-graduate'></i>`; 
    }
    else if(result=='Manager')
    {
        return `<i class="fas fa-mug-hot"></i>`;
    }
}

function checkManagerEngineerInter(result)
{
    if(result.getRole()=='Engineer')
    {
        return `<li class="list-group-item">GitHub username: <a href="https://github.com/${result.getGithub()}" target="_blank">${result.getGithub()}</a></li></ul>
        </div>
    </div>`;
    }
    else if(result.getRole()=="Intern")
    {
        return `<li class="list-group-item">School:${result.getSchool()}</li></ul>
        </div>
    </div>`; 
    }
    else if(result.getRole()=='Manager')
    {
       return `<li class="list-group-item">Office number: ${result.getNumber()}</li></ul>
        </div>
    </div>`
    }
}
module.exports=details;