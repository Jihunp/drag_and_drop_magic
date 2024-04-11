import {Controller} from "@hotwired/stimulus";
//make a trash can if items are hovered above the trashcan then allow the item delete to be deleted.
export default class extends Controller {
  connect() {
  }
  initialize() {
    this.isDragging = false;
    this.xOffset = 0;
    this.yOffset = 0;
  }
  mousedown(event) {
    this.isDragging = true;
    this.initialX = event.clientX - this.xOffset;
    this.initialY = event.clientY - this.yOffset;
    console.log("mouse down has been activated");
  }
  mouseup() {
    this.isDragging = false;
  }
  mousemove(event) {
    if (!this.isDragging) {
      return;
    }

    this.xOffset = event.clientX - this.initialX;
    this.yOffset = event.clientY - this.initialY;

    this.element.style.transform = `translate(${this.xOffset}px, ${this.yOffset}px)`;
    //transforms the style of the current box
  }
}
