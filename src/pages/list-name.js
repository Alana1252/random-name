import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Container, Stack } from "@mui/system";
import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

export default function ListNamePage() {
  const [listName, setListName] = useState([{ name: "Rio Chandra" }, { name: "Alan Kamesta Ginting" }, { name: "M Reza Pahlevi" }, { name: "John Charlos" }]);

  const [inputName, setinputName] = useState("");

  function addListName() {
    const prev = [...listName];
    prev.push({
      name: inputName,
    });
    setListName(prev);
  }
  function editListname(index) {}

  function deleteListname(index) {
    const prev = [...listName];
    prev.splice(index, 1);
    setListName(prev);
  }

  function OnEnterForm() {}

  return (
    <Container>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Stack direction="row" spacing={3}>
            <TextField id="outlined-helperText" placeholder="nama baru..." size="small" value={inputName} onChange={(e) => setinputName(e.target.value)} onKeyDown={(e) => OnEnterForm} />
            <Button size="small" variant="contained" onClick={() => addListName()}>
              Tambah
            </Button>
          </Stack>
          <List>
            {listName.map((item, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  <Stack direction="row" spacing={2}>
                    <IconButton edge="end" aria-label="edit" onClick={() => editListname(index)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={() => deleteListname(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                }
              >
                <ListItemText primary={`${index + 1}. ${item.name}`} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
}
