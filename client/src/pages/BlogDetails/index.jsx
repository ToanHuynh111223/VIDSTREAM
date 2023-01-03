import styles from "./BlogDetails.module.scss"
import clsx from "clsx"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Comment from "./components/Comment";
import Media from "./components/Media";
import Content from "./components/Content";
//import layout bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useEffect } from "react";

function BlogDetails() {
    const data = useAxios("http://localhost:8000/blogs", "GET");
    const { id } = useParams()
    useEffect(() => {
        window.scrollTo(0, 400)
    }, [])
    return (
        <Container>
            <Row>
                <Col xs={8} className={clsx(styles.colLeft)}>
                    {data.filter(blog => String(blog.id) === id).map((blog, index) => {
                        return (
                            <div key={index}>
                                <Content blog={blog} />
                                <Media />
                                <Comment />
                            </div>
                        )
                    })
                    }
                </Col>
                <Col xs={4} className={clsx(styles.colRight)}>
                    <h1>Search</h1>
                    <input type="text" placeholder="Search" autoComplete="search" />
                    <h1>Category</h1>
                    <ul>
                        <li>
                            <Link to="#">Awards</Link></li>
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

export default BlogDetails;