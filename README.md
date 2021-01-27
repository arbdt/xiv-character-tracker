# xiv-character-tracker

## About
This is a FFXIV fan web app to track character progress. It is built in MERN / MVC format - using Express for routing, Mongoose for data storage, React for pages and Node for backend. The Mongoose database stores Character data such as class levels, and attaches IDs of saved characters to User data. If not logged in, a character can be viewed but not saved.

## Usage
Ideally, users may log in via the login button in the top right, which uses the Auth0 srvice for authentication and includes Google and Discord social connections. First, search for an existing character by name and server. The character's information is displayed. If a character was previously saved to the databse and has since had changes (such as increase in level), the difference will be highlighted in green, e.g. "+10".

If a user is logged in, the character can be saved to the users entry in the database. The user can then visit the User Page, which will list any characters currently associated with them. This list includes options to View the Character Profile page, or remove from the User's account.