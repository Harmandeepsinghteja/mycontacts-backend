const asyncHandler = require("express-async-handler");
const contact = require("../models/contactModel.js");



// @desc Get all Contacts
// @route GET /api/contacts
// @access Public
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

// @desc Create all Contacts
// @route Post /api/contacts
// @access Public
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }
  res.status(201).json({ message: "Create Contacts" });
});

// @desc GET  Contact
// @route GET /api/contacts/:id
// @access Public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get Contact for ${req.params.id}` });
});

// @desc Update Contact
// @route Put /api/contacts
// @access Public
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Contacts for ${req.params.id}` });
});

// @desc Create all Contacts
// @route Post /api/contacts
// @access Public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Contacts for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
