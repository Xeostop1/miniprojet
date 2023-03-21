window.addEventListener("load", ()=>{
    const recipeName=document.querySelector(".recipeStr");
    //서브밋에 이벤트 걸기
    const form =document.querySelector(".form");
    //쿼리셀렉터All로 메뉴명's 찾기 span
    const menuName=document.querySelectorAll(".menuName span");
    

    // ====form 이벤트리스너=======
    form.addEventListener('submit', (e)=>{
        // 리로드 막기
        e.preventDefault();
        let searchName=name();
        
        for (let i = 0; i < menuName.length; i++) {
            if(searchName===menuName[i].textContent){
                
            }
            
        }
    });
    
    // 인풋값 찾기
    function name(){
        let name= recipeName.value;
        return name;
    }
    
});