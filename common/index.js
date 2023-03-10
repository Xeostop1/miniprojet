window.addEventListener("load", ()=>{
    const addBtn=document.querySelector("input[name='add']");
    const content=document.querySelector(".menuName");
    const recipeStr=content.nextSibling.nextSibling.innerText;    
    const recipeBox=document.querySelector(".recipeBox");
   
    
    addBtn.addEventListener("click",()=>{
        let recipeName=document.querySelector("input[name='recipeName']").value;
        recipeSeting(recipeName)
    })

    function recipeSeting(_name){
        let recipeName=content.innerText;
        if(recipeName===_name){
            recipeBox.append(setHtml(recipeStr,recipeName));
        }
        return 
    }
    const setHtml=(recipe, name)=>{
        return `<span class="menuName">${name}</span>
        <span>${recipe}</span>`
    }

    // function setHtml(recipe, name){
       
    // }

});