import useAxios from "../../hooks/useAxios";
import styles from "./Blog.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

//import layout bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
function Blog() {
  const data = useAxios("http://localhost:8000/blogs", "GET");
  return (
    <Container>
      <Row>
        <Col
          sm={12}
          xs={12}
          lg={8}
          xl={8}
          md={8}
          className={clsx(styles.colLeft)}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            <SwiperSlide>
              <Row>
                {data.map((blog, index) => {
                  return (
                    blog.id <= 6 && (
                      <Col sm={12} xs={12} lg={6} xl={6} md={6} key={index}>
                        <div className={clsx(styles.blogSingle)}>
                          <Link to={`/blog-details/${blog.id}`}>
                            <img src={blog.img} alt={blog.title}></img>
                          </Link>
                          <div className={clsx(styles.blogContent)}>
                            <Link to={`/blog-details/${blog.id}`}>
                              <h1>{blog.title}</h1>
                            </Link>
                            <p
                              className={clsx(styles.duration)}
                            >{`${blog.day} ${blog.month}, ${blog.year}`}</p>
                            <p className={clsx(styles.introduction)}>
                              {blog.introduction}
                            </p>
                          </div>
                        </div>
                      </Col>
                    )
                  );
                })}
              </Row>
            </SwiperSlide>
            <SwiperSlide>
              <Row>
                {data.map((blog, index) => {
                  return (
                    blog.id >= 7 && (
                      <Col sm={12} xs={12} lg={6} xl={6} md={6} key={index}>
                        <div className={clsx(styles.blogSingle)}>
                          <Link to={`/blog-details/${blog.id}`}>
                            <img src={blog.img} alt={blog.title}></img>
                          </Link>
                          <div className={clsx(styles.blogContent)}>
                            <Link to={`/blog-details/${blog.id}`}>
                              <h1>{blog.title}</h1>
                            </Link>
                            <p
                              className={clsx(styles.duration)}
                            >{`${blog.day} ${blog.month}, ${blog.year}`}</p>
                            <p className={clsx(styles.introduction)}>
                              {blog.introduction}
                            </p>
                          </div>
                        </div>
                      </Col>
                    )
                  );
                })}
              </Row>
            </SwiperSlide>
          </Swiper>
        </Col>
        <Col
          sm={12}
          xs={12}
          lg={4}
          xl={4}
          md={4}
          className={clsx(styles.colRight)}
        >
          <h1>Search</h1>
          <input type="text" placeholder="Search" autoComplete="search" />
          <h1>Category</h1>
          <ul>
            <li>
              <Link to="#">Awards</Link>
            </li>
            <li>
              <Link to="#">Box Office</Link>
            </li>
            <li>
              <Link to="#">Flims Review</Link>
            </li>
            <li>
              <Link to="#">Global</Link>
            </li>
            <li>
              <Link to="#">News</Link>
            </li>
          </ul>
          <h1>Tags</h1>
          <div className={clsx(styles.tags)}>
            <Link to="#">Film</Link>
            <Link to="#">King</Link>
            <Link to="#">Beauty</Link>
            <Link to="#">Fast & Furious</Link>
            <Link to="#">New</Link>
            <Link to="#">Action</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Blog;
