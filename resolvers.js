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