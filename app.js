
//const { mostrarMenu, pausa  } = require('./helpers/mensaje');
require ('colors');
const { menuInquirer ,
        pausa ,
        leerInput } = require('./helpers/inquirer');
const Tarea = require('./modules/tarea');
const Tareas = require('./modules/tareas');

const main = async() => {
     
     let opt ='';
     
     const tareas = new Tareas();
     do{
          opt  =  await menuInquirer();
          
          
            
          const tarea = new Tarea()
          
          
           
           switch (opt) {
                case '1' :
                     const desc = await leerInput('Descripcion:');
                     tareas.crearTarea(desc);
                break;

                case '2':
                     tareas._listado[tarea.id]= tarea
                     console.log(tareas._listado)
                break;
                
                    }

          await pausa();
        }while(opt !== '0');
      
   
      
}

main ();