import React from 'react';
import { useQuery } from '@apollo/client';
import DraggableListItem from '../TasksList/DraggableListItem/draggablelistitem.component';
import {
  DragDropContext,
  Droppable,
  OnDragEndResponder
} from 'react-beautiful-dnd';
import { Item } from '../../types';
import { List } from '../../types';
import  GET_MAIN_TASKS  from '../../graphql/queries/getMainTasks';
import  GET_ALL  from '../../graphql/queries/getAll';
// import makeStyles from '@mui/styles/makeStyles';


export type TaskListProps = {
    items: Item[];
    onDragEnd: OnDragEndResponder;
    // list: List[];
  };
  
  const TaskList = React.memo(({ items, onDragEnd }: TaskListProps) => {
    // const { loading, error, data } = useQuery(GET_MAIN_TASKS);
    const { loading, error, data } = useQuery(GET_ALL);
    console.log(data);
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable-list">
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {items.map((item, index) => (
                <DraggableListItem item={item} index={index} key={item.id} />
              ))}
              {provided.placeholder}
                {/* <p>{data.list[0]}</p> */}
                <ul>
             {/* { data.list.map((l) => (
                 <li key={l.id}>{l.name}</li>
             ))} */}
             </ul>
             {data.list[0].map(({ id, name }: List) => (
                <p>{id}</p>
      ))} 
            </div>
           
        //    <div ref={provided.innerRef} {...provided.droppableProps}>
        //    {items.map((item, index) => (
        //      <DraggableListItem item={item} index={index} key={item.id} />
        //    ))}
        //    {provided.placeholder}

        //  </div>
            
          )}
          
        </Droppable>
      </DragDropContext>
    );
  });

export default TaskList;