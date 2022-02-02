import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';

// Material Design
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

// Modal
import { HeroModalComponent } from '../modals/addEdit/modal.component';

@Component({
  selector: 'app-add-superhero',
  templateUrl: './add-superhero.component.html',
  styleUrls: ['./add-superhero.component.css']
})
export class AddSuperheroComponent implements OnDestroy {

  @Output() newHero = new EventEmitter<boolean>();
  clientSubscription!: Subscription;
  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnDestroy() {
    this.clientSubscription?.unsubscribe();
  }

  openModal = () => {
    const dialogRef = this.dialog.open(HeroModalComponent, {
      width: '350px',
    });
    const dialog$ = dialogRef.afterClosed();
    this.clientSubscription = dialog$.subscribe(result => {
      if(!!result) {
        this._snackBar.open(result, 'OK', {
          duration: 3000
        });
        this.newHero.emit(true)
      }
    });
  }

}
