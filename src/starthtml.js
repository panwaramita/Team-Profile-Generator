function starthtml()
{
    return `<!DOCTYPE html>
    <html lang="en">
    <!--head of the html page-->
    
    <head>
        <!--meta information-->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!--bootstrap link-->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <script src='https://kit.fontawesome.com/a076d05399.js'></script>
        <link rel="stylesheet" href="../dist/style.css">
        <!--title to the page-->
        <title>My Team</title>
    </head>
    
    <body>
        <!--header information-->
        <header>
            <!--navigation-->
            <div class="jumbotron">
                <h1 class="text-center">My Team</h1>
            </div>
        </header>
        <!--main section-->
        <main>
            <section class="container">
                <div class="card-deck">
    `
}
module.exports=starthtml;