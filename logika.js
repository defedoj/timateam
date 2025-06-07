function Question() {
    let input1 = document.querySelector('.inp_question1');
    if (input1.value == "I love my mum") {
        input1.style.border = "10px solid rgb(0, 255, 38)";
        window.location.href = "test2.html";
    } else {
        alert("Відповідь некоректна! Спробуйте ще раз!");
        input1.style.border = '3px solid red';
    }
};

function Question2() {
    let input2 = document.querySelector('.inp_question2');
    if (input2.value == "I have a cat") {
        input2.style.border = "10px solid rgb(0, 255, 38)";
        window.location.href = "test3.html";
    } else {
        alert("Відповідь некоректна! Спробуйте ще раз!");
        input2.style.border = '3px solid red';
    }
};

function Question3() {
    let input3 = document.querySelector('.inp_question3');
    if (input3.value == "I am writing code") {
        input3.style.border = "10px solid rgb(0, 255, 38)";
        window.location.href = "test4.html";
    } else {
        alert("Відповідь некоректна! Спробуйте ще раз!");
        input3.style.border = '3px solid red';
    }
};

function Question4() {
    let input4 = document.querySelector('.inp_question4');
    if (input4.value.toLowerCase() == "She lives in London") {
        input4.style.border = "10px solid rgb(0, 255, 38)";
        window.location.href = "test5.html";
    } else {
        alert("Відповідь некоректна! Спробуйте ще раз!");
        input4.style.border = '3px solid red';
    }
};

function Question5() {
    let input5 = document.querySelector('.inp_question5');
    if (input5.value == "We played football yesterday") {
        input5.style.border = "10px solid rgb(0, 255, 38)";
        window.location.href = "index.html";
    } else {
        alert("Відповідь некоректна! Спробуйте ще раз!");
        input5.style.border = '3px solid red';
    }
};
let our_advantages_1 = document.querySelector('.our_advantages_1')
our_advantages_1.addEventListener('mousemove', function(){
    anime({
        targets: '.our_advantages_1',
        boxShadow: '0px 15px 5px 5px #FBBF24',
        scale: 1.1,
        duration: 2000,
        easing: 'linear',
        loop: true
      });
})

let our_advantages_2 = document.querySelector('.our_advantages_2')
our_advantages_2.addEventListener('mousemove', function(){
    anime({
        targets: '.our_advantages_2',
        boxShadow: '0px 15px 5px 5px #FBBF24',
        scale: 1.1,
        duration: 2000,
        easing: 'linear',
        loop: true
      });
})

let our_advantages_3 = document.querySelector('.our_advantages_3')
our_advantages_3.addEventListener('mousemove', function(){
    anime({
        targets: '.our_advantages_3',
        boxShadow: '0px 15px 5px 5px #FBBF24',
        scale: 1.1,
        duration: 2000,
        easing: 'linear',
        loop: true
      });
})

// Коли DOM повністю завантажено
document.addEventListener("DOMContentLoaded", function () {
    // Отримуємо всі блоки, які анімуються
    const animatedElements = document.querySelectorAll(".main, .our_advantages_block > div, footer div");

    // Додаємо клас, щоб початково елементи були приховані і знизу
    animatedElements.forEach(el => {
        el.classList.add("fade-up");
    });

    // Використовуємо Anime.js для анімації
    anime({
        targets: ".fade-up",
        translateY: [50, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1000,
        delay: anime.stagger(200) // Кожен елемент з затримкою
    });
});
document.addEventListener("DOMContentLoaded", function () {
    anime({
        targets: '.fade-up',
        translateY: [30, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 800
    });
});

function Question() {
    const input = document.querySelector('.inp_question').value.trim();
    if (input.toLowerCase() === 'i love my mom') {
        alert('✅ Правильно!');
    } else {
        alert('❌ Неправильно. Спробуйте ще раз.');
    }
}
