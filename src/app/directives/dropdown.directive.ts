import { Directive, HostListener, HostBinding } from "../../../node_modules/@angular/core";

@Directive({
    selector : '[appDropdown]'
})
export class DropDownDirective {

   @HostBinding('class.open') isOpen = false;
    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }
}