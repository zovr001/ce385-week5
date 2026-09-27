import express from "express";  
import { validateTodo } from "./validateTodo.mjs";
const router = express.Router();

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

router.get("/", (req, res) => {
  res.json(TODOS);
});

router.post("/", validateTodo, (req, res) => {
  const newTodo = {
    id: String(TODOS.length + 1),
    title: req.body.title,
    done: req.body.done,
    priority: req.body.priority
  };

  TODOS.push(newTodo);

  res.status(201).json(newTodo);
});

router.get("/:id", (req, res) => {
  const todo = TODOS.find((item) => item.id === req.params.id);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.json(todo);
});

export default router;