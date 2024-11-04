import styles from './SearchBar.module.css'

function SearchBar() {
  return (
    <div className={styles.container}>
        <div>
            <input placeholder='Inter min-price'></input>
            <input placeholder='Inter max-price'></input>
            <button>Search</button>
        </div>
    </div>
  )
}

export default SearchBar