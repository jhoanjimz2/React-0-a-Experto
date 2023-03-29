import { AddOutlined } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>

      {/* <Typography variant="h6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, velit rem quia dolores provident aut ex soluta praesentium sunt quis magni odit non natus adipisci fugiat accusantium. Provident, pariatur dolorem!
      </Typography> */}

      <NothingSelectedView/>

      {/* <NoteView/> */}

      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined
          sx={{ fontSize: 30 }}
        />
      </IconButton>

    </JournalLayout>
  )
}
