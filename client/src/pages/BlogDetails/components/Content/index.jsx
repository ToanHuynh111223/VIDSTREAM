import styles from "../../BlogDetails.module.scss";
import clsx from "clsx";
function Content({ blog }) {
  return (
    <div className={clsx(styles.content)}>
      <h1
        style={{
          color: "#fff",
          fontSize: "3rem",
          marginBottom: "0.8rem",
          fontWeight: 700,
        }}
      >
        {blog.title}
      </h1>
      <p
        style={{
          fontFamily: "'Roboto', sans-serif",
          margin: "0.8rem 0 1.6rem",
          color: "#d1d0cf",
          fontSize: "1.8rem",
          fontWeight: 500,
        }}
      >{`${blog.day} ${blog.month}, ${blog.year}`}</p>
      <img
        src={blog.img}
        alt={blog.title}
        style={{ width: "100%", borderRadius: "0.8rem" }}
      />
      <p
        style={{
          color: "#d1d0cf",
          fontSize: "1.8rem",
          fontWeight: 500,
          margin: "4.8rem 0 1.6rem",
          lineHeight: 2,
        }}
      >
        {blog.content}
      </p>
    </div>
  );
}

export default Content;
