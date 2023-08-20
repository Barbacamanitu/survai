import { Container,Row,Col } from "react-bootstrap";
import { Spinner } from "./Spinner";


export const Todo = ({steps, goal, group,todoLoading}) => {

    if (todoLoading) {
        return (<Spinner></Spinner>);
    }

    if (steps && goal && group && steps.length > 0) {
    return (
        <Container fluid="md">
            <Row>
                <Col >
                <h2>Todo List:</h2>
                </Col>
            </Row>
        <p>Here is a list of {steps.length} steps that will help you accomplish your goal:</p>
        <p>"{goal}"</p>
        <p>as a {group}</p>
        <ol type="1">
        {steps.map((step) => {
            return <li>{step}</li>;
        })}
        </ol>
        </Container>
    );
    } else {
        return (<></>);
    }
}