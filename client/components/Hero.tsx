import styles from "@/styles/style";
import Image from "next/image";

const Hero: React.FC = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

    <div className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 relative`}>
      {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
    </div>

    <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`} >

      <h1 className="logo-1">
          COLLAR <br className="sm:block hidden" />{" "}
      </h1>

      <h2>Cartel</h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        THE WORLD'S MOST EXCLUSIVE<br/>
        MEMBERS ONLY PET SOCIAL CLUB
      </p>

    </div>

  </section>
);

export default Hero;