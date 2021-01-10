import "reflect-metadata";
import {createConnection, getConnection, getRepository} from "typeorm";
import { Task } from "./entity/Task";


(async () => {
    
    try {
      await createConnection();
    //   const entityManager = getConnection().manager;
    //   const res = await entityManager.findAndCount(Task);
        
        const taskRepository = getRepository(Task);
        const res = await taskRepository.findAndCount();
      
    
     console.log('TASK: ', res);
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



