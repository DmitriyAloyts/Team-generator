function generateHTML() {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <title>Team generator template</title>
    </head>
    
    <body>
        <div class="jumbotron" style="background-color: maroon; color: white;">
            <h1 class="text-center">
                <strong>My Team</strong>
            </h1>
        </div>
        <div class="container">
            <div class="row justify-content-center">
                `
}
module.exports = generateHTML;