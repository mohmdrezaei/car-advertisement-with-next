import { useRouter } from "next/router";
import Back from "../icons/Back";
import styles from "./CarsList.module.css";
import Card from "../layout/module/Card";

function CarsList({ data }) {
  const router = useRouter();
  console.log(data)
  const backHandler = () => {
    router.back();
  };
  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={backHandler}>
        <Back />
        <p>back</p>
      </div>
      <div className={styles.cards}>
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default CarsList;
