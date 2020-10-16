(() => {


    // make an AJAX request using the Fetch API
    fetch('./data/classData.json')
    .then(res => res.json())
    .then(data => {
        
    
        debugger;
        console.log(data)
        handleDataSet(data);
    //handleData
    // here's where you would call the function that puts the pieces on the page
    })

    .catch((err) => {
    console.log(err);
    })

    function handleDataSet(data) {

        let courseName = document.querySelector('.course-name');
        courseName.innerHTML = data.coursename + " - ";
          
        let courseCode = document.querySelector('.course-code');
        courseCode.innerHTML = data.coursecode;

        let profName = document.querySelector('.prof-name');
        profName.innerHTML = "Professor - " + data.profname;

        let classTime = document.querySelector('.list-inline').children;
        classTime[0].textContent = "🕐 " + data.classtime[0];
        classTime[1].textContent = "🕘 " + data.classtime[1];

        let courseDes = document.querySelector('.course-des');
        courseDes.innerHTML = data.coursename + " - " + data.coursecode;
    }

})();