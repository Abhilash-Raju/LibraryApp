const ROLE ={

    ADMIN :'admin',
    BASIC :'basic'
}
var users=[{
    "id":1,
    "userid":"aiswaryawalter@gmail.com",
    "pwdid":"aiswarya",
    "role":ROLE.BASIC
},
{
    "id":2,
    "userid":"surya@gmail.com",
    "pwdid":"surya",
    "role":ROLE.BASIC

},
{
    "id":3,
    "userid":"bazith@gmail.com",
    "pwdid":"bazith",
    "role":ROLE.BASIC
},
{
    "id":4,
    "userid":"admin@domain.com",
    "pwdid":"admin",
    "role":ROLE.ADMIN
}
]


module.exports={ROLE, users};