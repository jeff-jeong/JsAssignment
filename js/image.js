const imgData = [
    { name:"Arraial do Cabo, Brazil",
      // country:"Brazil",
      images:"Arraial_do_Cabo_Brazil.jpg"
      
    },
    { name:"Barcelona, Spain",
      // country:"Spain",
      images:"Barcelona_Spain.jpg"
      
    },
    { name:"Dubai, UAE",
      // country:"UAE",
      images:"Dubai_UAE.jpg"
      
    },
    { name:"İstanbul, Turkey",
      // country:"Turkey",
      images:"İstanbul_Turkey.jpg"
      
    },
    { name:"Khwaeng Wat Arun, Thailand",
      // country:"Thailand",
      images:"Khwaeng_Wat_Arun_Thailand.jpg"
      
    },
    { name:"Mount Fuji, japan",
      // country:"japan",
      images:"Mount_Fuji_japan.jpg"
      
    },
    { name:"New York, USA",
      // country:"USA",
      images:"New_York_USA.jpg"
      
    },
    { name:"Ouarzazate, Maroc",
      // country:"Maroc",
      images:"Ouarzazate_Maroc.jpg"
      
    },
    { name:"Rome, Italy",
      // country:"Italy",
      images:"Rome_Italy.jpg"
      
    },
    { name:"Shanghai, China",
      // country:"China",
      images:"Shanghai_China.jpg"
      
    },
    { name:"Thera, Greece",
      // country:"Greece",
      images:"Thera_Greece.jpg"
      
    },
    { name:"Vancouver, Canada",
      // country:"Canada",
      images:"Vancouver_Canada.jpg"
      
    }
    
    
]

const imgs = document.getElementById("imgs");
const imgName = imgs.querySelector("div:first-child");
// const imgcountry = imgs.querySelector("div:last-child");

// let bgImage = document.createElement("img");
// bgImage.classList.add("background_size")



const todaysimgs = imgData[Math.floor(Math.random() * imgData.length)];

imgName.innerText = todaysimgs.name;
// imgcountry.innerText = todaysimgs.country;

// bgImage.src = `img/${todaysimgs.images}`;
// document.body.appendChild(bgImage);

document.body.style.backgroundImage = `url(img/${todaysimgs.images})`;