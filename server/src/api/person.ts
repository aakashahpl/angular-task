import express from 'express';
import verifyToken from './auth';
import categoryModel from '../model/categories';
import personModel from '../model/person';

const Router = express.Router();

Router.get('/person', async (req, res) => {
  try {

    const persons = await personModel.find();

    return res.status(200).json({ persons });
  } catch (error) {
    return res.status(400).json({
      message: "couldn't fetch persons data",
    });
  }
});

Router.get('/person/:_id', async (req, res) => {
  try {
    
    const personId = req.params._id;
    const person = await personModel.findById(personId);

    return res.status(200).json({ person });
  } catch (error) {
    return res.status(400).json({
      message: "couldn't fetch persons data",
    });
  }
});

Router.post('/person', async (req, res) => {
  try {
    const decodedToken:any= req.user;
    const person = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age:req.body.age,
      mobile: req.body.mobile,
    };
    console.log(person);
    const addNewPerson = new personModel(person);
    addNewPerson.save();
    return res.status(200).json({
      message: 'person details saved successfully',
    });
  } catch (error) {
    return res.status(400).json({
      message: 'person not added',
    });
  }
});

Router.put('/person/:_id', async (req, res) => {
  try {
    console.log(req.params._id);
    console.log(req.body);
    const updatePerson = await personModel.findOneAndUpdate(
      { _id: req.params._id },
      req.body
    );
    return res.json({
      category: updatePerson,
      message: 'person details successfully updated',
    });
  } catch (error) {
    return res.status(400).json({
      message: 'falied to update person details',
      errorCode: error,
    });
  }
});

Router.delete('/person/:_id', async (req, res) => {
  const deletePerson = await personModel.findByIdAndDelete({
    _id: req.params._id,
  });
  return res
    .status(200)
    .json({ movie: deletePerson, message: 'Person details deleted successfully' });
});

export default Router;
