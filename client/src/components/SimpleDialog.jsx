import * as React from "react";
import { useSelector } from "react-redux";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Typography,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SimpleDialog({
  isDialogOpen,
  closeDialog,
  dialogText,
  confirmFunction,
}) {
  return (
    <>
      <Dialog
        open={isDialogOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <Typography variant="div" id="alert-dialog-slide-description">
            {dialogText}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Cancel</Button>
          <Button onClick={handleDelete}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
