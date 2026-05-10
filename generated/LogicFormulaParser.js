// Generated from LogicFormula.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LogicFormulaListener from './LogicFormulaListener.js';
import LogicFormulaVisitor from './LogicFormulaVisitor.js';

const serializedATN = [4,1,8,48,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,1,0,1,1,1,1,1,1,3,1,18,8,1,1,2,1,2,1,2,5,2,23,8,2,10,2,12,2,
26,9,2,1,3,1,3,1,3,5,3,31,8,3,10,3,12,3,34,9,3,1,4,1,4,1,4,3,4,39,8,4,1,
5,1,5,1,5,1,5,1,5,3,5,46,8,5,1,5,0,0,6,0,2,4,6,8,10,0,0,46,0,12,1,0,0,0,
2,14,1,0,0,0,4,19,1,0,0,0,6,27,1,0,0,0,8,38,1,0,0,0,10,45,1,0,0,0,12,13,
3,2,1,0,13,1,1,0,0,0,14,17,3,4,2,0,15,16,5,2,0,0,16,18,3,2,1,0,17,15,1,0,
0,0,17,18,1,0,0,0,18,3,1,0,0,0,19,24,3,6,3,0,20,21,5,3,0,0,21,23,3,6,3,0,
22,20,1,0,0,0,23,26,1,0,0,0,24,22,1,0,0,0,24,25,1,0,0,0,25,5,1,0,0,0,26,
24,1,0,0,0,27,32,3,8,4,0,28,29,5,4,0,0,29,31,3,8,4,0,30,28,1,0,0,0,31,34,
1,0,0,0,32,30,1,0,0,0,32,33,1,0,0,0,33,7,1,0,0,0,34,32,1,0,0,0,35,36,5,5,
0,0,36,39,3,8,4,0,37,39,3,10,5,0,38,35,1,0,0,0,38,37,1,0,0,0,39,9,1,0,0,
0,40,46,5,1,0,0,41,42,5,6,0,0,42,43,3,0,0,0,43,44,5,7,0,0,44,46,1,0,0,0,
45,40,1,0,0,0,45,41,1,0,0,0,46,11,1,0,0,0,5,17,24,32,38,45];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LogicFormulaParser extends antlr4.Parser {

    static grammarFileName = "LogicFormula.g4";
    static literalNames = [ null, null, "'->'", "'|'", "'^'", "'\\u00AC'", 
                            "'('", "')'" ];
    static symbolicNames = [ null, "VARIABLE", "IMPLIES", "OR", "AND", "NOT", 
                             "LPAREN", "RPAREN", "WS" ];
    static ruleNames = [ "formula", "implication", "disjunction", "conjunction", 
                         "negation", "primary" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LogicFormulaParser.ruleNames;
        this.literalNames = LogicFormulaParser.literalNames;
        this.symbolicNames = LogicFormulaParser.symbolicNames;
    }



	formula() {
	    let localctx = new FormulaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LogicFormulaParser.RULE_formula);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
	        this.implication();
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



	implication() {
	    let localctx = new ImplicationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LogicFormulaParser.RULE_implication);
	    var _la = 0;
	    try {
	        localctx = new ImplicaContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this.disjunction();
	        this.state = 17;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 15;
	            this.match(LogicFormulaParser.IMPLIES);
	            this.state = 16;
	            this.implication();
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



	disjunction() {
	    let localctx = new DisjunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LogicFormulaParser.RULE_disjunction);
	    var _la = 0;
	    try {
	        localctx = new DisjunContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.conjunction();
	        this.state = 24;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 20;
	            this.match(LogicFormulaParser.OR);
	            this.state = 21;
	            this.conjunction();
	            this.state = 26;
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



	conjunction() {
	    let localctx = new ConjunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LogicFormulaParser.RULE_conjunction);
	    var _la = 0;
	    try {
	        localctx = new ConjuncContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.negation();
	        this.state = 32;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 28;
	            this.match(LogicFormulaParser.AND);
	            this.state = 29;
	            this.negation();
	            this.state = 34;
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



	negation() {
	    let localctx = new NegationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LogicFormulaParser.RULE_negation);
	    try {
	        this.state = 38;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            localctx = new NegaContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 35;
	            this.match(LogicFormulaParser.NOT);
	            this.state = 36;
	            this.negation();
	            break;
	        case 1:
	        case 6:
	            localctx = new PrimaryruleContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 37;
	            this.primary();
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



	primary() {
	    let localctx = new PrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LogicFormulaParser.RULE_primary);
	    try {
	        this.state = 45;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            localctx = new VariableExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 40;
	            this.match(LogicFormulaParser.VARIABLE);
	            break;
	        case 6:
	            localctx = new ParensContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 41;
	            this.match(LogicFormulaParser.LPAREN);
	            this.state = 42;
	            this.formula();
	            this.state = 43;
	            this.match(LogicFormulaParser.RPAREN);
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


}

LogicFormulaParser.EOF = antlr4.Token.EOF;
LogicFormulaParser.VARIABLE = 1;
LogicFormulaParser.IMPLIES = 2;
LogicFormulaParser.OR = 3;
LogicFormulaParser.AND = 4;
LogicFormulaParser.NOT = 5;
LogicFormulaParser.LPAREN = 6;
LogicFormulaParser.RPAREN = 7;
LogicFormulaParser.WS = 8;

LogicFormulaParser.RULE_formula = 0;
LogicFormulaParser.RULE_implication = 1;
LogicFormulaParser.RULE_disjunction = 2;
LogicFormulaParser.RULE_conjunction = 3;
LogicFormulaParser.RULE_negation = 4;
LogicFormulaParser.RULE_primary = 5;

class FormulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicFormulaParser.RULE_formula;
    }

	implication() {
	    return this.getTypedRuleContext(ImplicationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicFormulaListener ) {
	        listener.enterFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicFormulaListener ) {
	        listener.exitFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicFormulaVisitor ) {
	        return visitor.visitFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImplicationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicFormulaParser.RULE_implication;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ImplicaContext extends ImplicationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	disjunction() {
	    return this.getTypedRuleContext(DisjunctionContext,0);
	};

	IMPLIES() {
	    return this.getToken(LogicFormulaParser.IMPLIES, 0);
	};

	implication() {
	    return this.getTypedRuleContext(ImplicationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicFormulaListener ) {
	        listener.enterImplica(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicFormulaListener ) {
	        listener.exitImplica(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicFormulaVisitor ) {
	        return visitor.visitImplica(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LogicFormulaParser.ImplicaContext = ImplicaContext;

class DisjunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicFormulaParser.RULE_disjunction;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DisjunContext extends DisjunctionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	conjunction = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConjunctionContext);
	    } else {
	        return this.getTypedRuleContext(ConjunctionContext,i);
	    }
	};

	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LogicFormulaParser.OR);
	    } else {
	        return this.getToken(LogicFormulaParser.OR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LogicFormulaListener ) {
	        listener.enterDisjun(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicFormulaListener ) {
	        listener.exitDisjun(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicFormulaVisitor ) {
	        return visitor.visitDisjun(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LogicFormulaParser.DisjunContext = DisjunContext;

class ConjunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicFormulaParser.RULE_conjunction;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ConjuncContext extends ConjunctionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	negation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NegationContext);
	    } else {
	        return this.getTypedRuleContext(NegationContext,i);
	    }
	};

	AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LogicFormulaParser.AND);
	    } else {
	        return this.getToken(LogicFormulaParser.AND, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LogicFormulaListener ) {
	        listener.enterConjunc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicFormulaListener ) {
	        listener.exitConjunc(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicFormulaVisitor ) {
	        return visitor.visitConjunc(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LogicFormulaParser.ConjuncContext = ConjuncContext;

class NegationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicFormulaParser.RULE_negation;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class NegaContext extends NegationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NOT() {
	    return this.getToken(LogicFormulaParser.NOT, 0);
	};

	negation() {
	    return this.getTypedRuleContext(NegationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicFormulaListener ) {
	        listener.enterNega(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicFormulaListener ) {
	        listener.exitNega(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicFormulaVisitor ) {
	        return visitor.visitNega(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LogicFormulaParser.NegaContext = NegaContext;

class PrimaryruleContext extends NegationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	primary() {
	    return this.getTypedRuleContext(PrimaryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicFormulaListener ) {
	        listener.enterPrimaryrule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicFormulaListener ) {
	        listener.exitPrimaryrule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicFormulaVisitor ) {
	        return visitor.visitPrimaryrule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LogicFormulaParser.PrimaryruleContext = PrimaryruleContext;

class PrimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicFormulaParser.RULE_primary;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class VariableExprContext extends PrimaryContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	VARIABLE() {
	    return this.getToken(LogicFormulaParser.VARIABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicFormulaListener ) {
	        listener.enterVariableExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicFormulaListener ) {
	        listener.exitVariableExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicFormulaVisitor ) {
	        return visitor.visitVariableExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LogicFormulaParser.VariableExprContext = VariableExprContext;

class ParensContext extends PrimaryContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(LogicFormulaParser.LPAREN, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	RPAREN() {
	    return this.getToken(LogicFormulaParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicFormulaListener ) {
	        listener.enterParens(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicFormulaListener ) {
	        listener.exitParens(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicFormulaVisitor ) {
	        return visitor.visitParens(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LogicFormulaParser.ParensContext = ParensContext;


LogicFormulaParser.FormulaContext = FormulaContext; 
LogicFormulaParser.ImplicationContext = ImplicationContext; 
LogicFormulaParser.DisjunctionContext = DisjunctionContext; 
LogicFormulaParser.ConjunctionContext = ConjunctionContext; 
LogicFormulaParser.NegationContext = NegationContext; 
LogicFormulaParser.PrimaryContext = PrimaryContext; 
