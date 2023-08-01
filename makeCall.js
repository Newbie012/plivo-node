// Example for Call create

var plivo = require('plivo');

(function main() {
    'use strict';
    
   // If auth id and auth token are not specified, Plivo will fetch them from the environment variables.
    var client = new plivo.Client("prod_auth_id","prod_auth_token");
    client.calls.create(
        "+14151234567", // from
        "sip:ajay6121801985815245533110@phone.plivo.com", // to
        "https://s3.amazonaws.com/static.plivo.com/answer.xml", // answer url
        {
            answerMethod: "GET",
        },
    ).then(function (response) {
        console.log(response);
    }, function (err) {
        console.error(err);
    });
})();
