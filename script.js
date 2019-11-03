var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["filme"] = document.getElementById("filme").value;
    formData["resumo"] = document.getElementById("resumo").value;
    formData["nota"] = document.getElementById("nota").value;
    formData["data"] = document.getElementById("data").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.filme;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.resumo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.nota;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.data;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Editar</a>
                       <a onClick="onDelete(this)">Excluir</a>`;
}

function resetForm() {
    document.getElementById("filme").value = "";
    document.getElementById("resumo").value = "";
    document.getElementById("nota").value = "";
    document.getElementById("data").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("filme").value = selectedRow.cells[0].innerHTML;
    document.getElementById("resumo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("nota").value = selectedRow.cells[2].innerHTML;
    document.getElementById("data").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.filme;
    selectedRow.cells[1].innerHTML = formData.resumo;
    selectedRow.cells[2].innerHTML = formData.nota;
    selectedRow.cells[3].innerHTML = formData.data;
}

function onDelete(td) {
    if (confirm('Tem certeza de que deseja excluir este registro?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
        }
}

function validate() {
    isValid = true;
    if (document.getElementById("filme").value == "") {
        isValid = false;
        document.getElementById("filmeValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("filmeValidationError").classList.contains("hide"))
            document.getElementById("filmeValidationError").classList.add("hide");
    }
    return isValid;
}
//========================================================================
$(document).ready(function(){
    var filme = localStorage.getItem(data.filme);
    var resumo = localStorage.getItem(data.resumo);
    var nota = localStorage.getItem(data.nota);
    var data = localStorage.getItem(data.data);
    
    if(filme !== null){
       $("#filme").val(data.filme);
    }
    if(resumo !== null){
      $("#resumo").val(data.resumo);
    }
    if(nota !== null){
        $("#nota").val(data.nota);
     }
     if(data !== null){
       $("#data").val(data.data);
     }
  });
  
  function salvar(){
    localStorage.setItem("filme",  $("#filme").val());
    localStorage.setItem("resumo",  $("#resumo").val());
    localStorage.setItem("nota",  $("#nota").val());
    localStorage.setItem("data",  $("#data").val());
  }
//========================================================================



