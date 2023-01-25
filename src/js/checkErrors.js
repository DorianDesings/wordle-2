const checkErrors = msg => {
  popUpElement.innerHTML = '';
  const newText = document.createElement('p');
  newText.textContent = msg;
  popUpElement.append(newText);
  popUpElement.classList.add('pop-up--show');
  const timeoutId = setTimeout(() => {
    popUpElement.classList.remove('pop-up--show');
    clearTimeout(timeoutId);
  }, 2000);
};

export { checkErrors };
