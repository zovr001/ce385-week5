import express from "express";
import todoRouter from "./routes/todos.mjs";
const app = express();
const TODOS = [
  {
    id: "1",
    title: "อ่านหนังสือ",
    done: false,
    priority: "high"
  },
  {
    id: "2",
    title: "ทำการบ้าน",
    done: false,
    priority: "normal"
  },
  {
    id: "3",
    title: "ออกกำลังกาย",
    done: true,
    priority: "low"
  },
  {
    id: "4",
    title: "ส่งงาน",
    done: false,
    priority: "high"
  }
];

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/v1/todos", todoRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});