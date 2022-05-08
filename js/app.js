// global variables for getting elements
const counters=document.querySelectorAll(".num")
const price=document.querySelectorAll("#price .container .row .card")
const about=document.querySelectorAll("#about .container .row .us1")
const nav =document.querySelectorAll(".nav .nav-item .nav-link")
const mainSections=document.getElementsByTagName("section")
const head1=document.getElementsByTagName("header")[0]
const head2=document.getElementsByClassName("head")[0]
const con=document.getElementById("contact1")
const clients=[
    {
    "img":`<img src="../images/testimonial1.jpg" class="d-block w-50" alt="client"`,
      "name": "Leanne Graham",
      "address": {
        "street": "Kulas Light",
        "city": "Gwenborough",
      }
    },
    {
        "img":`<img src="../images/testimonial2.jpg" class="d-block w-50" alt="client"`,
      "name": "Ervin Howell",
      "address": {
        "street": "Victor Plains",
        "city": "Wisokyburgh",
      }
    },
    {
        "img":`<img src="../images/testimonial3.jpg" class="d-block w-50" alt="client"`,
      "name": "Clementine Bauch",
      "address": {
        "street": "Douglas Extension",
        "city": "McKenziehaven",
      }
    },
    {
        "img":`<img src="../images/testimonial4.jpg" class="d-block w-50" alt="client"`,
      "name": "Patricia Lebsack",
      "address": {
        "street": "Hoeger Mall",
        "city": "South Elvis",
      }
    }]
const clientsSection=document.querySelector("section#clients .container .row .card-group ")

// function to update the blog part
function blog(){
    let content=``
    for(let client of clients){
        content+=`
        <div class="card col-lg-3 col-md-6 ">
        ${client.img +1}
        <div class="card-body">
        <h3 class="card-title">${client.name}<h3>
        <p class="card-text">Lorem ipsum dolor sit amet,consectetur adipisicing elit.
        Totam,magni exercitationem adipisci repellat.molestias debitis,
        commodi nihil vitae natus nam.</p>
        </div>
        </div>
        `
    }
    clientsSection.innerHTML=content
}
blog()

const slider=document.querySelectorAll("#clients .container .row .card-group .card")
showBlog()
// handler function for the blog function
function showBlog(){
    let n=0.3
    for (let i of slider){
        i.style.animationDelay=` ${n}s  `
        n+=0.1
        i.classList.add("fade");
    }
}

// a handler function helps the main dom function
let navAtt
let secAtt
const activ=document.getElementsByClassName("Home")[0]
function changeDom1(){
    nav.forEach((n)=>{
        n.addEventListener("click",function(e){
        activ.classList.remove("active")
        nav.forEach((n)=>{
            n.classList.remove("active")
        })
        n.classList.add("active")
        if(n.getAttribute("id")==="contact"){
         e.preventDefault()
        con.scrollIntoView({
            behavior:"smooth"
        })
    }
        else if (document.getElementById(n.getAttribute("id"))===null){
                location.href="../index.html"
        }
        else{
            navAtt=n.getAttribute("id")
            changeDom2(navAtt)
        }
    })
})
}        
// a function to change the dom 
function changeDom2(att){
    secAtt=document.querySelector(`section#${att}`)
    for(let sec of mainSections){
        secAtt.style.display="block"
        sec.style.display="none"
        head1.style.display="none"
        head2.style.display="none"
        document.getElementById("contact2").style.display="block"
        document.getElementById("contact1").style.display="block"
        if (secAtt.getAttribute("id")==="about"){
            document.getElementById("skills").style.display="block"
        }else if(secAtt.getAttribute("id")==="services"){
            document.getElementById("price").style.display="block"
        }else if (secAtt.getAttribute("id")==="blog"){
            document.getElementById("clients").style.display="block"
        }
    }       
    
}
changeDom1()

// function to make the counter of numbers in the header
let count=1000
function nums(){
    count+=5
    counters.forEach(function(c){
        c.innerHTML=count
        c.addEventListener("mouseenter",function(){
            clearInterval(sett)
        })
    })
}
var sett=setInterval(nums,100)

// function to add an animation class to elements 
function addClass(elements) {
    elements.forEach((e)=>{
        e.addEventListener("mouseenter",function(){
            e.classList.add("landing")
        })
        e.addEventListener("mouseleave",function(){
            e.classList.remove("landing")
        })
    })
}
addClass(price)
addClass(about)

const cont=document.querySelector("#about .container .row .us1 .btn")
cont.addEventListener("click",function(e){
    e.preventDefault()
    con.scrollIntoView({
        behavior:"smooth"
    })
})