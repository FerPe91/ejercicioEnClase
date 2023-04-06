import { Injectable } from "@nestjs/common";
import { User } from "../../client/usuario/class/User"
import * as fs from 'fs';


@Injectable()
export class UserService{

    getUser(url:string): User[] {

        let usuarios=[];
        let datos = fs.readFileSync(url,'utf-8');
        let listaUsuarios = datos.split('\r\n');
        console.log(listaUsuarios);
        

        for(let indiceUsuario of listaUsuarios){
            let datosSeparados = indiceUsuario.split(',')
            

            console.log("Soy la lista de datos = " + datosSeparados);
            console.log("Soy el dato = "+datosSeparados[0]);

            let nuevoUser = new User(datosSeparados[0], datosSeparados[1], datosSeparados[2], datosSeparados[3])
            usuarios.push(nuevoUser)
            

        }

        console.log(usuarios);


        
        return usuarios
    }




}
