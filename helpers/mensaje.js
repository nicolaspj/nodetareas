

require('colors')

const mostrarMenu = () => {
      
      return new Promise (resolve =>{
               console.clear();
               console.log('=======MENU======'.green);
               console.log('================='.green);
               console.log('SELECCIONE OPCION\n'.green);              
               
               console.log(`${'1'.green} Crear Tarea`);
               console.log(`${'2'.green} Listar Tarea`);
               console.log(`${'3'.green} Listar Tareas completadas`);
               console.log(`${'4'.green} Listar Tareas pendientes`);
               console.log(`${'5'.green} Completar tarea(s)`);
               console.log(`${'6'.green} bORRAR TAREAS`);
               console.log(`${'7'.green} Salir \n`);
         
               const readLine= require('readline').createInterface({
                       input : process.stdin,
                       output : process.stdout
               });
         
               readLine.question ('Seleccione una opcion\t', (opt)=>{
                        //console.log({opt});
                        readLine.close();
                        resolve(opt);
               })
         
      })     
               
}

const pausa = () =>{
 
               return new Promise (resolve =>{
                              const readLine= require('readline').createInterface({
                              input : process.stdin,
                              output : process.stdout
                      });
                
                      readLine.question (`\nPrecione ${ `ENTER`.green } para continuar:\n`, (opt)=>{
                              readLine.close();
                              resolve(opt);
                      })
                                     
               })
               
               
}

module.exports = {
      mostrarMenu ,                                                                                                       
      pausa     
}