import { Component , OnInit} from '@angular/core';
import { ChatService } from '../../providers/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  elemento:any;
  mensaje:string = "";

  constructor( public cs:ChatService) {

// lo que está dentro del subscribe es para que el scroll siempre esté al final
// del chat y se le pone timeout para esperar que angular renderice
    this.cs.cargarMensajes()
           .subscribe( ()=>{
            setTimeout(()=>{
              this.elemento.scrollTop = this.elemento.scrollHeight;

            },20);
    })
  }


  ngOnInit(){

    this.elemento = document.getElementById('app-mensajes');
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
