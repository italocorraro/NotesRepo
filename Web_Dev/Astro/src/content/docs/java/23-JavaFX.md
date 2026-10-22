---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'JavaFX'
metaTitle: 'JavaFX'
description: ''
author: 'Italo Corraro'
order: 23
---

Per costruire un software con un'interfaccia utente bisogna stabilire come reagire agli eventi generati dall'interazione.

*Il programma "reagisce", non opera a priori.*

Stage
Scene
UI Elements

L'applicazione estende la classe `Applictaion` ed eredita tre metodi fondamentali:
- `init` - setup
- `start` - crea GUI
- `stop` - shutdown

```java
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.stage.Stage;

public class EgJavFX00 extends Application {
    public void start(Stage stage) {
        stage.setTitle("Esempio ");
        stage.show();
    }
    public static void main (string[] args) {
        launch(args);
    }
}
```

In JavaFX, il compilatore aggiunge automaticamente il main di default per lanciare l'applicazione grafica con il metodo `launch`; se non si tratta di un progetto JavaFX, ma di un Java standard, è necessario inserirlo manualmente come sopra.

Lo `stage` è configurabile come un oggetto qualsiasi stamite metodi `set` (`Width`, `Height`, `X`, `Y`, `MaxWidth`, `MinWidth` ecc...).

È possibile recuperare le dimensione dello schermo con `Screen`:
```java
javafx.geometry.Rectangle2D screen = Screen.getPrimary().getVisualBounds(); // eg. 1920 x 1040
stage.setX(screen.getMinX() + screen.getWidth() - stage.getWidth());
/* .... */
```

```java
// dentro start:
Pane root = new Pane();
Scene scene = 
    new Scene(root, 300, 50, Color.YELLOW);
stage.setScene(scene);
stage.show();
```

La classe `Canvas` permette di disegnare dentro un pannello.

```java
/* Un FlowPane dispone automaticamente
 * i suoi componenti da sinistra verso destra 
 * e dall'alto verso il basso */
FlowPane panel = new FlowPane(); 
panel.setPrefSize(200,130);
Canvas canvas = new Canvas(150,130);
// al pannello vanno associati dei componenti:
panel.getChildren().add(canvas);

GraphicContext g = canvas.getGraphicContext2D();

g.setFont(Font.font("Serif", FontWeight.BOLD, 20));
g.setFill(Color.RED); g.fillRect(20,20, 100,80);
/* ... */
Scene scene = new Scene(panel);
stage.setScene(scene);
stage.show();
```

Java offre due stylesheet di default che possono essere caricati:

```java
setUserAgentStylesheet(STYLESHEET_MODENA);
setUserAgentStylesheet(STYLESHEET_CASPIAN);
```

## Layout Panes

### HBox

Dispone i figli in una singola riga orizzontale.

| Metodo | Note |
|--------|------|
| `new HBox(double spacing)` | Costruttore con spaziatura tra figli |
| `setSpacing(double value)` | Spazio tra elementi |
| `setAlignment(Pos value)`  | Allineamento dei figli (es. `Pos.CENTER`) |
| `setHgrow(Node node, Priority p)` | Espansione orizzontale di un nodo |

### #VBox

Dispone i figli in una singola colonna verticale.

| Metodo | Note |
|--------|------|
| `new VBox(double spacing)` | Costruttore con spaziatura tra figli |
| `setSpacing(double value)` | Spazio tra elementi |
| `setAlignment(Pos value)`  | Allineamento dei figli |
| `setVgrow(Node node, Priority p)` | Espansione verticale di un nodo |

### FlowPane

Dispone i figli in righe, andando a capo automaticamente.

