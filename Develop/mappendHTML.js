function mappendHTML(manager) {
    return `
            <div class="card m-2" style="width: 18rem;">
                <div class="card-header bg-primary text-white">
                    <strong>${manager.name}</strong>
                    <br>
                    <strong><i class="fa fa-coffee"></i> Manager</strong>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: <span>${manager.id}</span></li>
                        <li class="list-group-item">Email: <a href="#" class="card-link">${manager.email}</a></li>
                        <li class="list-group-item">Office number: <span>${manager.officeNumber}</span></li>
                    </ul>
                </div>
            </div>`
}
module.exports = mappendHTML;