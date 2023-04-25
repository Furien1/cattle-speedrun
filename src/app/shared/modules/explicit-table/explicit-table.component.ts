import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-explicit-table',
  templateUrl: './explicit-table.component.html',
  styleUrls: ['./explicit-table.component.scss'],
})
export class ExplicitTableComponent {
  @Input() public data!: any[];
  @Input() public title?: string;
  @ContentChild('rows') public rows!: TemplateRef<any>;
  @ContentChild('headers') public headers!: TemplateRef<any>;
}
