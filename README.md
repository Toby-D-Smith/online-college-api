# open-study-college-api

Technical Assessment

### How to use

To use this API, you'll need to generate a token. First run `npm start`
You can generate a token by registering with the endpoint http://localhost:3000/register with a username and password in the body.
Then call the endpoint http://localhost:3000/login with the same username and password and a token will be provided for you.

Now you can get, post, put and delete courses, or get collections using the different endpoints

### What to improve

Some things I'd have liked to improve would be the validation of parameters. This would be making sure price is a number, that particular parameters exist when needed for example

I've added one test to show that I know how however I would have liked to add a full test suite if more time was available. Ideally doing test driven developement however I focused on getting a working API
