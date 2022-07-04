import React from "react";
import Tasks from "./Tasks";
import "./App.css";
import { Button, Checkbox, Paper, TextField } from "@material-ui/core";

class App extends Tasks {
  state = {
    tasks: [],
    currentTask: "",
  };
  render() {
    const { tasks } = this.state;
    console.log(tasks);
    return (
      <div className="App flex">
        <Paper elevation={5} className="container">
          <div className="heading">Gentle Remainder</div>
          <form
            onSubmit={this.handleSubmit}
            className="flex"
            style={{ margin: "15px 0" }}
          >
            <TextField
              variant="outlined"
              size="large"
              style={{ width: "70%" }}
              value={this.state.currentTask}
              required={true}
              onChange={this.handleChange}
              placeholder="What else you want to procrastinate about?"
            ></TextField>
            <Button
              style={{ height: "55px", margin: "5px", padding: "5px" }}
              color="secondary"
              variant="contained"
              type="submit"
            >
              Add to bucket
            </Button>
          </form>
          <div>
            {tasks.map((task) => (
              <Paper key={task._id} className="flex task-container">
                <Checkbox
                  checked={task.done}
                  onClick={() => this.handleUpdate(task._id)}
                  color="primary"
                ></Checkbox>
                <div className="task line-through">{task.task}</div>
                <Button onClick={() => this.handleDelete(task._id)}>
                  Delete
                </Button>
              </Paper>
            ))}
          </div>
        </Paper>
      </div>
    );
  }
}
export default App;
