module.exports = (html, state) => (`
 <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="/assets/css/app.css">
             <!-- Bootstrap CSS -->
            <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC2S95rXdHT4CsjK9VvdvNTygrQyz-JT2g&libraries=places"></script>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
            <title>Preact Boilerplate</title>
        </head>
        <body>
            <div id="app">${html}</div>
            <script>window.__STATE__=${JSON.stringify(state).replace(/<|>/g, '')}</script>
            <script src="/assets/js/bundle.js"></script>
        </body>
    </html>
`);