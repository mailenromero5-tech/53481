// Generated from LogicFormula.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LogicFormulaVisitor from './LogicFormulaVisitor.js';

const serializedATN = [4,1,8,49,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,1,0,1,0,1,1,1,1,1,1,3,1,19,8,1,1,2,1,2,1,2,5,2,24,8,2,10,2,12,
2,27,9,2,1,3,1,3,1,3,5,3,32,8,3,10,3,12,3,35,9,3,1,4,1,4,1,4,3,4,40,8,4,
1,5,1,5,1,5,1,5,1,5,3,5,47,8,5,1,5,0,0,6,0,2,4,6,8,10,0,0,47,0,12,1,0,0,
0,2,15,1,0,0,0,4,20,1,0,0,0,6,28,1,0,0,0,8,39,1,0,0,0,10,46,1,0,0,0,12,13,
3,2,1,0,13,14,5,0,0,1,14,1,1,0,0,0,15,18,3,4,2,0,16,17,5,1,0,0,17,19,3,2,
1,0,18,16,1,0,0,0,18,19,1,0,0,0,19,3,1,0,0,0,20,25,3,6,3,0,21,22,5,2,0,0,
22,24,3,6,3,0,23,21,1,0,0,0,24,27,1,0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,
5,1,0,0,0,27,25,1,0,0,0,28,33,3,8,4,0,29,30,5,3,0,0,30,32,3,8,4,0,31,29,
1,0,0,0,32,35,1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,7,1,0,0,0,35,33,1,0,
0,0,36,37,5,4,0,0,37,40,3,8,4,0,38,40,3,10,5,0,39,36,1,0,0,0,39,38,1,0,0,
0,40,9,1,0,0,0,41,47,5,7,0,0,42,43,5,5,0,0,43,44,3,2,1,0,44,45,5,6,0,0,45,
47,1,0,0,0,46,41,1,0,0,0,46,42,1,0,0,0,47,11,1,0,0,0,5,18,25,33,39,46];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LogicFormulaParser extends antlr4.Parser {

    static grammarFileName = "LogicFormula.g4";
    static literalNames = [ null, "'->'", "'|'", "'^'", "'\\u00AC'", "'('", 
                            "')'" ];
    static symbolicNames = [ null, "IMPLIES", "OR", "AND", "UNARY_OP", "LPAREN", 
                             "RPAREN", "VARIABLE", "WS" ];
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
	        this.state = 13;
	        this.match(LogicFormulaParser.EOF);
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
	        this.state = 15;
	        this.disjunction();
	        this.state = 18;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 16;
	            this.match(LogicFormulaParser.IMPLIES);
	            this.state = 17;
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
	        this.state = 20;
	        this.conjunction();
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 21;
	            this.match(LogicFormulaParser.OR);
	            this.state = 22;
	            this.conjunction();
	            this.state = 27;
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
	        this.state = 28;
	        this.negation();
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 29;
	            this.match(LogicFormulaParser.AND);
	            this.state = 30;
	            this.negation();
	            this.state = 35;
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
	        this.state = 39;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            localctx = new NegaContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 36;
	            this.match(LogicFormulaParser.UNARY_OP);
	            this.state = 37;
	            this.negation();
	            break;
	        case 5:
	        case 7:
	            localctx = new PrimaryruleContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 38;
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
	        this.state = 46;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            localctx = new VariableExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 41;
	            this.match(LogicFormulaParser.VARIABLE);
	            break;
	        case 5:
	            localctx = new ParensContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 42;
	            this.match(LogicFormulaParser.LPAREN);
	            this.state = 43;
	            this.implication();
	            this.state = 44;
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
LogicFormulaParser.IMPLIES = 1;
LogicFormulaParser.OR = 2;
LogicFormulaParser.AND = 3;
LogicFormulaParser.UNARY_OP = 4;
LogicFormulaParser.LPAREN = 5;
LogicFormulaParser.RPAREN = 6;
LogicFormulaParser.VARIABLE = 7;
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

	EOF() {
	    return this.getToken(LogicFormulaParser.EOF, 0);
	};

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

	UNARY_OP() {
	    return this.getToken(LogicFormulaParser.UNARY_OP, 0);
	};

	negation() {
	    return this.getTypedRuleContext(NegationContext,0);
	};

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

	implication() {
	    return this.getTypedRuleContext(ImplicationContext,0);
	};

	RPAREN() {
	    return this.getToken(LogicFormulaParser.RPAREN, 0);
	};

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
