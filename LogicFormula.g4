grammar LogicFormula;

//Gramatica
formula
        :implication 
        ; 

implication
         :disjunction (IMPLIES implication)?        #implica
         ; 
disjunction
        :conjunction (OR conjunction)*               #disjun
        ;
conjunction
        :negation (AND negation)*                   #conjunc
        ;
negation
        : NOT negation                              #nega
        | primary                                   #primaryrule
        ; 
primary 
        : VARIABLE                                  #variableExpr
        | LPAREN formula RPAREN        #parens 
        ; 

//Lexemas
VARIABLE: [a-zA-Z][a-zA-Z0-9]* ;
IMPLIES: '->' ;
OR: '|';
AND: '^' ;
NOT:'¬';  
LPAREN: '(' ;
RPAREN: ')' ; 
WS: [ \t\r\n]+ -> skip ;
