import styles from "./DashboardHeader.module.scss";

interface IDashboardHeaderProps {
  setSortNews: (arg: boolean) => void;
}

export default function DashboardHeader({
  setSortNews,
}: IDashboardHeaderProps) {
  return (
    <div className={styles.headerContainer}>
      <span>The Hacker NewsRoom</span>
      <span onClick={() => setSortNews(true)}>Sort ascending</span>
    </div>
  );
}
