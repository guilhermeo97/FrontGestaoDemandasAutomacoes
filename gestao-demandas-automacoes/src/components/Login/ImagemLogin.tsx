import React from 'react';

const ImagemLogin = () => {
    const imagem = '/imagem_capa.jpg';
    return (
        <div className='container w-full h-64'>
            <img className="w-full h-full object-cover" src={imagem} alt="Homem negro sorrindo para a câmera ele está sentado. Atrás do homem tem um monitor com um código de programação"/>
        </div>
    );
}

export default ImagemLogin;