import React from 'react';
import { Button, Card, Modal } from 'react-bootstrap';

const LoveLangCard = ({ name, lang, handleClick }) => {
    return (
        <Card className="mt-2">
            <Card.Body >
                <small className="text-muted">{name ? name + "'s kärleksspråk" : "Ditt kärleksspråk"}</small>
                <Card.Title>{lang}</Card.Title>
                <Button className="text-primary px-0 py-0" style={{ background: "none", border: "none" }} onClick={handleClick}>Visa beskrivning</Button>
            </Card.Body>
        </Card>
    );
}

class UserView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            showModal: false,
            modalTitle: "",
            modalText: "",
        };
    }
    render() {
        const user = this.state.user;

        return (
            <div>
                <h4 className="mt-4 mb-4 text-center">Du & {user.partner ? user.partner.name : "?"}</h4>

                {user.loveLanguage &&
                    <LoveLangCard lang="Presenter" handleClick={() => this.setState({ showModal: true, modalTitle: "Presenter", modalText: "Exercitation laboris irure consectetur non proident consequat dolore. Excepteur exercitation ullamco nostrud Lorem eu qui. In consequat sint incididunt cillum veniam ex sit. Aliqua eu velit esse id aute occaecat ut laborum reprehenderit anim amet. Deserunt laborum magna incididunt labore et esse proident occaecat do nisi ullamco do nisi. Eu nostrud nulla est ipsum reprehenderit aliqua commodo excepteur deserunt tempor. Non duis dolore duis elit sunt sunt nisi duis laboris reprehenderit." })} />
                }

                {/* TODO: navigate to test screen */}
                {!user.loveLanguage && user.premium &&
                    <Card className="mt-2">
                        <Card.Body>
                            <small className="text-muted">Ditt kärleksspråk</small>
                            <p>Du har ännu inte gjort språktestet</p>
                            <Button variant="info">Gör testet nu</Button>
                        </Card.Body>
                    </Card>
                }

                <Modal size="lg" show={this.state.showModal} onHide={() => this.setState({ showModal: false })}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.modalTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.state.modalText}</Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default UserView;