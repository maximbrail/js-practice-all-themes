

// const ques1 = prompt("Введите текст для h2")
// const ques2 = prompt("Введите текст для p")
// const ques3 = prompt("Цена чего-то")



// const price = document.createElement("h3")
// const h2 = document.querySelector("h2")
// const p = document.querySelector("p")
// const box = document.querySelector(".box")
// const btn1 = document.querySelector(".btn1")
// const btn2 = document.querySelector(".btn2")



// btn1.onclick = () => {
//     alert("Вы положили товар в корзину")
// }

// btn2.onclick = () => {
//     box.classList.add("box1")
//     alert("Вы убрали товар из корзины")
// }



// h2.innerText = ques1
// p.innerText = ques2
// price.innerText = ques3

// box.append(price)



// LIST


const list = document.querySelector('.list')


const f1 = prompt('Fruit 1')
const f2 = prompt('Fruit 2')
const f3 = prompt('Fruit 3')


const fruita = []

fruita.push(f1)
fruita.push(f2)
fruita.push(f3)

fruita.forEach(fruit => {
    console.log('I ate ' + fruit);
    const p = document.createElement('p')
    p.innerText = fruit
    list.append(p)
    
    p.onclick = () =>{
        p.remove()
    }
})