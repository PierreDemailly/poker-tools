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

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    if (!localStorage.getItem('ranges')) localStorage.setItem('ranges', JSON.stringify([{ name: 'default', value: [] }]));
    this.ranges = JSON.parse(localStorage.getItem('ranges'));
    console.log(this.ranges);

    this.form = this.formBuilder.group({
      name: [this.ranges[0].name],
    });

    this.form.get('name').valueChanges.subscribe(value => {
      this.ranges[this.selectedRangeIndex].name = value;
      this.updateLocalRanges();
    })
  }

  onRangeChange(range: string[]): void {
    console.log(range);
    this.ranges[this.selectedRangeIndex].value = range;
    this.updateLocalRanges();
  }

  updateLocalRanges(): void {
    localStorage.setItem('ranges', JSON.stringify(this.ranges));
  }
}
