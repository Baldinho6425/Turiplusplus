-- Tabela para upload de imagens
CREATE TABLE imagens (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    descricao TEXT,
    arquivo BYTEA,
    data_upload TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela para favoritos
CREATE TABLE favoritos (
    id SERIAL PRIMARY KEY,
    usuario_id INT,
    imagem_id INT,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (imagem_id) REFERENCES imagens(id)
);

-- Tabela para vídeos
CREATE TABLE videos (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(100),
    descricao TEXT,
    url VARCHAR(255),
    data_upload TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);