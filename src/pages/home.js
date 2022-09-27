import { Button, Card, List, ListItem, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from 'react';


export default function AcakNama(props) {
    const { listItems } = props
    const [selectedItem, setSelectedItem] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomName() {
        const total = listItems.length - 1
        const randomId = getRndInteger(0, total)
        return listItems[randomId].name
    }

    function randomItem() {
        setIsLoading(false)
        setTimeout(() => {
            setSelectedItem = [
                getRandomName(),
                getRandomName(),
                getRandomName()
            ]

            setIsLoading(true)
        }, 3000)
    }

    return (
        <Container sx={{ my: 7 }} align="center">
            <Card sx={{ maxWidth: 500 }}>
                <div><h3>Acak Nama</h3></div>
                <Stack>
                    <List>
                        <ListItem> 
                            Narasumber 1 : {selectedItem[0]}
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            Narasumber 2 : {selectedItem[1]}
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            Moderator : {selectedItem[2]}
                        </ListItem>
                    </List>
                </Stack>
                <Button

                    margin="2"
                    variant='outlined'
                    size='small'
                    onClick={() => randomItem()}
                    disabled={isLoading}
                >
                    {isLoading ? 'Loading..' : 'Acak'}
                </Button>
                <div>
                   
                </div><br/>

            </Card>
        </Container>
    )
}