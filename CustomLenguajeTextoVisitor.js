import LenguajeTextoVisitor from './generated/LenguajeTextoVisitor.js';

export default class CustomLenguajeTextoVisitor extends LenguajeTextoVisitor {

    visitPrograma(ctx) {
        return ctx.sentencia()
            .map(sentencia => this.visit(sentencia))
            .filter(Boolean)
            .join('\n');
    }

    visitSentencia(ctx) {
        return this.visit(ctx.getChild(0));
    }

    visitDeclaracionVar(ctx) {
        const nombre = ctx.ID().getText();

        if (ctx.expresion()) {
            const valor = this.visit(ctx.expresion());
            return `let ${nombre} = ${valor};`;
        }

        return `let ${nombre};`;
    }

    visitFuncionDecl(ctx) {
        const nombre = ctx.ID().getText();
        const args = ctx.argumentos() ? this.visit(ctx.argumentos()) : '';
        const cuerpo = ctx.instruccion()
            .map(inst => this.visit(inst))
            .filter(Boolean)
            .join('\n');

        return `function ${nombre}(${args}) {\n${cuerpo}\n}`;
    }

    visitArgumentos(ctx) {
        return ctx.ID().map(id => id.getText()).join(', ');
    }

    visitInstruccion(ctx) {
        return this.visit(ctx.getChild(0));
    }

    visitEjecucion(ctx) {
        return this.visit(ctx.getChild(0));
    }

    visitOpTransformacion(ctx) {
        const variable = ctx.ID().getText();
        const operacion = this.generarTransformacion(
            ctx.transformacion().getText(),
            ctx.parametros()
        );

        return `${variable} = ${operacion};`;
    }

    visitOpConcatenar(ctx) {
        const variable = ctx.ID().getText();
        const izquierda = this.visit(ctx.cadena(0));
        const derecha = this.visit(ctx.cadena(1));

        return `${variable} = ${izquierda} + ${derecha};`;
    }

    visitImprimirStmt(ctx) {
        const valor = this.visit(ctx.expresion());
        return `console.log(${valor});`;
    }

    visitRetornoStmt(ctx) {
        const valor = this.visit(ctx.expresion());
        return `return ${valor};`;
    }

    visitExprTransformacion(ctx) {
        return this.generarTransformacion(
            ctx.transformacion().getText(),
            ctx.parametros()
        );
    }

    visitExprConcatenacion(ctx) {
        const izquierda = this.visit(ctx.cadena(0));
        const derecha = this.visit(ctx.cadena(1));
        return `${izquierda} + ${derecha}`;
    }

    visitExprValor(ctx) {
        return this.visit(ctx.valor());
    }

    visitValor(ctx) {
        return ctx.getText();
    }

    visitCadena(ctx) {
        return ctx.getText();
    }

    generarTransformacion(nombreOriginal, parametrosCtx) {
        const nombre = this.normalizar(nombreOriginal);

        const parametros = parametrosCtx
            ? parametrosCtx.expresion().map(exp => this.visit(exp))
            : [];

        const base = parametros[0] ?? '""';

        switch (nombre) {
            case 'mayusculas':
                return `${base}.toUpperCase()`;

            case 'minusculas':
                return `${base}.toLowerCase()`;

            case 'longitud':
                return `${base}.length`;

            case 'invertir':
                return `${base}.split("").reverse().join("")`;

            case 'reemplazar': {
                const buscado = parametros[1] ?? '""';
                const reemplazo = parametros[2] ?? '""';
                return `${base}.replace(${buscado}, ${reemplazo})`;
            }

            default:
                throw new Error(`TransformaciÃ³n no reconocida: ${nombreOriginal}`);
        }
    }

    normalizar(texto) {
        return texto
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();
    }
}