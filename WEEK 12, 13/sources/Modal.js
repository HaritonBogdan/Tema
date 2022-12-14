class Modal {
  htmlEl = null;
  title = "";
  submitButtonLabel = "";
  cancelButton = null;
  submitButton = null;
  modalEl = null;

  titleInput = null;
  descrInput = null;

  constructor(onSubmit, title, submitButtonLabel) {
    this.onSubmit = onSubmit;
    this.title = title;
    this.submitButtonLabel = submitButtonLabel;
  }

  init(modalEl) {
    this.modalEl = modalEl;
    this.htmlEl = document.querySelector("html");

    this.titleInput = document.querySelector("#article-modal-title");
    this.descrInput = document.querySelector("#article-modal-descr");

    this.cancelButton = document.querySelector("#article-modal-cancel");
    this.cancelButton.addEventListener(
      "click",
      this._onCancelButton.bind(this)
    );
    this.submitButton = document.querySelector("#article-modal-submit");
    this.submitButton.addEventListener(
      "click",
      this._onSubmitButton.bind(this)
    );

    this.fillModalEl();
  }

  fillModalEl() {
    this.modalEl.querySelector("h3").innerText = this.title;
    this.submitButton.innerText = this.submitButtonLabel;
  }

  show() {
    this.htmlEl.classList.add("no-overflow");
    this.modalEl.classList.remove("hidden");
  }

  hide() {
    this.htmlEl.classList.remove("no-overflow");
    this.modalEl.classList.add("hidden");
  }

  clearInputs() {
    this.titleInput.value = "";
    this.descrInput.value = "";
  }

  _onCancelButton() {
    this.clearInputs();
    this.hide();
  }

  _onSubmitButton() {
    this.onSubmit(this.titleInput.value, this.descrInput.value);
    this.hide();
    this.clearInputs();
  }
}
