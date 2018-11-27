# Select API design

## Examples from other frameworks

### MatSelect *(Angular)*

```html
<mat-select placeholder="Favorite food">
    <mat-option *ngFor="let food of foods" [value]="food.value">
        {{food.viewValue}}
    </mat-option>
</mat-select>
<select matNativeControl required> <!-- This line isn't possible with stencil -->
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
</select>
```  

```ts
class MatSelect {
    @Input() value;
    @Input() id;
    @Input() multiple;
    @Input() required;
    @Input() disabled;
    @Output() openedChange;
    @Output() selectionChange;
    selected: MatOption | MatOption[];
    trigger: ElementRef; // Trigger that opens the select

    close();
    focus();
    open();
    toggle();
    updateErrorState();
}
```

### Ionic Select
```html
<!-- Used with angular -->
<ion-item>
  <ion-label>Gender</ion-label>
  <ion-select [(ngModel)]="gender">
    <ion-option value="f">Female</ion-option>
    <ion-option value="m">Male</ion-option>
  </ion-select>
</ion-item>

<ion-item>
  <ion-label>Employee</ion-label>
  <!-- We can change comparison function -->
  <ion-select [(ngModel)]="employee" [compareWith]="compareFn">
    <ion-option *ngFor="let employee of employees" [value]="employee"></ion-option>
  </ion-select>
</ion-item>
```
```ts
class IonSelect {
    @Input() multiple: boolean;
    @Input() placeholder: string;
    @Input() selectedText: strintg; // Text to display instead of option's value
    @Input() selectOptions: IonSelectOptions;

    close()
    open()
}
```

## Specs

### Specs complète du design métier

- Select normal
    - Default placeholder
- Additional input
- Default selected value
- Grouped value
    - Expandable grouped value
- Multiple value
    - Multiple grouped value
  
### Retenu pour wcs V1

- [ ] Select normal
- [ ] Default placeholder
- [ ] Default selected value
- [ ] Multiple selection

### API
```html
<wcs-select id="wcs-select">
    <!-- This solution for setting options seems more idiomatic and user friendly for the end user -->
    <option selected></option>
    <!-- Would we need this instead for any reason ? -->
    <wcs-option></wcs-option>
</wcs-select>

<!-- OR -->

<wcs-select [options]="options" selectedIndex="1">
</wcs-select>

<!-- Advanced -->

<wcs-select disabled 
    multiple 
    placeholder="Default placeholder" 
    onSelectionChanged="changeItem($evt)">
</wcs-select>
```
```ts
const select: WcsSelect = document.getElementById('wcs-select');
this.select.open();
this.select.close();
this.select.addEventListener('selectionChanged', console.log);
```
