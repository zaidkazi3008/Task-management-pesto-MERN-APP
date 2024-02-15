exports.validateTask = (req, res, next) => {
  const { title, status } = req.body;
  if (!title || !status) {
    return res.status(400).json({ message: 'Title and status are required' });
  }
  next();
};
