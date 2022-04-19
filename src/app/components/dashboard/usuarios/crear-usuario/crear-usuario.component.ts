import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  tiles: any[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  genero: any[] = ['masculino', 'femenino'];
  form: FormGroup;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router, private _snackBar: MatSnackBar) {
    //this.form va a ser igual a la instamcia que estamos inyectandi en el formbuilder y el 
    //fomrbuilder va a ser tambien de tipo formgroup
    this.form = this.fb.group({
      //le pasamos las configuraciones que queremos que tenga el formulario
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      genero: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  agregarUsuario() {
    //voy a imprimir el formulario para ver si los valorene stan llegando bien o no
 
    //voy a crear una cnstante user va a ser de tipo ususario y lo vamos a configurar
    const user: Usuario = {
      //vamos a tener que acceder al valor del formulario a la propiedad usuario
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      genero: this.form.value.genero
    }
   
    this.usuarioService.agregarUsuario(user);
    this.router.navigate(['/dashboard/usuarios']);

    this._snackBar.open("El usuario fue agregado con éxito", "", {
      //aca se pasa un objeto con configuraciones
      duration: 1500,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: ["snackbar-error"]
    })

  }

}
