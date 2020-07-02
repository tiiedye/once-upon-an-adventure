import axios from "axios";
// import Story from "../../../models/storyModel";

export default {
  // Get all users
  getUser: function(userData) {
    return axios.get("/api/signup", userData );
  },
  
  // Saves a User to the database
  saveUser: function(userData) {
    return axios.post("/api/signup", userData);
  },

  findUser: function(userData) {
    return axios.post("/api/signup/login", userData);
  },

  getSprite: function(spriteData) {
    return axios.get("/api/sprite", spriteData );
  },
  
  saveSprite: function(spriteData) {
    return axios.post("/api/sprite", spriteData);
  },
  getInvent: function(spriteData) {
    return axios.get("/api/inventory", spriteData );
  },
  saveInvent: function(spriteData) {
    return axios.post("/api/inventory", spriteData);
  },
  createStory: function(storyData) {
    return axios.post("/api/story", storyData);
  },
  findAllStory: function() {
    return axios.get("/api/story");
  },
  findUserStory: function(id) {
    return axios.get("/api/story/" + id);
  },
  UpdateUserStory: function(id, storyData) {
    return axios.post("/api/story/" + id, storyData);
  }

};
