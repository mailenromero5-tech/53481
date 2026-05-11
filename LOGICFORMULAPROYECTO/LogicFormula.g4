grammar LogicFormula;

//Gramatica
formula
        :implication EOF
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
        : UNARY_OP negation                              #nega
        | primary                                   #primaryrule
        ; 
primary 
        : VARIABLE                                  #variableExpr
        // Se usa implication en lugar de formula
        // porque formula contiene EOF y dentro de paréntesis no debe esperarse el fin de archivo
        | LPAREN implication RPAREN        #parens 
        ; 

//Lexemas
IMPLIES: '->' ;
OR: '|';
AND: '^' ;
UNARY_OP:'¬';  
LPAREN: '(' ;
RPAREN: ')' ; 
VARIABLE: [a-zA-Z][a-zA-Z0-9]* ;
WS: [ \t\r\n]+ -> skip ;

