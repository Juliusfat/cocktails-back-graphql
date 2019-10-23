import * as multer from 'multer';
import * as path from 'path';
import * as fs from 'fs';
import * as _ from 'lodash';
import sanitize from 'sanitize';

const UPLOAD_PATH = path.resolve(__dirname, './static/images');

const storage = multer.memoryStorage()
const multerMiddleware = multer({ storage }).fields([{ name: 'image' }])

const upLoadMiddleware = (req, res, next) => {
    multerMiddleware(req, res, () => {
        const files = _.values(req.files);
        if (!files || files.length === 0) {
            console.log('upload middleware: no files');
            next();
            return;
        }

        const file = files[0];
        
        req.body.variables = JSON.parse(req.body.variables)

        const filename = `${Date.now()}_${sanitize(
            file.originalname.replace(
                /[`~!@#$%^&*()_|+\-=÷¿?;:'",<>{}[]\\\/]/gi,
                '',
            ),
        )}`

        const filePath = path.join(
            UPLOAD_PATH,
            filename,
        )

        fs.writeFileSync(filePath, file.buffer);

        req.body.variables.input[file.fieldname] = `/static/images/${filename}`;

        console.log(`upload middleware: uploaded file ${file.originalname} to ${req.body.variables.input[file.fieldname]}`);
        next();
    });
}

export default upLoadMiddleware;