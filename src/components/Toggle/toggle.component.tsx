import * as React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";
import { makeStyles } from "@mui/styles";
import { green } from "@mui/material/colors";
import { useMutation } from "@apollo/client";
import REMOVE_TASK from "../../graphql/mutations/removeTask";
import Remove from "../Remove/remove.component";
import Checkbox from "@mui/material/Checkbox";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FormControlLabel from "@mui/material/FormControlLabel";

const styles = (theme) => ({
  selected: {
    backgroundColor: "red",
  },
});

export default function Toggle(isDone) {
  const [selected, setSelected] = React.useState(isDone);

  return (
    <>
      <FormControlLabel
        sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
        control={<Checkbox  checked={selected.isDone} 
        icon={<CheckCircleOutlineIcon />}
        checkedIcon={<CheckCircleIcon color="success" />}/>}
        label=""
        labelPlacement="bottom"
        
      />
    </>
  );
}
