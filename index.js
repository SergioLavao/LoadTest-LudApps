const { exec } = require('child_process');

// Ejecutamos el comando Artillery con la configuración definida en el archivo loadtest.yml
const test = exec('artillery run loadtest.yml');

// Mostramos los resultados de la prueba en la consola
test.stdout.on('data', data => {
  console.log(data);
});

// Manejamos los errores si ocurren durante la ejecución de la prueba
test.stderr.on('data', data => {
  console.error(data);
});

// Al finalizar la prueba, mostramos un mensaje de confirmación
test.on('exit', code => {
  console.log(`La prueba de carga ha finalizado con el código de salida ${code}`);
});
