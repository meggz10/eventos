
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
  res.send('<h1>'+push_mic+'</h1>');
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
conexion.query('UPDATE eventos_arbol SET push_face1 = 1, push_face2 = 0, push_face3 = 0, push_face4 = 0');
conexion.end();

}

DataBaseMySql2 = () => {
    var mysql = require('mysql');
    var conexion= mysql.createConnection({
    host : 'us-cdbr-east-04.cleardb.com',
    database : 'heroku_f715d3e4e7adfed',
    user : 'bd6f80629514ea',
    password : '1839652a',
});

conexion.connect();
conexion.query('UPDATE eventos_arbol SET push_face2 = 1, push_face1 = 0, push_face3 = 0, push_face4 = 0 ');
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
conexion.query('UPDATE eventos_arbol SET push_face3 = 1, push_face1 = 0, push_face2 = 0, push_face4 = 0');
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
conexion.query('UPDATE eventos_arbol SET push_face4 = 1, push_face1 = 0, push_face2 = 0, push_face3 = 0');
conexion.end();

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
const port = 3000

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
                   <button name="Indicador1" onclick="setearIndicador('mic');">Indicador 1</button>
                   <button name="Indicador2" onclick="setearIndicador('face1');">Indicador 2</button>
                   <button name="Indicador3" onclick="setearIndicador('face2');">Indicador 3</button>
		   <button name="Indicador4" onclick="setearIndicador('face3');">Indicador 4</button>
		   <button name="Indicador5" onclick="setearIndicador('face4');">Indicador 5</button>
		   <button name="Indicador6" onclick="setearIndicador('select');">Indicador 6</button>
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
app.get('/', (req, res) => {
  res.send(html0)
})

app.get('/mic', (req, res) => {
    DataBaseMySqlmic();
})

app.get('/face1', (req, res) => {
    DataBaseMySql1();
})

app.get('/face2', (req, res) => {
    DataBaseMySql2();
})

app.get('/face3', (req, res) => {
    DataBaseMySql3();
})

app.get('/face4', (req, res) => {
    DataBaseMySql4();
})

app.get('/select', (req, res) => {
  var push_mic = PoolFuncionMysql(res); 
  //res.send('<h1>'+push_mic+'</h1>');
})





// ----------------------------------------------------------------------------------------------------------------------------

// --------------------------
// -- Iniciar aplicación
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
// --------------------------