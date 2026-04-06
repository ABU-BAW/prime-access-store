import Hero from "../components/Hero"
import HeroSlider from "../components/hero-slider"
import Listing from "../components/Listings"
import Category from "../components/Category"



function Home() {

    const products = [
        {name : "ring light xe", id : 1, price : 450},
        {name : "pen drive 2tb", id : 2, price : 350},
        {name : "lenovo laptop charger", id : 3, price : 120},
        {name : "apple serie-c cord", id : 4, price : 90},
        {name : "1.8m charging chord", id : 5, price : 12},
        {name : "thinkpad laptop battery", id : 6, price : 65},
        {name : "amazon home smart 4", id : 7, price : 200},
        {name : "logitech mouse", id : 8, price : 100},
    ]


    return ( 
        <>
            <Hero/>
            <section className="bg-background">
                <Category/>
                <Listing products={products} />
            </section>
            <HeroSlider />
        </>
     );
}

export default Home;