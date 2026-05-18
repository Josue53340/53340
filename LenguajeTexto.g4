grammar LenguajeTexto;

programa
    : sentencia* EOF
    ;

sentencia
    : declaracion
    | funcion
    | ejecucion
    ;

declaracion
    : VARIABLE ID (IGUAL expresion)? PUNTOCOMA        #declaracionVar
    ;

funcion
    : FUNCION ID (PARIZQ argumentos? PARDER)? LLAVEIZQ instruccion* LLAVEDER #funcionDecl
    ;

argumentos
    : ID (COMA ID)*
    ;

instruccion
    : declaracion
    | operacionTexto
    | concatenar
    | impresion
    | retorno
    ;

ejecucion
    : operacionTexto
    | concatenar
    | impresion
    | retorno
    ;

operacionTexto
    : ID IGUAL transformacion PARIZQ parametros? PARDER PUNTOCOMA #opTransformacion
    ;

concatenar
    : ID IGUAL cadena MAS cadena PUNTOCOMA            #opConcatenar
    ;

impresion
    : IMPRIMIR PARIZQ expresion PARDER PUNTOCOMA      #imprimirStmt
    ;

retorno
    : DEVOLVER expresion PUNTOCOMA                    #retornoStmt
    ;

expresion
    : transformacion PARIZQ parametros? PARDER        #exprTransformacion
    | cadena MAS cadena                               #exprConcatenacion
    | valor                                           #exprValor
    ;

parametros
    : expresion (COMA expresion)*
    ;

valor
    : TEXTO
    | NUMERO
    | ID
    ;

cadena
    : TEXTO
    | ID
    ;

transformacion
    : MAYUSCULAS
    | MINUSCULAS
    | LONGITUD
    | INVERTIR
    | REEMPLAZAR
    ;

VARIABLE   : 'variable';
FUNCION    : 'función' | 'funcion';
IMPRIMIR   : 'imprimir';
DEVOLVER   : 'devolver';

MAYUSCULAS : 'mayúsculas' | 'mayusculas';
MINUSCULAS : 'minúsculas' | 'minusculas';
LONGITUD   : 'longitud';
INVERTIR   : 'invertir';
REEMPLAZAR : 'reemplazar';

IGUAL      : '=';
PUNTOCOMA  : ';';
COMA       : ',';
MAS        : '+';
PARIZQ     : '(';
PARDER     : ')';
LLAVEIZQ   : '{';
LLAVEDER   : '}';

NUMERO     : [0-9]+;
ID         : [a-zA-Z_][a-zA-Z0-9_]*;
TEXTO      : '"' (~["\r\n])* '"';

WS         : [ \t\r\n]+ -> skip;

ERROR_CHAR : . ;