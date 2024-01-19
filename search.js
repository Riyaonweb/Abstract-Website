function searching() {
    const searchInput = document.querySelector(".search");
    const listValues = document.querySelectorAll(".side");
    const blogs = document.querySelector(".blogs");

    const inputValue = searchInput.value.toLowerCase();


    listValues.forEach((side) => {
        const h2 = side.querySelector(".text h2")
        const textValue = h2.textContent.toLowerCase(); 

        if (textValue.includes(inputValue)) {
           side.style.display = "block";
        } else {
            side.style.display = "none";
        }
    });
}
   

