
/*
    private key was generated using openssl command: "openssl genrsa -out privatekey.key 512"
    public key was generated using openssl command: "openssl rsa -in privatekey.key -outform PEM -pubout -out publickey.key"

    ...and then content of both files was copied to this config file to simplify the implementation.
 */

module.exports = {
    env: 'development',
    development: {
        port: 8887,
        db: 'mongodb://localhost:auth/auth',
        privateKey: '-----BEGIN RSA PRIVATE KEY-----\nMIIBOgIBAAJBAMJ6P5MIemu4Z6OFVZ1FHjr3By0bkmEEHVKftKINM4l5WpbMZAXt\n72X9yeq8DVBLpX62KHol2hqjvM1TwZlRmg8CAwEAAQJAQum2+AsBvBB9sDiPJYaD\niTw3fuCus6yrviLvDpbGNbUtscFZVXfn4PN39PQHY4e3qkXPDm3aYuUy5VNwaXbx\nUQIhAPwlWgwiT2qIipJRzF9wR+316vNU8v3r+yQgz/WMCaTZAiEAxXM9bPw1C5IV\npXesBcCws4EOlZBoFdX+9iBS0q7jRScCIQCdxgGCdjWbQ7TxuZ1YWrmnfKl3eUBT\nAsYy5RU7YFTogQIgTcEj31cyTGwqug52X42SCB46cAt98Ztj2+i+tNjKBuECIGij\nfis1o0dRC5cRINkomarT0Hs11vOwvWwi/hV38+KO\n-----END RSA PRIVATE KEY-----',
        publicKey: '-----BEGIN PUBLIC KEY-----\nMFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMJ6P5MIemu4Z6OFVZ1FHjr3By0bkmEE\nHVKftKINM4l5WpbMZAXt72X9yeq8DVBLpX62KHol2hqjvM1TwZlRmg8CAwEAAQ==\n-----END PUBLIC KEY-----'
    },
    production: {
        port: 7777,
        db: 'mongodb://localhost:auth/auth'
    },
    nodemailer: {
        from: {
            name: "Slawomir Sudol",
            emailName: "testac111222",  // first part of the email address (before @ sign)
            emailDomain: "gmail.com",   // domain part of the email address (after @)
            emailSmtp: "smtp.gmail.com",// smtp address of the email provider
            password: ""   // password to the email account
        },
        forgotPassword: {               // content of the "forgot password" email
            subject: "Link do zmiany hasła",
            htmlContent: function(user) {
                var htmlContent =
                    "<div>" +
                    "<div>" +
                    "Aby zmienić hasło do konta w aplikacji ..., kliknij w link:" +
                    "</div>" +
                    "<div style='font-weight: bold; margin-top:10px; font-size:16px;'>" +
                    "<a href='http://localhost:8887/reset/" + user.resetPasswordToken + "'>" +
                    "Link do zmiany hasła" +
                    "</a>" +
                    "</div>" +
                    "<div style='margin-top:50px;'>" +
                    "Serdecznie Pozdrawiamy," +
                    "<br/>" +
                    "Zespół ..." +
                    "</div>" +
                    "</div>";

                return htmlContent
            },
            txtContent: function(user) {
                var txtContent = "Aby zmienić hasło, kliknij w link: " + "www.medpanel.pl/reset/" + user.resetPasswordToken;

                return txtContent
            }
        },
        emailVerification: {            // content of the "Email verification" email
            subject: "Link potwierdzający rejestrację",
            txtContent: function(user) {

            },
            htmlContent: function(user) {
                var htmlContent =
                    "<div>" +
                    "<div>" +
                    "Aby potwierdzić adres email w aplikacji ..., kliknij w link:" +
                    "</div>" +
                    "<div style='font-weight: bold; margin-top:10px; font-size:16px;'>" +
                    "<a href='http://localhost:8887/emailverification/" + user.emailVerifivationToken + "'>" +
                    "Potwierdzam adres email" +
                    "</a>" +
                    "</div>" +
                    "<div style='margin-top:50px;'>" +
                    "Serdecznie Pozdrawiamy," +
                    "<br/>" +
                    "Zespół ..." +
                    "</div>" +
                    "</div>";

                return htmlContent
            }
        }
    }
};
