import React from 'react';
import PeliculaCard from "../components/PeliculaCard";
import {Grid, GridItem} from "@chakra-ui/react";

const Home = ({peliculas}) => {

    return (
        <Grid templateColumns={'repeat(3, 1fr)'} gap={6}>
            {
                peliculas ? peliculas.map(
                    (v) => (
                        <GridItem>
                        <PeliculaCard pelicula={v} key={v._id}/>
                        </GridItem>
                    )
                ) : ''

            }
        </Grid>
    );
};

export default Home;