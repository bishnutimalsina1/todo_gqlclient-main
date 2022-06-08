import React from "react";
import { Item } from "../../types";
import GET_MAIN_TASKS from "../../graphql/queries/getMainTasks";
import GET_ALL from "../../graphql/queries/getAll";
import { useQuery } from "@apollo/client";
import { CssBaseline, Paper, Typography, Container } from "@mui/material";
import AddNewTask from "../AddNewTask/addnewtask.component";
import { List } from "../../types";
import Divider from "@mui/material/Divider";
import { TaskType } from "../../types";
import { ItemData } from "../../types";
import SubColumn from "../SubColumn/subcol.component";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

function Columns() {
  const { data } = useQuery(GET_ALL);
  return data ? (
    <div>
      <Container
        style={{ border: "4px solid rgba(0, 0, 0, 0.0)" }}
        component="main"
        maxWidth={false}
      >
        <Box sx={{ flexGrow: 1, mt: 1 }}>
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={9}>
              <Typography sx={{ ml: 2, mt: 4 }} variant="h4" component="h2">
                Jira Tasks
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  "& > *": {
                    m: 4,
                  },
                }}
              >
                <ButtonGroup
                  variant="outlined"
                  aria-label="outlined button group"
                >
                  <Button>
                    <ChatBubbleOutlineOutlinedIcon />
                  </Button>
                  <Button>
                    <PersonOutlineOutlinedIcon />
                  </Button>
                  <Button>
                    <HelpOutlineOutlinedIcon />
                  </Button>
                  <Button>
                    <MoreHorizOutlinedIcon />
                  </Button>
                </ButtonGroup>
              </Box>
            </Grid>
          </Grid>
          <Divider variant="middle" />
          <Grid container spacing={3} sx={{ mt: 3 }}>
            {data.a.map(({ id, name, itemDatas }: TaskType) => (
              <Grid item xs>
                <SubColumn
                  itemDatas={itemDatas}
                  title={name}
                  key={id}
                  p_id={id}
                ></SubColumn>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  ) : null;
}

export default Columns;
