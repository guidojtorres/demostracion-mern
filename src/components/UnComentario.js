import React from 'react';
import {Box, HStack, IconButton, Text, VStack} from "@chakra-ui/react";
import {CloseIcon} from "@chakra-ui/icons";

const UnComentario = ({comentario, borrar}) => {


    return (
        <Box w={'100%'} border={'1px solid #000'} p={'20px'}>
            <VStack spacing={2}>
                <HStack spacing={4} justifyContent={'space-between'} w={'100%'}>
                    <HStack>
                        <Text>
                            {comentario.name}
                        </Text>
                        <Text>
                            {comentario.email}
                        </Text>
                    </HStack>
                    <Text>{comentario.date}</Text>
                </HStack>
                <Box p={5}>
                    <Text>{comentario.text}</Text>
                </Box>
                <HStack justifyContent={'right'} w={'100%'}>
                    <IconButton
                        colorScheme={'red'}
                        icon={<CloseIcon/>}
                        onClick={()=> {
                            borrar(comentario._id)
                        }}
                        aria-label={'Cerrar'}
                    />
                </HStack>
            </VStack>
        </Box>
    );
};

export default UnComentario;