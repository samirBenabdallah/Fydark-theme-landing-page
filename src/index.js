const button = document.querySelector(".last article div button");
const input = document.querySelector(".last article div input");
const formContainer = document.querySelector(".last article div");
function submit() {
  const emailForm = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const value = input.value;
  if (value === "" || !emailForm.test(value)) {
    formContainer.classList.add("error");
    return;
  }
  formContainer.classList.remove("error");
}
button.addEventListener("click", submit);
