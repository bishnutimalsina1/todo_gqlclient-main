import React from 'react';
import { makeStyles } from '@mui/styles';
import { useMutation } from '@apollo/client';
import CREATE_TASK from '../../graphql/mutations/createTask';
import { useState } from 'react';
import { gql, ApolloCache, NormalizedCacheObject } from '@apollo/client';
import { Fab, Grid, Paper, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import  GET_ALL  from '../../graphql/queries/getAll';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AddTaskIcon from '@mui/icons-material/AddTask';
import IconButton from '@mui/material/IconButton';

const useStyles = makeStyles(() => ({
  input: {
    width: '100%',
    cursor: 'text',
    '& input': {
      height: 25,
    },
  },
}));



function AddNewTask(parent_id) {
  // const navigate = useNavigate();
  const classes = useStyles();
  const [addTodo] = useMutation(CREATE_TASK);
  const [task, setTask] = useState("");
  const [jira, setJira] = useState("");
  const [createTask] = useMutation(CREATE_TASK, {
    // To rerender after POST to gql
    refetchQueries: () => [{
      query: GET_ALL,
    }]
  });


  // mutation  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const element = e.target as HTMLInputElement;
    const title = element.value;
    
    if (e.key == "Enter" && title !== '') {
      createTask({ variables: { title, parent_id } });
      element.value = '';

    }
  };


  return (


      <Grid container spacing={3} alignItems="flex-end">
        <Grid item xs={8}>
        <TextField
        id="standard-basic" label="Add task" variant="standard"
        placeholder="add a Todo"
        onChange={e => setTask(e.target.value)}
        value={task}
        margin="dense"
      />
        </Grid>
        <Grid item xs={2} >
        <TextField margin="dense" sx={{width:50}} id="outlined-basic" label="Jira #" variant="standard" value={jira} onChange={e => setJira(e.target.value)} />
        </Grid>
        <Grid item xs={2} >

      <IconButton color="primary" aria-label="add to list">
        <AddTaskIcon onClick={() => {
          setTask("");
          setJira("");
          createTask({
            variables: {
              title: task,
              parent_id: parent_id.parent_id,
              description: jira
            }
          });
        }} />
      </IconButton>
        </Grid>

      </Grid>
    
  

    

    
  );
}

export default AddNewTask;
