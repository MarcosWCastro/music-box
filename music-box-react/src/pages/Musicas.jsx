import React from "react";
import ItemMusica from '../components/ItemMusica';
import Menu from "../components/Menu";

function Musicas() {
    return(
        <>
        <Menu />
        <div className="container">
        <div className="filter">
            <button className="btn">Adicionar</button>
        </div>
    </div>

    <div className="container">
        <div className="music-boxes">

            <ItemMusica 
                musica="Risca faca"
                artista="Pepe Moreno"
                genero="Forró"
                ano={2009}
                id="1"
            />
            <ItemMusica 
                musica="Americana"
                artista="Pepe Moreno"
                genero="Forró"
                ano={2010}
                id="2"
            />
            <ItemMusica 
                musica="Menino de rua"
                artista="Pepe Moreno"
                genero="Forró"
                ano={2011}
                id="3"
            />

        </div>
    </div>
        </>
    );
}

export default Musicas;