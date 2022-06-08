import React from "react";
import { Item } from "../../types";
import GET_MAIN_TASKS from "../../graphql/queries/getMainTasks";
import GET_ALL from "../../graphql/queries/getAll";
import { useQuery } from "@apollo/client";
import { CssBaseline, Paper, Typography, Container } from "@mui/material";
import AddNewTask from "../AddNewTask/addnewtask.component";
import { List } from "../../types";
import { TaskType } from "../../types";
import Toggle from "../Toggle/toggle.component";
import Button from "@mui/material/Button";
import { ItemData } from "../../types";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CloseIcon from "@mui/icons-material/Close";
import Remove from "../Remove/remove.component";
import Removelist from "../RemoveList/removelist.component";

import Update from "../UpdateTask/update.component";

import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export type DraggableListItemProps = {
  ids: number;
  itemDatas: ItemData[];
  title: string;
  description: string;
};

function SubColumn({ itemDatas, title, key, p_id }) {
  const { data } = useQuery(GET_MAIN_TASKS);
  // Lifting state up, to rerender sibling component
  const [d_data, Updated_data] = useState(data);
  function handleOnDragEnd(result) {
    // if (!result.destination) return;

    // const items = Array.from(data);
    // const [reorderedItem] = items.splice(result.source.index, 1);
    // items.splice(result.destination.index, 0, reorderedItem);
    // Updated_data(items);
  }
  return data ? (
    <div>
      <Container style={{}} component="main" maxWidth="sm">
        <Box
          sx={{
            typography: "subtitle2",
            fontFamily: "default",
            fontSize: "h6.fontSize",
            mb: 2,
          }}
        >
          {title}
        </Box>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="itemDatas">
            {(provided) => (
              <Stack
                spacing={2}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {itemDatas.map(
                  ({ id, title, isDone, description }: ItemData, index) => (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <Card
                          variant="outlined"
                          sx={{
                            minWidth: 195,
                            maxHeight: 90,
                            margin: 0,
                            padding: 0,
                            borderColor: "primary.main",
                          }}
                          style={{ backgroundColor: "#fbfcff" }}
                          ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                        >
                          <CardContent >
                            <Grid container spacing={0}>
                              <Grid item xs={6}>
                                <Typography variant="body2">{title}</Typography>
                                <Typography
                                  sx={{ mb: 0 }}
                                  color="text.secondary"
                                >
                                  {description}
                                </Typography>
                              </Grid>
                              <Grid item xs={4} sx={{ mr: 1 }}>
                                <ToggleButtonGroup
                                  exclusive
                                  aria-label="text alignment"
                                >
                                  <Toggle isDone={isDone} />
                                  <Update
                                    parent_id={p_id}
                                    key={id}
                                    id={id}
                                    title={title}
                                    description={description}
                                    isDone={isDone}
                                  />
                                  <Remove parent_id={p_id} key={id} id={id} />
                                </ToggleButtonGroup>
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Card>
                      )}
                    </Draggable>
                  )
                )}
                {provided.placeholder}
              </Stack>
            )}
          </Droppable>
        </DragDropContext>
        <AddNewTask parent_id={p_id} />
      </Container>
    </div>
  ) : null;
}

export default SubColumn;
