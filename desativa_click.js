function desativaClick() {
  if (event.button==2||event.button==3) {
    alert("Evento bloqueado");
    oncontextmenu='return false';
  }
}
document.onmousedown=desativaClick
document.oncontextmenu = new Function("return false;");

function desabilitar(){
  document.frmPerm.txtNome.style.background='white';
  document.frmPerm.txtNome.disabled=true;
}