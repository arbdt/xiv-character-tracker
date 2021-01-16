# xiv-character-tracker

## About
This is a FFXIV fan web app to track character progress. It uses MERN style - Express for routing, Mongoose for data storage, React for pages and Node for backend. The Mongoose database stores a chosen character and its class level details to a user login. If not logged in, a character can be viewed but not saved.

## Usage
First, search for an existing character by name and server. The character's information is displayed.

If logged in, the character can be saved to the users entry in the DB. On the next visit, the character's saved data will be displayed. The data will eb refreshed and changes will be highlighted.