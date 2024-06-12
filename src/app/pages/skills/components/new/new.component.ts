import { CommonModule } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Skill } from '@pages/profile/components/skills-group/components/skill/skill.interface';
import { SkillsService } from '@pages/skills/skills.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './new.component.html'
})
export class NewComponent implements OnInit {

  @ViewChild("nameInput") nameInput!: ElementRef;
  form!: FormGroup;
  editing = false;

  constructor(
    private _dialogRef: MatDialogRef<NewComponent>,
    private _formBuilder: FormBuilder,
    private _service: SkillsService,
    private _toast: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: Skill,
  ) {
    this.form = this._formBuilder.group({
      name: ["", [Validators.required]]
    });
  }

  ngOnInit(): void {
    if(this.data) {
      this.editing = true;
      this.form.patchValue(this.data);
    }
  }
  
  close(skill?: Skill) {
    this._dialogRef.close(skill);
  }

  async submit() {
    try {
      let response;
      if(this.editing) {
        // response = await firstValueFrom(this._service.update(this.form.value));
      } else {
        // response = await firstValueFrom(this._service.new(this.form.value));
      }
      this.close(response);
    } catch (e:any) {
      console.error(e);
      this._toast.error(e.error.detail);
      this.form.reset();
      this.nameInput.nativeElement.focus();
    }
  }
}
