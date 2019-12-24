function iappendHTML(intern) {
    return `
            <div class="card m-2" style="width: 18rem;">
                <div class="card-header bg-primary text-white">
                    <strong>${intern.name}</strong>
                    <br>
                    <strong><i class="fa fa-user"></i> Intern</strong>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: <span>${intern.id}</span></li>
                        <li class="list-group-item">Email: <a href="#" class="card-link">${intern.email}</a></li>
                        <li class="list-group-item">School: <span>${intern.school}</span></li>
                    </ul>
                </div>
            </div>`
}
module.exports = iappendHTML;