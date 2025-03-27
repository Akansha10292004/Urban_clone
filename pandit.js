
  
  var threading = [
    {
        name: "Face wax",
        rating: "4.77(22.2k)",
        price: 69,
        strikeprice:79,
        image_url:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1658988752247-347188.png",
        thread1:"RICA peel-off wax to remove even the tiniest, hard to remove hair ",
        thread2: "recommonded to all skin type, peticular sensitive skin",
      thread3: "",
      thread4: "",
      thread5: "",
      thread6: "",
    },
    {
        name: "Threading",
        rating: "4.76(502.8k)",
        price: 19,
        strikeprice:25,
        image_url:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657524490060-23016c.png",
        thread1:"Good quality thread for desired eybrow shape & other facial areas hair removal",
        thread2: "",
        thread3: "",
        thread4: "",
        thread5: "",
        thread6: "",
    }
  ]
  var bleach = [
    {
        name: "Bleach",
        rating: "4.75(52.5k)",
        price: 299,
        strikeprice:349,
        image_url:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657520810954-691bb1.png",
        thread1:"tratment to remove dark sports, tan, pigmentation, blemises,etc.",
        thread2: "not sutatble for sensitive skin",
        thread3: "",
        thread4: "",
        thread5: "",
        thread6: "",
    },
    {
        name: "Detan",
        rating: "4.76(48.8k)",
        price: 349,
        strikeprice:449,
        image_url:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657523167667-d1f1eb.png",
        thread1:"RAAGA Detan pack infused with milk, honey, fruits extract to remove tan",
        thread2: "",
        thread3: "",
        thread4: "",
        thread5: "",
        thread6: "",
    }
  ]
  var hairColour = [
    {
        name: "Hair colour application",
        rating: "4.72(34.9k)",
        price: 249,
        strikeprice:349,
        image_url:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657524726085-34bdda.png",
        thread1:"colour / henna application by experts to give your hair antural look & shine",
        thread2: "We do not provide colour / henna. please have it befor the professional arriv",
        thread3: "",
        thread4: "",
        thread5: "",
        thread6: "",
    },
    {
        name: "Head massage",
        rating: "4.75(63.7k)",
        price: 299,
        strikeprice:399,
        image_url:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657524725157-0eea37.png",
        thread1:"Relaxing oil massage to relive stress & promote hair growth",
        thread2: "",
        thread3: "",
        thread4: "",
        thread5: "",
        thread6: "",
    },
    {
        name: "Lorial hair spa",
        rating: "4.64(1.2k)",
        price: 1249,
        strikeprice:1349,
        image_url:
        "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657524725660-93d095.png",
        thread1:"Therapetic hair spa tratment for healty &  nourised hair",
        thread2: "",
        thread3: "",
        thread4: "",
        thread5: "",
        thread6: "",
    }
  ]
  bestsellerdisplay();
  makeyourownpackageDisplay();
  waxingdisplay();
  facialdisplay();
  manicuredisplay();
  pedicuredisplay();
  threadingdisplay();
  bleachdisplay();
  haircolourdisplay();
  
  //event & localStorage
  var cartpage=JSON.parse(localStorage.getItem("items"))||[];
  var total=(localStorage.getItem("totalvalue"))||0;
  
  
  function bestsellerdisplay() {
    var section = document.createElement("section");
    section.setAttribute("id", "bestsellar");
    var head = document.createElement("h1");
    head.setAttribute("id", "heading");
    head.innerText = "Bestseller bestseller";
    section.append(head);
    bestseller.map(function (elem) {
      var parentdiv = document.createElement("div");
      var packp = document.createElement("h5");
      packp.innerHTML = '<i class="fa-solid fa-box"></i> ' + elem.pack;
      packp.setAttribute("class", "packagecolor");
      var namep = document.createElement("h3");
      namep.innerText = elem.name;
      var addbtn= document.createElement("button");
      addbtn.innerText="Add";
      addbtn.setAttribute("class","add");
      addbtn.style.marginLeft="80%";
      addbtn.addEventListener("click",function(){addToCart(elem);} );
    
  
      var ratingp = document.createElement("p");
      ratingp.innerHTML = '<i class="fa-solid fa-star"></i> ' + elem.rating;
      var pricep = document.createElement("p");
      pricep.innerHTML = "₹ " + elem.price + "&nbsp &nbsp&nbsp  " + elem.time;
      var edit = document.createElement("button");
      edit.innerHTML = "<b>Edit your package<b>";
      edit.setAttribute("class", "edit");
      var seconddiv = document.createElement("div");
      seconddiv.setAttribute("id", "seconddiv");
      var firstdiv = document.createElement("div");
  
      var thread1p = document.createElement("p");
      thread1p.innerText = elem.thread1;
  
      var thread2p = document.createElement("p");
      thread2p.innerText = elem.thread2;
  
      var thread3p = document.createElement("p");
      thread3p.innerText = elem.thread3;
  
      var thread4p = document.createElement("p");
      thread4p.innerText = elem.thread4;
  
      var thread5p = document.createElement("p");
      thread5p.innerText = elem.thread5;
      seconddiv.append(thread1p, thread2p, thread3p, thread4p, thread5p, edit);
      firstdiv.append(packp, namep,addbtn, ratingp, pricep);
      parentdiv.append(firstdiv, seconddiv);
      section.append(parentdiv);
      parentdiv.setAttribute("id", "parentdiv");
      document.getElementById("productcart").append(section);
    });
  }
  
  function makeyourownpackageDisplay() {
    var section = document.createElement("section");
    section.setAttribute("id", "makeyourownpackage");
    var head = document.createElement("h1");
    head.setAttribute("id", "heading");
    head.innerText = "Make your own package";
    section.append(head);
    makeYourOwnPackage.map(function (elem) {
      var parentdiv = document.createElement("div");
      var packp = document.createElement("h5");
      packp.innerHTML = '<i class="fa-solid fa-box"></i> ' + elem.pack;
      packp.setAttribute("class", "packagecolor");
      var namep = document.createElement("h3");
      namep.innerText = elem.name;
      var addbtn= document.createElement("button");
      addbtn.innerText="Add";
      addbtn.setAttribute("class","add");
      addbtn.style.marginLeft="80%";
      addbtn.addEventListener("click",function(){addToCart(elem);} );
      var ratingp = document.createElement("p");
      ratingp.innerHTML = '<i class="fa-solid fa-star"></i> ' + elem.rating;
      var pricep = document.createElement("p");
      pricep.innerHTML = "₹ " + elem.price + "&nbsp &nbsp&nbsp  " + elem.time;
      var discountp = document.createElement("p");
      discountp.innerHTML = '<i class="fa-solid fa-tag"></i> ' + elem.discount;
      var edit = document.createElement("button");
      edit.innerHTML = "<b>Edit your package<b>";
      edit.setAttribute("class", "edit");
      var seconddiv = document.createElement("div");
      seconddiv.setAttribute("id", "seconddiv");
      var firstdiv = document.createElement("div");
  
      var thread1p = document.createElement("p");
      thread1p.innerText = elem.thread1;
  
      var thread2p = document.createElement("p");
      thread2p.innerText = elem.thread2;
  
      var thread3p = document.createElement("p");
      thread3p.innerText = elem.thread3;
  
      var thread4p = document.createElement("p");
      thread4p.innerText = elem.thread4;
  
      var thread5p = document.createElement("p");
      thread5p.innerText = elem.thread5;
      seconddiv.append(thread1p, thread2p, thread3p, thread4p, thread5p, edit);
      firstdiv.append(packp, namep,addbtn, ratingp, pricep, discountp);
      parentdiv.append(firstdiv, seconddiv);
      section.append(parentdiv);
      parentdiv.setAttribute("id", "parentdiv");
      document.getElementById("productcart").append(section);
    });
  }
  
  function waxingdisplay() {
    var section = document.createElement("section");
    section.setAttribute("id", "waxing");
    var head = document.createElement("h1");
    head.setAttribute("id", "heading");
    head.innerText = "Waxing";
    section.append(head);
    waxing.map(function (elem, index) {
      var parentdiv = document.createElement("div");
  
      var namep = document.createElement("h3");
      namep.innerText = elem.name;
  
      var ratingp = document.createElement("p");
      ratingp.innerHTML = '<i class="fa-solid fa-star"></i> ' + elem.rating;
  
      var pricep = document.createElement("p");
      pricep.innerText = elem.price;
      var seconddiv = document.createElement("dvi");
      seconddiv.append(namep, ratingp, pricep);
      var image = document.createElement("img");
      image.setAttribute("id", "smallimage");
      var thirddiv = document.createElement("div");
  
      image.setAttribute("src", elem.image_url);
      image.setAttribute("alt", index);
      var add = document.createElement("p");
      add.innerText = "Add";
  
     
      add.addEventListener("click",function(){addToCart(elem);} );
  
      thirddiv.append(image, add);
      var firstdiv = document.createElement("div");
      firstdiv.setAttribute("id", "waxingflex");
      firstdiv.append(seconddiv, thirddiv);
      var thread1p = document.createElement("p");
      thread1p.innerText = elem.thread1;
  
      var thread2p = document.createElement("p");
      thread2p.innerText = elem.thread2;
      var fourdiv = document.createElement("div");
      var viewdetils = document.createElement("h3");
      viewdetils.innerHTML = "View Details";
      viewdetils.setAttribute("id", "viewdetais");
      fourdiv.append(thread1p, thread2p, viewdetils);
      fourdiv.setAttribute("id", "desdiv");
      parentdiv.append(firstdiv, fourdiv);
      section.append(parentdiv);
      document.getElementById("productcart").append(section);
    });
  }
  function facialdisplay() {
    var section = document.createElement("section");
    section.setAttribute("id", "facial");
    var head = document.createElement("h1");
    head.setAttribute("id", "heading");
    head.innerText = "Facial & cleanup";
    section.append(head);
    facial.map(function (elem, index) {
      var parentdiv = document.createElement("div");
  
      var namep = document.createElement("h3");
      namep.innerText = elem.name;
  
      var ratingp = document.createElement("p");
      ratingp.innerHTML = '<i class="fa-solid fa-star"></i> ' + elem.rating;
  
      var pricep = document.createElement("p");
      pricep.innerText = elem.price;
      var seconddiv = document.createElement("dvi");
      seconddiv.append(namep, ratingp, pricep);
      var image = document.createElement("img");
      image.setAttribute("id", "smallimage");
      var thirddiv = document.createElement("div");
  
      image.setAttribute("src", elem.image_url);
      image.setAttribute("alt", index);
      var add = document.createElement("p");
      add.innerText = "Add";
      
      add.addEventListener("click",function(){addToCart(elem);} );
      thirddiv.append(image, add);
      var firstdiv = document.createElement("div");
      firstdiv.setAttribute("id", "waxingflex");
      firstdiv.append(seconddiv, thirddiv);
      var thread1p = document.createElement("p");
      thread1p.innerText = elem.thread1;
  
      var fourdiv = document.createElement("div");
      var viewdetils = document.createElement("h3");
      viewdetils.innerHTML = "View Details";
      viewdetils.setAttribute("id", "viewdetais");
      fourdiv.append(thread1p, viewdetils);
      fourdiv.setAttribute("id", "desdiv");
      parentdiv.append(firstdiv, fourdiv);
      section.append(parentdiv);
      document.getElementById("productcart").append(section);
    });
  }
  
  function manicuredisplay() {
    var section = document.createElement("section");
    section.setAttribute("id", "manicure");
    var head = document.createElement("h1");
    head.setAttribute("id", "heading");
    head.innerText = "Menicure";
    section.append(head);
    manicure.map(function (elem, index) {
      var parentdiv = document.createElement("div");
  
      var namep = document.createElement("h3");
      namep.innerText = elem.name;
  
      var ratingp = document.createElement("p");
      ratingp.innerHTML = '<i class="fa-solid fa-star"></i> ' + elem.rating;
  
      var pricep = document.createElement("p");
      pricep.innerText = elem.price;
      var seconddiv = document.createElement("dvi");
      seconddiv.append(namep, ratingp, pricep);
      var image = document.createElement("img");
      image.setAttribute("id", "smallimage");
      var thirddiv = document.createElement("div");
  
      image.setAttribute("src", elem.image_url);
      image.setAttribute("alt", index);
      var add = document.createElement("p");
      add.innerText = "Add";
  
     
      add.addEventListener("click",function(){addToCart(elem);} );
  
      thirddiv.append(image, add);
      var firstdiv = document.createElement("div");
      firstdiv.setAttribute("id", "waxingflex");
      firstdiv.append(seconddiv, thirddiv);
      var thread1p = document.createElement("p");
      thread1p.innerText = elem.thread1;
      var fourdiv = document.createElement("div");
      var viewdetils = document.createElement("h3");
      viewdetils.innerHTML = "View Details";
      viewdetils.setAttribute("id", "viewdetais");
      fourdiv.append(thread1p,  viewdetils);
      fourdiv.setAttribute("id", "desdiv");
      parentdiv.append(firstdiv, fourdiv);
      section.append(parentdiv);
      document.getElementById("productcart").append(section);
    });
  }
  
  function pedicuredisplay() {
    var section = document.createElement("section");
    section.setAttribute("id", "pedicure");
    var head = document.createElement("h1");
    head.setAttribute("id", "heading");
    head.innerText = "Pedicure";
    section.append(head);
    pedicure.map(function (elem, index) {
      var parentdiv = document.createElement("div");
  
      var namep = document.createElement("h3");
      namep.innerText = elem.name;
  
      var ratingp = document.createElement("p");
      ratingp.innerHTML = '<i class="fa-solid fa-star"></i> ' + elem.rating;
  
      var pricep = document.createElement("p");
      pricep.innerHTML = elem.price+"&nbsp  &nbsp &nbsp &nbsp &nbsp "+ elem.time;
      var seconddiv = document.createElement("dvi");
      seconddiv.append(namep, ratingp, pricep);
      var image = document.createElement("img");
      image.setAttribute("id", "smallimage");
      var thirddiv = document.createElement("div");
  
      image.setAttribute("src", elem.image_url);
      image.setAttribute("alt", index);
      var add = document.createElement("p");
      add.innerText = "Add";
      
      add.addEventListener("click",function(){addToCart(elem)} );
      thirddiv.append(image, add);
      var firstdiv = document.createElement("div");
      firstdiv.setAttribute("id", "waxingflex");
      firstdiv.append(seconddiv, thirddiv);
      var thread1p = document.createElement("p");
      thread1p.innerText = elem.thread1;
  
  
      var fourdiv = document.createElement("div");
      var viewdetils = document.createElement("h3");
      viewdetils.innerHTML = "View Details";
      viewdetils.setAttribute("id", "viewdetais");
      fourdiv.append(thread1p,  viewdetils);
      fourdiv.setAttribute("id", "desdiv");
      parentdiv.append(firstdiv, fourdiv);
      section.append(parentdiv);
      document.getElementById("productcart").append(section);
    });
  }
  function threadingdisplay() {
    var section = document.createElement("section");
    section.setAttribute("id", "threading");
    var head = document.createElement("h1");
    head.setAttribute("id", "heading");
    head.innerText = "Threading & face wax";
    section.append(head);
    threading.map(function (elem, index) {
      var parentdiv = document.createElement("div");
  
      var namep = document.createElement("h3");
      namep.innerText = elem.name;
  
      var ratingp = document.createElement("p");
      ratingp.innerHTML = '<i class="fa-solid fa-star"></i> ' + elem.rating;
  
      var pricep = document.createElement("p");
      pricep.innerHTML = elem.price;
      var seconddiv = document.createElement("dvi");
      seconddiv.append(namep, ratingp, pricep);
      var image = document.createElement("img");
      image.setAttribute("id", "smallimage");
      var thirddiv = document.createElement("div");
  
      image.setAttribute("src", elem.image_url);
      image.setAttribute("alt", index);
      var add = document.createElement("p");
      add.innerText = "Add";
     
      add.addEventListener("click",function(){addToCart(elem);} );
      thirddiv.append(image, add);
      var firstdiv = document.createElement("div");
      firstdiv.setAttribute("id", "waxingflex");
      firstdiv.append(seconddiv, thirddiv);
      var thread1p = document.createElement("p");
      thread1p.innerText = elem.thread1;
  
  
      var fourdiv = document.createElement("div");
      var viewdetils = document.createElement("h3");
      viewdetils.innerHTML = "View Details";
      viewdetils.setAttribute("id", "viewdetais");
      fourdiv.append(thread1p,  viewdetils);
      fourdiv.setAttribute("id", "desdiv");
      parentdiv.append(firstdiv, fourdiv);
      section.append(parentdiv);
      document.getElementById("productcart").append(section);
    });
  }
  function bleachdisplay() {
    var section = document.createElement("section");
    section.setAttribute("id", "bleach");
    var head = document.createElement("h1");
    head.setAttribute("id", "heading");
    head.innerText = "Bleach & detan";
    section.append(head);
    bleach.map(function (elem, index) {
      var parentdiv = document.createElement("div");
  
      var namep = document.createElement("h3");
      namep.innerText = elem.name;
  
      var ratingp = document.createElement("p");
      ratingp.innerHTML = '<i class="fa-solid fa-star"></i> ' + elem.rating;
  
      var pricep = document.createElement("p");
      pricep.innerHTML = elem.price;
      var seconddiv = document.createElement("dvi");
      seconddiv.append(namep, ratingp, pricep);
      var image = document.createElement("img");
      image.setAttribute("id", "smallimage");
      var thirddiv = document.createElement("div");
  
      image.setAttribute("src", elem.image_url);
      image.setAttribute("alt", index);
      var add = document.createElement("p");
      add.innerText = "Add";
  
      
      add.addEventListener("click",function(){addToCart(elem);} );
      thirddiv.append(image, add);
      var firstdiv = document.createElement("div");
      firstdiv.setAttribute("id", "waxingflex");
      firstdiv.append(seconddiv, thirddiv);
      var thread1p = document.createElement("p");
      thread1p.innerText = elem.thread1;
  
  
      var fourdiv = document.createElement("div");
      var viewdetils = document.createElement("h3");
      viewdetils.innerHTML = "View Details";
      viewdetils.setAttribute("id", "viewdetais");
      fourdiv.append(thread1p,  viewdetils);
      fourdiv.setAttribute("id", "desdiv");
      parentdiv.append(firstdiv, fourdiv);
      section.append(parentdiv);
      document.getElementById("productcart").append(section);
    });
  }
  function haircolourdisplay() {
    var section = document.createElement("section");
    section.setAttribute("id", "haircolour");
    var head = document.createElement("h1");
    head.setAttribute("id", "heading");
    head.innerText = "Hair colour & care";
    section.append(head);
    hairColour.map(function (elem, index) {
      var parentdiv = document.createElement("div");
  
      var namep = document.createElement("h3");
      namep.innerText = elem.name;
  
      var ratingp = document.createElement("p");
      ratingp.innerHTML = '<i class="fa-solid fa-star"></i> ' + elem.rating;
  
      var pricep = document.createElement("p");
      pricep.innerHTML = elem.price;
      var seconddiv = document.createElement("dvi");
      seconddiv.append(namep, ratingp, pricep);
      var image = document.createElement("img");
      image.setAttribute("id", "smallimage");
      var thirddiv = document.createElement("div");
  
      image.setAttribute("src", elem.image_url);
      image.setAttribute("alt", index);
      var add = document.createElement("p");
      add.innerText = "Add";
  
  
      add.addEventListener("click",function(){addToCart(elem);} );
      thirddiv.append(image, add);
      var firstdiv = document.createElement("div");
      firstdiv.setAttribute("id", "waxingflex");
      firstdiv.append(seconddiv, thirddiv);
      var thread1p = document.createElement("p");
      thread1p.innerText = elem.thread1;
  
  
      var fourdiv = document.createElement("div");
      var viewdetils = document.createElement("h3");
      viewdetils.innerHTML = "View Details";
      viewdetils.setAttribute("id", "viewdetais");
      fourdiv.append(thread1p,  viewdetils);
      fourdiv.setAttribute("id", "desdiv");
      parentdiv.append(firstdiv, fourdiv);
      section.append(parentdiv);
      document.getElementById("productcart").append(section);
    });
  }
  
  //product scroll
  
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", navHighlighter);
  function navHighlighter() {
    let scrollY = window.pageYOffset;
    sections.forEach((current) => { 
      const sectionHeight = current.offsetHeight;
      const sectionTop =
        current.getBoundingClientRect().top + window.pageYOffset - 50;
      sectionId = current.getAttribute("id");
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector("#productfilterbar a[href*=" + sectionId + "]").classList.add("active");
      } else {
        document
          .querySelector("#productfilterbar a[href*=" + sectionId + "]").classList.remove("active");
      }
    });
  }
  
  if(total>0){
    totalprice();
  }
  function addToCart(elem){
    console.log(elem);
    cartpage.push(elem);
    var total= localStorage.getItem("totalvalue")||0;
    total=parseInt(total)+parseInt(elem.price);
    localStorage.setItem("items",JSON.stringify(cartpage));
    localStorage.setItem("totalvalue",total);
    totalprice();
  }
  
  function totalprice(){
      document.getElementById("tag").style.display="flex";
      document.getElementById("cart_button").style.display="flex";
  
     document.getElementById("sprice").innerText="₹ "+(parseInt(localStorage.getItem("totalvalue"))-50);
     document.getElementById("sprice").style.textDecoration="line-through"
    document.getElementById("total").innerText="₹ "+localStorage.getItem("totalvalue");
  }
  
  