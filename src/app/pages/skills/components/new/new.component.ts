import { CommonModule } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Skill } from '@pages/profile/components/skills-group/components/skill/skill.interface';
import { SkillsService } from '@pages/skills/skills.service';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';
import { COLORS } from './new.data';

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
  colors: string[] = [];

  constructor(
    private _dialogRef: MatDialogRef<NewComponent>,
    private _formBuilder: FormBuilder,
    private _service: SkillsService,
    private _toast: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: Skill,
  ) {
    this.form = this._formBuilder.group({
      id: "",
      name: ["", [Validators.required]],
      skill_group_id: ["", [Validators.required]],
      color: ["", [Validators.required]],
      image: ["", [Validators.required]]
    });
  }

  ngOnInit(): void {
    if (this.data.name) {
      this.editing = true;
    }
    this.form.patchValue(this.data);

    this.colors = COLORS;
  }

  close(skill?: Skill) {
    if (skill) {
      this._dialogRef.close({ editing: this.editing, skill });
    } else {
      this._dialogRef.close();
    }
  }

  async submit() {
    try {
      let response;
      if (this.editing) {
        await firstValueFrom(this._service.update(this.form.value));
        this.close(this.form.value);
      } else {
        response = await firstValueFrom(this._service.new(this.form.value));
        this.close(response);
      }
    } catch (e: any) {
      console.error(e);
      this._toast.error(e.error.detail);
      this.form.reset();
      this.nameInput.nativeElement.focus();
    }
  }
}
