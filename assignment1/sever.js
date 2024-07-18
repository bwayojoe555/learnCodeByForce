import { connect, Schema, model } from 'mongoose';


connect('mongodb://localhost:27017')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'))

  const Customer = [];

//customer schema
const customerSchema = new Schema({
  name: String,
  contact: String,
  email: String,
  userRole: String,
  country: String,
  district: String
});
//customer model
const customer = model('customer', customerSchema);
export default customer;


 


//update a customer by id

