
/*
    private key was generated using openssl command: "openssl genrsa -out privatekey.key 512"
    public key was generated using openssl command: "openssl rsa -in privatekey.key -outform PEM -pubout -out publickey.key"

    ...and then content of both files was copied to this config file to simplify the implementation.
 */

module.exports = {
    development: {
        port: 8888,
        db: 'mongodb://localhost:auth/auth',
        privateKey: '-----BEGIN RSA PRIVATE KEY-----\nMIIBOgIBAAJBAMJ6P5MIemu4Z6OFVZ1FHjr3By0bkmEEHVKftKINM4l5WpbMZAXt\n72X9yeq8DVBLpX62KHol2hqjvM1TwZlRmg8CAwEAAQJAQum2+AsBvBB9sDiPJYaD\niTw3fuCus6yrviLvDpbGNbUtscFZVXfn4PN39PQHY4e3qkXPDm3aYuUy5VNwaXbx\nUQIhAPwlWgwiT2qIipJRzF9wR+316vNU8v3r+yQgz/WMCaTZAiEAxXM9bPw1C5IV\npXesBcCws4EOlZBoFdX+9iBS0q7jRScCIQCdxgGCdjWbQ7TxuZ1YWrmnfKl3eUBT\nAsYy5RU7YFTogQIgTcEj31cyTGwqug52X42SCB46cAt98Ztj2+i+tNjKBuECIGij\nfis1o0dRC5cRINkomarT0Hs11vOwvWwi/hV38+KO\n-----END RSA PRIVATE KEY-----',
        publicKey: '-----BEGIN PUBLIC KEY-----\nMFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMJ6P5MIemu4Z6OFVZ1FHjr3By0bkmEE\nHVKftKINM4l5WpbMZAXt72X9yeq8DVBLpX62KHol2hqjvM1TwZlRmg8CAwEAAQ==\n-----END PUBLIC KEY-----'
    },
    production: {
        port: 7777,
        db: 'mongodb://localhost:auth/auth'
    }
};
