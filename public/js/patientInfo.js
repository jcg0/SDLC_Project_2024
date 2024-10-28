/*
    Keep and eye out for comments where stuff needs to be
    added for connecting to the db or something.

    For Example:
    // Add stuff here!!!!!
    // \/\/\/\/ Placeholder
    
*/
"use strict";
var $ = function(id) { return document.getElementById(id); };

var curPatient = "";
var editing = false;

// PLACEHOLDER
var patientsDB;

var showData = function()
{

    var patient = getPatient($("patientName").value);

    if (patient !== null)
    {

        curPatient = $("patientName").value;

        // Set Buttons
        const editbutton = $("editMode");
        editbutton.disabled = false;
        editbutton.hidden = false;

        const newPatientbutton = $("newPatient");
        newPatientbutton.disabled = false;
        newPatientbutton.hidden = false;

        editMode(false);

        $("patientName").value = ""; // Clear Patient Search

        $("firstname").value         = patient.firstName;
        $("lastname").value          = patient.lastName;
        $("DateOfBirth").value       = patient.dateOfBirth;
        $("Gender").value            = patient.gender;
        $("Address").value           = patient.address;
        $("Medications").value       = patient.medications;
        $("History").value           = patient.history;
        $("FamilyHistory").value     = patient.familyHistory;
        $("Contacts").value          = patient.contacts;
        $("EmergencyContacts").value = patient.emergancyContacts;
        $("Insurance").value         = patient.insuranceInfo;

    }
    else
    {
        // Set Buttons
        const editbutton = $("editMode");
        editbutton.disabled = true;
        editbutton.hidden = true;

        curPatient = "";

        clearInfo();

    }
    
}

var getPatient = function(name)
{

    // Add stuff here!!!!!
    // \/\/\/\/ Placeholder

    // Returns PatientData object, See patientData.js

    for (let i = 0; i < Object.keys(patientsDB).length; i++)
    {

        if ((patientsDB[i].firstName.toLowerCase() + " " + patientsDB[i].lastName.toLowerCase()) === name.toLowerCase())
        {
            return patientsDB[i];
        }

    }

    return null;

}

var editMode = function(mode = null)
{

    if (mode === null)
    {
        editing = !editing;
    }
    else
    {
        editing = mode;
    }
    

    if (editing)
    {
        const items = document.querySelectorAll(".item input");
        for (const item of items)
        {
            item.disabled = false;
        }

        // Set Buttons
        const editbutton = $("editMode");
        editbutton.disabled = true;
        editbutton.hidden = true;

        const savebutton = $("saveData");
        savebutton.disabled = false;
        savebutton.hidden = false;

        const cancelbutton = $("cancelEdit");
        cancelbutton.disabled = false;
        cancelbutton.hidden = false;

        const newPatientbutton = $("newPatient");
        newPatientbutton.disabled = true;
        newPatientbutton.hidden = true;
    }
    else
    {
        const items = document.querySelectorAll(".item input");
        for (const item of items)
        {
            item.disabled = true;
        }

        // Set Buttons
        if (curPatient !== "")
        {
            const editbutton = $("editMode");
            editbutton.disabled = false;
            editbutton.hidden = false;
        }

        const savebutton = $("saveData");
        savebutton.disabled = true;
        savebutton.hidden = true;

        const cancelbutton = $("cancelEdit");
        cancelbutton.disabled = true;
        cancelbutton.hidden = true;

        const newPatientbutton = $("newPatient");
        newPatientbutton.disabled = false;
        newPatientbutton.hidden = false;
        
    }

}

const saveData = function()
{

    var canSave = true;

    const items = document.querySelectorAll(".item input");
    for (const item of items)
    {

        if (item.required && (item.value.trim() === ""))
        {
            canSave = false;
        }
        
    }

    if (confirm("Are you sure?"))
    {
        if (canSave)
        {
            const newPatientData = new PatientData();

            newPatientData.firstName         = $("firstname").value;
            newPatientData.lastName          = $("lastname").value;
            newPatientData.dateOfBirth       = $("DateOfBirth").value;
            newPatientData.gender            = $("Gender").value;
            newPatientData.address           = $("Address").value;
            newPatientData.medications       = $("Medications").value;
            newPatientData.history           = $("History").value;
            newPatientData.familyHistory     = $("FamilyHistory").value;
            newPatientData.contacts          = $("Contacts").value;
            newPatientData.emergancyContacts = $("EmergencyContacts").value;
            newPatientData.insuranceInfo     = $("Insurance").value;
            
            editMode(false); // Disable editing mode
            var oldCurPatient = curPatient;
            curPatient = newPatientData.firstName + " " + newPatientData.lastName;

            // Add stuff here!!!!!
            // \/\/\/\/ Placeholder

            // Save Data From newPatientData, more info in patientData.js
            var exists = false;
            for (let i = 0; i < Object.keys(patientsDB).length; i++)
            {
                var storedName = patientsDB[i].firstName + " " + patientsDB[i].lastName;
                if (storedName === oldCurPatient)
                {
                    patientsDB[i] = newPatientData;
                    exists = true;
                    break;
                }
            }

            if (!exists)
            {
                patientsDB.push(newPatientData);
            }
            
        }
        else
        {
            alert("Please Fill In Required Fields");
        }

    }

}

var clearInfo = function()
{
    $("firstname").value = "";
    $("lastname").value = "";
    $("DateOfBirth").value = "";
    $("Gender").value = "";
    $("Address").value = "";
    $("Medications").value = "";
    $("History").value = "";
    $("FamilyHistory").value = "";
    $("Contacts").value = "";
    $("EmergencyContacts").value = "";
    $("Insurance").value = "";
}

var clearInfoAndCurPatient = function()
{
    // SO CRAZY!!!!
    curPatient = "";
    clearInfo();
    $("patientName").value = ""; // Clear Patient Search
}

var cancelEdit = function()
{
    if (curPatient === "")
    {
        clearInfo();
    }
    else
    {

        var patient = getPatient(curPatient);

        if (patient !== null)
        {

            $("firstname").value         = patient.firstName;
            $("lastname").value          = patient.lastName;
            $("DateOfBirth").value       = patient.dateOfBirth;
            $("Gender").value            = patient.gender;
            $("Address").value           = patient.address;
            $("Medications").value       = patient.medications;
            $("History").value           = patient.history;
            $("FamilyHistory").value     = patient.familyHistory;
            $("Contacts").value          = patient.contacts;
            $("EmergencyContacts").value = patient.emergancyContacts;
            $("Insurance").value         = patient.insuranceInfo;
            
        }

    }

    editMode(false); // Disable editing mode

}

var newPatient = function()
{
    clearInfo();
    editMode(true); // Enable editing mode

}

var wip = function()
{
    alert("Not Implemented");
}

window.onload = function()
{
    //PLACEHOLDER
    patientsDB = new TestData().getPatients();

    $("showData").onclick   = showData;
    $("editMode").onclick   = editMode;
    $("saveData").onclick   = saveData;
    $("cancelEdit").onclick = cancelEdit;
    $("newPatient").onclick = newPatient;
    $("clearInfo").onclick  = clearInfoAndCurPatient;
};