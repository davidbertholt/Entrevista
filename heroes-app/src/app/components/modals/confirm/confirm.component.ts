import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

// Interface
import { IHero } from 'src/app/interfaces/IHero';

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})

export class ConfirmModalComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IHero,
    private dialogRef: MatDialogRef<ConfirmModalComponent>,
    ) {}

    confirmMessage:string = `Seguro que desea eliminar a ${this.data.superhero}?`;

    close = (value:boolean) => {
      this.dialogRef.close(value)
    }
  }
