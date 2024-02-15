const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://zaidkazi3008:zaid1010@cluster-pesto.dnujaw0.mongodb.net/', {
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));
