import User from "../model/user.model.js";

export const getuser = async (req, res) => {
  const { username } = req.params;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getMybooks = async (req, res) => {
  const { username } = req.params;

  try {
    const getMybooks = await User.findOne({ username }).populate(myUploads);
    if (!getMybooks) {
      return res
        .status(404)
        .json({ error: "You dont have any books created yet" });
    }

    return res.status(200).json(getMybooks);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error });
  }
};
