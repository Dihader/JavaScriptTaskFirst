function MyFunction(row, column) {
    if (!IsValidTable(row, column)) {
        alert("Количество строк и столбцов должно быть числом и больше 0, проверьте введенные данные.");
    }
    else {
        BuildTable(row, column);
        BuildButtons();
    }
}
function IsValidTable(row, column) {
    if ((isNaN(row) || isNaN(column)) || (row <= 0 || column <= 0)) {
        return false;
    }
    else {
        return true;
    }

}
function BuildTable(row, column) {
    var colorsForCell = ["<td style='background-color:red;'>", "<td style='background-color:blue;'>", "<td style='background-color:yellow;'>", "<td style='background-color:green;'>"];/*" var colorsForCell = ["<td bgcolor=red;'>", "<td bgcolor=blue>", "<td bgcolor=yellow>", "<td bgcolor=green>"];*/
    var alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    document.write('<table id="idWalkTable" border="1">');   
    for (var i = 1; i <= Number(row) ; i++) {
        document.write('<tr>');
        for (var j = 1; j <= Number(column) ; j++) {
            var td = colorsForCell[Math.floor(Math.random() * colorsForCell.length)];/* получаем случайный цвет*/
            document.write(td);
            document.write(alph[Math.floor(Math.random() * alph.length)]);
            document.write('</td>');        }
        document.write('</tr>');
    }
    document.write('</table>');
}
function ChangeRedToGreen() {
    var table = document.getElementById('idWalkTable');
    var trList = table.getElementsByTagName('tr');
    for (var i in trList){
        var tdList = trList[i].getElementsByTagName('td');

        for (var j in tdList) {
             if ( tdList.item([j]).style.backgroundColor == "red") {
                tdList[j].style.backgroundColor = "green";
            }
        }
    }
}
function ClearYellow() {
    var table = document.getElementById('idWalkTable');
    var trList = table.getElementsByTagName('tr');

    for (var i in trList) {
        var tdList = trList[i].getElementsByTagName('td');

        for (var j in tdList) {
            if (tdList.item([j]).style.backgroundColor == "yellow") {
                tdList[j].textContent = "";
            }
        }
    }
}
function BuildButtons() {
    document.write('<input id="btnChange" type="button" value="Заменить все красные ячейки на зеленые"  onclick="ChangeRedToGreen()" />');
    document.write('<input id="btnClear"  type="button" value="Очистить все желтые ячейки"  onclick="ClearYellow()" />');
}
