var push_mic = 0;

DataBaseMySqlmic = () => {
    var mysql = require('mysql');
    var conexion= mysql.createConnection({
    host : 'us-cdbr-east-04.cleardb.com',
    database : 'heroku_f715d3e4e7adfed',
    user : 'bd6f80629514ea',
    password : '1839652a',
});

conexion.connect();
conexion.query('UPDATE eventos_arbol SET push_mic = 1');
conexion.end();

}

DataBaseMySqlmic_apagar = () => {
  var mysql = require('mysql');
  var conexion= mysql.createConnection({
  host : 'us-cdbr-east-04.cleardb.com',
  database : 'heroku_f715d3e4e7adfed',
  user : 'bd6f80629514ea',
  password : '1839652a',
});

conexion.connect();
conexion.query('UPDATE eventos_arbol SET push_mic = 0');
conexion.end();

}


function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

PoolFuncionMysql = (res) => {
//var push_mic = 0;

var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'us-cdbr-east-04.cleardb.com',
  user            : 'bd6f80629514ea',
  password        : '1839652a',
  database        : 'heroku_f715d3e4e7adfed'
});


pool.query('SELECT * FROM eventos_arbol', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].push_mic );
  push_mic = results[0].push_mic;
  //res.send('<h1>'+push_mic+'</h1>');
  if (push_mic == '1') {
    res.send('<img src="angry-talking.png">');
  } else if (push_mic == '0') {
    res.send('<img src="angry.png">');
  }
});

//sleep(5000);

return push_mic;

}



DataBaseMySql1 = () => {

    var mysql = require('mysql');
    var conexion= mysql.createConnection({
    host : 'us-cdbr-east-04.cleardb.com',
    database : 'heroku_f715d3e4e7adfed',
    user : 'bd6f80629514ea',
    password : '1839652a',
});

conexion.connect();
conexion.query('UPDATE eventos_arbol2 SET face = "happy-blink.png"');
conexion.end();

}


PoolFuncionMysqlmic_on = (res) => {

var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 100,
  host            : 'us-cdbr-east-04.cleardb.com',
  user            : 'bd6f80629514ea',
  password        : '1839652a',
  database        : 'heroku_f715d3e4e7adfed'
});


pool.query('UPDATE eventos_arbol3 SET mic = 1');
 
}

PoolFuncionMysqlmic_off = (res) => {

var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 100,
  host            : 'us-cdbr-east-04.cleardb.com',
  user            : 'bd6f80629514ea',
  password        : '1839652a',
  database        : 'heroku_f715d3e4e7adfed'
});


pool.query('UPDATE eventos_arbol3 SET mic = 0');
 
}


PoolFuncionMysqlmic_gif = (res) => {

var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 100,
  host            : 'us-cdbr-east-04.cleardb.com',
  user            : 'bd6f80629514ea',
  password        : '1839652a',
  database        : 'heroku_f715d3e4e7adfed'
});


pool.query('UPDATE eventos_arbol3 SET face = "Hablar.gif"');
 
}


PoolFuncionMysql1 = (res) => {

var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 100,
  host            : 'us-cdbr-east-04.cleardb.com',
  user            : 'bd6f80629514ea',
  password        : '1839652a',
  database        : 'heroku_f715d3e4e7adfed'
});


pool.query('UPDATE eventos_arbol3 SET face = "Miedo.gif"');
 
}

PoolFuncionMysql2 = (res) => {

var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 100,
  host            : 'us-cdbr-east-04.cleardb.com',
  user            : 'bd6f80629514ea',
  password        : '1839652a',
  database        : 'heroku_f715d3e4e7adfed'
});


pool.query('UPDATE eventos_arbol3 SET face = "Asombro.gif"');
 
}

PoolFuncionMysql3 = (res) => {

var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 100,
  host            : 'us-cdbr-east-04.cleardb.com',
  user            : 'bd6f80629514ea',
  password        : '1839652a',
  database        : 'heroku_f715d3e4e7adfed'
});


pool.query('UPDATE eventos_arbol3 SET face = "Confusion.gif"');
 
}

PoolFuncionMysql4 = (res) => {

var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 100,
  host            : 'us-cdbr-east-04.cleardb.com',
  user            : 'bd6f80629514ea',
  password        : '1839652a',
  database        : 'heroku_f715d3e4e7adfed'
});


