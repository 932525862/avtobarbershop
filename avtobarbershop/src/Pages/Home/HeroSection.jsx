export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Salom ! Hurmatliy mijoz.</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Avto Barber</span>{" "}
            <br />
            Shop
          </h1>
          <p className="hero--section-description">
            Web sayitga hushkelibsiz.Siz bu web sayit orqaliy xizmatlarimiz haqida malumot olishingiz va xizmatlarimizga  
            <br />  buyurtma berishingiz mumkin.
          </p>
        </div>
		<a href="https://www.instagram.com/avto_barbershop?igsh=MWFvcmdyaWR1MzJuMQ==1" ><button className="btn btn-primary">Instagram</button></a>
        
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
