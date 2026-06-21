

Eseguire codice PHP all'interno dei post WordPress è proibito, allo scopo è possibile utilizzare gli **shortcode**.

Uno shortcode permette di iniettare una funzione all'interno di un post di WordPress:

```php
add_shortcode('injected-shortcode-name', 'callback-function');
```

Le funzioni inserite tramite shortcode dovrebbero *sempre* restituire qualcosa:

```php
function my_shortcode_ex( /* params */ ) {
    // fai cose...
}
```

È sempre e comunque buona pratica sanitizzare qualunque input esterno e fare escape dell'output del plugin.

Per inserire uno shortcode nel post basta inserirlo come fosse un tag: `[injected-shortcode-name]`

## Attributi

All'interno dello shortcode possono essere passati degli attributi:
```txt
[shortcode attr='sonoAtt']
```
```php
function shorcode_func( $atts = [], $tag = '' ) {
    // Le keys dell'array di attributi vanno sanificate:
    $atts = array_change_key_case( (array) $atts, CASE_LOWER );

	// override attributi di default con quelli passati:
	$func_atts = shortcode_atts(
		array(
			'title' => 'WordPress.org', // default title
		), $atts, $tag
	);
    /* shortcode_atts( 
           array $pairs, 
           array $atts, 
           string $shortcode = '' 
       ): array */

    return 'qualcosa'; // SEMPRE restituire
}
```

- `array_change_key_case()` serve a normalizzare le stringhe key dell'array (passano a minuscolo)
- `shortcode_atts()` serve a processare i vari attributi ammessi e a fornire valori di default; se allo shortcode vengono passati attributi non ammessi, questi vengono semplicemente ignorati
- `$tag` è il nome dello shortcode; è un campo opzionale e di default è una stringa vuota

## Contenuto

All'interno dello shortcode può essere passato del contenuto testuale:
```txt
[shortcode]Roba scritta[/shortcode]
```
```php
function shortcode_func( $content ) {

    $output = '<div>';

    if ( ! is_null( $content ) ) {
        // Il contenuto passato và processato e sanitizzato.
		$output .= apply_filters( 'the_content', $content );
	}

    $output .= '</div>';

    return $output;
}
```