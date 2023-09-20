var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>User Registration</title>
      </head>
      <body>
        <h1>User Registration</h1>
        <form method="POST" action="/register">
          <label for="name">Name:</label>
          <input type="text" name="name" id="name" required><br>
          <label for="email">Email:</label>
          <input type="email" name="email" id="email" required><br>
          <button type="submit">Register</button>
        </form>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Gateway server is running on port ${PORT}`);
});