| Metodo | Note |
|--------|------|
| `new FlowPane(Orientation o, double hgap, double vgap)` | Costruttore completo |
| `setOrientation(Orientation o)` | `HORIZONTAL` o `VERTICAL` |
| `setHgap(double value)` | Spaziatura orizzontale tra figli |
| `setVgap(double value)` | Spaziatura verticale tra righe |
| `setAlignment(Pos value)` | Allineamento delle righe |
| `setRowValignment(VPos value)` | Allineamento verticale in ogni riga |
| `setPrefWrapLength(double value)` | Larghezza preferita prima del wrap |

### BorderPane

Divide lo spazio in cinque zone: Top, Bottom, Left, Right, Center.

| Metodo | Note |
|--------|------|
| `setTop(Node node)`    | Zona superiore |
| `setBottom(Node node)` | Zona inferiore |
| `setLeft(Node node)`   | Zona sinistra  |
| `setRight(Node node)`  | Zona destra |
| `setCenter(Node node)` | Zona centrale, prende lo spazio rimasto |
| `setAlignment(Node node, Pos p)` | Allinea un figlio nella sua zona |
| `setMargin(Node node, Insets i)` | Margine esterno di un figlio |

### GridPane

Dispone i figli in righe e colonne configurabili.

| Metodo | Note |
|--------|------|
| `add(Node node, int col, int row)` | Aggiunge un nodo nella cella specificata |
| `add(Node node, int col, int row, int colspan, int rowspan)` | Con span su più celle |
| `setHgap(double value)` | Spaziatura orizzontale tra colonne |
| `setVgap(double value)` | Spaziatura verticale tra righe |
| `getColumnConstraints().add(ColumnConstraints cc)` | Vincoli di colonna (larghezza, grow) |
| `getRowConstraints().add(RowConstraints rc)` | Vincoli di riga (altezza, grow) |
| `setHalignment(Node node, HPos p)` | Allineamento orizzontale nella cella |
| `setValignment(Node node, VPos p)` | Allineamento verticale nella cella |
| `setGridLinesVisible(boolean value)` | Mostra le linee della griglia |

### TilePane

Come FlowPane, ma ogni cella ha la stessa dimensione.

| Metodo | Note |
|--------|------|
| `new TilePane(Orientation o, double hgap, double vgap)` | Costruttore completo |
| `setPrefColumns(int value)` | Numero preferito di colonne |
| `setPrefRows(int value)`    | Numero preferito di righe |
| `setPrefTileWidth(double value)`  | Larghezza di ogni tile |
| `setPrefTileHeight(double value)` | Altezza di ogni tile |
| `setTileAlignment(Pos value)`     | Allineamento del contenuto dentro ogni tile |
| `setHgap(double value)` | Spaziatura orizzontale tra tile |
| `setVgap(double value)` | Spaziatura verticale tra tile |

### ImageView

Nodo per visualizzare un'immagine all'interno di un layout.

| Metodo | Note |
|--------|------|
| `new ImageView(Image image)` | Costruttore da oggetto `Image` |
| `new Image(String url)` | Crea un'immagine da URL o path |
| `new Image(String url, double w, double h, boolean ratio, boolean smooth)` | Crea un'immagine con ridimensionamento |
| `setImage(Image image)` | Imposta o cambia l'immagine |
| `setFitWidth(double value)` | Larghezza di visualizzazione |
| `setFitHeight(double value)` | Altezza di visualizzazione |
| `setPreserveRatio(boolean value)` | Mantiene le proporzioni originali |
| `setSmooth(boolean value)` | Interpolazione per ridimensionamento |
| `setViewport(Rectangle2D rect)` | Ritaglia una porzione dell'immagine |

### Comuni a Tutti i Layout

`setPadding(new Insets(double top, double right, double bottom, double left))`; disponibile su tutti i `Pane`, `VBox` e `HBox`: aggiunge margine interno al contenitore.

`getChildren().add(Node node)` e `getChildren().addAll(Node... nodes)` permettono di innestare componenti.

Per `GridPane`: `ColumnConstraints` e `RowConstraints` permettono di controllare distribuzione dello spazio con larghezze fisse, percentuali o `Priority.ALWAYS` per espansione automatica.


