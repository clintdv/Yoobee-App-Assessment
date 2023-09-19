// Clint's 
function Brands() {

    const Logos = [
      "/chanel-logo.jpg",
      "/bulgari-logo.jpg",
      "/dior-logo.jpg",
      "/lv-logo.jpg",
      "/valentino-logo.png",
      "/versace-logo.jpg",
    ];
  return (
    <div className="flex flex-col md:flex-row justify-center items-center my-16">
        {Logos.map((logo, key) => (
            <div key={key} className="mx-10">
            <img src={logo} className="h-[100px] w-[100px]" alt="" />
            </div>
        ))}
    </div>
  )
}

export default Brands