import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) =>{
  res.send("Hello World!");
})

app.listen(port, () => {
  console.log(`Server runnin on port ${port}.`);
});

    // Requests
// Get = Request resources
// post = Sending resourses
// put & patch = update method. put -> replace a res, patch -> patch up a res
// Delete = delete res