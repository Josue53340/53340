// Generated from c:/Users/User/ssl-antlr-calculator/LenguajeTexto.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class LenguajeTextoParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		VARIABLE=1, FUNCION=2, IMPRIMIR=3, DEVOLVER=4, MAYUSCULAS=5, MINUSCULAS=6, 
		LONGITUD=7, INVERTIR=8, REEMPLAZAR=9, IGUAL=10, PUNTOCOMA=11, COMA=12, 
		MAS=13, PARIZQ=14, PARDER=15, LLAVEIZQ=16, LLAVEDER=17, NUMERO=18, ID=19, 
		TEXTO=20, WS=21, ERROR_CHAR=22;
	public static final int
		RULE_programa = 0, RULE_sentencia = 1, RULE_declaracion = 2, RULE_funcion = 3, 
		RULE_argumentos = 4, RULE_instruccion = 5, RULE_ejecucion = 6, RULE_operacionTexto = 7, 
		RULE_concatenar = 8, RULE_impresion = 9, RULE_retorno = 10, RULE_expresion = 11, 
		RULE_parametros = 12, RULE_valor = 13, RULE_cadena = 14, RULE_transformacion = 15;
	private static String[] makeRuleNames() {
		return new String[] {
			"programa", "sentencia", "declaracion", "funcion", "argumentos", "instruccion", 
			"ejecucion", "operacionTexto", "concatenar", "impresion", "retorno", 
			"expresion", "parametros", "valor", "cadena", "transformacion"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'variable'", null, "'imprimir'", "'devolver'", null, null, "'longitud'", 
			"'invertir'", "'reemplazar'", "'='", "';'", "','", "'+'", "'('", "')'", 
			"'{'", "'}'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "VARIABLE", "FUNCION", "IMPRIMIR", "DEVOLVER", "MAYUSCULAS", "MINUSCULAS", 
			"LONGITUD", "INVERTIR", "REEMPLAZAR", "IGUAL", "PUNTOCOMA", "COMA", "MAS", 
			"PARIZQ", "PARDER", "LLAVEIZQ", "LLAVEDER", "NUMERO", "ID", "TEXTO", 
			"WS", "ERROR_CHAR"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "LenguajeTexto.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public LenguajeTextoParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramaContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(LenguajeTextoParser.EOF, 0); }
		public List<SentenciaContext> sentencia() {
			return getRuleContexts(SentenciaContext.class);
		}
		public SentenciaContext sentencia(int i) {
			return getRuleContext(SentenciaContext.class,i);
		}
		public ProgramaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_programa; }
	}

	public final ProgramaContext programa() throws RecognitionException {
		ProgramaContext _localctx = new ProgramaContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_programa);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(35);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 524318L) != 0)) {
				{
				{
				setState(32);
				sentencia();
				}
				}
				setState(37);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(38);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SentenciaContext extends ParserRuleContext {
		public DeclaracionContext declaracion() {
			return getRuleContext(DeclaracionContext.class,0);
		}
		public FuncionContext funcion() {
			return getRuleContext(FuncionContext.class,0);
		}
		public EjecucionContext ejecucion() {
			return getRuleContext(EjecucionContext.class,0);
		}
		public SentenciaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sentencia; }
	}

	public final SentenciaContext sentencia() throws RecognitionException {
		SentenciaContext _localctx = new SentenciaContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_sentencia);
		try {
			setState(43);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case VARIABLE:
				enterOuterAlt(_localctx, 1);
				{
				setState(40);
				declaracion();
				}
				break;
			case FUNCION:
				enterOuterAlt(_localctx, 2);
				{
				setState(41);
				funcion();
				}
				break;
			case IMPRIMIR:
			case DEVOLVER:
			case ID:
				enterOuterAlt(_localctx, 3);
				{
				setState(42);
				ejecucion();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeclaracionContext extends ParserRuleContext {
		public DeclaracionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaracion; }
	 
		public DeclaracionContext() { }
		public void copyFrom(DeclaracionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DeclaracionVarContext extends DeclaracionContext {
		public TerminalNode VARIABLE() { return getToken(LenguajeTextoParser.VARIABLE, 0); }
		public TerminalNode ID() { return getToken(LenguajeTextoParser.ID, 0); }
		public TerminalNode PUNTOCOMA() { return getToken(LenguajeTextoParser.PUNTOCOMA, 0); }
		public TerminalNode IGUAL() { return getToken(LenguajeTextoParser.IGUAL, 0); }
		public ExpresionContext expresion() {
			return getRuleContext(ExpresionContext.class,0);
		}
		public DeclaracionVarContext(DeclaracionContext ctx) { copyFrom(ctx); }
	}

	public final DeclaracionContext declaracion() throws RecognitionException {
		DeclaracionContext _localctx = new DeclaracionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_declaracion);
		int _la;
		try {
			_localctx = new DeclaracionVarContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(45);
			match(VARIABLE);
			setState(46);
			match(ID);
			setState(49);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IGUAL) {
				{
				setState(47);
				match(IGUAL);
				setState(48);
				expresion();
				}
			}

			setState(51);
			match(PUNTOCOMA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FuncionContext extends ParserRuleContext {
		public FuncionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funcion; }
	 
		public FuncionContext() { }
		public void copyFrom(FuncionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class FuncionDeclContext extends FuncionContext {
		public TerminalNode FUNCION() { return getToken(LenguajeTextoParser.FUNCION, 0); }
		public TerminalNode ID() { return getToken(LenguajeTextoParser.ID, 0); }
		public TerminalNode LLAVEIZQ() { return getToken(LenguajeTextoParser.LLAVEIZQ, 0); }
		public TerminalNode LLAVEDER() { return getToken(LenguajeTextoParser.LLAVEDER, 0); }
		public TerminalNode PARIZQ() { return getToken(LenguajeTextoParser.PARIZQ, 0); }
		public TerminalNode PARDER() { return getToken(LenguajeTextoParser.PARDER, 0); }
		public List<InstruccionContext> instruccion() {
			return getRuleContexts(InstruccionContext.class);
		}
		public InstruccionContext instruccion(int i) {
			return getRuleContext(InstruccionContext.class,i);
		}
		public ArgumentosContext argumentos() {
			return getRuleContext(ArgumentosContext.class,0);
		}
		public FuncionDeclContext(FuncionContext ctx) { copyFrom(ctx); }
	}

	public final FuncionContext funcion() throws RecognitionException {
		FuncionContext _localctx = new FuncionContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_funcion);
		int _la;
		try {
			_localctx = new FuncionDeclContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(53);
			match(FUNCION);
			setState(54);
			match(ID);
			setState(60);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PARIZQ) {
				{
				setState(55);
				match(PARIZQ);
				setState(57);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==ID) {
					{
					setState(56);
					argumentos();
					}
				}

				setState(59);
				match(PARDER);
				}
			}

			setState(62);
			match(LLAVEIZQ);
			setState(66);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 524314L) != 0)) {
				{
				{
				setState(63);
				instruccion();
				}
				}
				setState(68);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(69);
			match(LLAVEDER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArgumentosContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(LenguajeTextoParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(LenguajeTextoParser.ID, i);
		}
		public List<TerminalNode> COMA() { return getTokens(LenguajeTextoParser.COMA); }
		public TerminalNode COMA(int i) {
			return getToken(LenguajeTextoParser.COMA, i);
		}
		public ArgumentosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argumentos; }
	}

	public final ArgumentosContext argumentos() throws RecognitionException {
		ArgumentosContext _localctx = new ArgumentosContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_argumentos);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(71);
			match(ID);
			setState(76);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMA) {
				{
				{
				setState(72);
				match(COMA);
				setState(73);
				match(ID);
				}
				}
				setState(78);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InstruccionContext extends ParserRuleContext {
		public DeclaracionContext declaracion() {
			return getRuleContext(DeclaracionContext.class,0);
		}
		public OperacionTextoContext operacionTexto() {
			return getRuleContext(OperacionTextoContext.class,0);
		}
		public ConcatenarContext concatenar() {
			return getRuleContext(ConcatenarContext.class,0);
		}
		public ImpresionContext impresion() {
			return getRuleContext(ImpresionContext.class,0);
		}
		public RetornoContext retorno() {
			return getRuleContext(RetornoContext.class,0);
		}
		public InstruccionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instruccion; }
	}

	public final InstruccionContext instruccion() throws RecognitionException {
		InstruccionContext _localctx = new InstruccionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_instruccion);
		try {
			setState(84);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(79);
				declaracion();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(80);
				operacionTexto();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(81);
				concatenar();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(82);
				impresion();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(83);
				retorno();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EjecucionContext extends ParserRuleContext {
		public OperacionTextoContext operacionTexto() {
			return getRuleContext(OperacionTextoContext.class,0);
		}
		public ConcatenarContext concatenar() {
			return getRuleContext(ConcatenarContext.class,0);
		}
		public ImpresionContext impresion() {
			return getRuleContext(ImpresionContext.class,0);
		}
		public RetornoContext retorno() {
			return getRuleContext(RetornoContext.class,0);
		}
		public EjecucionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ejecucion; }
	}

	public final EjecucionContext ejecucion() throws RecognitionException {
		EjecucionContext _localctx = new EjecucionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_ejecucion);
		try {
			setState(90);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(86);
				operacionTexto();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(87);
				concatenar();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(88);
				impresion();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(89);
				retorno();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class OperacionTextoContext extends ParserRuleContext {
		public OperacionTextoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operacionTexto; }
	 
		public OperacionTextoContext() { }
		public void copyFrom(OperacionTextoContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class OpTransformacionContext extends OperacionTextoContext {
		public TerminalNode ID() { return getToken(LenguajeTextoParser.ID, 0); }
		public TerminalNode IGUAL() { return getToken(LenguajeTextoParser.IGUAL, 0); }
		public TransformacionContext transformacion() {
			return getRuleContext(TransformacionContext.class,0);
		}
		public TerminalNode PARIZQ() { return getToken(LenguajeTextoParser.PARIZQ, 0); }
		public TerminalNode PARDER() { return getToken(LenguajeTextoParser.PARDER, 0); }
		public TerminalNode PUNTOCOMA() { return getToken(LenguajeTextoParser.PUNTOCOMA, 0); }
		public ParametrosContext parametros() {
			return getRuleContext(ParametrosContext.class,0);
		}
		public OpTransformacionContext(OperacionTextoContext ctx) { copyFrom(ctx); }
	}

	public final OperacionTextoContext operacionTexto() throws RecognitionException {
		OperacionTextoContext _localctx = new OperacionTextoContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_operacionTexto);
		int _la;
		try {
			_localctx = new OpTransformacionContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(92);
			match(ID);
			setState(93);
			match(IGUAL);
			setState(94);
			transformacion();
			setState(95);
			match(PARIZQ);
			setState(97);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1836000L) != 0)) {
				{
				setState(96);
				parametros();
				}
			}

			setState(99);
			match(PARDER);
			setState(100);
			match(PUNTOCOMA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConcatenarContext extends ParserRuleContext {
		public ConcatenarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_concatenar; }
	 
		public ConcatenarContext() { }
		public void copyFrom(ConcatenarContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class OpConcatenarContext extends ConcatenarContext {
		public TerminalNode ID() { return getToken(LenguajeTextoParser.ID, 0); }
		public TerminalNode IGUAL() { return getToken(LenguajeTextoParser.IGUAL, 0); }
		public List<CadenaContext> cadena() {
			return getRuleContexts(CadenaContext.class);
		}
		public CadenaContext cadena(int i) {
			return getRuleContext(CadenaContext.class,i);
		}
		public TerminalNode MAS() { return getToken(LenguajeTextoParser.MAS, 0); }
		public TerminalNode PUNTOCOMA() { return getToken(LenguajeTextoParser.PUNTOCOMA, 0); }
		public OpConcatenarContext(ConcatenarContext ctx) { copyFrom(ctx); }
	}

	public final ConcatenarContext concatenar() throws RecognitionException {
		ConcatenarContext _localctx = new ConcatenarContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_concatenar);
		try {
			_localctx = new OpConcatenarContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(102);
			match(ID);
			setState(103);
			match(IGUAL);
			setState(104);
			cadena();
			setState(105);
			match(MAS);
			setState(106);
			cadena();
			setState(107);
			match(PUNTOCOMA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ImpresionContext extends ParserRuleContext {
		public ImpresionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_impresion; }
	 
		public ImpresionContext() { }
		public void copyFrom(ImpresionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ImprimirStmtContext extends ImpresionContext {
		public TerminalNode IMPRIMIR() { return getToken(LenguajeTextoParser.IMPRIMIR, 0); }
		public TerminalNode PARIZQ() { return getToken(LenguajeTextoParser.PARIZQ, 0); }
		public ExpresionContext expresion() {
			return getRuleContext(ExpresionContext.class,0);
		}
		public TerminalNode PARDER() { return getToken(LenguajeTextoParser.PARDER, 0); }
		public TerminalNode PUNTOCOMA() { return getToken(LenguajeTextoParser.PUNTOCOMA, 0); }
		public ImprimirStmtContext(ImpresionContext ctx) { copyFrom(ctx); }
	}

	public final ImpresionContext impresion() throws RecognitionException {
		ImpresionContext _localctx = new ImpresionContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_impresion);
		try {
			_localctx = new ImprimirStmtContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(109);
			match(IMPRIMIR);
			setState(110);
			match(PARIZQ);
			setState(111);
			expresion();
			setState(112);
			match(PARDER);
			setState(113);
			match(PUNTOCOMA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RetornoContext extends ParserRuleContext {
		public RetornoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_retorno; }
	 
		public RetornoContext() { }
		public void copyFrom(RetornoContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class RetornoStmtContext extends RetornoContext {
		public TerminalNode DEVOLVER() { return getToken(LenguajeTextoParser.DEVOLVER, 0); }
		public ExpresionContext expresion() {
			return getRuleContext(ExpresionContext.class,0);
		}
		public TerminalNode PUNTOCOMA() { return getToken(LenguajeTextoParser.PUNTOCOMA, 0); }
		public RetornoStmtContext(RetornoContext ctx) { copyFrom(ctx); }
	}

	public final RetornoContext retorno() throws RecognitionException {
		RetornoContext _localctx = new RetornoContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_retorno);
		try {
			_localctx = new RetornoStmtContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(115);
			match(DEVOLVER);
			setState(116);
			expresion();
			setState(117);
			match(PUNTOCOMA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpresionContext extends ParserRuleContext {
		public ExpresionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expresion; }
	 
		public ExpresionContext() { }
		public void copyFrom(ExpresionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ExprTransformacionContext extends ExpresionContext {
		public TransformacionContext transformacion() {
			return getRuleContext(TransformacionContext.class,0);
		}
		public TerminalNode PARIZQ() { return getToken(LenguajeTextoParser.PARIZQ, 0); }
		public TerminalNode PARDER() { return getToken(LenguajeTextoParser.PARDER, 0); }
		public ParametrosContext parametros() {
			return getRuleContext(ParametrosContext.class,0);
		}
		public ExprTransformacionContext(ExpresionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ExprValorContext extends ExpresionContext {
		public ValorContext valor() {
			return getRuleContext(ValorContext.class,0);
		}
		public ExprValorContext(ExpresionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ExprConcatenacionContext extends ExpresionContext {
		public List<CadenaContext> cadena() {
			return getRuleContexts(CadenaContext.class);
		}
		public CadenaContext cadena(int i) {
			return getRuleContext(CadenaContext.class,i);
		}
		public TerminalNode MAS() { return getToken(LenguajeTextoParser.MAS, 0); }
		public ExprConcatenacionContext(ExpresionContext ctx) { copyFrom(ctx); }
	}

	public final ExpresionContext expresion() throws RecognitionException {
		ExpresionContext _localctx = new ExpresionContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_expresion);
		int _la;
		try {
			setState(131);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				_localctx = new ExprTransformacionContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(119);
				transformacion();
				setState(120);
				match(PARIZQ);
				setState(122);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1836000L) != 0)) {
					{
					setState(121);
					parametros();
					}
				}

				setState(124);
				match(PARDER);
				}
				break;
			case 2:
				_localctx = new ExprConcatenacionContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(126);
				cadena();
				setState(127);
				match(MAS);
				setState(128);
				cadena();
				}
				break;
			case 3:
				_localctx = new ExprValorContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(130);
				valor();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParametrosContext extends ParserRuleContext {
		public List<ExpresionContext> expresion() {
			return getRuleContexts(ExpresionContext.class);
		}
		public ExpresionContext expresion(int i) {
			return getRuleContext(ExpresionContext.class,i);
		}
		public List<TerminalNode> COMA() { return getTokens(LenguajeTextoParser.COMA); }
		public TerminalNode COMA(int i) {
			return getToken(LenguajeTextoParser.COMA, i);
		}
		public ParametrosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parametros; }
	}

	public final ParametrosContext parametros() throws RecognitionException {
		ParametrosContext _localctx = new ParametrosContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_parametros);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(133);
			expresion();
			setState(138);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMA) {
				{
				{
				setState(134);
				match(COMA);
				setState(135);
				expresion();
				}
				}
				setState(140);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ValorContext extends ParserRuleContext {
		public TerminalNode TEXTO() { return getToken(LenguajeTextoParser.TEXTO, 0); }
		public TerminalNode NUMERO() { return getToken(LenguajeTextoParser.NUMERO, 0); }
		public TerminalNode ID() { return getToken(LenguajeTextoParser.ID, 0); }
		public ValorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valor; }
	}

	public final ValorContext valor() throws RecognitionException {
		ValorContext _localctx = new ValorContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_valor);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(141);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1835008L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CadenaContext extends ParserRuleContext {
		public TerminalNode TEXTO() { return getToken(LenguajeTextoParser.TEXTO, 0); }
		public TerminalNode ID() { return getToken(LenguajeTextoParser.ID, 0); }
		public CadenaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cadena; }
	}

	public final CadenaContext cadena() throws RecognitionException {
		CadenaContext _localctx = new CadenaContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_cadena);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(143);
			_la = _input.LA(1);
			if ( !(_la==ID || _la==TEXTO) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TransformacionContext extends ParserRuleContext {
		public TerminalNode MAYUSCULAS() { return getToken(LenguajeTextoParser.MAYUSCULAS, 0); }
		public TerminalNode MINUSCULAS() { return getToken(LenguajeTextoParser.MINUSCULAS, 0); }
		public TerminalNode LONGITUD() { return getToken(LenguajeTextoParser.LONGITUD, 0); }
		public TerminalNode INVERTIR() { return getToken(LenguajeTextoParser.INVERTIR, 0); }
		public TerminalNode REEMPLAZAR() { return getToken(LenguajeTextoParser.REEMPLAZAR, 0); }
		public TransformacionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_transformacion; }
	}

	public final TransformacionContext transformacion() throws RecognitionException {
		TransformacionContext _localctx = new TransformacionContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_transformacion);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(145);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 992L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0016\u0094\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007"+
		"\u000f\u0001\u0000\u0005\u0000\"\b\u0000\n\u0000\f\u0000%\t\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001,\b"+
		"\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u00022\b"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0003\u0003:\b\u0003\u0001\u0003\u0003\u0003=\b\u0003\u0001\u0003"+
		"\u0001\u0003\u0005\u0003A\b\u0003\n\u0003\f\u0003D\t\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0005\u0004K\b\u0004"+
		"\n\u0004\f\u0004N\t\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0003\u0005U\b\u0005\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0003\u0006[\b\u0006\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0003\u0007b\b\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\u000b\u0001\u000b\u0001\u000b\u0003\u000b{\b\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0003\u000b\u0084\b\u000b\u0001\f\u0001\f\u0001\f\u0005\f\u0089\b\f\n"+
		"\f\f\f\u008c\t\f\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0000\u0000\u0010\u0000\u0002\u0004\u0006\b\n\f\u000e"+
		"\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e\u0000\u0003\u0001\u0000"+
		"\u0012\u0014\u0001\u0000\u0013\u0014\u0001\u0000\u0005\t\u0097\u0000#"+
		"\u0001\u0000\u0000\u0000\u0002+\u0001\u0000\u0000\u0000\u0004-\u0001\u0000"+
		"\u0000\u0000\u00065\u0001\u0000\u0000\u0000\bG\u0001\u0000\u0000\u0000"+
		"\nT\u0001\u0000\u0000\u0000\fZ\u0001\u0000\u0000\u0000\u000e\\\u0001\u0000"+
		"\u0000\u0000\u0010f\u0001\u0000\u0000\u0000\u0012m\u0001\u0000\u0000\u0000"+
		"\u0014s\u0001\u0000\u0000\u0000\u0016\u0083\u0001\u0000\u0000\u0000\u0018"+
		"\u0085\u0001\u0000\u0000\u0000\u001a\u008d\u0001\u0000\u0000\u0000\u001c"+
		"\u008f\u0001\u0000\u0000\u0000\u001e\u0091\u0001\u0000\u0000\u0000 \""+
		"\u0003\u0002\u0001\u0000! \u0001\u0000\u0000\u0000\"%\u0001\u0000\u0000"+
		"\u0000#!\u0001\u0000\u0000\u0000#$\u0001\u0000\u0000\u0000$&\u0001\u0000"+
		"\u0000\u0000%#\u0001\u0000\u0000\u0000&\'\u0005\u0000\u0000\u0001\'\u0001"+
		"\u0001\u0000\u0000\u0000(,\u0003\u0004\u0002\u0000),\u0003\u0006\u0003"+
		"\u0000*,\u0003\f\u0006\u0000+(\u0001\u0000\u0000\u0000+)\u0001\u0000\u0000"+
		"\u0000+*\u0001\u0000\u0000\u0000,\u0003\u0001\u0000\u0000\u0000-.\u0005"+
		"\u0001\u0000\u0000.1\u0005\u0013\u0000\u0000/0\u0005\n\u0000\u000002\u0003"+
		"\u0016\u000b\u00001/\u0001\u0000\u0000\u000012\u0001\u0000\u0000\u0000"+
		"23\u0001\u0000\u0000\u000034\u0005\u000b\u0000\u00004\u0005\u0001\u0000"+
		"\u0000\u000056\u0005\u0002\u0000\u00006<\u0005\u0013\u0000\u000079\u0005"+
		"\u000e\u0000\u00008:\u0003\b\u0004\u000098\u0001\u0000\u0000\u00009:\u0001"+
		"\u0000\u0000\u0000:;\u0001\u0000\u0000\u0000;=\u0005\u000f\u0000\u0000"+
		"<7\u0001\u0000\u0000\u0000<=\u0001\u0000\u0000\u0000=>\u0001\u0000\u0000"+
		"\u0000>B\u0005\u0010\u0000\u0000?A\u0003\n\u0005\u0000@?\u0001\u0000\u0000"+
		"\u0000AD\u0001\u0000\u0000\u0000B@\u0001\u0000\u0000\u0000BC\u0001\u0000"+
		"\u0000\u0000CE\u0001\u0000\u0000\u0000DB\u0001\u0000\u0000\u0000EF\u0005"+
		"\u0011\u0000\u0000F\u0007\u0001\u0000\u0000\u0000GL\u0005\u0013\u0000"+
		"\u0000HI\u0005\f\u0000\u0000IK\u0005\u0013\u0000\u0000JH\u0001\u0000\u0000"+
		"\u0000KN\u0001\u0000\u0000\u0000LJ\u0001\u0000\u0000\u0000LM\u0001\u0000"+
		"\u0000\u0000M\t\u0001\u0000\u0000\u0000NL\u0001\u0000\u0000\u0000OU\u0003"+
		"\u0004\u0002\u0000PU\u0003\u000e\u0007\u0000QU\u0003\u0010\b\u0000RU\u0003"+
		"\u0012\t\u0000SU\u0003\u0014\n\u0000TO\u0001\u0000\u0000\u0000TP\u0001"+
		"\u0000\u0000\u0000TQ\u0001\u0000\u0000\u0000TR\u0001\u0000\u0000\u0000"+
		"TS\u0001\u0000\u0000\u0000U\u000b\u0001\u0000\u0000\u0000V[\u0003\u000e"+
		"\u0007\u0000W[\u0003\u0010\b\u0000X[\u0003\u0012\t\u0000Y[\u0003\u0014"+
		"\n\u0000ZV\u0001\u0000\u0000\u0000ZW\u0001\u0000\u0000\u0000ZX\u0001\u0000"+
		"\u0000\u0000ZY\u0001\u0000\u0000\u0000[\r\u0001\u0000\u0000\u0000\\]\u0005"+
		"\u0013\u0000\u0000]^\u0005\n\u0000\u0000^_\u0003\u001e\u000f\u0000_a\u0005"+
		"\u000e\u0000\u0000`b\u0003\u0018\f\u0000a`\u0001\u0000\u0000\u0000ab\u0001"+
		"\u0000\u0000\u0000bc\u0001\u0000\u0000\u0000cd\u0005\u000f\u0000\u0000"+
		"de\u0005\u000b\u0000\u0000e\u000f\u0001\u0000\u0000\u0000fg\u0005\u0013"+
		"\u0000\u0000gh\u0005\n\u0000\u0000hi\u0003\u001c\u000e\u0000ij\u0005\r"+
		"\u0000\u0000jk\u0003\u001c\u000e\u0000kl\u0005\u000b\u0000\u0000l\u0011"+
		"\u0001\u0000\u0000\u0000mn\u0005\u0003\u0000\u0000no\u0005\u000e\u0000"+
		"\u0000op\u0003\u0016\u000b\u0000pq\u0005\u000f\u0000\u0000qr\u0005\u000b"+
		"\u0000\u0000r\u0013\u0001\u0000\u0000\u0000st\u0005\u0004\u0000\u0000"+
		"tu\u0003\u0016\u000b\u0000uv\u0005\u000b\u0000\u0000v\u0015\u0001\u0000"+
		"\u0000\u0000wx\u0003\u001e\u000f\u0000xz\u0005\u000e\u0000\u0000y{\u0003"+
		"\u0018\f\u0000zy\u0001\u0000\u0000\u0000z{\u0001\u0000\u0000\u0000{|\u0001"+
		"\u0000\u0000\u0000|}\u0005\u000f\u0000\u0000}\u0084\u0001\u0000\u0000"+
		"\u0000~\u007f\u0003\u001c\u000e\u0000\u007f\u0080\u0005\r\u0000\u0000"+
		"\u0080\u0081\u0003\u001c\u000e\u0000\u0081\u0084\u0001\u0000\u0000\u0000"+
		"\u0082\u0084\u0003\u001a\r\u0000\u0083w\u0001\u0000\u0000\u0000\u0083"+
		"~\u0001\u0000\u0000\u0000\u0083\u0082\u0001\u0000\u0000\u0000\u0084\u0017"+
		"\u0001\u0000\u0000\u0000\u0085\u008a\u0003\u0016\u000b\u0000\u0086\u0087"+
		"\u0005\f\u0000\u0000\u0087\u0089\u0003\u0016\u000b\u0000\u0088\u0086\u0001"+
		"\u0000\u0000\u0000\u0089\u008c\u0001\u0000\u0000\u0000\u008a\u0088\u0001"+
		"\u0000\u0000\u0000\u008a\u008b\u0001\u0000\u0000\u0000\u008b\u0019\u0001"+
		"\u0000\u0000\u0000\u008c\u008a\u0001\u0000\u0000\u0000\u008d\u008e\u0007"+
		"\u0000\u0000\u0000\u008e\u001b\u0001\u0000\u0000\u0000\u008f\u0090\u0007"+
		"\u0001\u0000\u0000\u0090\u001d\u0001\u0000\u0000\u0000\u0091\u0092\u0007"+
		"\u0002\u0000\u0000\u0092\u001f\u0001\u0000\u0000\u0000\r#+19<BLTZaz\u0083"+
		"\u008a";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}