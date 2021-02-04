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
           checkManagerEngineerInter(data);
            
        
    
}
function checkManagerEngineerInter(result)
{
    if(result.getRole()=='Engineer')
    {
        return `<br><li class="list-group-item">GitHub username:${result.getGithub()}</li><br></ul>
        </div>
    </div>`;
    }
    else if(result.getRole()=="Intern")
    {
        return `<li class="list-group-item">GitHub school:${result.getSchool()}</li><br></ul>
        </div>
    </div>`; 
    }
    else if(result.getRole()=='Manager')
    {
        `<li class="list-group-item">Office number: ${result.getNumber()}</li><br></ul>
        </div>
    </div>`
    }
}
module.exports=details;