const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username:{ 
      type: String,
      unique: true,
    required:true,
    trim:true,

    },

    email: {
     type:String,
     unique:true,
     required:true,
     match:[/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },
    age: Number,
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `fullName` that gets and sets the user's full name
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return `${this.friends.length}`;
  })


// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
