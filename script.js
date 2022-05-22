$(document).ready(function(){
    isFade = false; //чи приховані об'єкти
    
    $('.btn-event').click(function(){
        if(isFade == false) {
            $("li:nth-child(even)").fadeOut("slow");
            $(".btn-event").text("Показати");
            isFade = true;
        } else if(isFade == true) {
            $("li:nth-child(even)").fadeIn("slow");
            $(".btn-event").text("Приховати");
            isFade = false;
        }
    });
    //завдання
    $('.btn-task').click(function(){
        alert("ВАРІАНТ 10. Створити файл lab4.html, додати зверху кнопку, а потім 6 маленьких " +
        "малюнків однакового розміру, один під іншим. При натисканні на кнопку серед " +
        "всіх знайдених малюнків для парних виконати ефект слайд-шоу - поява " +
        "приховування малюнки під відповідним йому верхнім малюнком зі швидкістю " +
        "«slow».");
    });
});
