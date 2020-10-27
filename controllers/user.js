const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const ENV = require("../config/env");
const User = require("../models/user");
const saltRounds = 12;

const userRegister = async (req, role,  res) => {
 
  try {
    let emailNotRegistered = await validateEmail(req.body.email);
    if (!emailNotRegistered) {
      return res.status(409).json({
        message: "User already exists",
        success: false,
      });
    }

    let password = await bcrypt.hash(req.body.password, saltRounds);

    let newUser = new User({
      ...req.body,
      password,
      role    
    });

    let saveNewUser = await newUser.save();

    let serializedUser = {
      _id: saveNewUser._id,
      name: saveNewUser.name,
      email: saveNewUser.email,
    };

    return res.status(201).json({
      message: "User created successfully",
      success: true,
      result: serializedUser,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Unable to create you account",
      success: false,
    });
  }
};

const validateEmail = async (email) => {
  let user = await User.findOne({ email });
  return user ? false : true;
};

const userLogin = async (req, res) => {
  try {
    let { email, password } = req.body;
    

    const user = await User.findOne({ email });
  
    if (!user) {
      return res.status(404).json({
        message: "User not exists",
        success: false,
      });
    }

    //check password
    let isMatch = await bcrypt.compare(password, user.password);
    

    if (isMatch) {
      let payload = {
        _id: user._id,
        name: user.name,
        email: user.email,
      };
      let token = await jwt.sign(payload, ENV.JWT_KEY, { expiresIn: "7days" });

      return res.status(200).json({
        message: "You are loggedin successfully",
        success: true,
        _id: user._id,
        role:user.role,
        token: token,
      });
    } else {
      return res.status(401).json({
        message: "Incorrect credentials",
        success: false,
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: "Unable to login",
      success: false,
    });
  }
};

const serializeUser = async (req, res) => {
  try {
    let user = await req.user;
    if (user) {
      return res.status(200).json({
        message: "Successfully fetched your profile data",
        success: true,
        _id: user._id,
        name: user.name,
        email: user.email,
        role:user.role,
        updatedAt: user.updatedAt,
        createdAt: user.createdAt,
      });
    } else {
      return res.status(404).json({
        message: "Unable to fetch your profile data",
        success: false,
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: "server err",
      success: false,
      error: err,
    });
  }
};

const getLocations = async (req, res) => {

    try{
        //long and  lat of the pump with relative to the user curretn locations.
        let maxDistance = req.body.maxDistance;
        let long = req.body.long;
        let lat = req.body.lat;
        let nearUser = await User.find({
                    location: {
                    $near: {
                       $maxDistance: maxDistance,
                        $geometry: {
                        type: "Point",
                        coordinates: [long, lat],
                        },
                    },
                    },
                });
         
            const newArr= []
             nearUser.forEach( (data) => {
                    const serializeData = {
                        _id : data._id,
                        location : data.location,
                        name : data.name,
                        email : data.email
                    }
                    newArr.push(serializeData);
                  
                })
               
                return res.status(200).json({
                    message : "Successfully fetched the data",
                    success:true,
                    result : newArr
                })
    }
    catch(err){
        return res.status(500).json({
            message : "Unable to fetch data",
            success : false
        })
    }

  

   

};



const userBooking = async(req, res) => {

    const data = {
        fillingType : req.body.fillingType
    } 

    await User.findByIdAndUpdate({_id : req.params.userId } , data )

    return res.status(200).json({
        message : "booking done",
        success : true
    })
    

}


const viewBookings = async( req ,res ) => {
    try {
        
    const id = req.user._id;

    //check role 

    let user = await User.findOne({_id : id });
   
    if(user.role !== "admin"){
        return res.status(404).json({
            message : "You are unauthorized to fetch the data",
            success : false
        })
    }
 

    let allUser = await User.find({role : "user"});
    
    const newArr = [];

    allUser.forEach( (data) => {
        const serializeData = {
            _id : data._id,
            name : data.name,
            email : data.email,
            booking : data.fillingType,
        }
        newArr.push(serializeData);
    } )
   
   return res.status(200).json({
       message : "successfully fetched bookings",
       success : true,
       result : newArr
      
   })
 
    }

    catch(err){
        return res.status(500).json({
            message : "Unable to fetch data",
            success : false
        })
    }


}

const uploadFile = async(req ,res) => {
    
   try {
        return res.status(201).json({
            message : "file uploaded successfully",
            success : true
        })

   }
   catch(err){
       return res.status(500).json({
           message : "unable to upload your file/ check your file size < 3 mb ",
           success : false
       })
   }

}

module.exports = {
  userRegister,
  userLogin,
  serializeUser,
  getLocations,
  userBooking,
  viewBookings,
  uploadFile,
};
