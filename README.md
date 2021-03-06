## Auth Server with Express 4, MongoDB, JWT, Private & Public Key
This is a realization of the Auth Server, which should run independently from your Resource (API) Server.

This solution is based on private & public key pair encryption method. This method helps when you want to avoid sharing "secret" string if there is a need to separate authorization logic from the Resource Server. Thanks to the generated keys you can keep the private key in the Auth Server (and only there) and your "Public" Resource Server (public API) will handle the token decryption (validation, and multitenancy if needed) using only the public key without ever knowing how the private key looks like. 


## How to Use
After cloning the repo, type:
> npm install

This command will install all the necessary packages.
Then you need to generate your own key pair and put them in the config/environment.js file as a string. Public key is used here only to demonstrate the full authorization flow. Eventually it should be used only in your Resource Server and removed from the Auth Server implementation.


## Private & Public key pair generation
This solution uses 512 bit RSA keys. To generate necessary keys, you need to download OpenSSL software. I will describe how to do this on Windows. 

1. Download a suitable package: http://downloads.sourceforge.net/gnuwin32/openssl-0.9.8h-1-setup.exe

2. Install it on your machine. 

3. In terminal go to the location where the installed OpenSSL binaries exist (For example C:\Program Files (x86)\GnuWin32\bin). 

4. Create a Private Key (the last parameter describe length of the key - if you need a safer solution, you can put here 1024 or 2048):
> openssl genrsa -out private_key.pem 512

  If no file was created, check if you have write permissions in the current location. You can also change the location of the generated   file to something like: 
  C:\Users\your_user_name\Desktop to save it seamlessly. If this is the case, simply add the location before the output file name in the   command above. 

5. Create a Public Key based on your newly created private key:

  > openssl rsa -in private_key.pem -outform PEM -pubout -out public_key.pem

## Tools used
* Node.js
* Passport
* Bcrypt
* nodemailer
* MongoDB (Mongoose)
* OpenSSL - to generate private & public key pair

## TODO
* Dedicated html pages/configurable URLs for reset password/verification email pathways
* "Return Url" feature in reset password pathway
* Replace 512 bit keys with something more safe
* Meaningful messages for the user in all cases
* Tests
