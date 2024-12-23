/* Homework
Create a dynamic table
Write a Javascript function that will dynamiclly create a table
User should input the number of Colums and Rows
In every table cell print which row and column it is (ex. Row-3 Column-1)
Don't forget to use google! GOOGLE! GOOGLE!!!!! :) */


function createDynamicTable() {
    const rows = parseInt(document.getElementById('rows').value);
    const columns = parseInt(document.getElementById('columns').value); 

    if (rows < 1 || columns < 1){
        return alert ('Enter valid numbers!');
    }

    let tableHTML = '<table>';

    for (let i = 1; i <= rows; i++){
        tableHTML += '<tr>';
    for (let j = 1; j <= columns; j++) {
        tableHTML += `<td> Row-${i} Column-${j} </td>`
    }
        tableHTML += '</tr>'
}
        tableHTML += '</table>'

    document.getElementById('tableContainer').innerHTML = tableHTML;
}
