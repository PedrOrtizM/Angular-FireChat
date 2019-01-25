import { Component } from '@angular/core';
import { ChatService } from '../../providers/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent  {

  mensaje:string = "";
  constructor( public cs:ChatService) {

    this.cs.cargarMensajes().subscribe()
  }

  enviarMensaje(){

    console.log(this.mensaje)

    if (this.mensaje.length === 0) {
        return;
    }

    this.cs.agregarMensaje ( this.mensaje )
           .then(
                  () =>{
                    console.log("mensaje enviado");
                    this.mensaje = "";
                  })
                  
           .catch((err)=>console.log(err))
 }

}
