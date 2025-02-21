// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const cors = require('cors');
// app.use(cors());

// const ip = '192.168.59.19';  
// const port = process.env.PORT || 3000;

// app.use(bodyParser.json());

// app.post('/bfhl', (req, res) => {
//     const { data } = req.body;

//     if (!Array.isArray(data)) {
//         return res.status(400).json({ error: "Data should be an array." });
//     }

//     const numbers = data.filter(item => !isNaN(item));
//     const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
    
//     const highestAlphabet = alphabets
//         .sort((a, b) => b.toUpperCase().localeCompare(a.toUpperCase()))[0];

//     const user_id = "Abhishek_Sharma_"; 
//     const response = {
//         is_success: true,
//         user_id,
//         email: "22BCS17260@cuchd.in",
//         roll_number: "22BCS17260",
//         numbers,
//         alphabets,
//         highest_alphabet: highestAlphabet ? [highestAlphabet] : [],
//         data
//     };

//     res.json(response);
// });

// app.get('/bfhl', (req, res) => {
//     res.status(200).json({ operation_code: 1 });
// });

// // Bind the server to the desired IP address and port
// app.listen(port, ip, () => {
//     console.log(`Server is running on http://${ip}:${port}`);
// });

const express = require("express");
const app = express();

app.use(express.json());

app
  .route("/bfhl")
  .get((req, res) => {
    res.status(200).json({ operation_code: 1 });
  })
  .post((req, res) => {
    const data = req.body.data || [];
    const numbers = [];
    const alphabets = [];
    let highest_alphabet = "";

    for (const item of data) {
      if (!isNaN(item)) {
        numbers.push(item);
      } else if (item.length === 1 && isNaN(item)) {
        alphabets.push(item);
        if (
          !highest_alphabet ||
          item.toUpperCase() > highest_alphabet.toUpperCase()
        ) {
          highest_alphabet = item;
        }
      }
    }

    res.json({
      is_success: true,
      user_id: "Krish_Sangwan_23012004",
      email: "krishsangwan100@gmail.com",
      roll_number: "22BCS16946",
      numbers: numbers,
      alphabets: alphabets,
      highest_alphabet: highest_alphabet ? [highest_alphabet] : [],
    });
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});