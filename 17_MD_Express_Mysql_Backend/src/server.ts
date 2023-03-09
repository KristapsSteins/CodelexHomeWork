import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.listen(3004, () => {});

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "123456",
  database: "blog",
});

const getDataFromDB = (query, res) => {
  pool.getConnection((err, conn) => {
    if (err) {
      res.send("Error occured");
    } else {
      pool.query(query, (err2, records) => {
        if (!err2) {
          res.send(records);
        }
      });
    }
  });
};

app.get("/blogs", (req, res) => {
  getDataFromDB("SELECT * FROM blogs", res);
});

app.get("/blogs/:id", (req, res) => {
  const blogId = req.params.id;
  if (!blogId) {
    res.send({ error: "Invalid id provided" });
  } else {
    pool.query<mysql.RowDataPacket[]>(
      `SELECT * FROM blogs WHERE id=${blogId}`,
      (err, result) => {
        if (err) throw err;
        res.send(result[0]);
      }
    );
  }
});

app.get("/comments", (req, res) => {
  getDataFromDB("SELECT * FROM comments", res);
});

app.post("/comments", (req, res) => {
  const comment = req.body.comment;
  const postId = req.body.postId;
  const query = `INSERT INTO comments (comment, postId) VALUES ('${comment}', '${postId}')`;
  pool.getConnection((err, conn) => {
    if (err) {
      res.send("Error occured");
    } else {
      pool.query(query, (err2, result) => {
        if (!err2) {
          res.send({ success: true });
        } else {
          res.send({ success: false });
        }
      });
    }
  });
});

app.post("/blogs", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const image = req.body.image;

  if (!title || !content || !image) {
    return res
      .status(400)
      .send({ success: false, message: "Missing required fields." });
  }

  const query = `INSERT INTO blogs (title, content, image) VALUES ('${title}','${content}','${image}')`;
  pool.getConnection((err, conn) => {
    if (err) {
      res.send("Error occured");
    } else {
      pool.query(query, function (err2, result) {
        if (!err2) {
          res.send({ success: true });
        } else {
          res.send({ success: false });
        }
      });
    }
  });
});

app.delete("/blogs/:id", (req, res) => {
  const blogId = req.params.id;
  if (!blogId) {
    res.send({ error: "Invalid id provided" });
  } else {
    pool.query<mysql.RowDataPacket[]>(
      `DELETE FROM blogs WHERE id=${blogId}`,
      (err, result) => {
        if (err) {
          res.send({ success: false, message: "Error deleting blog post." });
        } else {
          res.send({
            success: true,
            message: "Blog post deleted successfully.",
          });
        }
      }
    );
  }
});
