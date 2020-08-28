import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-range-manager',
  templateUrl: './range-manager.component.html',
  styleUrls: ['./range-manager.component.scss']
})
export class RangeManagerComponent implements OnInit {
  form: FormGroup;
  ranges;
  selectedRangeIndex = 0;
  selectedFolderIndex = 0;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    if (!localStorage.getItem('ranges')) localStorage.setItem('ranges', JSON.stringify([{ name: 'default', folders: [{ name: 'default', value: [] }] }]));
    this.ranges = JSON.parse(localStorage.getItem('ranges'));
    console.log(this.ranges);

    this.form = this.formBuilder.group({
      name: [this.ranges[0].name],
      folder: [this.ranges[0].folders[0].name],
    });

    this.form.get('name').valueChanges.subscribe(value => {
      this.ranges[this.selectedRangeIndex].name = value;
      this.updateLocalRanges();
    });

    this.form.get('folder').valueChanges.subscribe(value => {
      this.ranges[this.selectedRangeIndex].folders[this.selectedFolderIndex].name = value;
      this.updateLocalRanges();
    });
  }

  updateFormValues(): void {
    this.form.get('name').setValue(this.ranges[this.selectedRangeIndex].name);
    this.form.get('folder').setValue( this.ranges[this.selectedRangeIndex].folders[this.selectedFolderIndex].name);
  }

  onRangeChange(range: string[]): void {
    this.ranges[this.selectedRangeIndex].folders[this.selectedFolderIndex].value = range;
    this.updateLocalRanges();
  }

  updateLocalRanges(): void {
    localStorage.setItem('ranges', JSON.stringify(this.ranges));
  }

  addTab(): void {
    this.ranges.push({ name: this.ranges.length + 1, folders: [
      { name: 'default', value: [] },
    ] });
    this.updateLocalRanges();    
  }

  addFolder(): void {
    this.ranges[this.selectedRangeIndex].folders.push({ name: this.ranges[this.selectedRangeIndex].folders.length + 1, value: [] });
  }

  // TODO: type
  selectFolder(i: any): void {
    this.selectedFolderIndex = i;
    this.updateFormValues();
  }

  selectTab(i: number): void {
    this.selectedRangeIndex = i;
    this.selectedFolderIndex = 0;
    this.updateFormValues();
  }

  deleteRange(): void {
    this.ranges.splice(this.selectedRangeIndex, 1);
    this.selectedRangeIndex = 0;
    this.updateFormValues();
  }

  deleteFolder(): void {
    this.ranges[this.selectedRangeIndex].folders.splice(this.selectedFolderIndex, 1);
    this.selectedFolderIndex = 0;
    this.updateFormValues();
  }
}
