
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://tanvir360:nopassword22@cluster0.rvcg5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // Optional: Specify your database name if not in the connection string
        dbName: "MaracanaToBernabue" 
      }
    );
    console.log('MongoDB Atlas Connected');
  } catch (err) {
    console.error('Connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;