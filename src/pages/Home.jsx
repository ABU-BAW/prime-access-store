import Hero from "../components/Hero"
import HeroSlider from "../components/hero-slider"
import Featured from "../components/Featured"
import Category from "../components/Category"


function Home() { 

    const featured = [
        {name : "ring light xe", id : 1, price : 450, category: "ring-lights", image : "/fringlight.jpg"},
        {name : "pen drive 2tb", id : 2, price : 350, category: "storage-device",image : "/usb.jpg"},
        {name : "lenovo laptop charger", id : 3, price : 120, category: "laptop-chargers",image : "/lct.jpg"},
        {name : "apple serie-c cord", id : 4, price : 90, category: "data-cables",image : "/cd.jpg"}
]


    return ( 
        <>
            <Hero/>
            <section>
                <Category/>
                <Featured featured={featured} />
            </section>
            <HeroSlider />
        </>
     );
}

export default Home;