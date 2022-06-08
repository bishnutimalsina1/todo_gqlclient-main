import * as React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';
import { makeStyles } from '@mui/styles';
import { green } from '@mui/material/colors';
import { useMutation } from '@apollo/client';
import  REMOVE_TASK  from '../../graphql/mutations/removeTask';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import  REMOVE_LIST  from '../../graphql/mutations/removeList';
import { pink } from '@mui/material/colors';
import  GET_ALL  from '../../graphql/queries/getAll';

const styles = theme => ({
    selected: {
      backgroundColor: "red"
    }
  });

export default function Removelist(key, parent_id, id) {
  const [removeList, {data}] = useMutation(REMOVE_LIST, {
    // To rerender after POST to gql
    refetchQueries: () => [{
      query: GET_ALL,
    }]
  });

  return (
    <DeleteOutlineIcon sx={{ color: pink[500], fontSize: 25, ml:2 }}
        onClick={() => {
            removeList({
            variables: {
              list_id: key.parent_id
            }
          });
        }}
      />
 
  );
}
