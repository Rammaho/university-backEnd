const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();
const University = require('./university.model.js')

let server;
mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology: true,
  }).then(() => {
  console.log('Connected to MongoDB');
  server = app.listen(process.env.API_PORT, () => {
    console.log(`Listening to port: ${process.env.API_PORT}`);
  });
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.log('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  console.log(error);
  exitHandler();
};


process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  console.log('SIGTERM received');
  if (server) {
    server.close();
  }
});


// const university = new University({
//     name: "Kalinga",
//     location: "BBU",
//     fees: 2000,
//     numberOfStudents: 100
// });

// app.get('/university', (req, res) => {
//     university.save().then((result) => {
//         res.send(result);
//     }).catch((err) => {
//         console.log(err);
//     });
// }
// );

// university.save().then((result) => {
//     console.log(result);
// }
// ).catch((err) => {
//     console.log(err);
// }
// );
