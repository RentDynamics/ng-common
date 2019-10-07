# rd-switch-thingy

## demo.module.ts
```TypeScript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchThingyModule } from '@rd/common';

@NgModule({
  imports: [
    CommonModule,
    ...
    SwitchThingyModule,
  ],
  declarations: [DemoComponent]
})
export class DemoModule { }

```

## demo.component.ts
```TypeScript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  selectedOne: string = 'Resident';
  selectedTwo: string = 'Lead';

  constructor() { }

  ngOnInit() {
  }
  
}
```

## demo.component.html
```HTML
<!-- light-theme -->
<rd-switch-thingy class="light-theme" [selected]="selectedOne" [options]="['Resident', 'Lead']" (onChange)="selectedOne = $event"></rd-switch-thingy>

<!-- dark-theme -->
<rd-switch-thingy class="dark-theme" [selected]="selectedTwo" [options]="['Resident', 'Lead', 'Other']" (onChange)="selectedTwo = $event"></rd-switch-thingy>
```

## light-theme example

![alt text][light-theme]

## dark-theme example

![alt text][dark-theme]

[light-theme]: ../assets/images/rd-switch-thingy-light-theme.png "rd-switch-thingy.light-theme"

[dark-theme]: ../assets/images/rd-switch-thingy-dark-theme.png "rd-switch-thingy.dark-theme"