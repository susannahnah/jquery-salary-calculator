console.log('test');

// $(document).ready(onReady);

// function onReady() {
// }

let moneyCount = 0

$(document).ready(function () {
    console.log('jQuery has been loaded');
    $('#addEmployeeButton').on('click', handleAddClick);
    $('#employeeTableBody').on('click', '.deleteEmployeeButton' , handleDeleteClick)
});

function handleAddClick() {
    console.log('hello events!');
    console.log($('#firstName').val());
    console.log($('#lastName').val());
    console.log($('#employeeId').val());
    console.log($('#jobTitle').val());
    console.log($('#annualSalary').val());
    const firstIn = $('#firstName').val();
    const lastIn = $('#lastName').val();
    const lastIn = $('#employeeId').val();
    const lastIn = $('#jobTitle').val();
    const lastIn = $('#annualSalary').val();

    $('#employeeTableBody').append(` 
    <tr>
        <td>` + commonIn + `</td>
        <td>${sciIn}</td>
        <td>
            <button>delete</button>
        </td>
    </tr>
    `); 
    $('#commonName').val('');
    $('#sciName').val('');


