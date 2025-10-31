let courses = [
  {
    name: "JavaScript Basics",
    price: 29,
    rating: 4.75,
    languages: ["English", "Spanish"],
    mentor: "mike johnson"
  },
  {
    name: "Advanced Python",
    price: 39,
    rating: 4.82,
    languages: ["English", "French"],
    mentor: "alex chen"
  },
  {
    name: "Web Development",
    price: 49,
    rating: 4.66,
    languages: ["English", "German", "Spanish"],
    mentor: "emma wilson"
  },
  {
    name: "React for Beginners",
    price: 35,
    rating: 4.81,
    languages: ["English"],
    mentor: "james smith"
  },
  {
    name: "Node.js Fundamentals",
    price: 45,
    rating: 4.5,
    languages: ["English", "French"],
    mentor: "david miller"
  },
  {
    name: "Machine Learning Essentials",
    price: 59,
    rating: 4.9,
    languages: ["English", "Chinese"],
    mentor: "lisa zhang"
  },
  {
    name: "Data Structures & Algorithms",
    price: 42,
    rating: 4.75,
    languages: ["English", "Hindi"],
    mentor: "raj patel"
  },
  {
    name: "Database Management with SQL",
    price: 38,
    rating: 4.63,
    languages: ["English", "Spanish"],
    mentor: "maria garcia"
  },
  {
    name: "UI/UX Design Principles",
    price: 33,
    rating: 4.55,
    languages: ["English", "Italian"],
    mentor: "sarah parker"
  },
  {
    name: "C++ Programming Masterclass",
    price: 41,
    rating: 4.7,
    languages: ["English", "Russian"],
    mentor: "anna petrova"
  },
  {
    name: "Cybersecurity Basics",
    price: 47,
    rating: 4.8,
    languages: ["English", "German"],
    mentor: "marcus weber"
  },
  {
    name: "Mobile App Development with Flutter",
    price: 52,
    rating: 4.9,
    languages: ["English", "Spanish"],
    mentor: "carlos rodriguez"
  },
  {
    name: "Cloud Computing with AWS",
    price: 60,
    rating: 4.8,  
    languages: ["English", "French"],
    mentor: "thomas dubois"
    }   
];
 
let currentSearch = "";
let currentSort = "normal";

const nameformat= (name) => name.charAt(0).toUpperCase() +name.slice(1).toLowerCase();


function displaycourse(courses){
    const courseContainer=document.querySelector('#course-container')
            courseContainer.innerHTML=""
    courses.forEach(course=>{
    let courseUI=`
        <div class="course">
            <h2>${course.name}</h2>
            <p><strong>Price: </strong>$${course.price}</p>
            <p><strong>Rating: </strong>${Math.round(course.rating*10)/10}/5</p>
            <p><strong>Languages: </strong>${course.languages.join(", ")}</p>
            <p><strong>Mentor: </strong>${nameformat(course.mentor)}</p>
        </div>`    
        courseContainer.innerHTML+=courseUI;
        })
    }



function findTopRatedCourse(courses){
    const topcourse=courses.reduce((top,course)=>{
        return top.rating > course.rating  ? top : course
    })
    return topcourse;
}    

function displayTopRatedCourse(courses){
    const topcourseContainer=document.querySelector('#top-rated-courses')
    const topcourseUI=findTopRatedCourse(courses)
    let constUI=`
    <div class="course">
        <h2>${topcourseUI.name}</h2>
        <p><strong>Price: </strong>$${topcourseUI.price}</p>
        <p><strong>Rating: </strong>${Math.round(topcourseUI.rating*10)/10}/5</p>
        <p><strong>Languages: </strong>${topcourseUI.languages.join(", ")}</p>
        <p><strong>Mentor: </strong>${nameformat(topcourseUI.mentor)}</p>
    </div>`
    topcourseContainer.innerHTML+=constUI;
}



function displaytotalCourseNumber(arr){
const totalCourses=document.querySelector('.coursenumbers')
totalCourses.textContent=`Number of courses available : ${arr.length}`
}

function getSearchresult(arr,query){
    const result = arr.filter((item)=>{
       return item.name.toLowerCase().includes(query.toLowerCase())
})
displaycourse(result);
displaytotalCourseNumber(result);
}

function searchCourses(){
    const searchInput = document.querySelector('#search');
    searchInput.addEventListener('input',(event) =>{
      currentSearch=event.target.value;
        getSearchresult(courses,event.target.value);
    })
}

function sortcourses(){
    const sortSelect=document.querySelector('#sort-price');
    sortSelect.addEventListener('change',(event)=>{
        currentSort=event.target.value;
        getfilteredCoursesByPrice()
    })
}

function getfilteredCoursesByPrice(){
  let filtered = [...courses];
  filtered=filtered.filter(course=>
        course.name.toLowerCase().includes(currentSearch.toLowerCase())
 )
 if(currentSort==="low-to-high"){
  filtered.sort((a,b)=>a.price - b.price)
 }
 else if(currentSort=="high-to-low"){
  filtered.sort((a,b)=>b.price - a.price)
}
displaycourse(filtered);
displaytotalCourseNumber(filtered);
}

getfilteredCoursesByPrice(courses)

function initPage(){
    displayTopRatedCourse(courses)
    displaycourse(courses)
    displaytotalCourseNumber(courses)
    searchCourses()
    sortcourses()

}

initPage();