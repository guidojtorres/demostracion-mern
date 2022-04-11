import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import UnaPelicula from "./pages/UnaPelicula";
function App() {
    const [peliculas, setPeliculas] = React.useState({
        data: null
    })

    const callBackendApi = async () => {
        const response = await fetch('/api/peliculas')
        const body = await response.json()

        if (response.status !== 200) {
            throw Error(body.message)
        }

        return body
    }

    React.useEffect(
        () => {

            callBackendApi()
                .then((res) => {
                    setPeliculas({data: res})

                })
                .catch(
                    err => console.error(err)
                )
        },
        []
    )

    return (
        <div>
            <Routes>
                <Route path='/' element={<Home peliculas={peliculas.data}/>}/>
                <Route path={'/pelicula/:id'} element={<UnaPelicula />}/>
            </Routes>
        </div>
    );
}

export default App;
