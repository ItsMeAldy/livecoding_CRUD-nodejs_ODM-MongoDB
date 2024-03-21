const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "name cannot be empty"],
    },
    email:{
      type: String,
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    city: String,
    country: {
      type: String,
      required: true,
      default: "Indonesia",
    }
  });
  
  const Customer = mongoose.model("Customer", customerSchema);
  
  // buat data ke mongodb
//   const customerTest = new Customer ({
//     name: 'susan',
//     email: 'susan12@gmail.com',
//     phoneNumber: '081234567890',
//     city: 'Manado',
//     country: 'Indonesia'
//   });
  
//   customerTest
//   .save()
//   .then ((doc) => {
//     console.log(doc)
//   })
//   .catch((err)=> {
//     console.log("error :" + err)
//   }) 

module.exports = Customer;