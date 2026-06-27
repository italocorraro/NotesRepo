---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'Eventi e Componenti in Java'
metaTitle: 'Eventi e Componenti'
description: ''
author: 'Italo Corraro'
order: 24
---

## Eventi

Il sistema degli *eventi* permette la comunicazione asincrona tra interfaccia utente e il programma sottostante:

- l'utente interagisce con l'interfaccia,
- l'interazione genera un *evento*,
- l'evento ha un suo *listener* che lo intercetta,
- in base al tipo di evento viene svolto del codice secondo il programma,
- viene restituito il risultato all'interfaccia

Gli eventi sono caratterizzati da tre proprietà:
- *source*: la sorgente dell'evento
- *target*: dove andrà l'evento
- *type*: il tipo dell'evento

Gli eventi in Java discendono dalla classe `java.util.EventObject`; in particolare, quelli di JavaFX sono della classe `javafx.event.Event`.

### Ascoltatori

Gli eventi hanno associati degli opportuni `Listener` che implementano l'interfaccia `EventHandler<E extends Event>` e che possiede un metodo opportuno `handle(E e)`.

Qualunque classe può fare da ascoltatore (anche più insieme); di solito si ha uno smistatore: il controller.

### Action Event

Il componente `Button` genera un `ActionEvent` ed è già provvisto da `JavaFX`.

```java
public class EsJavaFX08 extends Application {
    private Label lbl;
    public void start(Stage stage) {
        stage.setTitle("Esempio");
        FlowPane panel = new FlowPane();
        lbl = new Label("Qualcosa");
        Button btn = new Button("Qualcosa/Qualcosaltro");
        btn.setOnAction(/* agganciare l'ascoltatore */);
        btn.setTooltip(new Tooltip("Premere per cambiare"));
        panel.getChildren().addAll(lbl,btn);
        Scene scene = new Scene(panel,Color.WHITE);
        stage.setScene(scene);
        stage.show();
    }
}
```

L'oggetto può anche ascoltare se stesso:
```java
/* ... */
btn.setOnAction(this);
/* ... */
public void handle(ActionEvent event) {
    lbl.setText(
        lbl.getText().equals("Qualcosa")
        ? "Qualcosaltro"
        : "Qualcosa"
    );
}
```

### Passare Eventi con Lambda

Poiché è già noto che la funzione da chiamare è `handle`, è possibile chiamare l'handler di un'altra classe direttamente con una lambda expression:

```java
btn.setOnAction(MyClass::myHandle);
```

Tecnicamente è anche possibile implementare la lambda expression in loco:

```java
btn.setOnAction(
    // tipo inferito dal contesto
    e -> lbl.setText(
        lbl.getText().equals("Qualcosa")
        ? "Qualcosaltro"
        : "Qualcosa"
    );
);
```

Si possono ascoltare più eventi con lo stesso ascoltatore:
```java
btn1.setOnAction(this::handle);
btn2.setOnAction(this::handle);
/* ... */
public void handle(ActionEvent e) {
    // la fonte dell'evento è un dato leggibile
    if(e.getSource() == btn1) {
        /* do 1 */
    } else {
        /* do 2 */
    }
}
```

## Proprietà Osservabili

Le proprietà osservabili sono proprietà la cui modifica lancia un evento;

ad ascoltare questo evento sono gli oggetti `bind` che modificano il proprio stato automaticamente in risposta all'evento:

```java
StringProperty dc1 = new SimpleStringProperty(null, "doc");
dc1.set("primo");

StringProperty dc2 = new SimpleStringProperty(null, "doc");
dc2.set("secondo");

StringProperti dcs = new SimpleStringProperty(null, "doc");
dcs.bind(Bindings.concat(dc1, " poi ", dc2));

System.out.println(dcs.get());
// ↪ primo poi secondo
dc2.set("terzo");
// dcs si aggiorna da solo
System.out.println(dcs.get());
// ↪ primo poi terzo
```

```java
boolean showPsw = false;
PasswordField psw = new PasswordField();
psw.setPrefColumnCount(25);
TextField txt = new textField();
txt.setEditable(false);
txt.setPrefColumnCount(25);
Button btn = new Button("Show Password");
btn.setOnAction(e -> {
    if(showPsw) {
        txt.setText("");
    }
    showPsw = !showPsw
});
psw.textProperty().addListener(
    /* observable: l'oggetto osservato (textProperty)
     * vecchio valore
     * nuovo valore */
    (observable, oldValue, newValue) -> {
        if(showPsw) txt.setText(newValue)
    }
)
```

## Componenti

### Testuali

#### TextField

