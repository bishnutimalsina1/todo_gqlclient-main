import * as React from 'react';

import { Draggable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import  GET_MAIN_TASKS  from '../../../graphql/queries/getMainTasks';

// import { makeStyles } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { ListItem } from '@mui/material';
import { ListItemAvatar } from '@mui/material';
import { ListItemText } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Item } from '../../../types';
import { List } from '../../../types';




export type DraggableListItemProps = {
  item: Item;
  index: number;
//   list: List;
};

const DraggableListItem = ({ item, index}: DraggableListItemProps) => {
    const useStyles = makeStyles({
        draggingListItem: {
            background: 'rgb(235,235,235)'
        }
    }); 

//   const { data } = useQuery(GET_MAIN_TASKS);
//   console.log(data);
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <ListItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          
        >
          <ListItemAvatar>
            <Avatar>
              {/* <p>avatar</p> */}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.primary} secondary={item.secondary} />
          {/* <ListItemText primary={item.id} secondary={list.name} /> */}
        </ListItem>
      )}
    </Draggable>
  );
};

export default DraggableListItem;
