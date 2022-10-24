//json in  all for loops

//for
var students = [
    {
      "name" : "abcd" ,
      "regNo" : "123456" ,
      "mail" : "abcd@123"
    }
]

for(var i = 0; i<students.length ; i++)
{
   console.log(students[i]);

}

//for in

var students = [
    {
      "name" : "abcd" ,
      "regNo" : "123456" ,
      "mail" : "abcd@123"
    }
]
for(var index in students)
{

    console.log(students[index].name)
}

//for of
var students = [
  {
    "name" : "abcd" ,
    "regNo" : "123456" ,
    "mail" : "abcd@123"
  },
  {
      "name" : "efgh" ,
    "regNo" : "654321" ,
    "mail" : "123@abc"
  }
]

for(var x of students)
{
  console.log(x.mail);

}

//forEach

var students = [
  {
    "name" : "abcd" ,
    "regNo" : "123456" ,
    "mail" : "abcd@123"
  },
  {
      "name" : "efgh" ,
    "regNo" : "654321" ,
    "mail" : "123@abc"
  }
]


students.forEach((element,index) => { console.log(index,element)
  
});

