import React, { useReducer, useState } from "react";
import { Button, Form, Container, Row, Col, ListGroup, InputGroup } from "react-bootstrap";

function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, name: action.name } : item
        ),
      };
    default:
      return state;
  }
}

const initialState = {
  items: [],
};

function ItemList() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [newItemName, setNewItemName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [sortType, setSortType] = useState("none");

  const handleAddItem = () => {
    if (newItemName.trim()) {
      const newItem = { id: Date.now(), name: newItemName.trim() };
      dispatch({ type: "ADD_ITEM", item: newItem });
      setNewItemName("");
    }
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const startEditing = (id, name) => {
    setEditId(id);
    setEditName(name);
  };

  const saveEdit = (id) => {
    if (editName.trim()) {
      dispatch({ type: "EDIT_ITEM", id, name: editName.trim() });
      setEditId(null);
      setEditName("");
    }
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditName("");
  };

  const sortItems = (items) => {
    if (sortType === "alphabetical") {
      return [...items].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === "created") {
      return [...items].sort((a, b) => a.id - b.id);
    }
    return items;
  };

  const filteredItems = state.items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedItems = sortItems(filteredItems);

  return (
    <Container className="mt-4">
      <Row>
        <Col md={8} lg={6} className="mx-auto">
          <Form>
            <Form.Group controlId="formItem" className="mb-3">
              <Form.Label>Enter Item:</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  placeholder="Enter item name"
                />
                <Button variant="primary" onClick={handleAddItem}>
                  Add Item
                </Button>
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="formSearch" className="mb-3">
              <Form.Label>Search Items:</Form.Label>
              <Form.Control
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search items"
              />
            </Form.Group>
          </Form>

          <div className="d-flex justify-content-between mb-3">
            <Button
              variant={sortType === "alphabetical" ? "primary" : "outline-primary"}
              onClick={() => setSortType("alphabetical")}
            >
              Sort Alphabetically
            </Button>
            <Button
              variant={sortType === "created" ? "primary" : "outline-primary"}
              onClick={() => setSortType("created")}
            >
              Sort by Creation
            </Button>
          </div>

          <h3 className="mt-4">Item List:</h3>
          {displayedItems.length === 0 ? (
            <p>No items found.</p>
          ) : (
            <ListGroup>
              {displayedItems.map((item) => (
                <ListGroup.Item
                  key={item.id}
                  className="d-flex justify-content-between align-items-center"
                >
                  {editId === item.id ? (
                    <InputGroup>
                      <Form.Control
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                      />
                      <Button variant="success" onClick={() => saveEdit(item.id)}>
                        Save
                      </Button>
                      <Button variant="secondary" onClick={cancelEdit}>
                        Cancel
                      </Button>
                    </InputGroup>
                  ) : (
                    <>
                      <span>{item.name}</span>
                      <div>
                        <Button
                          variant="warning"
                          className="me-2"
                          onClick={() => startEditing(item.id, item.name)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </>
                  )}
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default ItemList;