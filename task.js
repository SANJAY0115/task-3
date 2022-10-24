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
var colours = ["red","pink","white"];
    

for(var value of colours)
{

    console.log(value);
}

//forEach

var colours = ["red","pink","white"];
colours.forEach((element,index) => { console.log(index,element)
    
});


// for    = applicabbles to arrays, object , json
// for in = applicabbles to arrays, object , json
// for of = applicabbles to arrays and string
// forEach= applicabbles to arrays only
