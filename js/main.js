(() => {


    // make an AJAX request using the Fetch API
    fetch('./data/classData.json')
    .then(res => res.json())
    .then(data => {
        
    
        debugger;
        console.log(data);
    //handleData
    // here's where you would call the function that puts the pieces on the page
    })

    .catch((err) => {
    console.log(err);
    })

    

})();