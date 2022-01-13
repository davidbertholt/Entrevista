import { Component } from '@angular/core';

// Material Design
import { MatDialog } from '@angular/material/dialog';

// Modal
import { HeroModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-add-superhero',
  templateUrl: './add-superhero.component.html',
  styleUrls: ['./add-superhero.component.css']
})
export class AddSuperheroComponent {

  constructor(
    public dialog: MatDialog) { }

  openModal() {
    const dialogRef = this.dialog.open(HeroModalComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
