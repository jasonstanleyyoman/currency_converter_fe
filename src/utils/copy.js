
const copyToClipboard = (text) => {
  const input = document.createElement("input");
  input.style.top = "0";
  input.style.left = "0";
  input.style.position = "fixed";
  input.value = text;
  document.body.appendChild(input);
  input.focus();
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
}

export {
  copyToClipboard
}