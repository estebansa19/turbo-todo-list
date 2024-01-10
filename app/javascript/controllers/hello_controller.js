import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.textContent = "Hello World!"
  }

  active(event) {
    console.log("Check controller active");
    console.log(event.target);
  }
}
