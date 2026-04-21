import Hero from "../components/Hero"
import HeroSlider from "../components/hero-slider"
import Featured from "../components/Featured"
import Category from "../components/Category"



function Home() { 

    return ( 
        <>
            <Hero/>
            <section>
                <Category/>
                <Featured/>
            </section>
            <HeroSlider />
        </>
     );
}

export default Home;