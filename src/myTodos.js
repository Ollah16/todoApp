import React, { useState } from "react"
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap"
const HandleNewTodo = ({ handleAddTodo, allTodos, handleChanges }) => {
    let [todoTitle, setTodoTitle] = useState('')
    let [todoDate, setTodoDate] = useState('')
    let [todoTime, setTodoTime] = useState('')
    let [id, setIdCounter] = useState(0)

    let [newTodoTitle, setNewTodoTitle] = useState('')
    let [newTodoDate, setNewTodoDate] = useState('')
    let [newTodoTime, setNewTodoTime] = useState('')

    const handleAddNewTodo = () => {
        const newId = id;
        setIdCounter(newId + 1);
        let newTodo = { todoTitle, todoDate, todoTime, todoDone: false, editTodo: false, id };
        if (todoTitle && todoDate && todoTime) {
            handleAddTodo(newTodo);
            setTodoTitle('')
            setTodoDate('')
            setTodoTime('')
        }
    }

    const handleTodoChanges = (type, todoId) => {
        let newTodo = { newTodoTitle, newTodoDate, newTodoTime };
        handleChanges(type, todoId, newTodo)
    }

    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Todo App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Row className="d-flex justify-content-center align-items-center">
                <Col lg={12} md={12} sm={12} xs={12}>
                    <h1 className="todo-introduction">Welcome to Your Todo List</h1>
                    <p className="todo-description">
                        Stay organized and keep track of your tasks with our easy-to-use Todo
                        application.
                    </p>
                </Col>

            </Row>

            <Row className="d-flex justify-content-center align-items-center my-2">
                <Col lg={2} md={2} sm={10} xs={10}>
                    <input
                        className="todo-input"
                        placeholder="Todo Title"
                        value={todoTitle}
                        onChange={(event) => setTodoTitle(event.target.value)}
                    />
                </Col>
                <Col lg={2} md={2} sm={10} xs={10}>
                    <input
                        className="todo-input"
                        type="date"
                        value={todoDate}
                        onChange={(event) => setTodoDate(event.target.value)}
                    />
                </Col>
                <Col lg={2} md={2} sm={10} xs={10}>
                    <input
                        className="todo-input"
                        placeholder="Todo Time"
                        type="time"
                        value={todoTime}
                        onChange={(event) => setTodoTime(event.target.value)}
                    />
                </Col>
                <Col lg={2} md={2} sm={10} xs={10}>
                    <button className="todo-button" onClick={handleAddNewTodo}>
                        Add New Todo
                    </button>
                </Col>
            </Row>


            {allTodos.length ?
                allTodos.map((todo, index) =>
                (<Row key={index} lg={3} md={4} sm={6} xs={10} className="todo-item my-2">

                    <Col lg={2} md={10} sm={10} xs={10} className="todo-col">
                        {!todo.editTodo ?
                            todo.todoTitle
                            :
                            <input value={newTodoTitle} onInput={(e) => setNewTodoTitle(e.target.value)} />
                        }
                    </Col>
                    <Col lg={2} md={10} sm={10} xs={10} className="todo-col">
                        {!todo.editTodo ?
                            todo.todoDate :
                            <input type="date" value={newTodoDate} onInput={(e) => setNewTodoDate(e.target.value)} />
                        }
                    </Col>
                    <Col lg={2} md={10} sm={10} xs={10} className="todo-col">
                        {!todo.editTodo ?
                            todo.todoTime
                            :
                            <input type="time" value={newTodoTime} onInput={(e) => setNewTodoTime(e.target.value)} />
                        }
                    </Col>

                    <Col lg={2} md={10} sm={10} xs={10} className="todo-col">
                        {!todo.editTodo && (
                            !todo.todoDone ?
                                <div className="todo-radio"><span>Mark as done</span> <input type="radio" onInput={() => handleTodoChanges('done', todo.id)} /></div>
                                :
                                <span>Todo done</span>
                        )}
                    </Col>

                    <Col lg={2} md={10} sm={10} xs={10} className="todo-col">
                        {!todo.editTodo ?

                            <button className="chnages-btn" onClick={() => handleTodoChanges('edit', todo.id)}>Edit Todo</button>
                            :
                            <button className="save-btn" onClick={() => handleTodoChanges('save', todo.id)}>Save Changes</button>
                        }
                    </Col>

                    <Col lg={2} md={10} sm={10} xs={10} className="todo-col">
                        {!todo.editTodo ?
                            <button className="chnages-btn" onClick={() => handleTodoChanges('delete', todo.id)}>Delete Todo</button>
                            :

                            <button className="cancel-btn" onClick={() => handleTodoChanges('cancel', todo.id)}>Cancel</button>
                        }
                    </Col>
                </Row>))
                : null}


            <footer >
                <Container fluid className="todo-footer">
                    <Row>
                        <Col lg={12} className="text-center">
                            <p>&copy; 2023 Todo App. All Rights Reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </Container >
    );
}
export default HandleNewTodo