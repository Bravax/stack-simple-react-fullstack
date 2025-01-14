const express = require("express");
const app = express();
const PORT = 5000;
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({message:"Hello from Api!"});
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
