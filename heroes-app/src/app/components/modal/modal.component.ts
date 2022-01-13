import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

// Interface
import { IHero } from 'src/app/interfaces/IHero';

// Forms
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Service
import { HeroService } from 'src/app/services/hero/hero.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class HeroModalComponent implements OnInit{
  formHero!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IHero,
    private dialogRef: MatDialogRef<HeroModalComponent>,
    private fb: FormBuilder,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.formHero = this.fb.group({
      id: [null],
      superhero: [null, [Validators.required, Validators.minLength(3)]],
      publisher: [null, [Validators.required, Validators.minLength(3)]],
      alterEgo: [null, [Validators.required, Validators.minLength(3)]],
      firstAppearance: [null, [Validators.required, Validators.minLength(3)]],
      characters: [null, [Validators.required, Validators.minLength(3)]],
    });
    if (!!this.data) {
      this.formHero.setValue(this.data);
    }
  }
  onSubmit = () => {
    const hero: IHero = this.formHero.value;
    if(!!this.data) {
      this.heroService.setHero(hero);
    } else {
      this.heroService.addHero(hero);
    }
    this.dialogRef.close("El superheroe fue guardado correctamente");
  }

  deleteSuperhero = () => {
    const hero: IHero = this.formHero.value;
    this.heroService.deleteHero(hero);
    this.dialogRef.close("El elemento fue eliminado correctamente");
  }
}