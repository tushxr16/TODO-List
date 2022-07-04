const tasks = require("./routes/tasks");
const connection = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();

connection();

app.use(express.json());
app.use(cors());

app.use("/api/tasks", tasks);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
