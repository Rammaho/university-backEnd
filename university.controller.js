const University = require('./university.model'); // Adjust the path as necessary

exports.createUniversity = async (req, res) => {
  try {
    const university = new University(req.body);
    await university.save();
    res.status(201).send(university);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAllUniversities = async (req, res) => {
  try {
    const universities = await University.find({});
    res.status(200).send(universities);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getUniversityById = async (req, res) => {
  try {
    const university = await University.findById(req.params.id);
    if (!university) {
      return res.status(404).send();
    }
    res.send(university);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateUniversityById = async (req, res) => {
  try {
    const university = await University.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!university) {
      return res.status(404).send();
    }
    res.send(university);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteUniversityById = async (req, res) => {
  try {
    const university = await University.findByIdAndDelete(req.params.id);
    if (!university) {
      return res.status(404).send();
    }
    res.send(university);
  } catch (error) {
    res.status(500).send(error);
  }
};
