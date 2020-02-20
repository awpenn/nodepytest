module.exports = {
    test: function(req, res){
        res.json( {'msg': 'OK sending JSON OK'} )
    },
    runpy: function(req, res){

        const { spawn }  = require('child_process');
        const pyProg = spawn('python', ['/Users/andrewwilk/Desktop/pyrunner/test.py'])
        try {
            pyProg.stdout.on('data', function(data){
                pdata = data.toString()
                res.json( {'msg': data} )
            })
          }
          catch(error) {
            console.error(error);
          }
          
    }
}