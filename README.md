# Penn-Course-Review-Lite

This is an Express server that interfaces with a MongoDB database to simulate a course review API, based off of Penn Course Review. 
Penn Course Review is a system for students to submit ratings and reviews of Penn courses. This app allows other users to create
keys, use them to request course review information, and allow admins to add reviews by web form.

1. Implements a middleware that checks whether the API key a user entered is valid
2. Sets up the API for normal users so they can access course review information using their API key
3. Implements admin login, add course review form for admins who have successfully authenticated
