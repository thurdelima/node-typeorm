import "reflect-metadata";
import {createConnection, getConnection, getRepository} from "typeorm";
import { Task } from "./entity/Task";
import { TaskActive } from "./entity/TaskActive";


(async () => {
    
    try {
         await createConnection();
         const task = new TaskActive();

         task.title = 'Task 1';
         task.done = true;

        const result =  await task.save();

        console.log(result);

    } catch(ex) {
        console.log('Error: ', ex);
    }
    
    
    
    // createConnection('con2').then(()=> {
    //     console.log('OK');
    // }).catch(() => {
    //     console.log(`CONNECTION ERROR: `);
    // })
    // const connection  = await createConnection({
    //     type: "postgres",
    //     host: "localhost",
    //     port: 5432,
    //     username: "thur",
    //     password: "123123",
    //     database: "typeorm_test",
    // });

    //console.log('CONNECTION: ', connection);
})();



