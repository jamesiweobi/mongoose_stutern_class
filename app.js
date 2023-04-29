const mongoose = require('mongoose');
const User = require('./user.model')


mongoose.connect("mongodb://localhost/MytestDB").then(()=>{
  console.log('Database connection established')
}).catch(e=>console.log(e.message))

run()

async function run(){
  // const user = await User.create({
  //   username: "tes4tUser89",
  //   firstName: "Test",
  //   lastName: "Adam",
  //   age: 49,
  //   currency: "EUR",
  //   address: {
  //     street:"Somewhere on earth",
  //     lga: "same as address",
  //     houseNumber: 1,
  //     country: "In the abroad",
  //   },
  //   hobbies: ["Making jokes", "Video games"],
  //   email: "Test@emai.co",
  //   password: "aLongPassword",
  //   isMale: true,
  //   relatives: ["644d463fae04e3f560a307e2"]
  //   })
    // await User.deleteMany()
    // const savedUser = await user.save()
    // const users = await User.find({ username: 'JamesIweobi'})
    const users = await User.findOne({username: "tes4tUser89",}).populate('relatives')
    // const user = await User.findByIdAndUpdate("644bc28b0ffa21d0a211715f", {
    //   lastName: "Grampa"
    // }, {new: true});
    // await User.findByIdAndDelete("644bc1ad14ff0d3c3a1365ef") 
    // const users = await User.find()
    console.log(users, "THE UNSAVED INSTANCE OF A NEW USER")
}