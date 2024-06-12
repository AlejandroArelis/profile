import { CommonModule } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SkillGroupsService } from '@pages/skill-groups/skill-groups.service';
import { SkillsGroup } from '@pages/skill-groups/skills-group.interface';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';

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
    private _service: SkillGroupsService,
    private _toast: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: SkillsGroup,
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

  close(skillsGroup?: SkillsGroup) {
    this._dialogRef.close(skillsGroup);
  }

  async submit() {
    try {
      let response;
      if(this.editing) {
        response = await firstValueFrom(this._service.update(this.form.value));
      } else {
        response = await firstValueFrom(this._service.new(this.form.value));
      }
      console.log({ submit: response });
      this.close(response);
    } catch (e:any) {
      console.error(e);
      this._toast.error(e.error.detail);
      this.form.reset();
      this.nameInput.nativeElement.focus();
    }
  }
}
