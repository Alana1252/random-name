import { Button, Card, CardContent, IconButton, List, ListItem, ListItemText, Stack, TextField } from "@mui/material";
import { Container } from "@mui/system";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import React from 'react';
import AcakNama from "./acak-nama";
import randomItem from "./acak-nama"





export default function ListName() {
    const [ListName, setListname] = useState([
        { name: 'Alan' },
        { name: 'Kamesta' },
        { name: 'Ginting' },
        { name: 'coba'}
    ])

    const [inputName, setInputName] = useState('')
    const [isModeEdit, setIsModeEdit] = useState(false)
    const [editIndex, setEditIndex] = useState()
  

    function addListName() {
        const prev = [...ListName]
        if (!inputName) {
            return alert("Masukan nama terlebih dahulu");
        }
        prev.unshift({
            name: inputName
        })
        setListname(prev)
        setInputName('')
    }

    function editListname() {
        const prev = [...ListName]
        prev[editIndex].name = inputName
        setListname(prev)
        setInputName('')
        setIsModeEdit(false)
    }
    function setModeEditFor(index) {
        setEditIndex(index)
        setIsModeEdit(true)
        setInputName(ListName[index].name)
    }
    function deleteListname(index) {
        console.log(index)
        if (window.confirm("Yakin hapus data?") === true) {
            const prev = [...ListName]
            prev.splice(index, 1)
            setListname(prev)
        }
    }

    return (
        <div >
            <Container sx={{ my: 18 }} align="center" >
                <Card sx={{ maxWidth: 500 }} >
                    <CardContent >
                        <div><h3>List Nama</h3></div> <br />

                        <Stack direction='row' spacing={3}>
                            <TextField
                                variant="outlined"
                                size="small"
                                placeholder="Nama baru"
                                value={inputName}
                                onChange={(e) => setInputName(e.target.value)}
                            />
                            <Button
                                variant="contained"
                                onClick={() => isModeEdit ? editListname() : addListName()}
                            >
                                {isModeEdit ? 'Edit' : 'Tambah'}
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() => randomItem()}
                            >
                                {'acak'}
                            </Button>
                        </Stack>
                        <List style={{
                            height: '200px',
                            overflow: 'auto'
                        }}>
                            {
                                ListName.map((item, index) => (
                                    <ListItem
                                        key={index}
                                        secondaryAction={
                                            <Stack direction="row">
                                                <IconButton edge="end" aria-label="edit" onClick={() => setModeEditFor(index)}>
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton edge="end" aria-label="delete" onClick={() => deleteListname(index)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Stack>
                                        }>
                                         <ListItemText  primary={item.name}></ListItemText>

                                  
                                    </ListItem>
                                ))
                            }
                        </List>
                        Total Nama : {ListName.length}

                    </CardContent>
                </Card>
                <AcakNama listItems={ListName} />
            </Container>
        
        </div>
    )
}