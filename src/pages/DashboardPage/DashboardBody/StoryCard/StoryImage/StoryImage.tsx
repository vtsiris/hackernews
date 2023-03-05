import styles from "./StoryImage.module.scss";

export default function StoryImage() {
  return (
    <img
      src={"_assets/images/hackerNews.jpeg"}
      alt="postImage"
      className={styles.image}
    />
  );
}
