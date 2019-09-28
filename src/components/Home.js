import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import MyNavBar from './MyNavBar';

const CheckIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill={props.fill} width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
);

const ChapterCard = ({ subhead, title, complete, handleCheck }) => {
    return (
        <Card className="mb-2">
            <Card.Body>
                <Row>
                    <Col xs="10">
                        <small className="text-muted">{subhead}</small>
                        <Card.Title>{title}</Card.Title>
                    </Col>
                    <Col className="d-flex justify-content-center" xs="2">
                        <div className="align-self-center" onClick={handleCheck}><CheckIcon fill={complete ? "green" : "grey"} /></div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

var chapters = [{ id: "0", subhead: "Avsnitt 1", title: "Hello World", complete: false },
{ id: "1", subhead: "Avsnitt 2", title: "The Witcher", complete: true },
{ id: "3", subhead: "Avsnitt 3", title: "Minions", complete: true },];

function Home() {
    return (
        <div>
            <MyNavBar />
            <Container className="mt-3">
                {chapters.map((item, index) => {
                    return (
                        /* TODO: navigate to chapter page */
                        <ChapterCard
                            key={item.id}
                            subhead={item.subhead}
                            title={item.title}
                            complete={item.complete}
                            handleCheck={() => console.log(item.title + " checked!")} />
                    );
                })}
            </Container>
        </div>
    );
}

export default Home;
