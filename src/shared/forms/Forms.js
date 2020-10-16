

const PERSONAL_INFO = {
    firstName: {
        disabled: false,
        value: "",
        type: "text",
        validation: {
            required: true,
            minLength: 3,
            maxLength: 255,
            isTouched: false,
            isValid: false
        },
        label: "First Name"
    },
    middleName: {
        disabled: false,
        value: "",
        type: "text",
        validation: {
            required: false,
            minLength: 0,
            maxLength: 255,
            isTouched: false,
            isValid: false
        },
        label: "Middle Name"
    },
    lastName: {
        disabled: false,
        value: "",
        type: "text",
        validation: {
            required: true,
            minLength: 3,
            maxLength: 255,
            isTouched: false,
            isValid: false
        },
        label: "Last Name"
    },
    age: {
        disabled: false,
        value: "",
        type: "text",
        validation: {
            required: true,
            minLength: 2,
            maxLength: 2,
            isTouched: false,
            isValid: false
        },
        label: "Age"
    },
    mobileNumber: {
        disabled: false,
        value: "",
        type: "text",
        validation: {
            required: true,
            minLength: 11,
            maxLength: 16,
            isTouched: false,
            isValid: false
        },
        label: "Mobile Number"
    }
}

const EDUCATIONAL_INFO = {
    metricMarks: {
        disabled: false,
        value: "",
        type: "text",
        validation: {
            required: true,
            minLength: 3,
            maxLength: 6,
            isTouched: false,
            isValid: false

        },
        label: "Percentage in Metric"
    },
    intermediateMarks: {
        disabled: false,
        value: "",
        type: "text",
        validation: {
            required: true,
            minLength: 3,
            maxLength: 6,
            isTouched: false,
            isValid: false

        },
        label: "Percentage in Intermediate"
    },
    bachelorCGPA: {
        disabled: false,
        value: "",
        type: "select",
        options: [1, 2, 3, 4],
        validation: {
            required: true,
            minLength: 1,
            maxLength: 6,
            isTouched: false,
            isValid: false

        },
        label: "CGPA in Bachelor "
    }
}
const PROFESSIONAL_INFO  = {
    status: {
        value: false,
        type: "check",
        validation: {
            required: true,
            isTouched: false,
            isValid: true
        },
        label: "Are You Employed?"
    },
    companyName: {
        disabled: true,
        value: "",
        type: "text",
        validation: {
            required: true,
            minLength: 5,
            maxLength: 255,
            isTouched: false,
            isValid: false
        },
        label: "Name of Company"
    },
    designationName: {
        disabled: true,
        value: "",
        type: "text",
        validation: {
            required: true,
            minLength: 5,
            maxLength: 255,
            isTouched: false,
            isValid: false
        },
        label: "Designation Name"
    }
}
const EXCISE_INFO = {
    isVehicle: {
        value: false,
        type: "check",
        validation: {
            required: false,
            isValid: true
        },
        label: "Have you vehicle?"
    },
    type: {
        disabled: true,
        value: "",
        type: "select",
        options: ["Bike", "SVM"],
        validation: {
            required: true,
            minLength: 1,
            maxLength: 255,
            isTouched: false,
            isValid: false
        },
        label: "Type"
    },
    plateNumber: {
        disabled: true,
        type: "text",
        validation: {
            required: true,
            minLength: 4,
            maxLength: 10,
            isTouched: false,
            isValid: false
        },
        label: "Plate Number"
    }
}
const RESIDENT_INFO = {
    isHouse: {
        value: false,
        type: "check",
        validation: {
            required: false,
            isValid: true
        },
        label: "Are you own a house?"
    },
    houseNumber: {
        disabled: true,
        value: "",
        type: "text",
        validation: {
            required: true,
            minLength: 4,
            maxLength: 10,
            isTouched: false,
            isValid: true
        },
        label: "houseNumber"
    }
}

const form = {
    PERSONAL_INFO,
    EDUCATIONAL_INFO,
    PROFESSIONAL_INFO,
    EXCISE_INFO,
    RESIDENT_INFO
}

export default form;
