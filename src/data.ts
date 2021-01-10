import "reflect-metadata";
import {createConnection, getConnection, getRepository} from "typeorm";
import { Task } from "./entity/Task";
import { TaskRepository } from "./entity/TaskRepository";


(async () => {
    
    try {
        const con =   await createConnection();
        const taskRepository = con.getCustomRepository(TaskRepository); 
        
        const task = new Task();
        task.title = 'Task 1';
        task.done = true;

        const result =  await taskRepository.save(task);

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



