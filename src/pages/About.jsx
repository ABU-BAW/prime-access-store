


function About() {
    return ( 
        <div className=" self-center ">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" className="h-12 w-auto" alt="Prime Access GH Logo" />
              <span className="text-2xl font-bold">Prime Access GH</span>
            </div>
            
            <p className="text-foreground/70 leading-relaxed max-w-sm">
              Premium tech accessories and electronics for professionals. 
              Quality products with exceptional service and warranty support 
              for all your computing needs.
            </p>
          </div>
     );
}

export default About;