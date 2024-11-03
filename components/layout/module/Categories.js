import Sedan from "@/components/icons/Sedan"
import styles from "./Categories.module.css"
import Suv from "@/components/icons/Suv"
import Hatchback from "@/components/icons/Hatchback"
import Sport from "@/components/icons/Sport"
function Categories() {
  return (
    <div className={styles.container}>
    <div>
      <p>Sedan</p>
      <Sedan />
    </div>
    <div>
      <p>SUV</p>
      <Suv />
    </div>
    <div>
      <p>Hatchback</p>
      <Hatchback />
    </div>
    <div>
      <p>Sport cars</p>
      <Sport />
    </div>
</div>
  )
}

export default Categories