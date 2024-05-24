const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Configuração do multer para salvar os arquivos na pasta "uploads"
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, './uploads/');
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.use(express.static('public'));

// Endpoint para lidar com o upload
app.post('./upload', upload.single('image'), (req, res) => {
    try {
        const title = req.body.title;
        const image = req.file;

        if (!title || !image) {
            return res.status(400).send({ message: 'Por favor, preencha todos os campos.' });
        }

        // Retorne uma resposta de sucesso
        res.send({ message: 'Post enviado com sucesso!', imageUrl: `./uploads/${image.filename}` });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Erro ao enviar o post.' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
