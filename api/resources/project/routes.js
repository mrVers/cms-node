const server 	= require('../../server').server;
const mongoose 	= require('mongoose');

module.exports = function () {

	server.get('/projects', function (req, res) {

		const Project = mongoose.model('Project');

		Project.find(function(err, docs){

            if(!err){
                res.send(docs);
            }else{
                res.sendStatus(400).send(err);
                console.log(err);
            }

		});

	});

	server.post('/project', function(req, res){

		const data = req.body;
		const Project = mongoose.model('Project');
		const newProject = new Project(data);

		newProject.save(function(err){

			if(!err){
				res.send(newProject);
			}else{
				res.status(400).send(err);
				console.log(err);
			}

		});

	});

	server.delete('/project/:id', function(req, res){

		const projectId = req.params.id;
		const Project = mongoose.model('Project');

		Project.findByIdAndRemove(projectId, function(err, doc){

			if(!err){
				res.send(doc);
			}else{
				res.status(400).send(err);
				console.log(err)
			}

		});

	});

	server.get('/project/:id', function(req, res){

			const projectId = req.params.id;

			const Project = mongoose.model('Project');

			Project.findById(projectId, function(err, doc){

				if(!err){
					res.send(doc);
				}else{
					res.status(400).send(err);
					console.log(err);
				}

			});

	});

	server.put('/project/:id', function(req, res){

		const projectId = req.params.id;
		const data = req.body;
		const Project = mongoose.model('Project');

		Project.findByIdAndUpdate(projectId, data, {new:true}, function(err, doc){

			if(!err){
				res.send(doc);
			}else{
				res.status(400).send(err);
				console.log(err)
			}

		});

	});

};
