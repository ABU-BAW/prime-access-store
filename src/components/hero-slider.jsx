import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Field } from "./ui/field";

const slides = [
  {
    id: 1,
    content: (
      <div className="flex h-full w-full  bg-gray-50">
       
        <div className="flex flex-1 flex-col justify-center  gap-4 lg:gap-8 px-4 lg:px-40">
          <h2 className="text-xl lg:text-3xl font-bold leading-tight text-gray-900">
           Coming soon to our store 
          </h2>
          <p className="text-sm lg:text-2xl text-gray-500">
            Custom KiyuSet A24-X
          </p>
          <button className="lg:w-60 lg:h-15 w-fit rounded-full bg-gray-900 px-5 py-2 text-lg font-medium text-white transition-opacity hover:opacity-80">
            Learn more →
          </button>
        </div>
        
        <div className="relative  w-[40%] overflow-visible p-0 lg:-p-35 ">
          <img 
            src="/hero-image.png" 
            alt="hero image"
            className="absolute top-4 lg:top-1 lg:h-65"
           />
        </div>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-foreground/95 text-center ">
        <h2 className="text-2xl font-bold leading-tight text-white lg:text-3xl">
          Join Our Community
        </h2>
        
        <p className="text-xs lg:text-xl text-white/50">
          Sign up for exclusive deals and early access to new products delivered right to your inbox
        </p>
        
        <Field orientation="horizontal" className="p-4 lg:px-12 lg:w-1/2" >
          <Input placeholder="Enter your email" className="text-white"/>
          <Button  className="border border-white">Submit</Button>
        </Field>
       
      </div>
    )
  }
];

function HeroSlider() {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]}
      opts={{ loop: true }}
      className="relative w-full overflow-hidden rounded-xl border border-neutral-200 [&>div]:h-full
      h-[25vh] lg:h-[35vh] min-h-[160] max-h-[280]"
    >
      <CarouselContent className="ml-0 h-full">
        {slides.map((slide) => (
          <CarouselItem key={slide.id} className="h-full pl-0">
            {slide.content}
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute left-3 top-1/2 z-10 -translate-y-1/2 " />
      <CarouselNext className="absolute right-3 top-1/2 z-10 -translate-y-1/2 " />
    </Carousel>
  );
}

export default HeroSlider;