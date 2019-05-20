console.log('test');

let moneyCount = 0

//create buttons that add and delete employees from list
$(document).ready(function () {
    console.log('jQuery has been loaded');
    $('#addEmployeeButton').on('click', handleAddClick);
    $('#newEmployeeInfo').on('click', '.deleteEmployeeButton' , handleDeleteClick)
});

//create a function to add an employee and their info to list
function handleAddClick() {
    console.log($('#firstNameIn').val());
    console.log($('#lastNameIn').val());
    console.log($('#employeeIdIn').val());
    console.log($('#jobTitleIn').val());
    console.log($('#annualSalaryIn').val());
    const firstIn = $('#firstNameIn').val();
    const lastIn = $('#lastNameIn').val();
    const employeeIn = $('#employeeIdIn').val();
    const jobIn = $('#jobTitleIn').val();
    const salaryIn = $('#annualSalaryIn').val();


    $('#employeeTable').append(` 
    <tr>
        <td>` + firstIn + `</td>
        <td>` + lastIn + `</td>
        <td>` + employeeIn + `</td>
        <td>` + jobIn + `</td>
        <td>` + "$" + salaryIn + `</td>
        <td><button>delete</button></td>
        </td>
    </tr>
    `); 
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#employeeIdIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');

//add a counter that increases when employee money is entered:    
    // moneyCount = moneyCount + ();
    // $('#moneyCountDiv').text(moneyCount);

    // if (moneyCount > 20000 )  {
    //     $('#moneyCountDiv').css('color', 'red');
    // }    
    
}

//created delete function for delete buttons
function handleDeleteClick() {
    console.log('Delete clicked');
    $(this).closest('tr').remove();
}