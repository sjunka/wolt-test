const OpeneningHoursResponse = {
    data: {
        "monday": [],
        "tuesday": [
            {
                "type": "open",
                "value": 36000
            },
            {
                "type": "close",
                "value": 64800
            }
        ],
        "wednesday": [],
        "thursday": [
            {
                "type": "open",
                "value": 36000
            },
            {
                "type": "close",
                "value": 64800
            }
        ],
        "friday": [
            {
                "type": "open",
                "value": 36000
            }
        ],
        "saturday": [
            {
                "type": "close",
                "value": 3600
            },
            {
                "type": "open",
                "value": 36000
            }
        ],
        "sunday": [
            {
                "type": "close",
                "value": 3600
            },
            {
                "type": "open",
                "value": 43200
            },
            {
                "type": "close",
                "value": 75600
            }
        ]
    }
};

const simulatedApiRequest = new Promise((resolve) => {
    setTimeout(() => {
        resolve(OpeneningHoursResponse);
    }, 2000);
});

const OpeneningHoursResponseCall = async () => simulatedApiRequest;

export default OpeneningHoursResponseCall;