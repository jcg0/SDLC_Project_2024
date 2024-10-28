class PatientData
{
    firstName;
    lastName;
    dateOfBirth;
    gender;
    address;
    medications;
    history;
    familyHistory;
    contacts;
    emergancyContacts;
    insuranceInfo;

    constructor(firstName, lastName, dateOfBirth, gender, address, medications, history, familyHistory, contacts, emergancyContacts, insuranceInfo)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.address = address;
        this.medications = medications;
        this.history = history;
        this.familyHistory = familyHistory;
        this.contacts = contacts;
        this.emergancyContacts = emergancyContacts;
        this.insuranceInfo = insuranceInfo;
    }

    getAll()
    {
        var all = {};
        all = [
            this.firstName,
            this.lastName,
            this.dateOfBirth,
            this.gender,
            this.address,
            this.medications,
            this.history,
            this.familyHistory,
            this.contacts,
            this.emergancyContacts,
            this.insuranceInfo
        ];
        return all;
    }

}

// NOT EXAMPLE OF GOOD DATA, JUST A PLACEHOLDER
class TestData
{

    patients;
    
    constructor()
    {
        this.patients =
        [
            new PatientData("Brain", "Hansen", "1998-06-29", "Male", "1929 Grand Ave", "None1", "Unknown1", "Unknown1", "(516) 442-1304", "(907) 258-3384", "Something something insurance1" ),
            new PatientData("Kelli", "Hoeger", "1974-02-11", "Female", "3901 Raspberry Rd", "None2", "Unknown2", "Unknown2", "	(907) 258-3384", "(631) 447-8130", "Something something insurance2" ),
            new PatientData("Meagan", "Donnelly", "1993-08-10", "Female", "433 E Main St", "None3", "Unknown3", "Unknown3", "(631) 447-8130", "(303) 450-2020", "Something something insurance3" ),
            new PatientData("Marcos", "Stokes", "2000-11-22", "Male", "	800 E Dimond Blvd #166", "None4", "Unknown4", "Unknown4", "(907) 344-0126", "(907) 742-1800", "Something something insurance4" )
        ]
    }

    getPatients()
    {
        return this.patients;
    }

}