# node-mongo-jwt-auth-server
This is a realization of the Auth Server, which should be separated from the actual resource server.

This solution is based on private & public key pair signing method. This method helps when you want to avoid sharing "secret" string if your Resource Server is separated from the Auth Server. Thanks to the keys you can keep a private key in the Auth Server (and only there) and your "Public" Resource server will handle a token validation (and multitenancy if needed) using only a public key without ever knowing how a private key looks like. 


## How to Use
...


## Private & Public key pair generation
This solution uses 512 bit RSA keys. To generate necessary keys, you need to download OpenSSL software. I will describe how to do this on Windows. 

1. Download a suitable package (the first one in Download section should be fine): http://downloads.sourceforge.net/gnuwin32/openssl-0.9.8h-1-setup.exe

2. Install it on your machine. 

3. In terminal go to the location where the installed OpenSSL binaries exist (For example C:\Program Files (x86)\GnuWin32\bin). 

4. Create a Private Key:
> openssl genrsa -out private_key.pem 512

If no file was created, check if you have write permissions in the current location. You can also change the location of the generated file to something like: 
C:\Users\your_user_name\Desktop to save it seamlessly. If this is the case, simply add the location before the output file name in the command above. 

4. Create a Public Key based on your newly created private key:
> openssl rsa -in private_key.pem -outform PEM -pubout -out public_key.pem

## Tools used
* Node.js
* Passport
* Bcrypt
* MongoDB (Mongoose)
* OpenSSL - to generate private & public key pair

## TODO
* Replace 512 bit keys with something more safe
* Full registration support (nodemailer)
* Meaningful messages for the user in all cases
* Tests
* "How to Use" section
