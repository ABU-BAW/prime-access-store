import { Headset, Package, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";

function Hero() {
  
  return (
    <section className="h-[45vh] bg-muted">
      <div
        className="relative h-[30vh] w-full bg-cover bg-center"
        style={{backgroundImage: "url('/workstation.jpg')"}}
      >
        <div className="absolute bg-black/50 inset-0"></div>
        <div className="relative z-10 flex h-full flex-col justify-start p-8">
          <h1 className="text-lg font-bold tracking-normal text-white lg:text-xl">Elevate Your Workstation</h1>
          <p className="text-sm lg:text-lg text-white/80">Discover premium electronic  accessories that give your work life a lift</p>
          <div className="flex gap-2 mt-2">
            <Button className="h-[80%] lg:h-full text-white tracking-tight">Shop →</Button>
            <Button className="h-[80%] lg:h-full  text-white tracking-tight">Learn more</Button>
          </div>
        </div>
      </div>
      <div className="flex gap-2 p-4 lg:justify-around lg:border">
        <div className="flex flex-col items-center text-center gap-1.5 bg-white rounded-lg p-2.5 lg:w-60">
          <Headset />
          <span className="text-[10px] font-bold leading-tight">24/7 Support</span>
          <span className="text-[9px]  text-foreground/50 leading-tight">Dedicated customer service</span>
        </div>
        <div className="flex flex-col items-center text-center gap-1.5 bg-white rounded-lg p-2.5 lg:w-60">
          <ShieldCheck />
          <span className="text-[10px] font-bold leading-tight">Secure Payment</span>
          <span className="text-[9px]  text-foreground/50 leading-tight">100% secure transactions</span>
        </div>
        <div className="flex flex-col items-center text-center gap-1.5 bg-white rounded-lg p-2.5 lg:w-60">
          <Package />
          <span className="text-[10px] font-bold leading-tight">Easy Returns</span>
          <span className="text-[9px]  text-foreground/50 leading-tight">30 day return policy</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;