pool.query('UPDATE eventos_arbol3 SET face = "Triste.gif"');
 
}

PoolFuncionMysql5 = (res) => {

var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 100,
  host            : 'us-cdbr-east-04.cleardb.com',
  user            : 'bd6f80629514ea',
  password        : '1839652a',
  database        : 'heroku_f715d3e4e7adfed'
});


pool.query('UPDATE eventos_arbol3 SET face = "Feliz.gif"');
 
}

PoolFuncionMysql6 = (res) => {

var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 100,
  host            : 'us-cdbr-east-04.cleardb.com',
  user            : 'bd6f80629514ea',
  password        : '1839652a',
  database        : 'heroku_f715d3e4e7adfed'
});


pool.query('UPDATE eventos_arbol3 SET face = "Ternura.gif"');
 
}

PoolFuncionMysql7 = (res) => {

var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 100,
  host            : 'us-cdbr-east-04.cleardb.com',
  user            : 'bd6f80629514ea',
  password        : '1839652a',
  database        : 'heroku_f715d3e4e7adfed'
});


pool.query('UPDATE eventos_arbol3 SET face = "Enojo.gif"');
 
}

PoolFuncionMysql8 = (res) => {

var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 100,
  host            : 'us-cdbr-east-04.cleardb.com',
  user            : 'bd6f80629514ea',
  password        : '1839652a',
  database        : 'heroku_f715d3e4e7adfed'
});


pool.query('UPDATE eventos_arbol3 SET face = "Orgullo.gif"');
 
}




/*

DataBaseMySql2 = () => {
    var mysql = require('mysql');
    var conexion= mysql.createConnection({
    host : 'us-cdbr-east-04.cleardb.com',
    database : 'heroku_f715d3e4e7adfed',
    user : 'bd6f80629514ea',
    password : '1839652a',
});

conexion.connect();
conexion.query('UPDATE eventos_arbol1 SET face = "happy2.png"');
conexion.end();

}

DataBaseMySql3 = () => {
    var mysql = require('mysql');
    var conexion= mysql.createConnection({
    host : 'us-cdbr-east-04.cleardb.com',
    database : 'heroku_f715d3e4e7adfed',
    user : 'bd6f80629514ea',
    password : '1839652a',
});

conexion.connect();
conexion.query('UPDATE eventos_arbol1 SET face = "happy.png"');
conexion.end();

}

DataBaseMySql4 = () => {
    var mysql = require('mysql');
    var conexion= mysql.createConnection({
    host : 'us-cdbr-east-04.cleardb.com',
    database : 'heroku_f715d3e4e7adfed',
    user : 'bd6f80629514ea',
    password : '1839652a',
});

conexion.connect();
conexion.query('UPDATE eventos_arbol1 SET face = "angry.png"');
conexion.end();

}
*/

overwrite_gif = (source, destination) => {
const fs = require('fs');
 // File destination.txt will be created or overwritten by default.
fs.copyFile(source, destination, (err) => {
  if (err) throw err;
  console.log(source + ' was copy to: ' + destination );
});

}


