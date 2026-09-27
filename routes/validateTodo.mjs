export function validateTodo(req, res, next) {
  const { title, done, priority } = req.body;

  if (!title || typeof title !== "string") {
    return res.status(400).json({
      message: "title is required"
    });
  }

  if (typeof done !== "boolean") {
    return res.status(400).json({
      message: "done must be boolean"
    });
  }

  if (!["low", "normal", "high"].includes(priority)) {
    return res.status(400).json({
      message: "priority must be low, normal, or high"
    });
  }

  next();
}