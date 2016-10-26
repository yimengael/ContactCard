//This function clears all the field of the form
//and make them empty
function cleanFields() {
    $('#userForm').children('input').val('');
    $('#userForm').children('div').children('textarea').val('');
}

//This funtion hides the description of the contact
function hideContactDescription() {
    $('.displayInfo').children('p').hide();
}

//This function hides name and link
function hideFullnameAndLink() {
    $('.displayInfo').children('h3').hide();
    $('.displayInfo').children('div').children('a').hide();
    $('.displayInfo').children('p').show();
}

//This function will build the element to add
// as a block
function buildBlockTag() {
    var chaine = '<div class="displayInfo">\n';
    chaine = chaine + '\t<h3>' + $('#firstName').val() + ' ' + $('#lastName').val() + '</h3>\n';
    chaine = chaine + '\t<div id="linkToDesc">\n';
    chaine = chaine + '\t\t<a href="#">Click for description!</a>\n\t</div>\n';
    chaine = chaine + '\t<p id="parDesc">' + $('#description').val() + '</p>\n' + '</div>\n';
    return chaine;
}


//###################################################################
//####  This function is called whenthe document isfully loaded  ####
//####  This is the MAIN function                                ####
//###################################################################
$(document).ready(function () {

    //clearfields if any
    $(document).on('click', '#resetForm', function () {
        cleanFields();
    });

    //submit the form
    $(document).on('click', '#submitForm', function () {
        console.log(buildBlockTag());
        $('#contentRight').append(buildBlockTag());
        cleanFields();
        return false;
    });

    //display the description
    $(document).on('click', '#linkToDesc a', function () {
        hideFullnameAndLink();
    })

})
