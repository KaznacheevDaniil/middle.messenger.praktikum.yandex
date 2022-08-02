export function displayFormLog(form, message, isSuccess){
  let logContainer = form.querySelector('.log-container');
  logContainer.textContent = ''
  if(isSuccess){
    if(!logContainer.classList.contains('success')){
      logContainer.classList.add('success')
    }
    if(logContainer.classList.contains('error')){
      logContainer.classList.remove('error')
    }
  }else{
    if(logContainer.classList.contains('success')){
      logContainer.classList.remove('success')
    }
    if(!logContainer.classList.contains('error')){
      logContainer.classList.add('error')
    }
  }

  logContainer.textContent = message;

}