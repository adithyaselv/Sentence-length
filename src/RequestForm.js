import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner'

class RequestForm extends Component {

    state = {
        bookUrl: 'https://www.gutenberg.org/files/46/46-0.txt',
        loading: false,
        progressActive: false,
        currentProgress: 0,
        result: false,
        resultText: null,
    }

    urlOnChange = (event) => {
        this.setState({
            bookUrl: event.target.value,
            loading: false,
            result: false,
            resultText: null,
        })
    }

    handleFormSubmit = () => {

        this.setState({
            loading:true
        })

        const params = {bookUrl: this.state.bookUrl}

        axios.get("https://us-central1-vocal-pad-109004.cloudfunctions.net/sentence-histogram", {params})
            .then(res => {
                this.setState({
                    loading: false,
                    result: true,
                    resultText: res.data,
                })
            })
            .catch(err => {
                this.setState({
                    loading:false
                })
                alert("Fetch failed")
            })
    }

    render() {

        const handleJumbotron = () => {
            if (this.state.result) {
                return (
                    <Jumbotron fluid>
                        <Container>
                            <h4>Histogram Result: </h4>
                            <h6>Histogram graph: </h6>
                            <Image src={this.state.resultText.hist_image} fluid />
                            <h6>Word count per sentence data</h6>
                            <p>
                                {JSON.stringify(this.state.resultText.hist_data, null, 2)}
                            </p>
                        </Container>
                    </Jumbotron>
                )
            }
            else {
                return null;
            }
        };

        const handleLoading = () => {
            if (this.state.loading) {
                return (
                    <Jumbotron fluid>
                        <Container>
                            <h4>Fetching Results</h4>
                            <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                            </Spinner>
                        </Container>
                    </Jumbotron>
                )
            }
            else {
                return null;
            }
        }

        return (
            <Form >
                <Form.Group >
                    <Form.Label>Book URL</Form.Label>
                    <Form.Control id="bookUrl" placeholder="https://www.gutenberg.org/files/46/46-0.txt" onChange={this.urlOnChange} />
                    <Form.Text className="text-muted">
                        Enter URL containing text version of the book to find histogram 
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Button variant="primary" onClick={this.handleFormSubmit}> Fetch Results </Button>
                </Form.Group>
                <Form.Group>
                    {handleLoading()}
                </Form.Group>
                <Form.Group>
                    {handleJumbotron()}
                </Form.Group>
            </Form>
        );
    }
}

export default RequestForm;