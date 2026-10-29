//your JS code here. If required.
const form = document.getElementById("myForm");
const fields = form.querySelectorAll("input");

// Restore saved values on page load
fields.forEach((field) => {
  const saved = localStorage.getItem(field.id);
  if (saved !== null) {
    field.value = saved;
  }
});

// Save on every keystroke
fields.forEach((field) => {
  field.addEventListener("input", () => {
    localStorage.setItem(field.id, field.value);
  });
});

// Save again on submit (keeps data for next visit)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fields.forEach((field) => {
    localStorage.setItem(field.id, field.value);
  });
});