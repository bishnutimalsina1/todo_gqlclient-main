import * as React from "react";
import CheckIcon from "@mui/icons-material/Check";
import SendIcon from "@mui/icons-material/Send";
import ToggleButton from "@mui/material/ToggleButton";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { green } from "@mui/material/colors";
import { blue } from "@mui/material/colors";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useMutation } from "@apollo/client";
import UPDATE_TASK from "../../graphql/mutations/updateTask";

import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import GET_ALL from "../../graphql/queries/getAll";
import { pink } from "@mui/material/colors";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const style = {
  position: "absolute" as "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Update(
  key,
  parent_id,
  id,
  isDone,
  title,
  description,
  toggle,
  vote
) {
  // modal open/close logic
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Field states
  const [Title, setTitle] = React.useState(key.title);
  const [Description, setDescription] = React.useState(key.description);
  const [Id, setId] = React.useState(key.id);
  const [list_id, setListid] = React.useState(key.id);
  const [IsDone, setIsdone] = React.useState(key.isDone);

  // button selected & mutation refetch
  const [selected, setSelected] = React.useState(false);
  const handleChange = (event) => {
    setIsdone(event.target.checked);
    key.toggle(event.target.checked);
    
  };
  const [updateTodo, { data }] = useMutation(UPDATE_TASK, {
    // To rerender after POST to gql
    refetchQueries: () => [
      {
        query: GET_ALL,
      },
    ],
  });

  return (
    <>
      <EditIcon
        sx={{ color: blue, fontSize: 25, m: 1.3 }}
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ mb: 3 }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Edit task details
          </Typography>
          <TextField
            sx={{ m: 1 }}
            required
            id="outlined-required"
            label="Task Name"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            sx={{ m: 1 }}
            required
            id="outlined-required"
            label="Jira #"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <FormGroup>
            <FormControlLabel
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
              control={
                <Checkbox
                  color="success"
                  checked={IsDone}
                  onChange={handleChange}
                />
              }
              label="Completed"
              labelPlacement="bottom"
            />
          </FormGroup>

          <Button
            sx={{ m: 1 }}
            onClick={() => {
              updateTodo({
                variables: {
                  id: key.id,
                  list_id: key.parent_id,
                  title: Title,
                  description: Description,
                  isDone: IsDone,
                },
              });
              
              handleClose();
            }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Save
          </Button>
        </Box>
      </Modal>
    </>
  );
}
