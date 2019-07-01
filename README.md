# GeoPins
=======
Run following to start the app
$ npm run dev

## Part 1: Prepare

### Section 2: Building our GraphQL Server

4. Creating our GraphQL Server

server.js
```javascript
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
require('dotenv').config();

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers
});

server.listen().then(({ url }) => console.log(`Server listening on ${url}`));
```

typeDefs.js
```javascript
const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    _id: ID,
    name: String,
    email: String,
    picture: String
  }

  type Query {
    me: User
  }
`
```

resolvers.js
```javascript
const user = {
  _id: "1",
  name: "Zach",
  email: "zachzwy@gmail.com",
  picture: "https://cloudinary.com/asdf"
}

module.exports = {
  Query: {
    me: () => user
  }
};
```

5. Creating Database with MongoDB Atlas
.env
```javascript
MONGO_URI=mongodb+srv://wenyuzhang:wenyuzhang@geopin-ohtej.mongodb.net/test?retryWrites=true&w=majority
```

server.js
```javascript
// ...
const mongoose = require('mongoose');
require('dotenv').config();

// ...

mongoose
  .connect(process.env.MONGO_URI, {
  useNewUrlParser: true
})
  .then(() => console.log('DB connected!'))
  .catch(e => console.error(e));
  
// ...
```

6. Creating Mongoose Models for User / Pin Data

### Section 3: Social Login with Google OAuth 2.0

7. Exploring our React App
8. Setting up Google OAuth
9. Adding Google Login Button
10. Authenticating Users from Apollo Server

### Section 4: Managing App State with useReducer / userContext Hooks

11. Managing App State with useContext / useReducer
12. Styling Splash Page / App Cleanup

### Section 5: Protecting Our App Route

13. Creating Protected Route for App

## Part 2: Feature

### Section 6: Building the Header

14. Building Header Component
15. Build Signout Button

### Section 7: Building the Map / User Geolocation

16. Creating and Styling our Map
17. Placing a Pin at User's Current Position

### Section 8: Creating Blog Area / Adding Draft Pins

18. Adding Draft Pin
19. Adding Blog Area for Pin Content
20. Building / Styling Blog Components
21. Managing Pin Content State and Deleting Draft Pins

### Section 9: Image Uploads with Cloudinary Web API

22. Uploading Images with Cloudinary

## Part 3: More Feature

### Section 10: Creating New User Pins

23. Creating New Pins with CREATE_PIN Mutation

### Section 11: Making Costom useClient Hook

24. Create Costom GraphQL Request Hook

### Section 12: Getting / Displaying Created Pins

25. Displaying Created Pins on the Map

### Section 13: Popups and Highlighting New Pins

26. Highlighting Newly Created Pins
27. Adding Popup to our Pins

### Section 14: Deleting User Pins

28. Deleting Pins with DELETE_PIN Mutation

### Section 15: Displaying Pin Content

29. Building Out / Styling Pin Content

### Section 16: Add Comment Function ality

30. Building out Components to Create / Display User Comments
31. Creating Comments with CREATE_COMMENT_MUTATION

## Part 4: Subscription

### Section 17: Client Error Handling

32. Hanlding Expired Auth Token Errors

### Section 18: Live Data with GraphQL Subscriptions / Apollo Client

33. Setting up Subscriptions on the Backend
34. Subscribing to Live Data Changes with Apollo Client

## Part 5: Styling

### Section 19: Styling our App for Mobile / useMediaQuery

35. useMediaQuery for Easy Mobile / Response Design

### Section 20: Improving our App / Fixing App Issues

36. Fixing App Issues

### Section 21: Deploying our App

37. Deploying with Now v2 and Heroku

### Section 22: BONUS

38. Bonus Lecture