DataBaseMySqlSELECT = () => {
    var mysql = require('mysql');
    var conexion= mysql.createConnection({
    host : 'us-cdbr-east-04.cleardb.com',
    database : 'heroku_f715d3e4e7adfed',
    user : 'bd6f80629514ea',
    password : '1839652a',
});

conexion.connect(function(err) {
  if (err) throw err;
  conexion.query("SELECT * FROM eventos_arbol", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});


//conexion.connect();
//conexion.query('SELECT * FROM eventos_arbol');
//conexion.end();

}


// -----------------------------------------------------------------------------------------------------
// -- Constantes
const express = require('express')
const app = express()


//const port = 3000
const port = process.env.PORT
//const port = process.env.
//port;

//const mariadb = require('mariadb');
const mariadb = require('mysql');

const html0 = `
               <html>
                 <h1>Panel del Terapeuta v1</h1>
                 <script type="text/javascript">
                   function setearIndicador(indicador) {
                     var xhttp = new XMLHttpRequest();
                     xhttp.onreadystatechange = function() {
                       if (this.readyState == 4 && this.status == 200) {
                         document.getElementById("demo").innerHTML =
                         this.responseText;
                       }
                     };
                     xhttp.open("GET", indicador, true);
                     xhttp.send();
                   }
                 </script>
                 <body>
                   <button name="Indicador11" onclick="setearIndicador('mic');">Encender Mic</button>
		               <button name="Indicador12" onclick="setearIndicador('mic_apagar');">Apagar Mic</button>
		
                   <button name="Indicador1" onclick="setearIndicador('face1');">Rostro 1</button>
                   <button name="Indicador2" onclick="setearIndicador('face2');">Rostro 2</button>
 		               <button name="Indicador3" onclick="setearIndicador('face3');">Rostro 3</button>
  		             <button name="Indicador4" onclick="setearIndicador('face4');">Rostro 4</button>
   		              <button name="Indicador5" onclick="setearIndicador('face5');">Rostro 5</button>
                   <button name="Indicador6" onclick="setearIndicador('face6');">Rostro 6</button>
	                 <button name="Indicador7" onclick="setearIndicador('face7');">Rostro 7</button>
	                  <button name="Indicador8" onclick="setearIndicador('face8');">Rostro 8</button>
       		   
                   <h1 id="demo">push_mic</h1>
 
                 </body>
               </html>
               `

const dbupdatefunction = function(update, values, message, html, res) {
                mariadb.createConnection({
                    host: 'us-cdbr-east-04.cleardb.com',
                    user:'bd6f80629514ea',
                    password: '1839652a',
                    database: 'heroku_f715d3e4e7adfed'
                  })
                      .then(conn => {
                     
                        conn.query("SELECT 1 as val")
                          .then((rows) => {
                            console.log(rows); //[ {val: 1}, meta: ... ]
                            //Table must have been created before
                            // " CREATE TABLE myTable (id int, val varchar(255)) "
                            return conn.query(update, values);
                          })
                          .then((res) => {
                            console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
                            console.log(message);
                            conn.end();
                            //process.exit();
                          })
                          .catch(err => {
                            //handle error
                            console.log(err);
                            conn.end();
                          })
                      }).catch(err => {
                        //not connected
                      });
                res.send(html)
            }            
// ---------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------------
// -- Recursos
app.use(express.static('image'));

app.get('/', (req, res) => {
  res.send(html0)
})

app.get('/mic', (req, res) => {
	PoolFuncionMysqlmic_gif();
	res.send(html0);
     //PoolFuncionMysqlmic_on();
    //DataBaseMySqlmic();
    //overwrite_gif('image/principal/happy.txt', 'image/animacion.txt');
})

app.get('/mic_apagar', (req, res) => {
  //DataBaseMySqlmic_apagar();
    PoolFuncionMysqlmic_off();
    res.send(html0);
})


app.get('/face1', (req, res) => {
    PoolFuncionMysql1();
//overwrite_gif('image/principal/happy.txt', 'image/animacion.txt');
res.send(html0);

})

app.get('/face2', (req, res) => {
    PoolFuncionMysql2();
//overwrite_gif('image/principal/angry.txt', 'image/animacion.txt');
res.send(html0);

})

app.get('/face3', (req, res) => {
PoolFuncionMysql3();
//overwrite_gif('image/principal/angry_talking.gif', 'image/animacion.gif');
res.send(html0);
})

app.get('/face4', (req, res) => {
PoolFuncionMysql4();
    //DataBaseMySql4();
res.send(html0);
})

app.get('/face5', (req, res) => {
PoolFuncionMysql5();
    //DataBaseMySql4();
res.send(html0);
})

app.get('/face6', (req, res) => {
PoolFuncionMysql6();
    //DataBaseMySql4();
res.send(html0);
})

app.get('/face7', (req, res) => {
PoolFuncionMysql7();
    //DataBaseMySql4();
res.send(html0);
})

app.get('/face8', (req, res) => {
PoolFuncionMysql8();
    //DataBaseMySql4();
res.send(html0);
})

app.get('/select', (req, res) => {
  var push_mic = PoolFuncionMysql(res);
  //res.send('<h1>'+push_mic+'</h1>');
//res.send(html0);
})

// ----------------------------------------------------------------------------------------------------------------------------

// --------------------------
// -- Iniciar aplicación
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
// --------------------------