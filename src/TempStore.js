let users = [
    {
        userId: 1,
        username: 'iAMCcarri',
        firstName: 'Adyceum',
        lastName: 'Magna Ccarri',
        email: 'AMC@gamil.com',
        cell: '(206)206-2062',
        hash: 'uRgH2N8-10FdL8r.cgRE4Lee',
        verified: {
            email: true,
            cell: true,
            push: true,
        },
        joinDate: '2020-10-01',
        method: {}, //fastingMethods[selection]
        
    }, 
    {
        userId: 2,
        username: 'iGMTatlongari',
        firstName: 'Gerald',
        lastName: 'Tatlonghari',
        email: 'GMT@gamil.com',
        cell: '(425)425-4254',
        hash: 'uRgH2N8-10FdL8r.cgRE4Lee',
        verified: {
            email: true,
            cell: true,
            push: true,
        },
        joinDate: '2020-10-01',
        method: {}, //fastingMethods[selection]
    }]

let fastingMethods =  
{ 
    methods: [
        { id: 1, method: '20:4', fast: 20, feast: 4 },
        { id: 2, method: '19:5', fast: 19, feast: 5 },
        { id: 3, method: '18:6', fast: 18, feast: 6 },
        { id: 4, method: '17:7', fast: 17, feast: 7 },
        { id: 5, method: '16:8', fast: 16, feast: 8 },
        { id: 6, method: '15:9', fast: 15, feast: 9 },
        { id: 7, method: '14:10', fast: 14, feast: 10 }
    ]
}

let tracker =
{
    fastId: null,
    date: null,
    fastStart: null,
    fastLength: null,
    feastStart: null,
    completed: false,
}

let ifastr_tables = [
    {
        id: 1,
        name: users
    },
    {
        id: 2,
        name: fastingMethods
    },
    {
        id: 3,
        name: tracker
    }
]

let databases = { ifastr_tables }

export default {
    databases
};