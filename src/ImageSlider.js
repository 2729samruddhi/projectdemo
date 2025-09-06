import { useEffect, useState } from "react"

const data = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrKkSzGhr197YNDzlfW4xnET4lyiN6Pku7zg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsru95BPiuzSuio2iWyhWKrAJl53cbyn47uw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYM6nM9sGo-PnL90X4y6_qG59cqnqiEhngw&s",
    "https://marketplace.canva.com/EAFekpb5NK0/1/0/1600w/canva-dark-modern-photo-mountain-and-sky-desktop-wallpaper-5ixgVU5XGxc.jpg",
    "https://i.pinimg.com/736x/a2/fe/21/a2fe21da9ce7d1698f5b48cdb506c853.jpg"
]

export const ImageSlider = ()=>{
    const[activeImageIndex,setActiveImageIndex] = useState(0)
    //handlePreviousclick: If activeImageIndex is 0, go to the last image (data.length - 1).Otherwise, move one step back.
    const handlePreviousClick = ()=>{
         setActiveImageIndex(!activeImageIndex ? data.length-1 : activeImageIndex-1)
    }
    //handleNextClick: Increases activeImageIndex by 1.% data.length ensures it wraps around (so after last image, it goes back to 0).
    const handleNextClick = ()=>{
         setActiveImageIndex((activeImageIndex + 1)% data.length)
    }

    useEffect(()=>{
       const timer =  setTimeout(()=>{
           handleNextClick()
        },5000);

        return ()=>{
            clearTimeout(timer)
        }
    },[activeImageIndex])
   return(
    <div className="flex justify-center mt-10">
        <button className="p-4 m-10 font-bold" onClick={handlePreviousClick}>previous</button>
        {/* {data.map(...)}: Loops through all images.Only shows the one that matches activeImageIndex (block).Hides all others (hidden).*/}
        {data.map((url,i)=>(
        <img src={url}
         key={url}
         alt="wallpaper" 
         className={`w-[700px] h-[400px] object-contain ${activeImageIndex === i? "block":"hidden"}`}/>
        ))}
        
        <button className="p-4 m-10 font-bold"onClick={handleNextClick}>next</button>
    </div>
   )
}