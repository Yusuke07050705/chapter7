import { useState, useEffect } from "react"
import styles from "./PostDetail.module.css"
import { useParams } from "react-router-dom";
import { Post } from "../../../types/post";

export const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [ post, setPost ] = useState<Post | null>(null);
  const [ loading, setLoading ] = useState<boolean>(true);

  useEffect(() => {
    const getApi = async () => {
      const response = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`);
      const data = await response.json();
      setPost(data.post);
      setLoading(false);
    };
    getApi();
  }, [id]);

  if (loading) return <p>読み込み中です</p>;
  if (!post) return <p>記事が見つかりません</p>;

  return(
    <section className={styles.section}>
      <img className={styles.image} src={post.thumbnailUrl} alt="" />
      <div className={styles.body}>
        <div className={styles.head}>
          <p className={styles.date}>{new Date(post.createdAt).toLocaleDateString()}</p>
          <ul className={styles.category}>
            {post.categories.map((category, i) => (
              <li key={i}>{category}</li>
            ))}
          </ul>
        </div>
        <p className={styles.title}>{post.title}</p>
        <p
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </section>
  );
};