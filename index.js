import fs from 'fs';
import antlr4 from 'antlr4';

import LenguajeTextoLexer from './generated/LenguajeTextoLexer.js';
import LenguajeTextoParser from './generated/LenguajeTextoParser.js';
import CustomLenguajeTextoVisitor from './CustomLenguajeTextoVisitor.js';

class CustomErrorListener extends antlr4.error.ErrorListener {
    constructor(tipo) {
        super();
        this.tipo = tipo;
        this.errors = [];
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg) {
        this.errors.push({ line, column, msg });
        console.error(`Error ${this.tipo} en línea ${line}, columna ${column}: ${msg}`);
    }
}

const input = fs.readFileSync('input.txt', 'utf8');

const inputStream = new antlr4.InputStream(input);

const lexer = new LenguajeTextoLexer(inputStream);
const lexerErrors = new CustomErrorListener('léxico');

lexer.removeErrorListeners();
lexer.addErrorListener(lexerErrors);

const tokenStream = new antlr4.CommonTokenStream(lexer);
tokenStream.fill();

console.log('\nTABLA DE LEXEMAS Y TOKENS');
console.log('LEXEMA\t\tTOKEN');

let hayErrorLexico = false;

for (const token of tokenStream.tokens) {
    if (token.type === antlr4.Token.EOF) continue;

    const tokenName = LenguajeTextoLexer.symbolicNames[token.type] || token.type;

    console.log(`${token.text}\t\t${tokenName}`);

    if (token.type === LenguajeTextoLexer.ERROR_CHAR) {
        hayErrorLexico = true;
        console.error(
            `Error léxico en línea ${token.line}, columna ${token.column}: carácter no reconocido '${token.text}'`
        );
    }
}

tokenStream.seek(0);

const parser = new LenguajeTextoParser(tokenStream);
const parserErrors = new CustomErrorListener('sintáctico');

parser.removeErrorListeners();
parser.addErrorListener(parserErrors);

const tree = parser.programa();

if (lexerErrors.errors.length > 0 || parserErrors.errors.length > 0 || hayErrorLexico) {
    console.log('\nLa entrada contiene errores. No se ejecuta la interpretación.');
    process.exit(1);
}

console.log('\nEntrada válida.');

console.log('\nÁRBOL DE ANÁLISIS SINTÁCTICO');
console.log(tree.toStringTree(parser.ruleNames));

const visitor = new CustomLenguajeTextoVisitor();
const codigoJS = visitor.visit(tree);

console.log('\nTRADUCCIÓN A JAVASCRIPT');
console.log(codigoJS);

console.log('\nRESULTADO DE LA INTERPRETACIÓN');
new Function(codigoJS)();