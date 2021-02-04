const Engineer = require("../lib/Engineer");

function details(data)
{
    return `<div class="card">
    <div class="card-header bg-primary">
        <span>${data.getName()}</span><br><i class='fas fa-glasses'></i>
        <span>${data.getRole()}</span>
    </div>
    <div class="card-body" style="background-color: #f2f3f5;">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data.getId()}</li>
            <li class="list-group-item">Email:${data.getEmail()}</li>`
            +
           checkManagerEngineerInter(data.getRole());
            +
            `<li class="list-group-item">Office number: ${data.getRole()}</li>
        </ul>
    </div>
</div>`
    
}
function checkManagerEngineerInter(result)
{
    if(result=='Engineer')
    {
        return `<li class="list-group-item">GitHub username:${data.githubUserName()}</li>`;
    }
    else if(result=="Intern")
    {
        return `<li class="list-group-item">GitHub school:${data.githubUserName()}</li>`; 
    }
    else if(result=='Manager')
    {
        `<li class="list-group-item">Office number: ${data.getSchool()}</li>`
    }
}
module.exports=details;