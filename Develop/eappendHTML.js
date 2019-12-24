function eappendHTML(engineer) {
    return `
            <div class="card m-2" style="width: 18rem;">
                <div class="card-header bg-primary text-white">
                    <strong>${engineer.name}</strong>
                    <br>
                    <strong><i class="fa fa-glass"></i> Engineer</strong>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: <span>${engineer.id}</span></li>
                        <li class="list-group-item">Email: <a href="#" class="card-link">${engineer.email}</a></li>
                        <li class="list-group-item">GitHub: <a href="#" class="card-link">${engineer.github}</a></li>
                    </ul>
                </div>
            </div>`
}
module.exports = eappendHTML;