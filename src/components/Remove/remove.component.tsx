import * as React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';
import { makeStyles } from '@mui/styles';
import { green } from '@mui/material/colors';
import { useMutation } from '@apollo/client';
import  REMOVE_TASK  from '../../graphql/mutations/removeTask';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import  GET_ALL  from '../../graphql/queries/getAll';
import { pink } from '@mui/material/colors';
const styles = theme => ({
    selected: {
      backgroundColor: "red"
    }
  });

export default function Remove(key, parent_id, id) {
  const [selected, setSelected] = React.useState(false);
  const [removeTodo, {data}] = useMutation(REMOVE_TASK, {
    // To rerender after POST to gql
    refetchQueries: () => [{
      query: GET_ALL,
    }]
  });

  return (
    <RemoveCircleOutlineIcon sx={{ color: pink[500], fontSize: 26, mt:1.2 }}
        onClick={() => {
            removeTodo({
            variables: {
              id: key.id,
              list_id: key.parent_id
            }
          });
        }}
      />
 
  );
}
