const inquirer = require('inquirer')
require('colors')

const preguntas = [
   {
      type :  'list',
      name : 'opcion',
      message : ' ¿ que desea hacer ? \t',
      choices: [
        {
            value: '1',
            name: `${ '1.'.green } Crear tarea`
        },
        {
            value: '2',
            name: `${ '2.'.green } Listar tareas`
        },
        {
            value: '3',
            name: `${ '3.'.green } Listar tareas completadas`
        },
        {
            value: '4',
            name: `${ '4.'.green } Listar tareas pendientes`
        },
        {
            value: '5',
            name: `${ '5.'.green } Completar tarea(s)`
        },
        {
            value: '6',
            name: `${ '6.'.green } Borrar tarea`
        },
        {
            value: '0',
            name: `${ '0.'.green } Salir`
        },
        
    ]
   }
];

const menuInquirer = async () => { 
               console.clear();
               console.log('=======MENU======'.green);
               console.log('================='.green);
               console.log('SELECCIONE OPCION\n'.green);    

               const { opcion } = await inquirer.prompt(preguntas);
               
               return opcion ;
}


const leerInput = async (message) => {
    const question = [
        {
            type :'input',
            name: 'desc',
            message,
            validate  (value) {
                if( value.length === 0){
                    return 'Ingrese un valor';
                }
                return true;
            }
         
        },
    ];

  const { desc } = await inquirer.prompt(question);
  return desc;
}


const pausa = async() =>{
         const question = [
             {
               type:'input', 
               name: 'enter',
               message: `Preciona${'ENTER'.green} para continuar`
                
             }           
         ]
         console.log('\n');
         await inquirer.prompt(question);
}



module.exports = {
               menuInquirer,
               pausa,
               leerInput
}

