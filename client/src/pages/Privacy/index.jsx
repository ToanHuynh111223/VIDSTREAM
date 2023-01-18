import clsx from "clsx";
import styles from "./Privacy.module.scss";
function Privacy() {
  return (
    <div className={clsx(styles.privacy)}>
      <div className={clsx(styles.wrapper)}>
        <h1>Contrary to popular belief</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet.
        </p>
      </div>
      <div className={clsx(styles.wrapper)}>
        <h1>The majority have suffered</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet.
        </p>
      </div>
      <div className={clsx(styles.wrapper)}>
        <h1>Many variations of passages</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet.
        </p>
      </div>
      <div className={clsx(styles.wrapper)}>
        <h1>Anything embarrassing hidden</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet.
        </p>
        <ul className={clsx(styles.list)}>
          <li>Here variations of passages</li>
          <li>It is a long established fact that a reader</li>
          <li>To make a type specimen book</li>
          <li>Sed ut perspiciatis unde omnis iste natus</li>
          <li>Qui ratione voluptatem sequi nesciunt</li>
          <li>Neque porro quisquam qui dolorem ipsum quias</li>
        </ul>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          <a href="https://help.netflix.com/legal/privacy">
            example@domain.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default Privacy;
