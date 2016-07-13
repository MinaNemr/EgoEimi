var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Team = mongoose.model('Team')

router.route('/teams/top_four')

	//to get all teams with full data
	.get(function(req, res){

		Team.find().sort({'score': -1}).limit(4).exec(function (err,teams){
			if(err){
				return res.send(500,err);
			}
			return res.send(teams);
            
                
		});
})

router.route('/teams/bottom_four')

    //to get all teams with full data
    .get(function(req, res){
        Team.find().sort({'score': 1}).limit(4).exec(function (err,teams){
            if(err){
                return res.send(500,err);
            }
            return res.send(teams);
        });
}) 

router.route('/teams/:id')

	//create
   .put(function(req,res){
     	Team.findById(req.params.id, function(err, team){
            if(err)
                res.send(err);
            console.log(Number(req.body.addition));
            team.score = team.score + Number(req.body.addition);
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