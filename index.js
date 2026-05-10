import LogicFormulaLexer from "./generated/LogicFormulaLexer.js";
import LogicFormulaParser from "./generated/LogicFormulaParser.js";
import { CustomLogicFormulaVisitor } from "./CustomCalculatorVisitor.js";
import antlr4, { CharStreams, CommonTokenStream} from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

    //  Leer desde input.txt
    try {
        input = fs.readFileSync('inputs/input.txt', 'utf8')
    } catch (err) {
        // Si no es posible leer el archivo, solicitar la entrada del usuario por teclado
        input = await leerCadena(); // Simula lectura síncrona
        console.log(input);
    }

    // Proceso la entrada con el analizador e imprimo el arbol de analisis en formato texto
    let inputStream = CharStreams.fromString(input);
    let lexer = new LogicFormulaLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new LogicFormulaParser(tokenStream);
    let tree = parser.formula ();
    
    // Verifico si se produjeron errores
    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } 
    else {
        console.log("\nEntrada válida.");
        imprimirTablaTokens(tokenStream, parser);
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${cadena_tree}`);

        // Utilizo un listener y un walker para recorrer el arbol e indicar cada vez que reconoce una sentencia (stat)
        //const listener = new CustomCalculatorListener();
        // ParseTreeWalker.DEFAULT.walk(listener, tree);

        // Utilizo un visitor para visitar los nodos que me interesan de mi arbol
        const visitor = new CustomLogicFormulaVisitor();
        const codigoJS = visitor.visit(tree);
        console.log("\nTraducción a JavaScript:");
        console.log(`const result = ${codigoJS};`);

        // Valores de prueba
        const context= {
            p:true,
            q:false,
            r: false, 
            s: true
        };
        // Evaluar expresión
     const result = Function("context", `return ${codigoJS};`)(context);
     console.log(`console.log(result); // ${result}`);
    
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}
function imprimirTablaTokens(tokenStream, parser) {

    console.log("\nTabla de lexemas y tokens:");

    tokenStream.fill();

    tokenStream.tokens.forEach(token => {

        // Ignorar EOF
        if (token.type === antlr4.Token.EOF) {
            return;
        }

        const nombreToken =
            parser.symbolicNames[token.type] ||
            parser.literalNames[token.type];

        console.log(
            `Lexema: ${token.text} \t=> Token: ${nombreToken}`
        );
    });
}
// Ejecuta la función principal
main();
