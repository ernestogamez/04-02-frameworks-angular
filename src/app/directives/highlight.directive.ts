import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appHighlight]",
})

// En esta clase se programa la directiva
export class HighlightDirective {

  // Definimos un color por defecto
  private defaultColor = "rgba(135,163,255,0.7)";

  // De esta forma, tendremos en la variable 'el' una referencia al elemento th en el caso del listado de usuarios y una referencia al elemento p en el caso del menú.
  constructor(private el: ElementRef) {
    this.el = el;
  }

  @HostListener("mouseenter")
  onMouseEnterEvent() {
    // Con un poco de javascript podemos elegir un color por defecto en caso de que no se haya usado el atributo color.
    this.highlight(this.defaultColor);
  }

  // De forma análoga podemos programar que el elemento deje de estar resaltado cuando el ratón salga del área ocupada por el elemento.
  @HostListener("mouseleave")
  onMouseLeaveEvent() {
    this.highlight("");
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
