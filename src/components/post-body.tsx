import styles from "./post-body.module.css";

export default function PostBody({ content }: { content: string }) {
  return (
    <div className="max-w-2xl mx-auto break-words">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
