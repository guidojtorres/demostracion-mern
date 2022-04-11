import React from 'react';
import {useLocation} from "react-router-dom";
import {Container, Heading, VStack, Text, HStack, Box, Textarea, Button} from "@chakra-ui/react";
import UnComentario from "../components/UnComentario";

const UnaPelicula = () => {
    const [comentarios, setComentarios] = React.useState()
    const location = useLocation()
    const {pelicula} = location.state
    let [loading, setLoading] = React.useState(false)

    let [nuevoComentario, setNuevoComentario] = React.useState({
        nombre: 'Guido Torres',
        email: 'guidotorresmail@gmail.com',
        id: pelicula._id,
        texto: '',
    })


    let handleInputChange = (e) => {
        let inputValue = e.target.value
        setNuevoComentario(
            {
                nombre: 'Guido Torres',
                email: 'guidotorresmail@gmail.com',
                id: pelicula._id,
                texto: inputValue,
            }
        )
    }

    const getComentarios = async () => {
        const response = await fetch(`/api/comentarios/${pelicula._id}`)
        const body = await response.json()

        if (response.status !== 200) {
            throw Error(body.message)
        }

        return body
    }

    const postComentarios = async () => {
        setLoading(true)
        const response = await fetch('/api/nuevoComentario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(nuevoComentario),
        })

        setLoading(false)
        return response
    }

    const borrarComentario = async (id) => {
        setLoading(true)
        const result = await fetch(`/api/borrarComentario`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                body: JSON.stringify({id:id}),
            })
        setLoading(false)
        return result
    }


    React.useEffect(
        () => {
            getComentarios()
                .then(res => {
                    console.log(res)
                    setComentarios(res)
                })
                .catch(e => console.error(e))
        },
        [loading]
    )


    return (
        <Container maxW={'container.md'}>
            <VStack spacing={8}>
                <Heading>{pelicula.title}</Heading>
                <Text>{pelicula.plot}</Text>
                <HStack w={'100%'} justifyContent={'space-around'}>
                    <Box>
                        <HStack>
                            {
                                pelicula.directors.map(
                                    (director) => (
                                        <Text>{director}</Text>
                                    )
                                )
                            }
                        </HStack>
                    </Box>
                    <Box>
                        <HStack>
                            {
                                pelicula.genres.map(
                                    (genero) => (
                                        <Text>{genero}</Text>
                                    )
                                )
                            }
                        </HStack>
                    </Box>
                </HStack>
            </VStack>
            <Heading textAlign={'center'} py={8}>Comentarios</Heading>
            <VStack>
                {
                    comentarios ? comentarios.map(
                        (v, i) => (
                            <UnComentario comentario={v} key={i} borrar={borrarComentario}/>
                        )
                    ) : ''

                }
            </VStack>
            <Heading size={'md'} textAlign={'left'} pt={10} pb={5}>Agrega tu comentario</Heading>
            <Textarea
                value={nuevoComentario.text}
                placeholder={'...'}
                onChange={handleInputChange}
            />
            <HStack justifyContent={'right'} pt={5}>
                <Button
                    onClick={() => {
                        postComentarios()
                    }}
                >Enviar</Button>
            </HStack>
        </Container>
    );
};

export default UnaPelicula;