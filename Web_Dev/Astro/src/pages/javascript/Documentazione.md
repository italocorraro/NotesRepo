 Tag | Uso
 --- | ---
@param | descrizione di un parametro
@returns | cosa restituisce la funzione
@throws | errori che può lanciare
@example | esempio di utilizzo
@deprecated | segnala che non va più usato


Getter e setter sono considerati come un'unica entità

**grassetto**, *corsivo*
`codice inline`
Blocchi di codice con ```typescript
Liste con - o 1.
Link con [testo](url) o {@link NomeClasse}
Titoli con ## nei @remarks lunghi

{@link} è il tag specifico di JSDoc per linkare ad altri simboli del progetto:
typescript
/**
 * @see {@link Modal} for the full modal implementation
 * @see {@link requestTransitionFrames} for the animation utility used internally
 */
i simboli linkati devono essere stati definiti o importati nel modulo che li linka