```java
TextField txt1 = new textField("Scrivi qui");
txt1.setPrefColumnCount(25);
TextField txt2 = new textField();
txt2.setEditable(false);
txt2.setPrefColumnCount(25);
txt1.textProperty().addListener(
    (obsO,newV,oldV) -> 
    txt2.setText(newV)
);
```

#### TextArea

#### PasswordField

Il componente `PasswordField` è un input testuale che nasconde i caratteri digitati.

```java
boolean showPsw = false;
PasswordField psw = new PasswordField();
psw.setPrefColumnCount(25);
TextField txt = new textField();
txt.setEditable(false);
txt.setPrefColumnCount(25);
Button btn = new Button("Show Password");
btn.setOnAction(e -> {
    if(showPsw) {
        txt.setText("");
    }
    showPsw = !showPsw
});
psw.textProperty().addListener(
    /* observable: l'oggetto osservato (textProperty)
     * vecchio valore
     * nuovo valore */
    (observable, oldValue, newValue) -> {
        if(showPsw) txt.setText(newValue)
    }
);
```


### Pulsanti

#### Button

Il componente **`Button`** si attiva con un click completo e lancia un `ActionEvent`.

#### Toggle

Il componente **`ToggleButton`** commuta tra stato "on" e "off"; da questo componente derivano **`CheckBox`** e **`Radio`**.

L'evento "click" genera un evento `ActionEvent`; lo stato del bottone può essere verificato con il metodo `isSelected()` che restituisce `true`/`false` in base a se il toggle è "on"/"off".

La differenza tra checkbox e toggle semplice è che il contenuto testuale del toggle viene mostrato all'interno del pulsante, mentre la checkbox è sempre una casella con il testo mostrato sulla destra.

#### Radio

I pulsanti radio sono usati in gruppo, di cui solo 1 può essere selezionato alla volta.   
Il concetto di gruppo è espresso tramite il `ToggleGroup`

```java
tg = new ToggleGroup();

RadioButton b1 = new RadioButton("op 1");
b1.setToggleGroup(tg);

RadioButton b2 = new RadioButton("op 2");
b2.setToggleGroup(tg);

RadioButton b3 = new RadioButton("op 3");
b3.setToggleGroup(tg);
```

Il miglior modo per ascoltare eventi legati ai radio è aggiungere un ascoltatore solo al radio selezionato (`ToggleGroup` sa in ogni momento chi del suo gruppo è selezionato):

```java
tg.selectedToggleProperty().addListener(
    (chenged, oldVal, newVal) ->
    {/* ... */}
)
```
### Selector

#### ListView

Il componente `ListView` è una lista scorribile di opzioni; di default solo 1 elemento è selezionabile, ma si può anche usare l'opzione di selezione multipla.

La proprietà `selectedItemProperty()` conosce l'elemento che è stato selezionato.

Per poter ascoltare i cambiamenti è strettamente necessario passare per la `selectedItemProperty` con il metodo `changeListener`.

#### ComboBox

Il componente `ComboBox` assomiglia a una `ChoiceBox`, mostra una lista di opzioni selezionabili; quando viene selezionata un'opzione lancia un `ActionEvent`.

Eventualmente è possibile renderla *editable* e lasciare che l'utente iserisca l'opzione desiderata da tastier (come il campo *Altro...* ).

```java
private ComboBox<String> cb;
private TextField txt1;
/* ... */
cb = new ComboBox<>();
cb.setPrefWidth(100);
cb.setItems(
    FXCollections.observableArrayList(
        "option", "element", ...
    )
);
cb.setOnAction(
    e -> txt1.setText(cb.getVAlue() + "[" 
        + cb.getSelectedModel().getSelectedIndex()
        + "]"
    )
);
```

- `getValue()` restituisce il valore dell'opzione correntemente selezionata
- `getSelectedModel().getSelectedIndex()` restituisce l'indice del selezionato nella lista di selezionabili (sono ordinati)
- `setEditable(boolean b)` permette di impostare la combobox per ricevere opzioni scritte a mano

#### DatePicker

Il componente `DatePicker` permette di scegliere una data da un interfaccia a calendario.

Questo componente lancia un `ActionEvent` quando viene selezionato.

### Slider

Il componente `Slider` permette di selezionare un valore in un range muovendo il cursore sul binario.

Il listener va' piazzato sulla sua `valueProperty()`.

Lo slider ha tre valori da definire:
- valore minimo
- valore massimo
- valore di partenza

```java
Slider slider = new Slider(0,10,5);
slider.valueProperty().addListener(
    (changed,oldV,newV) ->
    {/* ... */}
);
```

Tra le sue proprietà configurabili:
- `setShowTickMarks(true)`: per mostrare etichette ogni unità
- `setMinorTickCount(1)`: per mostrare le etichette su ogni unità
- `setSnapToTicks`: per impedire movimenti di più di una opzione alla volta

