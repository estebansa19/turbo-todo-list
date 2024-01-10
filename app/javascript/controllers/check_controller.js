import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="check"
export default class extends Controller {
  connect() {
    console.log("Checkin controller connect");
  }

  active(event) {
    const id = event.target.dataset.id;
    const CSRFToken = document.querySelector('meta[name="csrf-token"]').content;

    fetch(`/tasks/${id}/toggle`, {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': CSRFToken
      },
      body: JSON.stringify({ completed: event.target.checked })
    }).then(response => response.text())
    .then(Turbo.renderStreamMessage);
  }
}
