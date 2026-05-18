const userModel = require("../model/user.model")
const followModel = require("../model/follow.model")


async function followUserControl(req,res) {

    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    if(followeeUsername===followerUsername){
        return res.status(400).json({
            message:"Cannot Follow Yourself"
        })
    }

    const isFolloweeExist = await userModel.findOne({
        username:followeeUsername
    })

    if(!followeeUsername){
        return res.status(404).json({
            message:"User does not exist"
        })
    }

    const isAlreadyFollowing = await followModel.findOne({
        followee:followeeUsername,
        follower:followerUsername
    })
    if(isAlreadyFollowing){
        return res.status(409).json({
            message:`You are already following ${followeeUsername}` 
        })
    }

    const followRecord = await followModel.create({
        follower:followerUsername,
        followee:followeeUsername
    })

    res.status(201).json({
        message:`You started following ${followeeUsername}`,
        follow:followRecord
    })
}

async function unfollowUserControl(req,res) {
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    const isUserFollowing = await followModel.findOne({
        follower:followerUsername,
        followee:followeeUsername
    })
    if(!isUserFollowing){
        return res.status(200).json({
            message:`You are not following ${followeeUsername} `
        })
    }
    await followModel.findByIdAndDelete(isUserFollowing._id)

    return res.status(200).json({
        message:"User unfollowed Successfully"
    })
}

module.exports = {
    followUserControl,
    unfollowUserControl,
}