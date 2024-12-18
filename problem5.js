
let obj = [{ name: "Alice", age: 20, marks: { math: 85, science: 90, english: 88 } },
{ name: "Avdhut", age: 21, marks: { math: 88, science: 99, english: 98 } },
{ name: "Vikas", age: 22, marks: { math: 81, science: 80, english: 89 } }
]

obj.push({ name: "Vijay", age: 23, marks: { math: 80, science: 80, english: 85 } })
// console.log(obj);

let highest_Average_Marks=0;
let Student_Name=null;
for (let i = 0; i < obj.length; i++) {
    let marks=obj[i].marks
    // console.log(marks);
    let Total_marks=marks.math+marks.science+marks.english
    // console.log(Total_marks);
    let Average_marks=Total_marks/3
    // console.log(Average_marks); 
    if(highest_Average_Marks<Average_marks){
        highest_Average_Marks=Average_marks
        Student_Name=obj[i].name
    }   
}
console.log(highest_Average_Marks,Student_Name);


