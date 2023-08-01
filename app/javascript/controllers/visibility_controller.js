import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="visibility"
export default class extends Controller {
  static values = {
    visible: Boolean
    // list: Array,
    // age: Number,
    // car: Object,
    // name: String
  }
  connect() {
    // this.updateVisibility();
  }
  visibleValueChanged(currentValue, previousValue){
    console.log("my previous value was= " + previousValue);
    console.log("my Current value was= " + currentValue);
    this.updateVisibility();
  }
  updateVisibility(){
    if (this.visibleValue){
      this.element.style.display = "block";
    } else{
      this.element.style.display = "none";
    }
  }
}
