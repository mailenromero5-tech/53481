import { Parser } from "antlr4";
import LogicFormulaVisitor from "./generated/LogicFormulaVisitor.js";
import LogicFormulaParser from "./generated/LogicFormulaParser.js";

export class CustomLogicFormulaVisitor extends LogicFormulaVisitor {

    constructor() {
        super();
        this.memory = new Map();   //Declaro una variable de instancia con una memoria temporal para hacer las reducciones
    } 
    
    visitFormula (ctx) {
        return this.visit(ctx.implication());
    }
 // implication : disjunction (IMPLIES implication)?  #implica
    visitImplica (ctx) {
        const left = this.visit(ctx.disjunction());
         if (ctx.implication ()) {
            const right = this.visit(ctx.implication());
            return `(!(${left}) || (${right}))`;
      }
      return left; 
    }

//disjunction : conjunction (OR conjunction)*  #disjun
    visitDisjun (ctx) {
         const parts = ctx.conjunction().map(c => this.visit(c));
        if (parts.length === 1) {
            return parts[0];
        }
        return `(${parts.join(" || ")})`;
    }
 // conjunction : negation (AND negation)*  #conjunc
    visitConjunc(ctx) {
        const parts = ctx.negation().map(n => this.visit(n));
        if (parts.length === 1) {
            return parts[0];
        }
        return `(${parts.join(" && ")})`;
    }
  // negation : NOT negation  #nega
    visitNega(ctx) {
        return `!(${this.visit(ctx.negation())})`;
    }

    // negation : primary  #primaryrule
    visitPrimaryrule(ctx) {
        return this.visit(ctx.primary());
    }

    // primary : VARIABLE  #variableExpr
    visitVariableExpr(ctx) {
    const name = ctx.VARIABLE().getText();
    return `context.${name}`;
    }
    // primary : LPAREN formula RPAREN  #parens
    visitParens(ctx) {
        return `(${this.visit(ctx.formula())})`;
    }
  }