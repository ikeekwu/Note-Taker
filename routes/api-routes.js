var fs = require("fs");
var db = []
// Routes

module.exports = function(app) {
    
    app.get("/api/notes", function(req, res) {
        fs.readFile("/Users/ikechiekwueme/Desktop/Projects/Note-Taker/db/db.json", function (err, data) {
            if (err) throw err;
            let notes = JSON.parse(data)
            res.json(data)
        });
        console.log("here")
    });

    app.post("/api/notes", function(req, res) {
        var note = req.body;
        db.push(note)

        for(let i= 0; i < db.length; i++){
            db[i].id = i + 1;
        };

        fs.writeFile("/Users/ikechiekwueme/Desktop/Projects/Note-Taker/db/db.json", JSON.stringify(db), (err) => {
            if (err) throw err;

            console.log("note saved")
        })
    });

    app.delete("/api/notes/:id", function (req, res) {
        var deletes = req.params.id;

        fs.readFile("/Users/ikechiekwueme/Desktop/Projects/Note-Taker/db/db.json", function(err, data) {
            if (err) throw err;

            var notes = JSON.parse(data);
            notes.splice(deletes, 1);

            fs.writeFile("/Users/ikechiekwueme/Desktop/Projects/Note-Taker/db/db.json", JSON.stringify(notes), function(err){
                if (err) throw err;
            })
        })

    })

}