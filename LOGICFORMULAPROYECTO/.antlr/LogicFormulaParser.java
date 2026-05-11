// Generated from c:/Users/ASUS/ssl-antlr-53481/LOGICFORMULAPROYECTO/LogicFormula.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class LogicFormulaParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		IMPLIES=1, OR=2, AND=3, UNARY_OP=4, LPAREN=5, RPAREN=6, VARIABLE=7, WS=8;
	public static final int
		RULE_formula = 0, RULE_implication = 1, RULE_disjunction = 2, RULE_conjunction = 3, 
		RULE_negation = 4, RULE_primary = 5;
	private static String[] makeRuleNames() {
		return new String[] {
			"formula", "implication", "disjunction", "conjunction", "negation", "primary"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'->'", "'|'", "'^'", "'\\u00AC'", "'('", "')'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "IMPLIES", "OR", "AND", "UNARY_OP", "LPAREN", "RPAREN", "VARIABLE", 
			"WS"
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
	public String getGrammarFileName() { return "LogicFormula.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public LogicFormulaParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FormulaContext extends ParserRuleContext {
		public ImplicationContext implication() {
			return getRuleContext(ImplicationContext.class,0);
		}
		public TerminalNode EOF() { return getToken(LogicFormulaParser.EOF, 0); }
		public FormulaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formula; }
	}

	public final FormulaContext formula() throws RecognitionException {
		FormulaContext _localctx = new FormulaContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_formula);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(12);
			implication();
			setState(13);
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
	public static class ImplicationContext extends ParserRuleContext {
		public ImplicationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_implication; }
	 
		public ImplicationContext() { }
		public void copyFrom(ImplicationContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ImplicaContext extends ImplicationContext {
		public DisjunctionContext disjunction() {
			return getRuleContext(DisjunctionContext.class,0);
		}
		public TerminalNode IMPLIES() { return getToken(LogicFormulaParser.IMPLIES, 0); }
		public ImplicationContext implication() {
			return getRuleContext(ImplicationContext.class,0);
		}
		public ImplicaContext(ImplicationContext ctx) { copyFrom(ctx); }
	}

	public final ImplicationContext implication() throws RecognitionException {
		ImplicationContext _localctx = new ImplicationContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_implication);
		int _la;
		try {
			_localctx = new ImplicaContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(15);
			disjunction();
			setState(18);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IMPLIES) {
				{
				setState(16);
				match(IMPLIES);
				setState(17);
				implication();
				}
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
	public static class DisjunctionContext extends ParserRuleContext {
		public DisjunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_disjunction; }
	 
		public DisjunctionContext() { }
		public void copyFrom(DisjunctionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DisjunContext extends DisjunctionContext {
		public List<ConjunctionContext> conjunction() {
			return getRuleContexts(ConjunctionContext.class);
		}
		public ConjunctionContext conjunction(int i) {
			return getRuleContext(ConjunctionContext.class,i);
		}
		public List<TerminalNode> OR() { return getTokens(LogicFormulaParser.OR); }
		public TerminalNode OR(int i) {
			return getToken(LogicFormulaParser.OR, i);
		}
		public DisjunContext(DisjunctionContext ctx) { copyFrom(ctx); }
	}

	public final DisjunctionContext disjunction() throws RecognitionException {
		DisjunctionContext _localctx = new DisjunctionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_disjunction);
		int _la;
		try {
			_localctx = new DisjunContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(20);
			conjunction();
			setState(25);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==OR) {
				{
				{
				setState(21);
				match(OR);
				setState(22);
				conjunction();
				}
				}
				setState(27);
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
	public static class ConjunctionContext extends ParserRuleContext {
		public ConjunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conjunction; }
	 
		public ConjunctionContext() { }
		public void copyFrom(ConjunctionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ConjuncContext extends ConjunctionContext {
		public List<NegationContext> negation() {
			return getRuleContexts(NegationContext.class);
		}
		public NegationContext negation(int i) {
			return getRuleContext(NegationContext.class,i);
		}
		public List<TerminalNode> AND() { return getTokens(LogicFormulaParser.AND); }
		public TerminalNode AND(int i) {
			return getToken(LogicFormulaParser.AND, i);
		}
		public ConjuncContext(ConjunctionContext ctx) { copyFrom(ctx); }
	}

	public final ConjunctionContext conjunction() throws RecognitionException {
		ConjunctionContext _localctx = new ConjunctionContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_conjunction);
		int _la;
		try {
			_localctx = new ConjuncContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(28);
			negation();
			setState(33);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==AND) {
				{
				{
				setState(29);
				match(AND);
				setState(30);
				negation();
				}
				}
				setState(35);
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
	public static class NegationContext extends ParserRuleContext {
		public NegationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_negation; }
	 
		public NegationContext() { }
		public void copyFrom(NegationContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class NegaContext extends NegationContext {
		public TerminalNode UNARY_OP() { return getToken(LogicFormulaParser.UNARY_OP, 0); }
		public NegationContext negation() {
			return getRuleContext(NegationContext.class,0);
		}
		public NegaContext(NegationContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PrimaryruleContext extends NegationContext {
		public PrimaryContext primary() {
			return getRuleContext(PrimaryContext.class,0);
		}
		public PrimaryruleContext(NegationContext ctx) { copyFrom(ctx); }
	}

	public final NegationContext negation() throws RecognitionException {
		NegationContext _localctx = new NegationContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_negation);
		try {
			setState(39);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case UNARY_OP:
				_localctx = new NegaContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(36);
				match(UNARY_OP);
				setState(37);
				negation();
				}
				break;
			case LPAREN:
			case VARIABLE:
				_localctx = new PrimaryruleContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(38);
				primary();
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
	public static class PrimaryContext extends ParserRuleContext {
		public PrimaryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primary; }
	 
		public PrimaryContext() { }
		public void copyFrom(PrimaryContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class VariableExprContext extends PrimaryContext {
		public TerminalNode VARIABLE() { return getToken(LogicFormulaParser.VARIABLE, 0); }
		public VariableExprContext(PrimaryContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ParensContext extends PrimaryContext {
		public TerminalNode LPAREN() { return getToken(LogicFormulaParser.LPAREN, 0); }
		public ImplicationContext implication() {
			return getRuleContext(ImplicationContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(LogicFormulaParser.RPAREN, 0); }
		public ParensContext(PrimaryContext ctx) { copyFrom(ctx); }
	}

	public final PrimaryContext primary() throws RecognitionException {
		PrimaryContext _localctx = new PrimaryContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_primary);
		try {
			setState(46);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case VARIABLE:
				_localctx = new VariableExprContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(41);
				match(VARIABLE);
				}
				break;
			case LPAREN:
				_localctx = new ParensContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(42);
				match(LPAREN);
				setState(43);
				implication();
				setState(44);
				match(RPAREN);
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

	public static final String _serializedATN =
		"\u0004\u0001\b1\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0003\u0001\u0013\b\u0001\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0005\u0002\u0018\b\u0002\n\u0002\f\u0002\u001b\t\u0002\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0005\u0003 \b\u0003\n\u0003\f\u0003#\t\u0003"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004(\b\u0004\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005/\b\u0005"+
		"\u0001\u0005\u0000\u0000\u0006\u0000\u0002\u0004\u0006\b\n\u0000\u0000"+
		"/\u0000\f\u0001\u0000\u0000\u0000\u0002\u000f\u0001\u0000\u0000\u0000"+
		"\u0004\u0014\u0001\u0000\u0000\u0000\u0006\u001c\u0001\u0000\u0000\u0000"+
		"\b\'\u0001\u0000\u0000\u0000\n.\u0001\u0000\u0000\u0000\f\r\u0003\u0002"+
		"\u0001\u0000\r\u000e\u0005\u0000\u0000\u0001\u000e\u0001\u0001\u0000\u0000"+
		"\u0000\u000f\u0012\u0003\u0004\u0002\u0000\u0010\u0011\u0005\u0001\u0000"+
		"\u0000\u0011\u0013\u0003\u0002\u0001\u0000\u0012\u0010\u0001\u0000\u0000"+
		"\u0000\u0012\u0013\u0001\u0000\u0000\u0000\u0013\u0003\u0001\u0000\u0000"+
		"\u0000\u0014\u0019\u0003\u0006\u0003\u0000\u0015\u0016\u0005\u0002\u0000"+
		"\u0000\u0016\u0018\u0003\u0006\u0003\u0000\u0017\u0015\u0001\u0000\u0000"+
		"\u0000\u0018\u001b\u0001\u0000\u0000\u0000\u0019\u0017\u0001\u0000\u0000"+
		"\u0000\u0019\u001a\u0001\u0000\u0000\u0000\u001a\u0005\u0001\u0000\u0000"+
		"\u0000\u001b\u0019\u0001\u0000\u0000\u0000\u001c!\u0003\b\u0004\u0000"+
		"\u001d\u001e\u0005\u0003\u0000\u0000\u001e \u0003\b\u0004\u0000\u001f"+
		"\u001d\u0001\u0000\u0000\u0000 #\u0001\u0000\u0000\u0000!\u001f\u0001"+
		"\u0000\u0000\u0000!\"\u0001\u0000\u0000\u0000\"\u0007\u0001\u0000\u0000"+
		"\u0000#!\u0001\u0000\u0000\u0000$%\u0005\u0004\u0000\u0000%(\u0003\b\u0004"+
		"\u0000&(\u0003\n\u0005\u0000\'$\u0001\u0000\u0000\u0000\'&\u0001\u0000"+
		"\u0000\u0000(\t\u0001\u0000\u0000\u0000)/\u0005\u0007\u0000\u0000*+\u0005"+
		"\u0005\u0000\u0000+,\u0003\u0002\u0001\u0000,-\u0005\u0006\u0000\u0000"+
		"-/\u0001\u0000\u0000\u0000.)\u0001\u0000\u0000\u0000.*\u0001\u0000\u0000"+
		"\u0000/\u000b\u0001\u0000\u0000\u0000\u0005\u0012\u0019!\'.";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}