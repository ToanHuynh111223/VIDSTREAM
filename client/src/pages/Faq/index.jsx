import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./Faq.module.scss";
import clsx from "clsx";
import { useState, useEffect } from "react";
const faq = [
  {
    question: "What contrary to popular belief lorem ipsum ?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  {
    question: "What contrary to popular belief lorem ipsum ?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  {
    question: "What contrary to popular belief lorem ipsum ?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  {
    question: "What contrary to popular belief lorem ipsum ?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
];
function Faq() {
  const [isShow, setIsShow] = useState(false);
  const [listFaq, setListFaq] = useState([]);
  useEffect(() => {
    setListFaq(document.querySelectorAll(".Faq_answer__cQInN"));
  }, [isShow]);
  const onClickShowAnswer = (index) => {
    if (listFaq[index].className === "Faq_answer__cQInN Faq_show__seI8q") {
      listFaq[index].className = clsx(styles.answer);
    } else listFaq[index].className = clsx(styles.answer, styles.show);
    setIsShow(!isShow);
  };
  return (
    <div style={{ padding: "0 1.5rem", margin: "0 8.1rem" }}>
      {faq.map((item, index) => {
        return (
          <div
            onClick={() => onClickShowAnswer(index)}
            key={index}
            style={{
              marginBottom: "2.4rem",
              backgroundColor: "#000",
              padding: "1.2rem 2rem",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#fff",
                padding: "1rem 3rem",
              }}
            >
              <h2 style={{ fontSize: "1.8rem", fontWeight: 500 }}>
                {item.question}
              </h2>
              <KeyboardArrowDownIcon fontSize="large" />
            </div>
            <div className={clsx(styles.answer)}>{item.answer}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Faq;
