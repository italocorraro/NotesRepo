<script>
    let counter = $state(0);
    let randomText = $state('');

    function increase() {
        counter++;
    }
</script>

<section>
    <h3>Primo Componente Esempio:</h3>
    <p>Questo è un contatore: {counter}</p>
    <button onclick={increase}>Aumenta</button>
    <p><label for="randomText">Scrivi qualcosa qui sotto:</label></p>
    <input type="text" bind:value={randomText} id="randomText" />
    <p>E lo vedrai qui: <span>{randomText}</span></p>
</section>

<style>
    span {
        text-decoration: underline;        
    }
</style>