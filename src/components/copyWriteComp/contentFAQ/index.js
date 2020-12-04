import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import { faqQuestion } from './constant.js';

const contentFAQ = () => {
    //const { FAQtext } = faqQuestion;
    const FAQ = [
        { key: '0', heading: 'Maecenas feugiat eu ligula vitae fermentum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { key: '1', heading: 'Maecenas feugiat eu ligula vitae fermentum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { key: '2', heading: 'Maecenas feugiat eu ligula vitae fermentum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    ]
    const FAQ2 = [
        { key: '3', heading: 'Maecenas feugiat eu ligula vitae fermentum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { key: '4', heading: 'Maecenas feugiat eu ligula vitae fermentum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { key: '5', heading: 'Maecenas feugiat eu ligula vitae fermentum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
    ]




    return (
        <div className="container FAQ">
            <div className="row no-gutters">
                <div className="col-12 title-section text-center">
                    <h2>FAQ's</h2>
                </div>
                <Accordion defaultActiveKey="0">
                    <div className="col-6">
                        {FAQ.map(items => {
                            return (
                                <Card key={items.key}>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey={items.key}>
                                            {items.heading}
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={items.key}>
                                        <Card.Body>{items.text}</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            )
                        })}
                    </div>
                    <div className="col-6">
                        {FAQ2.map(items => {
                            return (
                                <Card key={items.key}>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey={items.key}>
                                            {items.heading}
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={items.key}>
                                        <Card.Body>{items.text}</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            )
                        })}
                    </div>
                </Accordion>
            </div>
        </div>
    )
}

export default contentFAQ;