#### Spinner

Il componente `Spinner` permette di scegliere un valore intero entro limiti predeterminati (non ha lo slider grafico, ma pulsanti "aumenta" - "decrementa").

L'uso è analogo a `Slider`.

#### Progress

Il componente `ProgressBar` serve a indicare un valore numerico di riempimento rispetto a due estremi (vuoto/pieno) come barra di caricamento, mentre `ProgressIndicator` lo mostra su un grafico a torta.

Automaticamente, la barra accetta valori con virgola tra 0 e 1.

Il progresso viene settato con `setProgress(double p)` e può essere passato come paramtetro di inizializzazione.

```java
ProgressBar p = new ProgressBar(0.5)
p.progressProperty().addListener(
    (changed,oldV,newV) -> {
        /* ... */
    }
);
```

### FileChooser

Il componente `FileChooser` apre una finestra di dialogo per scegliere un file da sistema.

La particolarità delle finestre di dialogo è quella di rimanere aperte per un tempo limitato.

```java
File selected;
Button b = new Button("Scegli file");
b.setOnAction(
    e -> {
        FileChooser f = new FileChooser();
        f.setTitle("Seleziona un file");
        // aprire il dialog:
        selected = f.showOpenDialog(stage);
        if(selected != null) {
            /* ... */
        }
    }
);
```

La finestra si apre solo con il metodo `showOpenDialog` o `showSaveDialog`.

È possibile limitare le estensioni di file concesse:

```java
f.getExtensionFilters().addAll(
    new ExtensionFilter("Text Files", "*.txt"),
    new ExtensionFilter("Image Files", "*.png", "*.jpg", "*.gif"),
    new ExtensionFilter("Audio Files", "*.wav", "*.mp3", "*.aac"),
    new ExtensionFilter("All Files", "*.*"),
)
```

La selezione di file multipli si ottiene con `showOpenMultipleDialog` e li resituisce come `List<File>`.

:::nb
Se l'operazione di selezione file viene annullata, viene restituito `null`.
:::

## Grafici

In JavaFX è possibile creare grafici con i derivati della classe `Chart`.

### Grafico a Barre

Costruiamo un grafico a barre in 5 passaggi:

1. predisporre gli assi
```java
CategoryAxys X = new CategoryAxys();
X.setLabel("Asse X");
NumberAxys Y = new NumberAxis();
Y.setLabel("Asse Y");
```

2. creare il `Chart` con quegli assi e un titolo
```java
BarChart<String,Number> chart = new BarChart<>(X,Y);
chart.setTitle("Grafico");
```

3. predisporre le serie di coppie (x,y) di dati
```java
XYChart.Series<String,Number> serie1 = new XYChart.Series<>();
modena.setName("Serie 1");
```

4. popolare i dati
```java
serie1.getData().add(new XYChart.Data<>("Dato 1",30));
serie1.getData().add(new XYChart.Data<>("Dato 2",30));
serie1.getData().add(new XYChart.Data<>("Dato 3",30));
```

5. aggiungere al grafico i dati
```java
chart.getData().add(serie1);
```

6. Ripetere i passaggi da `3` a `5` fino a caricare tutte le serie; infine aggiungere il grafico all'interfaccia.

:::nota
- asse orizzontale indica le categorie
- l'asse verticale i valori corrispondenti
:::

:::eg
```java
public class EsGraphFX extends Application {
    public void start(Stage stage) {
  
        stage.setTitle("Esempio Grafici");
        FlowPane pane = new FlowPane();

        CategoryAxys X = new CategoryAxys();
        X.setLabel("Frutta");
        NumberAxys Y = new NumberAxis();
        Y.setLabel("Venduta");

        BarChart<String,Number> chart = new BarChart<>(X,Y);
        chart.setTitle("Vendite di Frutta");

        XYChart.Series<String,Number> modena = new XYChart.Series<>();
        modena.setName("Modena");

        modena.getData().add(new XYChart.Data<>("Mele",30));
        modena.getData().add(new XYChart.Data<>("Pere",39));
        modena.getData().add(new XYChart.Data<>("Arance",43));

        chart.getData().add(modena);

        pane.getChildren().add(chart);
        stage.setScene(new Scene(pane));
    }
}
```
:::

### Grafico a Torta

Il grafico a torta è simile a quello a barre, ma le serie di dati sono a valore singolo.

```java
ObservableList<PieChart.Data> data =
    FXCollections.observableArrayList(
        new PieChart.Data("Dato 1", 30);
        new PieChart.Data("Dato 2", 23);
        new PieChart.Data("Dato 3", 17);
    );
PieChart chart new PieChart(dati);
```

Il grafico a torta calcola autonomamente le percentuali per dato. 