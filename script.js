// Write all your Javascript here!
$.ajax({
    url:`https://techkaro-test.herokuapp.com/api/v1/getdata?lang=en`,

    success: function(data) {
        let dt = new Date(data.date * 1000);
        document.querySelector(".picture").style["background-image"] = `url(${data.imageURL})`; 
        document.querySelector(".content .date").innerHTML= `${dt.getDate()} `; 
        document.querySelector(".info-heading").innerHTML= `${data.info.heading}`; 
        document.querySelector(".info-text").innerHTML= `${data.info.description}`; 
        document.querySelector(".sale-heading").innerHTML= `${data.sale.heading}`; 
        document.querySelector(".sale-text").innerHTML= `${data.sale.description}`; 
        
    }
})