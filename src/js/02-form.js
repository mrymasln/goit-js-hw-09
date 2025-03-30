const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

let formData = {
  email: "",
  message: "",
};
const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email || "";
  form.elements.message.value = formData.message || "";
}

form.addEventListener("input", () => {
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email === "" || message === "") {
    alert("Lütfen tüm alanları doldurun.");
    return;
  }

  console.log({ email, message });

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: "", message: "" };
});
