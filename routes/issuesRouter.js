const express = require('express')
const issuesRouter = express.Router()
const Issues = require('../models/issues.js')

//get all Issues

issuesRouter.get("/", (req, res, next) => {
    issues.find((err, issue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issue)
    })
})

//get Issues by userID

issuesRouter.get("/user", (req, res, next) => {
    issues.find({ user: req.user._id }, (err, issue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(500).send(issue)
    })
})

//add new issue

issuesRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newIssue = new Issues(req.body)
    newIssue.save((err, savedIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})

// delete issues

issuesRouter.delete("/:issuesId", (req, res, next) => {
    Issues.findOneAndDelete(
        { _id: req.params.issuesId, user: req.user._id },
        (err, deletedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted Issue: ${deletedIssue.title}`)
        }
    )
})

// Update issues

issuesRouter.put('/:issuesId', (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issuesId, user: req.user._id },
        req.body,
        { new: true },
        (err, updatedIssue) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )
})

module.exports = issuesRouter