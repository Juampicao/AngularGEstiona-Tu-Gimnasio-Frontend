import { Component, OnInit, ViewChild } from '@angular/core';
// internal
import { ISuscriptor } from 'src/app/models/ISuscriptor';
import { SuscriptorService } from 'src/app/services/suscriptor.service';
import { DialogComponent } from 'src/app/shared/components/components/dialog/dialog.component';

//Angular Material
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { FormSuscriptorComponent } from '../form-suscriptor/form-suscriptor.component';

@Component({
  selector: 'app-suscriptorslist',
  templateUrl: './suscriptorslist.component.html',
  styleUrls: ['./suscriptorslist.component.css']
})
export class SuscriptorslistComponent implements OnInit {

  listSuscriptors: ISuscriptor[] = [];

   displayedColumns: string[] = ['nombre','creador' , 'apellido','id' ,'acciones'] ;
   dataSource!: MatTableDataSource<any>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
     private _suscriptorService: SuscriptorService
  ) {}

  ngOnInit(): void {
    this.cargarSuscriptores();
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator   
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
 }
  
  openDialog() {
    this.dialog.open(FormSuscriptorComponent);
  }
  
  cargarSuscriptores() {
    this._suscriptorService.getAllSuscritors()
      .subscribe(data => {
        this.listSuscriptors = data
        this.dataSource = new MatTableDataSource(this.listSuscriptors)
        console.log(this.dataSource)
    })
    // this._suscriptorService.getAllSuscritors().subscribe(data => {
    //   this.listSuscriptors = data
    //   console.log(this.listSuscriptors)
    // })
  }

// Json Server
  eliminarSuscriptor(suscriptor: ISuscriptor) {
    if (confirm(`Seguro deseas eliminar a "${suscriptor.nombre}"?`)) {
         console.log(suscriptor)
         this._suscriptorService
           .deleteSuscriptor(suscriptor)
           .subscribe()
        // .subscribe(() => (this.listSuscriptors = this.listSuscriptors.filter(e => e.id !== suscriptor.id)))
    }
  }
}


  // Si la lista esta en el _suscriptorService.
  // cargarSuscriptores() {
  //   this.listSuscriptors = this._suscriptorService.getAllSuscritors()
  // }


// Inicializar form : FormGrup + Importar => Constructor importar clase => Crear constructor con validatotors => [formGroup]: from en html