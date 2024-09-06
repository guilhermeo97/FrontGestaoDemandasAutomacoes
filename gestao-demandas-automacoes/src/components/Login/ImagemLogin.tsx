import React from 'react';

const ImagemLogin = () => {
    const imagem = '/imagem_capa.jpg'; // Certifique-se de que o caminho esteja correto.
    return (
        <div className='hidden md:block w-1/2 h-full'>
            <img className="w-full h-full object-cover rounded-lg" src={imagem} alt="Homem negro sorrindo para a câmera. Ele está sentado, e atrás dele há um monitor com um código de programação." />
        </div>
    );
}

export default ImagemLogin;
