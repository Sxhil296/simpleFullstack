import express from "express";

const app = express();

app.use(express.static('dist'))  //middleware
//middleware is used when dist folder is added to the backend..it is bad practice, changes in the frontend code do not propagate. one should keep backend and frontend code separate

// app.get("/", (req, res) => {
//   res.send("Server is ready!");
// });


//get a list of five fruits
app.get('/api/fruits', (req, res) => {
    const fruits = [
        {
          "id": 1,
          "title": "Apple",
          "content": "Apples are a popular fruit known for their sweet and crisp taste. They come in various colors and are a good source of fiber and vitamins."
        },
        {
          "id": 2,
          "title": "Banana",
          "content": "Bananas are a tropical fruit with a creamy texture and a slightly sweet flavor. They are rich in potassium and provide quick energy."
        },
        {
          "id": 3,
          "title": "Orange",
          "content": "Oranges are citrus fruits with a tangy and refreshing taste. They are packed with vitamin C, which is good for the immune system."
        },
        {
          "id": 4,
          "title": "Grapes",
          "content": "Grapes come in various colors, including red, green, and black. They are a delicious snack and can be used to make juice and wine."
        },
        {
          "id": 5,
          "title": "Strawberry",
          "content": "Strawberries are sweet, red berries that are often used in desserts and salads. They are a good source of antioxidants and vitamin C."
        }
      ]
      res.send(fruits)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})