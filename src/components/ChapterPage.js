import React from 'react';
import MyNavBar from './MyNavBar';
import { Container, Row, Col } from 'react-bootstrap';

const BackIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill={props.fill} width="24" height="24" viewBox="0 0 24 24"><path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" /><path fill="none" d="M0 0h24v24H0z" /></svg>
);

const YoutubePlayer = ({ url }) => {
    return (
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>
        </div>
    );
}

class ChapterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chapter: props.chapter ? props.chapter : {},
        };
    }

    render() {
        const chapter = this.state.chapter;

        return (
            <div>
                <MyNavBar />
                <Container className="mt-3">
                    <Row>
                        <Col className="d-flex justify-content-start" >
                            {/* TODO: navigate to home page */}
                            <div onClick={() => console.log("back arrow clicked!")}><BackIcon fill="black" /></div>
                        </Col>
                    </Row>
                    <Row className="mt-1">
                        {chapter.videos &&
                            chapter.videos.map((item, index) => {
                                return (
                                    <Col key={index} className="mt-3" xs="12" md="6">
                                        <YoutubePlayer url={item.url} />
                                    </Col>
                                );
                            })}
                    </Row>
                    <Row className="mt-5">
                        <Col>
                            <h5>Hello World</h5>
                            <p>Duis ex Lorem voluptate ipsum ipsum id dolor qui velit commodo proident amet qui. Ut anim sit nostrud fugiat dolore quis. Labore culpa pariatur ex anim exercitation veniam elit ad elit duis id ipsum. Amet in consequat aute do nisi. Nisi nulla enim amet consequat do dolor esse nisi id.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default ChapterPage;