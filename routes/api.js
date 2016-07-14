var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Team = mongoose.model('Team')

router.route('/teams/top_teams')

	//to get all teams with full data
	.get(function(req, res){

		Team.find().exec(function (err,teams){
			if(err){
				return res.send(500,err);
			}
            console.log(teams);
			return res.send(teams);
            
                
		});
})

router.route('/teams/:id/:addition')

	//create
   .put(function(req,res){
     	Team.findById(req.params.id, function(err, team){
            if(err)
                res.send(err);
            team.score = team.score + Number(req.params.addition);
            team.save(function(err, team){
                if(err){
                    res.send(err);
                }
                res.json(team);
            });
        });
    })

    //gets specified post
    .get(function(req, res){
        Team.findById(req.params.id, function(err, team){
            if(err)
                res.send(err);
            res.json(team);
        });
    }) 

    .delete(function(req,res){
        return res.send({message:'TODO delete an existing team score with id : ' + req.params.id})
    });


module.exports = router;
