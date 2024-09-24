const express = require("express");
const ExpressError = require("expressError");
const app = express();
const {
    findMode,
    findMean,
    findMedian,
    convertToNums,
} = require("./helperFunctions");

app.get("mean", function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError("You must pass a query of nums", 400);
    }

    let convertToString = req.query.nums.split(",");

    let nums = convertToNums(convertToString);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mean",
        result: findMean(nums),
    };
    return res.send(result);
});

app.get("median", function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError("You must pass a query of nums", 400);
    }

    let convertToString = req.query.nums.split(",");

    let nums = convertToNums(convertToString);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "median",
        result: findMedian(nums),
    };
    return res.send(result);
});

app.get("mode", function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError("You must pass a query of nums", 400);
    }

    let convertToString = req.query.nums.split(",");

    let nums = convertToNums(convertToString);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mode",
        result: findMode(nums),
    };
    return res.send(result);
});

app.listen(3000, function(){
    console.log(`Server starting on port 3000`)
})

app.use(function (req, res, next) {
    const err = new ExpressError("Not Found",404);
  
    // pass the error to the next piece of middleware
    return next(err);
  });
  
  /** general error handler */
  
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
  
    return res.json({
      error: err,
      message: err.message
    });
  });