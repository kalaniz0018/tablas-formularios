import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuario: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ingresar() {
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    console.log(usuario)
    console.log(password)

    //si el usuario es igual a "jperez" y el password es igual a 12345 entonces lo redireccionamos al dashboard caso contrario
    //mostramos un msj de error
    if (usuario == "karina" && password == "12345") {
      this.fakeLoading();
      console.log("ingreso correcto")
    } else {
      this.error()
      //necesitamos resetear el formulario 
      this.form.reset();
    }
  }

  error() {
    this._snackBar.open("Usuario o contraseña incorrectos", "", {
      //aca se pasa un objeto con configuraciones
      duration: 5000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: ["snackbar-error"]
    })
  }

  //la idea es que cuando el usuario o pass sea valido mostremos ese spinner por una cantidad de tiempo
  // y luego lo redireccionamos al dashboard
  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(["/dashboard"])
    }, 2000);
  }
}
