const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const crypto = require("crypto");
const routes = require("./routes");
const isAuth = require("./routes/authMiddleware").isAuth;
const connection = require("./config/database");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3001", credentials: true }));

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST", "PUT"],
  },
});

io.on("connection", (socket) => {
  console.log(`Connected user: ${socket.id}`);
  socket.on("disconnect", () => {
    console.log(`Disconnected user: ${socket.id}`);
  });
  socket.on("send_message", (data) => {
    console.log(data);
    // socket.to(data.room).emit("receive_message", data);
  });
});

const User = mongoose.models.User;

const bodyParser = require("body-parser");

const MongoStore = require("connect-mongo")(session);

require("dotenv").config();

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.urlencoded({ extended: true }));

const sessionStore = new MongoStore({
  mongooseConnection: mongoose.connection,
  collection: "sessions",
});

app.use(
  session({
    secret: "zdfbdaf",
    resave: true,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      cookie: { secure: false },
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

require("./config/passport");

app.use(passport.initialize());
app.use(passport.session());

app.use("/", routes);

server.listen(3000);
