import styles from "@/styles/style";
import { Hero } from "@/components"

export default function Home() {
  return (
    <>
      <div className="w-full overflow-hidden">
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
      </div>
    </>
  );
}