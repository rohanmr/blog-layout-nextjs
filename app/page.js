import BlogCard from "./components/BlogCard";
import styles from "./page.module.css";

export default function Home({ children }) {
  return (
    <>
      <main className={styles.main}>
        {children}
        <h1>Our Blogs</h1>
        <BlogCard />
      </main>
    </>
  );
}
