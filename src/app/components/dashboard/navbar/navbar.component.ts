import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu.interface';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //Menu va a ser de tipo menu, va a ser un array y va a inicializar vacio 
  menu:Menu[]=[];
  
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.cargarMenu();
  }

  cargarMenu() {
    //getMenu() al ser un observable nos tenemos que subscribir, una vez subscrito y obtenemos los
    // datos vamos a ejecutar un array function  e imprimimos lo que nos devuelva 
    this.menuService.getMenu().subscribe(data => {
    //cuando obtenemos los datos esta variable menu va a ser igual a data
      this.menu = data;
    });
  }

}
