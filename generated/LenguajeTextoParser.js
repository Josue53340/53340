// Generated from LenguajeTexto.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LenguajeTextoListener from './LenguajeTextoListener.js';
import LenguajeTextoVisitor from './LenguajeTextoVisitor.js';

const serializedATN = [4,1,22,148,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,5,0,34,8,0,10,0,12,0,37,9,0,1,0,1,0,1,
1,1,1,1,1,3,1,44,8,1,1,2,1,2,1,2,1,2,3,2,50,8,2,1,2,1,2,1,3,1,3,1,3,1,3,
3,3,58,8,3,1,3,3,3,61,8,3,1,3,1,3,5,3,65,8,3,10,3,12,3,68,9,3,1,3,1,3,1,
4,1,4,1,4,5,4,75,8,4,10,4,12,4,78,9,4,1,5,1,5,1,5,1,5,1,5,3,5,85,8,5,1,6,
1,6,1,6,1,6,3,6,91,8,6,1,7,1,7,1,7,1,7,1,7,3,7,98,8,7,1,7,1,7,1,7,1,8,1,
8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,
11,1,11,3,11,123,8,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,132,8,11,1,
12,1,12,1,12,5,12,137,8,12,10,12,12,12,140,9,12,1,13,1,13,1,14,1,14,1,15,
1,15,1,15,0,0,16,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,0,3,1,0,18,20,
1,0,19,20,1,0,5,9,151,0,35,1,0,0,0,2,43,1,0,0,0,4,45,1,0,0,0,6,53,1,0,0,
0,8,71,1,0,0,0,10,84,1,0,0,0,12,90,1,0,0,0,14,92,1,0,0,0,16,102,1,0,0,0,
18,109,1,0,0,0,20,115,1,0,0,0,22,131,1,0,0,0,24,133,1,0,0,0,26,141,1,0,0,
0,28,143,1,0,0,0,30,145,1,0,0,0,32,34,3,2,1,0,33,32,1,0,0,0,34,37,1,0,0,
0,35,33,1,0,0,0,35,36,1,0,0,0,36,38,1,0,0,0,37,35,1,0,0,0,38,39,5,0,0,1,
39,1,1,0,0,0,40,44,3,4,2,0,41,44,3,6,3,0,42,44,3,12,6,0,43,40,1,0,0,0,43,
41,1,0,0,0,43,42,1,0,0,0,44,3,1,0,0,0,45,46,5,1,0,0,46,49,5,19,0,0,47,48,
5,10,0,0,48,50,3,22,11,0,49,47,1,0,0,0,49,50,1,0,0,0,50,51,1,0,0,0,51,52,
5,11,0,0,52,5,1,0,0,0,53,54,5,2,0,0,54,60,5,19,0,0,55,57,5,14,0,0,56,58,
3,8,4,0,57,56,1,0,0,0,57,58,1,0,0,0,58,59,1,0,0,0,59,61,5,15,0,0,60,55,1,
0,0,0,60,61,1,0,0,0,61,62,1,0,0,0,62,66,5,16,0,0,63,65,3,10,5,0,64,63,1,
0,0,0,65,68,1,0,0,0,66,64,1,0,0,0,66,67,1,0,0,0,67,69,1,0,0,0,68,66,1,0,
0,0,69,70,5,17,0,0,70,7,1,0,0,0,71,76,5,19,0,0,72,73,5,12,0,0,73,75,5,19,
0,0,74,72,1,0,0,0,75,78,1,0,0,0,76,74,1,0,0,0,76,77,1,0,0,0,77,9,1,0,0,0,
78,76,1,0,0,0,79,85,3,4,2,0,80,85,3,14,7,0,81,85,3,16,8,0,82,85,3,18,9,0,
83,85,3,20,10,0,84,79,1,0,0,0,84,80,1,0,0,0,84,81,1,0,0,0,84,82,1,0,0,0,
84,83,1,0,0,0,85,11,1,0,0,0,86,91,3,14,7,0,87,91,3,16,8,0,88,91,3,18,9,0,
89,91,3,20,10,0,90,86,1,0,0,0,90,87,1,0,0,0,90,88,1,0,0,0,90,89,1,0,0,0,
91,13,1,0,0,0,92,93,5,19,0,0,93,94,5,10,0,0,94,95,3,30,15,0,95,97,5,14,0,
0,96,98,3,24,12,0,97,96,1,0,0,0,97,98,1,0,0,0,98,99,1,0,0,0,99,100,5,15,
0,0,100,101,5,11,0,0,101,15,1,0,0,0,102,103,5,19,0,0,103,104,5,10,0,0,104,
105,3,28,14,0,105,106,5,13,0,0,106,107,3,28,14,0,107,108,5,11,0,0,108,17,
1,0,0,0,109,110,5,3,0,0,110,111,5,14,0,0,111,112,3,22,11,0,112,113,5,15,
0,0,113,114,5,11,0,0,114,19,1,0,0,0,115,116,5,4,0,0,116,117,3,22,11,0,117,
118,5,11,0,0,118,21,1,0,0,0,119,120,3,30,15,0,120,122,5,14,0,0,121,123,3,
24,12,0,122,121,1,0,0,0,122,123,1,0,0,0,123,124,1,0,0,0,124,125,5,15,0,0,
125,132,1,0,0,0,126,127,3,28,14,0,127,128,5,13,0,0,128,129,3,28,14,0,129,
132,1,0,0,0,130,132,3,26,13,0,131,119,1,0,0,0,131,126,1,0,0,0,131,130,1,
0,0,0,132,23,1,0,0,0,133,138,3,22,11,0,134,135,5,12,0,0,135,137,3,22,11,
0,136,134,1,0,0,0,137,140,1,0,0,0,138,136,1,0,0,0,138,139,1,0,0,0,139,25,
1,0,0,0,140,138,1,0,0,0,141,142,7,0,0,0,142,27,1,0,0,0,143,144,7,1,0,0,144,
29,1,0,0,0,145,146,7,2,0,0,146,31,1,0,0,0,13,35,43,49,57,60,66,76,84,90,
97,122,131,138];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LenguajeTextoParser extends antlr4.Parser {

    static grammarFileName = "LenguajeTexto.g4";
    static literalNames = [ null, "'variable'", null, "'imprimir'", "'devolver'", 
                            null, null, "'longitud'", "'invertir'", "'reemplazar'", 
                            "'='", "';'", "','", "'+'", "'('", "')'", "'{'", 
                            "'}'" ];
    static symbolicNames = [ null, "VARIABLE", "FUNCION", "IMPRIMIR", "DEVOLVER", 
                             "MAYUSCULAS", "MINUSCULAS", "LONGITUD", "INVERTIR", 
                             "REEMPLAZAR", "IGUAL", "PUNTOCOMA", "COMA", 
                             "MAS", "PARIZQ", "PARDER", "LLAVEIZQ", "LLAVEDER", 
                             "NUMERO", "ID", "TEXTO", "WS", "ERROR_CHAR" ];
    static ruleNames = [ "programa", "sentencia", "declaracion", "funcion", 
                         "argumentos", "instruccion", "ejecucion", "operacionTexto", 
                         "concatenar", "impresion", "retorno", "expresion", 
                         "parametros", "valor", "cadena", "transformacion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LenguajeTextoParser.ruleNames;
        this.literalNames = LenguajeTextoParser.literalNames;
        this.symbolicNames = LenguajeTextoParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LenguajeTextoParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 524318) !== 0)) {
	            this.state = 32;
	            this.sentencia();
	            this.state = 37;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 38;
	        this.match(LenguajeTextoParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LenguajeTextoParser.RULE_sentencia);
	    try {
	        this.state = 43;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 40;
	            this.declaracion();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 41;
	            this.funcion();
	            break;
	        case 3:
	        case 4:
	        case 19:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 42;
	            this.ejecucion();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LenguajeTextoParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        localctx = new DeclaracionVarContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(LenguajeTextoParser.VARIABLE);
	        this.state = 46;
	        this.match(LenguajeTextoParser.ID);
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10) {
	            this.state = 47;
	            this.match(LenguajeTextoParser.IGUAL);
	            this.state = 48;
	            this.expresion();
	        }

	        this.state = 51;
	        this.match(LenguajeTextoParser.PUNTOCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcion() {
	    let localctx = new FuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LenguajeTextoParser.RULE_funcion);
	    var _la = 0;
	    try {
	        localctx = new FuncionDeclContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(LenguajeTextoParser.FUNCION);
	        this.state = 54;
	        this.match(LenguajeTextoParser.ID);
	        this.state = 60;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 55;
	            this.match(LenguajeTextoParser.PARIZQ);
	            this.state = 57;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===19) {
	                this.state = 56;
	                this.argumentos();
	            }

	            this.state = 59;
	            this.match(LenguajeTextoParser.PARDER);
	        }

	        this.state = 62;
	        this.match(LenguajeTextoParser.LLAVEIZQ);
	        this.state = 66;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 524314) !== 0)) {
	            this.state = 63;
	            this.instruccion();
	            this.state = 68;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 69;
	        this.match(LenguajeTextoParser.LLAVEDER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentos() {
	    let localctx = new ArgumentosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LenguajeTextoParser.RULE_argumentos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(LenguajeTextoParser.ID);
	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===12) {
	            this.state = 72;
	            this.match(LenguajeTextoParser.COMA);
	            this.state = 73;
	            this.match(LenguajeTextoParser.ID);
	            this.state = 78;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LenguajeTextoParser.RULE_instruccion);
	    try {
	        this.state = 84;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 79;
	            this.declaracion();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 80;
	            this.operacionTexto();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 81;
	            this.concatenar();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 82;
	            this.impresion();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 83;
	            this.retorno();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ejecucion() {
	    let localctx = new EjecucionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LenguajeTextoParser.RULE_ejecucion);
	    try {
	        this.state = 90;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 86;
	            this.operacionTexto();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 87;
	            this.concatenar();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 88;
	            this.impresion();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 89;
	            this.retorno();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operacionTexto() {
	    let localctx = new OperacionTextoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LenguajeTextoParser.RULE_operacionTexto);
	    var _la = 0;
	    try {
	        localctx = new OpTransformacionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.match(LenguajeTextoParser.ID);
	        this.state = 93;
	        this.match(LenguajeTextoParser.IGUAL);
	        this.state = 94;
	        this.transformacion();
	        this.state = 95;
	        this.match(LenguajeTextoParser.PARIZQ);
	        this.state = 97;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1836000) !== 0)) {
	            this.state = 96;
	            this.parametros();
	        }

	        this.state = 99;
	        this.match(LenguajeTextoParser.PARDER);
	        this.state = 100;
	        this.match(LenguajeTextoParser.PUNTOCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	concatenar() {
	    let localctx = new ConcatenarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LenguajeTextoParser.RULE_concatenar);
	    try {
	        localctx = new OpConcatenarContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(LenguajeTextoParser.ID);
	        this.state = 103;
	        this.match(LenguajeTextoParser.IGUAL);
	        this.state = 104;
	        this.cadena();
	        this.state = 105;
	        this.match(LenguajeTextoParser.MAS);
	        this.state = 106;
	        this.cadena();
	        this.state = 107;
	        this.match(LenguajeTextoParser.PUNTOCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	impresion() {
	    let localctx = new ImpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, LenguajeTextoParser.RULE_impresion);
	    try {
	        localctx = new ImprimirStmtContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this.match(LenguajeTextoParser.IMPRIMIR);
	        this.state = 110;
	        this.match(LenguajeTextoParser.PARIZQ);
	        this.state = 111;
	        this.expresion();
	        this.state = 112;
	        this.match(LenguajeTextoParser.PARDER);
	        this.state = 113;
	        this.match(LenguajeTextoParser.PUNTOCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retorno() {
	    let localctx = new RetornoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, LenguajeTextoParser.RULE_retorno);
	    try {
	        localctx = new RetornoStmtContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this.match(LenguajeTextoParser.DEVOLVER);
	        this.state = 116;
	        this.expresion();
	        this.state = 117;
	        this.match(LenguajeTextoParser.PUNTOCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, LenguajeTextoParser.RULE_expresion);
	    var _la = 0;
	    try {
	        this.state = 131;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ExprTransformacionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 119;
	            this.transformacion();
	            this.state = 120;
	            this.match(LenguajeTextoParser.PARIZQ);
	            this.state = 122;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1836000) !== 0)) {
	                this.state = 121;
	                this.parametros();
	            }

	            this.state = 124;
	            this.match(LenguajeTextoParser.PARDER);
	            break;

	        case 2:
	            localctx = new ExprConcatenacionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 126;
	            this.cadena();
	            this.state = 127;
	            this.match(LenguajeTextoParser.MAS);
	            this.state = 128;
	            this.cadena();
	            break;

	        case 3:
	            localctx = new ExprValorContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 130;
	            this.valor();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametros() {
	    let localctx = new ParametrosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, LenguajeTextoParser.RULE_parametros);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 133;
	        this.expresion();
	        this.state = 138;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===12) {
	            this.state = 134;
	            this.match(LenguajeTextoParser.COMA);
	            this.state = 135;
	            this.expresion();
	            this.state = 140;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, LenguajeTextoParser.RULE_valor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1835008) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, LenguajeTextoParser.RULE_cadena);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        _la = this._input.LA(1);
	        if(!(_la===19 || _la===20)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	transformacion() {
	    let localctx = new TransformacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, LenguajeTextoParser.RULE_transformacion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 992) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LenguajeTextoParser.EOF = antlr4.Token.EOF;
LenguajeTextoParser.VARIABLE = 1;
LenguajeTextoParser.FUNCION = 2;
LenguajeTextoParser.IMPRIMIR = 3;
LenguajeTextoParser.DEVOLVER = 4;
LenguajeTextoParser.MAYUSCULAS = 5;
LenguajeTextoParser.MINUSCULAS = 6;
LenguajeTextoParser.LONGITUD = 7;
LenguajeTextoParser.INVERTIR = 8;
LenguajeTextoParser.REEMPLAZAR = 9;
LenguajeTextoParser.IGUAL = 10;
LenguajeTextoParser.PUNTOCOMA = 11;
LenguajeTextoParser.COMA = 12;
LenguajeTextoParser.MAS = 13;
LenguajeTextoParser.PARIZQ = 14;
LenguajeTextoParser.PARDER = 15;
LenguajeTextoParser.LLAVEIZQ = 16;
LenguajeTextoParser.LLAVEDER = 17;
LenguajeTextoParser.NUMERO = 18;
LenguajeTextoParser.ID = 19;
LenguajeTextoParser.TEXTO = 20;
LenguajeTextoParser.WS = 21;
LenguajeTextoParser.ERROR_CHAR = 22;

LenguajeTextoParser.RULE_programa = 0;
LenguajeTextoParser.RULE_sentencia = 1;
LenguajeTextoParser.RULE_declaracion = 2;
LenguajeTextoParser.RULE_funcion = 3;
LenguajeTextoParser.RULE_argumentos = 4;
LenguajeTextoParser.RULE_instruccion = 5;
LenguajeTextoParser.RULE_ejecucion = 6;
LenguajeTextoParser.RULE_operacionTexto = 7;
LenguajeTextoParser.RULE_concatenar = 8;
LenguajeTextoParser.RULE_impresion = 9;
LenguajeTextoParser.RULE_retorno = 10;
LenguajeTextoParser.RULE_expresion = 11;
LenguajeTextoParser.RULE_parametros = 12;
LenguajeTextoParser.RULE_valor = 13;
LenguajeTextoParser.RULE_cadena = 14;
LenguajeTextoParser.RULE_transformacion = 15;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeTextoParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(LenguajeTextoParser.EOF, 0);
	};

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeTextoVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeTextoParser.RULE_sentencia;
    }

	declaracion() {
	    return this.getTypedRuleContext(DeclaracionContext,0);
	};

	funcion() {
	    return this.getTypedRuleContext(FuncionContext,0);
	};

	ejecucion() {
	    return this.getTypedRuleContext(EjecucionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeTextoVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeTextoParser.RULE_declaracion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DeclaracionVarContext extends DeclaracionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	VARIABLE() {
	    return this.getToken(LenguajeTextoParser.VARIABLE, 0);
	};

	ID() {
	    return this.getToken(LenguajeTextoParser.ID, 0);
	};

	PUNTOCOMA() {
	    return this.getToken(LenguajeTextoParser.PUNTOCOMA, 0);
	};

	IGUAL() {
	    return this.getToken(LenguajeTextoParser.IGUAL, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.enterDeclaracionVar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.exitDeclaracionVar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeTextoVisitor ) {
	        return visitor.visitDeclaracionVar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeTextoParser.DeclaracionVarContext = DeclaracionVarContext;

class FuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeTextoParser.RULE_funcion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class FuncionDeclContext extends FuncionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FUNCION() {
	    return this.getToken(LenguajeTextoParser.FUNCION, 0);
	};

	ID() {
	    return this.getToken(LenguajeTextoParser.ID, 0);
	};

	LLAVEIZQ() {
	    return this.getToken(LenguajeTextoParser.LLAVEIZQ, 0);
	};

	LLAVEDER() {
	    return this.getToken(LenguajeTextoParser.LLAVEDER, 0);
	};

	PARIZQ() {
	    return this.getToken(LenguajeTextoParser.PARIZQ, 0);
	};

	PARDER() {
	    return this.getToken(LenguajeTextoParser.PARDER, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	argumentos() {
	    return this.getTypedRuleContext(ArgumentosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.enterFuncionDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.exitFuncionDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeTextoVisitor ) {
	        return visitor.visitFuncionDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeTextoParser.FuncionDeclContext = FuncionDeclContext;

class ArgumentosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeTextoParser.RULE_argumentos;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LenguajeTextoParser.ID);
	    } else {
	        return this.getToken(LenguajeTextoParser.ID, i);
	    }
	};


	COMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LenguajeTextoParser.COMA);
	    } else {
	        return this.getToken(LenguajeTextoParser.COMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.enterArgumentos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.exitArgumentos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeTextoVisitor ) {
	        return visitor.visitArgumentos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeTextoParser.RULE_instruccion;
    }

	declaracion() {
	    return this.getTypedRuleContext(DeclaracionContext,0);
	};

	operacionTexto() {
	    return this.getTypedRuleContext(OperacionTextoContext,0);
	};

	concatenar() {
	    return this.getTypedRuleContext(ConcatenarContext,0);
	};

	impresion() {
	    return this.getTypedRuleContext(ImpresionContext,0);
	};

	retorno() {
	    return this.getTypedRuleContext(RetornoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeTextoVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EjecucionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeTextoParser.RULE_ejecucion;
    }

	operacionTexto() {
	    return this.getTypedRuleContext(OperacionTextoContext,0);
	};

	concatenar() {
	    return this.getTypedRuleContext(ConcatenarContext,0);
	};

	impresion() {
	    return this.getTypedRuleContext(ImpresionContext,0);
	};

	retorno() {
	    return this.getTypedRuleContext(RetornoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.enterEjecucion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.exitEjecucion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeTextoVisitor ) {
	        return visitor.visitEjecucion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OperacionTextoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeTextoParser.RULE_operacionTexto;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class OpTransformacionContext extends OperacionTextoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(LenguajeTextoParser.ID, 0);
	};

	IGUAL() {
	    return this.getToken(LenguajeTextoParser.IGUAL, 0);
	};

	transformacion() {
	    return this.getTypedRuleContext(TransformacionContext,0);
	};

	PARIZQ() {
	    return this.getToken(LenguajeTextoParser.PARIZQ, 0);
	};

	PARDER() {
	    return this.getToken(LenguajeTextoParser.PARDER, 0);
	};

	PUNTOCOMA() {
	    return this.getToken(LenguajeTextoParser.PUNTOCOMA, 0);
	};

	parametros() {
	    return this.getTypedRuleContext(ParametrosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.enterOpTransformacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.exitOpTransformacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeTextoVisitor ) {
	        return visitor.visitOpTransformacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeTextoParser.OpTransformacionContext = OpTransformacionContext;

class ConcatenarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeTextoParser.RULE_concatenar;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class OpConcatenarContext extends ConcatenarContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(LenguajeTextoParser.ID, 0);
	};

	IGUAL() {
	    return this.getToken(LenguajeTextoParser.IGUAL, 0);
	};

	cadena = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CadenaContext);
	    } else {
	        return this.getTypedRuleContext(CadenaContext,i);
	    }
	};

	MAS() {
	    return this.getToken(LenguajeTextoParser.MAS, 0);
	};

	PUNTOCOMA() {
	    return this.getToken(LenguajeTextoParser.PUNTOCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.enterOpConcatenar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.exitOpConcatenar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeTextoVisitor ) {
	        return visitor.visitOpConcatenar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeTextoParser.OpConcatenarContext = OpConcatenarContext;

class ImpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeTextoParser.RULE_impresion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ImprimirStmtContext extends ImpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IMPRIMIR() {
	    return this.getToken(LenguajeTextoParser.IMPRIMIR, 0);
	};

	PARIZQ() {
	    return this.getToken(LenguajeTextoParser.PARIZQ, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	PARDER() {
	    return this.getToken(LenguajeTextoParser.PARDER, 0);
	};

	PUNTOCOMA() {
	    return this.getToken(LenguajeTextoParser.PUNTOCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.enterImprimirStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.exitImprimirStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeTextoVisitor ) {
	        return visitor.visitImprimirStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeTextoParser.ImprimirStmtContext = ImprimirStmtContext;

class RetornoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeTextoParser.RULE_retorno;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class RetornoStmtContext extends RetornoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DEVOLVER() {
	    return this.getToken(LenguajeTextoParser.DEVOLVER, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	PUNTOCOMA() {
	    return this.getToken(LenguajeTextoParser.PUNTOCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.enterRetornoStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.exitRetornoStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeTextoVisitor ) {
	        return visitor.visitRetornoStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeTextoParser.RetornoStmtContext = RetornoStmtContext;

class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeTextoParser.RULE_expresion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ExprTransformacionContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	transformacion() {
	    return this.getTypedRuleContext(TransformacionContext,0);
	};

	PARIZQ() {
	    return this.getToken(LenguajeTextoParser.PARIZQ, 0);
	};

	PARDER() {
	    return this.getToken(LenguajeTextoParser.PARDER, 0);
	};

	parametros() {
	    return this.getTypedRuleContext(ParametrosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.enterExprTransformacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.exitExprTransformacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeTextoVisitor ) {
	        return visitor.visitExprTransformacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeTextoParser.ExprTransformacionContext = ExprTransformacionContext;

class ExprValorContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.enterExprValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.exitExprValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeTextoVisitor ) {
	        return visitor.visitExprValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeTextoParser.ExprValorContext = ExprValorContext;

class ExprConcatenacionContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	cadena = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CadenaContext);
	    } else {
	        return this.getTypedRuleContext(CadenaContext,i);
	    }
	};

	MAS() {
	    return this.getToken(LenguajeTextoParser.MAS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.enterExprConcatenacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.exitExprConcatenacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeTextoVisitor ) {
	        return visitor.visitExprConcatenacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeTextoParser.ExprConcatenacionContext = ExprConcatenacionContext;

class ParametrosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeTextoParser.RULE_parametros;
    }

	expresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionContext,i);
	    }
	};

	COMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LenguajeTextoParser.COMA);
	    } else {
	        return this.getToken(LenguajeTextoParser.COMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.enterParametros(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.exitParametros(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeTextoVisitor ) {
	        return visitor.visitParametros(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeTextoParser.RULE_valor;
    }

	TEXTO() {
	    return this.getToken(LenguajeTextoParser.TEXTO, 0);
	};

	NUMERO() {
	    return this.getToken(LenguajeTextoParser.NUMERO, 0);
	};

	ID() {
	    return this.getToken(LenguajeTextoParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeTextoVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeTextoParser.RULE_cadena;
    }

	TEXTO() {
	    return this.getToken(LenguajeTextoParser.TEXTO, 0);
	};

	ID() {
	    return this.getToken(LenguajeTextoParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeTextoVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TransformacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeTextoParser.RULE_transformacion;
    }

	MAYUSCULAS() {
	    return this.getToken(LenguajeTextoParser.MAYUSCULAS, 0);
	};

	MINUSCULAS() {
	    return this.getToken(LenguajeTextoParser.MINUSCULAS, 0);
	};

	LONGITUD() {
	    return this.getToken(LenguajeTextoParser.LONGITUD, 0);
	};

	INVERTIR() {
	    return this.getToken(LenguajeTextoParser.INVERTIR, 0);
	};

	REEMPLAZAR() {
	    return this.getToken(LenguajeTextoParser.REEMPLAZAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.enterTransformacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeTextoListener ) {
	        listener.exitTransformacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeTextoVisitor ) {
	        return visitor.visitTransformacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




LenguajeTextoParser.ProgramaContext = ProgramaContext; 
LenguajeTextoParser.SentenciaContext = SentenciaContext; 
LenguajeTextoParser.DeclaracionContext = DeclaracionContext; 
LenguajeTextoParser.FuncionContext = FuncionContext; 
LenguajeTextoParser.ArgumentosContext = ArgumentosContext; 
LenguajeTextoParser.InstruccionContext = InstruccionContext; 
LenguajeTextoParser.EjecucionContext = EjecucionContext; 
LenguajeTextoParser.OperacionTextoContext = OperacionTextoContext; 
LenguajeTextoParser.ConcatenarContext = ConcatenarContext; 
LenguajeTextoParser.ImpresionContext = ImpresionContext; 
LenguajeTextoParser.RetornoContext = RetornoContext; 
LenguajeTextoParser.ExpresionContext = ExpresionContext; 
LenguajeTextoParser.ParametrosContext = ParametrosContext; 
LenguajeTextoParser.ValorContext = ValorContext; 
LenguajeTextoParser.CadenaContext = CadenaContext; 
LenguajeTextoParser.TransformacionContext = TransformacionContext; 
