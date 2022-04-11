import React from 'react';
import {Box, Button, Container, Heading, Text, VStack} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const PeliculaCard = ({pelicula}) => {
    return (
        <Container bg={'#C4C4C4'} borderRadius={'30px'} maxW={'full'} p={5} h={'300px'} position={'relative'}>
            <Box p={'30px'}>
                <VStack  alignItems={'center'} textAlign={'center'}>
                    <Heading pb={'15px'}>{pelicula.title}</Heading>
                    <Text>{pelicula.plot}</Text>
                    <Link to={`/pelicula/${pelicula._id}`} state={{pelicula:pelicula}}><Button position={'absolute'} bottom={'10%'}>Ver Mas</Button></Link>
                </VStack>

            </Box>
        </Container>
    );
};

export default PeliculaCard;